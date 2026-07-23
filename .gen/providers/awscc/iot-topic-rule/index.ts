// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotTopicRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#rule_name IotTopicRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#tags IotTopicRule#tags}
  */
  readonly tags?: IotTopicRuleTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#topic_rule_payload IotTopicRule#topic_rule_payload}
  */
  readonly topicRulePayload: IotTopicRuleTopicRulePayload;
}
export interface IotTopicRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTagsToTerraform(struct?: IotTopicRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTagsToHclTerraform(struct?: IotTopicRuleTags | cdktn.IResolvable): any {
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

export class IotTopicRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTags | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTagsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTags[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTagsOutputReference {
    return new IotTopicRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}
  */
  readonly stateValue?: string;
}

export function iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_reason: cdktn.stringToTerraform(struct!.stateReason),
    state_value: cdktn.stringToTerraform(struct!.stateValue),
  }
}


export function iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_reason: {
      value: cdktn.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_value: {
      value: cdktn.stringToHclTerraform(struct!.stateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsCloudwatchAlarmOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._stateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValue = this._stateValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
      this._roleArn = undefined;
      this._stateReason = undefined;
      this._stateValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
      this._roleArn = value.roleArn;
      this._stateReason = value.stateReason;
      this._stateValue = value.stateValue;
    }
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_reason - computed: true, optional: true, required: false
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  public resetStateReason() {
    this._stateReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // state_value - computed: true, optional: true, required: false
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  public resetStateValue() {
    this._stateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#log_group_name IotTopicRule#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
    metric_value: cdktn.stringToTerraform(struct!.metricValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_unit: {
      value: cdktn.stringToHclTerraform(struct!.metricUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktn.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsCloudwatchMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsCloudwatchMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimestamp = this._metricTimestamp;
    }
    if (this._metricUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUnit = this._metricUnit;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricTimestamp = undefined;
      this._metricUnit = undefined;
      this._metricValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricTimestamp = value.metricTimestamp;
      this._metricUnit = value.metricUnit;
      this._metricValue = value.metricValue;
      this._roleArn = value.roleArn;
    }
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: true, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_timestamp - computed: true, optional: true, required: false
  private _metricTimestamp?: string; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp;
  }

  // metric_unit - computed: true, optional: true, required: false
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  public resetMetricUnit() {
    this._metricUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit;
  }

  // metric_value - computed: true, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName?: string;
}

export function iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableName = value.tableName;
    }
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
}
export interface IotTopicRuleTopicRulePayloadActionsDynamoDBv2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    put_item: iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToTerraform(struct!.putItem),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    put_item: {
      value: iotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemToHclTerraform(struct!.putItem),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsDynamoDBv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._putItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putItem = this._putItem?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsDynamoDBv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._putItem.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._putItem.internalValue = value.putItem;
      this._roleArn = value.roleArn;
    }
  }

  // put_item - computed: true, optional: true, required: false
  private _putItem = new IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItemOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }
  public putPutItem(value: IotTopicRuleTopicRulePayloadActionsDynamoDBv2PutItem) {
    this._putItem.internalValue = value;
  }
  public resetPutItem() {
    this._putItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsDynamoDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName?: string;
}

export function iotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleTopicRulePayloadActionsDynamoDbToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hash_key_field: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_type: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_value: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_field: {
      value: cdktn.stringToHclTerraform(struct!.payloadField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_field: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_type: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_value: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleTopicRulePayloadActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsDynamoDb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyField = this._hashKeyField;
    }
    if (this._hashKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyType = this._hashKeyType;
    }
    if (this._hashKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyValue = this._hashKeyValue;
    }
    if (this._payloadField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadField = this._payloadField;
    }
    if (this._rangeKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyField = this._rangeKeyField;
    }
    if (this._rangeKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyType = this._rangeKeyType;
    }
    if (this._rangeKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyValue = this._rangeKeyValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsDynamoDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashKeyField = value.hashKeyField;
      this._hashKeyType = value.hashKeyType;
      this._hashKeyValue = value.hashKeyValue;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
    }
  }

  // hash_key_field - computed: true, optional: true, required: false
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  public resetHashKeyField() {
    this._hashKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField;
  }

  // hash_key_type - computed: true, optional: true, required: false
  private _hashKeyType?: string; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType;
  }

  // hash_key_value - computed: true, optional: true, required: false
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  public resetHashKeyValue() {
    this._hashKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue;
  }

  // payload_field - computed: true, optional: true, required: false
  private _payloadField?: string; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField;
  }

  // range_key_field - computed: true, optional: true, required: false
  private _rangeKeyField?: string; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField;
  }

  // range_key_type - computed: true, optional: true, required: false
  private _rangeKeyType?: string; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType;
  }

  // range_key_value - computed: true, optional: true, required: false
  private _rangeKeyValue?: string; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
}
export interface IotTopicRuleTopicRulePayloadActionsElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
  */
  readonly type?: string;
}

export function iotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotTopicRuleTopicRulePayloadActionsElasticsearchToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleTopicRulePayloadActionsElasticsearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsElasticsearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsElasticsearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleTopicRulePayloadActionsFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function iotTopicRuleTopicRulePayloadActionsFirehoseToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktn.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._deliveryStreamName = undefined;
      this._roleArn = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._deliveryStreamName = value.deliveryStreamName;
      this._roleArn = value.roleArn;
      this._separator = value.separator;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // delivery_stream_name - computed: true, optional: true, required: false
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  public resetDeliveryStreamName() {
    this._deliveryStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#service_name IotTopicRule#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#signing_region IotTopicRule#signing_region}
  */
  readonly signingRegion?: string;
}

export function iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
    signing_region: cdktn.stringToTerraform(struct!.signingRegion),
  }
}


export function iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_region: {
      value: cdktn.stringToHclTerraform(struct!.signingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._serviceName = undefined;
      this._signingRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._serviceName = value.serviceName;
      this._signingRegion = value.signingRegion;
    }
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // signing_region - computed: true, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsHttpAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sigv_4 IotTopicRule#sigv_4}
  */
  readonly sigv4?: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4;
}

export function iotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sigv_4: iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToTerraform(struct!.sigv4),
  }
}


export function iotTopicRuleTopicRulePayloadActionsHttpAuthToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sigv_4: {
      value: iotTopicRuleTopicRulePayloadActionsHttpAuthSigv4ToHclTerraform(struct!.sigv4),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsHttpAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsHttpAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sigv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigv4 = this._sigv4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsHttpAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sigv4.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sigv4.internalValue = value.sigv4;
    }
  }

  // sigv_4 - computed: true, optional: true, required: false
  private _sigv4 = new IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4OutputReference(this, "sigv_4");
  public get sigv4() {
    return this._sigv4;
  }
  public putSigv4(value: IotTopicRuleTopicRulePayloadActionsHttpAuthSigv4) {
    this._sigv4.internalValue = value;
  }
  public resetSigv4() {
    this._sigv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigv4Input() {
    return this._sigv4.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsHttpBatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_across_topics IotTopicRule#batch_across_topics}
  */
  readonly batchAcrossTopics?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#max_batch_open_ms IotTopicRule#max_batch_open_ms}
  */
  readonly maxBatchOpenMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#max_batch_size IotTopicRule#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#max_batch_size_bytes IotTopicRule#max_batch_size_bytes}
  */
  readonly maxBatchSizeBytes?: number;
}

export function iotTopicRuleTopicRulePayloadActionsHttpBatchConfigToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpBatchConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_across_topics: cdktn.booleanToTerraform(struct!.batchAcrossTopics),
    max_batch_open_ms: cdktn.numberToTerraform(struct!.maxBatchOpenMs),
    max_batch_size: cdktn.numberToTerraform(struct!.maxBatchSize),
    max_batch_size_bytes: cdktn.numberToTerraform(struct!.maxBatchSizeBytes),
  }
}


export function iotTopicRuleTopicRulePayloadActionsHttpBatchConfigToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpBatchConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_across_topics: {
      value: cdktn.booleanToHclTerraform(struct!.batchAcrossTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_batch_open_ms: {
      value: cdktn.numberToHclTerraform(struct!.maxBatchOpenMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_batch_size: {
      value: cdktn.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_batch_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.maxBatchSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsHttpBatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsHttpBatchConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchAcrossTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchAcrossTopics = this._batchAcrossTopics;
    }
    if (this._maxBatchOpenMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchOpenMs = this._maxBatchOpenMs;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._maxBatchSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSizeBytes = this._maxBatchSizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsHttpBatchConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchAcrossTopics = undefined;
      this._maxBatchOpenMs = undefined;
      this._maxBatchSize = undefined;
      this._maxBatchSizeBytes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchAcrossTopics = value.batchAcrossTopics;
      this._maxBatchOpenMs = value.maxBatchOpenMs;
      this._maxBatchSize = value.maxBatchSize;
      this._maxBatchSizeBytes = value.maxBatchSizeBytes;
    }
  }

  // batch_across_topics - computed: true, optional: true, required: false
  private _batchAcrossTopics?: boolean | cdktn.IResolvable; 
  public get batchAcrossTopics() {
    return this.getBooleanAttribute('batch_across_topics');
  }
  public set batchAcrossTopics(value: boolean | cdktn.IResolvable) {
    this._batchAcrossTopics = value;
  }
  public resetBatchAcrossTopics() {
    this._batchAcrossTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchAcrossTopicsInput() {
    return this._batchAcrossTopics;
  }

  // max_batch_open_ms - computed: true, optional: true, required: false
  private _maxBatchOpenMs?: number; 
  public get maxBatchOpenMs() {
    return this.getNumberAttribute('max_batch_open_ms');
  }
  public set maxBatchOpenMs(value: number) {
    this._maxBatchOpenMs = value;
  }
  public resetMaxBatchOpenMs() {
    this._maxBatchOpenMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchOpenMsInput() {
    return this._maxBatchOpenMs;
  }

  // max_batch_size - computed: true, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // max_batch_size_bytes - computed: true, optional: true, required: false
  private _maxBatchSizeBytes?: number; 
  public get maxBatchSizeBytes() {
    return this.getNumberAttribute('max_batch_size_bytes');
  }
  public set maxBatchSizeBytes(value: number) {
    this._maxBatchSizeBytes = value;
  }
  public resetMaxBatchSizeBytes() {
    this._maxBatchSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeBytesInput() {
    return this._maxBatchSizeBytes;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsHttpHeadersToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttpHeaders | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadActionsHttpHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsHttpHeaders | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsHttpHeaders | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadActionsHttpHeadersList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActionsHttpHeaders[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsHttpHeadersOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#auth IotTopicRule#auth}
  */
  readonly auth?: IotTopicRuleTopicRulePayloadActionsHttpAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_config IotTopicRule#batch_config}
  */
  readonly batchConfig?: IotTopicRuleTopicRulePayloadActionsHttpBatchConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#confirmation_url IotTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#enable_batching IotTopicRule#enable_batching}
  */
  readonly enableBatching?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadActionsHttpHeaders[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#url IotTopicRule#url}
  */
  readonly url?: string;
}

export function iotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth: iotTopicRuleTopicRulePayloadActionsHttpAuthToTerraform(struct!.auth),
    batch_config: iotTopicRuleTopicRulePayloadActionsHttpBatchConfigToTerraform(struct!.batchConfig),
    confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    enable_batching: cdktn.booleanToTerraform(struct!.enableBatching),
    headers: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsHttpHeadersToTerraform, false)(struct!.headers),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function iotTopicRuleTopicRulePayloadActionsHttpToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth: {
      value: iotTopicRuleTopicRulePayloadActionsHttpAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsHttpAuth",
    },
    batch_config: {
      value: iotTopicRuleTopicRulePayloadActionsHttpBatchConfigToHclTerraform(struct!.batchConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsHttpBatchConfig",
    },
    confirmation_url: {
      value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_batching: {
      value: cdktn.booleanToHclTerraform(struct!.enableBatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsHttpHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsHttpHeadersList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsHttp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._batchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchConfig = this._batchConfig?.internalValue;
    }
    if (this._confirmationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationUrl = this._confirmationUrl;
    }
    if (this._enableBatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBatching = this._enableBatching;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsHttp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._batchConfig.internalValue = undefined;
      this._confirmationUrl = undefined;
      this._enableBatching = undefined;
      this._headers.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._batchConfig.internalValue = value.batchConfig;
      this._confirmationUrl = value.confirmationUrl;
      this._enableBatching = value.enableBatching;
      this._headers.internalValue = value.headers;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new IotTopicRuleTopicRulePayloadActionsHttpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: IotTopicRuleTopicRulePayloadActionsHttpAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // batch_config - computed: true, optional: true, required: false
  private _batchConfig = new IotTopicRuleTopicRulePayloadActionsHttpBatchConfigOutputReference(this, "batch_config");
  public get batchConfig() {
    return this._batchConfig;
  }
  public putBatchConfig(value: IotTopicRuleTopicRulePayloadActionsHttpBatchConfig) {
    this._batchConfig.internalValue = value;
  }
  public resetBatchConfig() {
    this._batchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchConfigInput() {
    return this._batchConfig.internalValue;
  }

  // confirmation_url - computed: true, optional: true, required: false
  private _confirmationUrl?: string; 
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
  public set confirmationUrl(value: string) {
    this._confirmationUrl = value;
  }
  public resetConfirmationUrl() {
    this._confirmationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationUrlInput() {
    return this._confirmationUrl;
  }

  // enable_batching - computed: true, optional: true, required: false
  private _enableBatching?: boolean | cdktn.IResolvable; 
  public get enableBatching() {
    return this.getBooleanAttribute('enable_batching');
  }
  public set enableBatching(value: boolean | cdktn.IResolvable) {
    this._enableBatching = value;
  }
  public resetEnableBatching() {
    this._enableBatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchingInput() {
    return this._enableBatching;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new IotTopicRuleTopicRulePayloadActionsHttpHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IotTopicRuleTopicRulePayloadActionsHttpHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotAnalyticsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotAnalytics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotAnalytics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._channelName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._channelName = value.channelName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}
  */
  readonly inputName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    message_id: cdktn.stringToTerraform(struct!.messageId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotEventsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktn.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._inputName = undefined;
      this._messageId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._inputName = value.inputName;
      this._messageId = value.messageId;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // input_name - computed: true, optional: true, required: false
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  public resetInputName() {
    this._inputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // message_id - computed: true, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#offset_in_nanos IotTopicRule#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#time_in_seconds IotTopicRule#time_in_seconds}
  */
  readonly timeInSeconds?: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    offset_in_nanos: {
      value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_in_seconds: {
      value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsetInNanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetInNanos = this._offsetInNanos;
    }
    if (this._timeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInSeconds = this._timeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offsetInNanos = undefined;
      this._timeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offsetInNanos = value.offsetInNanos;
      this._timeInSeconds = value.timeInSeconds;
    }
  }

  // offset_in_nanos - computed: true, optional: true, required: false
  private _offsetInNanos?: string; 
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }
  public set offsetInNanos(value: string) {
    this._offsetInNanos = value;
  }
  public resetOffsetInNanos() {
    this._offsetInNanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInNanosInput() {
    return this._offsetInNanos;
  }

  // time_in_seconds - computed: true, optional: true, required: false
  private _timeInSeconds?: string; 
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
  public set timeInSeconds(value: string) {
    this._timeInSeconds = value;
  }
  public resetTimeInSeconds() {
    this._timeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInSecondsInput() {
    return this._timeInSeconds;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#boolean_value IotTopicRule#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#double_value IotTopicRule#double_value}
  */
  readonly doubleValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#integer_value IotTopicRule#integer_value}
  */
  readonly integerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#string_value IotTopicRule#string_value}
  */
  readonly stringValue?: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
    double_value: cdktn.stringToTerraform(struct!.doubleValue),
    integer_value: cdktn.stringToTerraform(struct!.integerValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.stringToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    double_value: {
      value: cdktn.stringToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integer_value: {
      value: cdktn.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: string; 
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }
  public set booleanValue(value: string) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: string; 
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }
  public set doubleValue(value: string) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // integer_value - computed: true, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#quality IotTopicRule#quality}
  */
  readonly quality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quality: cdktn.stringToTerraform(struct!.quality),
    timestamp: iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct!.timestamp),
    value: iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    quality: {
      value: cdktn.stringToHclTerraform(struct!.quality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp",
    },
    value: {
      value: iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.quality = this._quality;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quality = undefined;
      this._timestamp.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quality = value.quality;
      this._timestamp.internalValue = value.timestamp;
      this._value.internalValue = value.value;
    }
  }

  // quality - computed: true, optional: true, required: false
  private _quality?: string; 
  public get quality() {
    return this.getStringAttribute('quality');
  }
  public set quality(value: string) {
    this._quality = value;
  }
  public resetQuality() {
    this._quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp = new IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value = new IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#asset_id IotTopicRule#asset_id}
  */
  readonly assetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#entry_id IotTopicRule#entry_id}
  */
  readonly entryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#property_alias IotTopicRule#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#property_id IotTopicRule#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#property_values IotTopicRule#property_values}
  */
  readonly propertyValues?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues[] | cdktn.IResolvable;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_id: cdktn.stringToTerraform(struct!.assetId),
    entry_id: cdktn.stringToTerraform(struct!.entryId),
    property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_values: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform, false)(struct!.propertyValues),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asset_id: {
      value: cdktn.stringToHclTerraform(struct!.assetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_id: {
      value: cdktn.stringToHclTerraform(struct!.entryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_alias: {
      value: cdktn.stringToHclTerraform(struct!.propertyAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_values: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToHclTerraform, false)(struct!.propertyValues),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetId = this._assetId;
    }
    if (this._entryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryId = this._entryId;
    }
    if (this._propertyAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyAlias = this._propertyAlias;
    }
    if (this._propertyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyId = this._propertyId;
    }
    if (this._propertyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValues = this._propertyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._entryId = undefined;
      this._propertyAlias = undefined;
      this._propertyId = undefined;
      this._propertyValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetId = value.assetId;
      this._entryId = value.entryId;
      this._propertyAlias = value.propertyAlias;
      this._propertyId = value.propertyId;
      this._propertyValues.internalValue = value.propertyValues;
    }
  }

  // asset_id - computed: true, optional: true, required: false
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  public resetAssetId() {
    this._assetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // entry_id - computed: true, optional: true, required: false
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  public resetEntryId() {
    this._entryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // property_alias - computed: true, optional: true, required: false
  private _propertyAlias?: string; 
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }
  public set propertyAlias(value: string) {
    this._propertyAlias = value;
  }
  public resetPropertyAlias() {
    this._propertyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyAliasInput() {
    return this._propertyAlias;
  }

  // property_id - computed: true, optional: true, required: false
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_values - computed: true, optional: true, required: false
  private _propertyValues = new IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList(this, "property_values", false);
  public get propertyValues() {
    return this._propertyValues;
  }
  public putPropertyValues(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesPropertyValues[] | cdktn.IResolvable) {
    this._propertyValues.internalValue = value;
  }
  public resetPropertyValues() {
    this._propertyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValuesInput() {
    return this._propertyValues.internalValue;
  }
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsIotSiteWise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#put_asset_property_value_entries IotTopicRule#put_asset_property_value_entries}
  */
  readonly putAssetPropertyValueEntries?: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    put_asset_property_value_entries: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToTerraform, false)(struct!.putAssetPropertyValueEntries),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsIotSiteWiseToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    put_asset_property_value_entries: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesToHclTerraform, false)(struct!.putAssetPropertyValueEntries),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsIotSiteWise | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._putAssetPropertyValueEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putAssetPropertyValueEntries = this._putAssetPropertyValueEntries?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsIotSiteWise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._putAssetPropertyValueEntries.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._putAssetPropertyValueEntries.internalValue = value.putAssetPropertyValueEntries;
      this._roleArn = value.roleArn;
    }
  }

  // put_asset_property_value_entries - computed: true, optional: true, required: false
  private _putAssetPropertyValueEntries = new IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntriesList(this, "put_asset_property_value_entries", false);
  public get putAssetPropertyValueEntries() {
    return this._putAssetPropertyValueEntries;
  }
  public putPutAssetPropertyValueEntries(value: IotTopicRuleTopicRulePayloadActionsIotSiteWisePutAssetPropertyValueEntries[] | cdktn.IResolvable) {
    this._putAssetPropertyValueEntries.internalValue = value;
  }
  public resetPutAssetPropertyValueEntries() {
    this._putAssetPropertyValueEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putAssetPropertyValueEntriesInput() {
    return this._putAssetPropertyValueEntries.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsKafkaHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadActionsKafkaHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKafkaHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsKafkaHeadersToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKafkaHeaders | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadActionsKafkaHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsKafkaHeaders | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsKafkaHeaders | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadActionsKafkaHeadersList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActionsKafkaHeaders[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsKafkaHeadersOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsKafkaHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsKafka {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#client_properties IotTopicRule#client_properties}
  */
  readonly clientProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#destination_arn IotTopicRule#destination_arn}
  */
  readonly destinationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadActionsKafkaHeaders[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#partition IotTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic?: string;
}

export function iotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    headers: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsKafkaHeadersToTerraform, false)(struct!.headers),
    key: cdktn.stringToTerraform(struct!.key),
    partition: cdktn.stringToTerraform(struct!.partition),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function iotTopicRuleTopicRulePayloadActionsKafkaToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsKafkaHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsKafkaHeadersList",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktn.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class IotTopicRuleTopicRulePayloadActionsKafkaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsKafka | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProperties = this._clientProperties;
    }
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsKafka | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientProperties = undefined;
      this._destinationArn = undefined;
      this._headers.internalValue = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientProperties = value.clientProperties;
      this._destinationArn = value.destinationArn;
      this._headers.internalValue = value.headers;
      this._key = value.key;
      this._partition = value.partition;
      this._topic = value.topic;
    }
  }

  // client_properties - computed: true, optional: true, required: false
  private _clientProperties?: { [key: string]: string }; 
  public get clientProperties() {
    return this.getStringMapAttribute('client_properties');
  }
  public set clientProperties(value: { [key: string]: string }) {
    this._clientProperties = value;
  }
  public resetClientProperties() {
    this._clientProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties;
  }

  // destination_arn - computed: true, optional: true, required: false
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  public resetDestinationArn() {
    this._destinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new IotTopicRuleTopicRulePayloadActionsKafkaHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IotTopicRuleTopicRulePayloadActionsKafkaHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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
export interface IotTopicRuleTopicRulePayloadActionsKinesis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}
  */
  readonly streamName?: string;
}

export function iotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function iotTopicRuleTopicRulePayloadActionsKinesisToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsKinesis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsKinesis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionKey = undefined;
      this._roleArn = undefined;
      this._streamName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionKey = value.partitionKey;
      this._roleArn = value.roleArn;
      this._streamName = value.streamName;
    }
  }

  // partition_key - computed: true, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: true, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsLambdaToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: true, optional: true, required: false
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  public resetFunctionArn() {
    this._functionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsLocationTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadActionsLocationTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLocationTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsLocationTimestampToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLocationTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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

export class IotTopicRuleTopicRulePayloadActionsLocationTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsLocationTimestamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsLocationTimestamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
export interface IotTopicRuleTopicRulePayloadActionsLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#device_id IotTopicRule#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#latitude IotTopicRule#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#longitude IotTopicRule#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadActionsLocationTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#tracker_name IotTopicRule#tracker_name}
  */
  readonly trackerName?: string;
}

export function iotTopicRuleTopicRulePayloadActionsLocationToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_id: cdktn.stringToTerraform(struct!.deviceId),
    latitude: cdktn.stringToTerraform(struct!.latitude),
    longitude: cdktn.stringToTerraform(struct!.longitude),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    timestamp: iotTopicRuleTopicRulePayloadActionsLocationTimestampToTerraform(struct!.timestamp),
    tracker_name: cdktn.stringToTerraform(struct!.trackerName),
  }
}


export function iotTopicRuleTopicRulePayloadActionsLocationToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_id: {
      value: cdktn.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktn.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktn.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: iotTopicRuleTopicRulePayloadActionsLocationTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsLocationTimestamp",
    },
    tracker_name: {
      value: cdktn.stringToHclTerraform(struct!.trackerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    if (this._trackerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerName = this._trackerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._roleArn = undefined;
      this._timestamp.internalValue = undefined;
      this._trackerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._roleArn = value.roleArn;
      this._timestamp.internalValue = value.timestamp;
      this._trackerName = value.trackerName;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp = new IotTopicRuleTopicRulePayloadActionsLocationTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTopicRulePayloadActionsLocationTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }

  // tracker_name - computed: true, optional: true, required: false
  private _trackerName?: string; 
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  public resetTrackerName() {
    this._trackerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsOpenSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
  */
  readonly type?: string;
}

export function iotTopicRuleTopicRulePayloadActionsOpenSearchToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsOpenSearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotTopicRuleTopicRulePayloadActionsOpenSearchToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsOpenSearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleTopicRulePayloadActionsOpenSearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsOpenSearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsOpenSearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsRepublishHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#content_type IotTopicRule#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#correlation_data IotTopicRule#correlation_data}
  */
  readonly correlationData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#message_expiry IotTopicRule#message_expiry}
  */
  readonly messageExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#payload_format_indicator IotTopicRule#payload_format_indicator}
  */
  readonly payloadFormatIndicator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#response_topic IotTopicRule#response_topic}
  */
  readonly responseTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#user_properties IotTopicRule#user_properties}
  */
  readonly userProperties?: IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties[] | cdktn.IResolvable;
}

export function iotTopicRuleTopicRulePayloadActionsRepublishHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublishHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    correlation_data: cdktn.stringToTerraform(struct!.correlationData),
    message_expiry: cdktn.stringToTerraform(struct!.messageExpiry),
    payload_format_indicator: cdktn.stringToTerraform(struct!.payloadFormatIndicator),
    response_topic: cdktn.stringToTerraform(struct!.responseTopic),
    user_properties: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesToTerraform, false)(struct!.userProperties),
  }
}


export function iotTopicRuleTopicRulePayloadActionsRepublishHeadersToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublishHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation_data: {
      value: cdktn.stringToHclTerraform(struct!.correlationData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_expiry: {
      value: cdktn.stringToHclTerraform(struct!.messageExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_format_indicator: {
      value: cdktn.stringToHclTerraform(struct!.payloadFormatIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_topic: {
      value: cdktn.stringToHclTerraform(struct!.responseTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_properties: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesToHclTerraform, false)(struct!.userProperties),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsRepublishHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsRepublishHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._correlationData !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationData = this._correlationData;
    }
    if (this._messageExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageExpiry = this._messageExpiry;
    }
    if (this._payloadFormatIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFormatIndicator = this._payloadFormatIndicator;
    }
    if (this._responseTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTopic = this._responseTopic;
    }
    if (this._userProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProperties = this._userProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsRepublishHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._correlationData = undefined;
      this._messageExpiry = undefined;
      this._payloadFormatIndicator = undefined;
      this._responseTopic = undefined;
      this._userProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._correlationData = value.correlationData;
      this._messageExpiry = value.messageExpiry;
      this._payloadFormatIndicator = value.payloadFormatIndicator;
      this._responseTopic = value.responseTopic;
      this._userProperties.internalValue = value.userProperties;
    }
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

  // correlation_data - computed: true, optional: true, required: false
  private _correlationData?: string; 
  public get correlationData() {
    return this.getStringAttribute('correlation_data');
  }
  public set correlationData(value: string) {
    this._correlationData = value;
  }
  public resetCorrelationData() {
    this._correlationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationDataInput() {
    return this._correlationData;
  }

  // message_expiry - computed: true, optional: true, required: false
  private _messageExpiry?: string; 
  public get messageExpiry() {
    return this.getStringAttribute('message_expiry');
  }
  public set messageExpiry(value: string) {
    this._messageExpiry = value;
  }
  public resetMessageExpiry() {
    this._messageExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageExpiryInput() {
    return this._messageExpiry;
  }

  // payload_format_indicator - computed: true, optional: true, required: false
  private _payloadFormatIndicator?: string; 
  public get payloadFormatIndicator() {
    return this.getStringAttribute('payload_format_indicator');
  }
  public set payloadFormatIndicator(value: string) {
    this._payloadFormatIndicator = value;
  }
  public resetPayloadFormatIndicator() {
    this._payloadFormatIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatIndicatorInput() {
    return this._payloadFormatIndicator;
  }

  // response_topic - computed: true, optional: true, required: false
  private _responseTopic?: string; 
  public get responseTopic() {
    return this.getStringAttribute('response_topic');
  }
  public set responseTopic(value: string) {
    this._responseTopic = value;
  }
  public resetResponseTopic() {
    this._responseTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTopicInput() {
    return this._responseTopic;
  }

  // user_properties - computed: true, optional: true, required: false
  private _userProperties = new IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserPropertiesList(this, "user_properties", false);
  public get userProperties() {
    return this._userProperties;
  }
  public putUserProperties(value: IotTopicRuleTopicRulePayloadActionsRepublishHeadersUserProperties[] | cdktn.IResolvable) {
    this._userProperties.internalValue = value;
  }
  public resetUserProperties() {
    this._userProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPropertiesInput() {
    return this._userProperties.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsRepublish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadActionsRepublishHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic?: string;
}

export function iotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headers: iotTopicRuleTopicRulePayloadActionsRepublishHeadersToTerraform(struct!.headers),
    qos: cdktn.numberToTerraform(struct!.qos),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function iotTopicRuleTopicRulePayloadActionsRepublishToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsRepublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headers: {
      value: iotTopicRuleTopicRulePayloadActionsRepublishHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsRepublishHeaders",
    },
    qos: {
      value: cdktn.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class IotTopicRuleTopicRulePayloadActionsRepublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsRepublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsRepublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._qos = undefined;
      this._roleArn = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._qos = value.qos;
      this._roleArn = value.roleArn;
      this._topic = value.topic;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new IotTopicRuleTopicRulePayloadActionsRepublishHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IotTopicRuleTopicRulePayloadActionsRepublishHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // qos - computed: true, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleTopicRulePayloadActionsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#canned_acl IotTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsS3ToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsS3 | cdktn.IResolvable): any {
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
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._cannedAcl = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._cannedAcl = value.cannedAcl;
      this._key = value.key;
      this._roleArn = value.roleArn;
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

  // canned_acl - computed: true, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsSns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn?: string;
}

export function iotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function iotTopicRuleTopicRulePayloadActionsSnsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageFormat = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageFormat = value.messageFormat;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // message_format - computed: true, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_arn - computed: true, optional: true, required: false
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  public resetTargetArn() {
    this._targetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#use_base_64 IotTopicRule#use_base_64}
  */
  readonly useBase64?: boolean | cdktn.IResolvable;
}

export function iotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function iotTopicRuleTopicRulePayloadActionsSqsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_base_64: {
      value: cdktn.booleanToHclTerraform(struct!.useBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueUrl = undefined;
      this._roleArn = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueUrl = value.queueUrl;
      this._roleArn = value.roleArn;
      this._useBase64 = value.useBase64;
    }
  }

  // queue_url - computed: true, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_base_64 - computed: true, optional: true, required: false
  private _useBase64?: boolean | cdktn.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
  public set useBase64(value: boolean | cdktn.IResolvable) {
    this._useBase64 = value;
  }
  public resetUseBase64() {
    this._useBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName?: string;
}

export function iotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsStepFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
  }
}


export function iotTopicRuleTopicRulePayloadActionsStepFunctionsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsStepFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_machine_name: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsStepFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsStepFunctions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamePrefix = this._executionNamePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineName = this._stateMachineName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsStepFunctions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionNamePrefix = undefined;
      this._roleArn = undefined;
      this._stateMachineName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionNamePrefix = value.executionNamePrefix;
      this._roleArn = value.roleArn;
      this._stateMachineName = value.stateMachineName;
    }
  }

  // execution_name_prefix - computed: true, optional: true, required: false
  private _executionNamePrefix?: string; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_machine_name - computed: true, optional: true, required: false
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  public resetStateMachineName() {
    this._stateMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName;
  }
}
export interface IotTopicRuleTopicRulePayloadActionsTimestreamDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadActionsTimestreamDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsTimestreamDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadActionsTimestreamDimensionsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActionsTimestreamDimensions[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsTimestreamDimensionsOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsTimestreamDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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

export class IotTopicRuleTopicRulePayloadActionsTimestreamTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
export interface IotTopicRuleTopicRulePayloadActionsTimestream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#database_name IotTopicRule#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#dimensions IotTopicRule#dimensions}
  */
  readonly dimensions?: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp;
}

export function iotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    dimensions: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToTerraform, false)(struct!.dimensions),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    timestamp: iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToTerraform(struct!.timestamp),
  }
}


export function iotTopicRuleTopicRulePayloadActionsTimestreamToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActionsTimestream | cdktn.IResolvable): any {
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
    dimensions: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsTimestreamDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsTimestreamDimensionsList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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
    timestamp: {
      value: iotTopicRuleTopicRulePayloadActionsTimestreamTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsTimestreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadActionsTimestream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActionsTimestream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._dimensions.internalValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._dimensions.internalValue = value.dimensions;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._timestamp.internalValue = value.timestamp;
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

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new IotTopicRuleTopicRulePayloadActionsTimestreamDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: IotTopicRuleTopicRulePayloadActionsTimestreamDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // timestamp - computed: true, optional: true, required: false
  private _timestamp = new IotTopicRuleTopicRulePayloadActionsTimestreamTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTopicRulePayloadActionsTimestreamTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayloadActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#cloudwatch_logs IotTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#dynamo_d_bv_2 IotTopicRule#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IotTopicRuleTopicRulePayloadActionsDynamoDBv2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#dynamo_db IotTopicRule#dynamo_db}
  */
  readonly dynamoDb?: IotTopicRuleTopicRulePayloadActionsDynamoDb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleTopicRulePayloadActionsElasticsearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleTopicRulePayloadActionsFirehose;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#http IotTopicRule#http}
  */
  readonly http?: IotTopicRuleTopicRulePayloadActionsHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleTopicRulePayloadActionsIotAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleTopicRulePayloadActionsIotEvents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#iot_site_wise IotTopicRule#iot_site_wise}
  */
  readonly iotSiteWise?: IotTopicRuleTopicRulePayloadActionsIotSiteWise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#kafka IotTopicRule#kafka}
  */
  readonly kafka?: IotTopicRuleTopicRulePayloadActionsKafka;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleTopicRulePayloadActionsKinesis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleTopicRulePayloadActionsLambda;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#location IotTopicRule#location}
  */
  readonly location?: IotTopicRuleTopicRulePayloadActionsLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#open_search IotTopicRule#open_search}
  */
  readonly openSearch?: IotTopicRuleTopicRulePayloadActionsOpenSearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleTopicRulePayloadActionsRepublish;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleTopicRulePayloadActionsS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleTopicRulePayloadActionsSns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleTopicRulePayloadActionsSqs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleTopicRulePayloadActionsStepFunctions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestream IotTopicRule#timestream}
  */
  readonly timestream?: IotTopicRuleTopicRulePayloadActionsTimestream;
}

export function iotTopicRuleTopicRulePayloadActionsToTerraform(struct?: IotTopicRuleTopicRulePayloadActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_alarm: iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamo_d_bv_2: iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: iotTopicRuleTopicRulePayloadActionsDynamoDbToTerraform(struct!.dynamoDb),
    elasticsearch: iotTopicRuleTopicRulePayloadActionsElasticsearchToTerraform(struct!.elasticsearch),
    firehose: iotTopicRuleTopicRulePayloadActionsFirehoseToTerraform(struct!.firehose),
    http: iotTopicRuleTopicRulePayloadActionsHttpToTerraform(struct!.http),
    iot_analytics: iotTopicRuleTopicRulePayloadActionsIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: iotTopicRuleTopicRulePayloadActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: iotTopicRuleTopicRulePayloadActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    kafka: iotTopicRuleTopicRulePayloadActionsKafkaToTerraform(struct!.kafka),
    kinesis: iotTopicRuleTopicRulePayloadActionsKinesisToTerraform(struct!.kinesis),
    lambda: iotTopicRuleTopicRulePayloadActionsLambdaToTerraform(struct!.lambda),
    location: iotTopicRuleTopicRulePayloadActionsLocationToTerraform(struct!.location),
    open_search: iotTopicRuleTopicRulePayloadActionsOpenSearchToTerraform(struct!.openSearch),
    republish: iotTopicRuleTopicRulePayloadActionsRepublishToTerraform(struct!.republish),
    s3: iotTopicRuleTopicRulePayloadActionsS3ToTerraform(struct!.s3),
    sns: iotTopicRuleTopicRulePayloadActionsSnsToTerraform(struct!.sns),
    sqs: iotTopicRuleTopicRulePayloadActionsSqsToTerraform(struct!.sqs),
    step_functions: iotTopicRuleTopicRulePayloadActionsStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: iotTopicRuleTopicRulePayloadActionsTimestreamToTerraform(struct!.timestream),
  }
}


export function iotTopicRuleTopicRulePayloadActionsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_alarm: {
      value: iotTopicRuleTopicRulePayloadActionsCloudwatchAlarmToHclTerraform(struct!.cloudwatchAlarm),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm",
    },
    cloudwatch_logs: {
      value: iotTopicRuleTopicRulePayloadActionsCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsCloudwatchLogs",
    },
    cloudwatch_metric: {
      value: iotTopicRuleTopicRulePayloadActionsCloudwatchMetricToHclTerraform(struct!.cloudwatchMetric),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsCloudwatchMetric",
    },
    dynamo_d_bv_2: {
      value: iotTopicRuleTopicRulePayloadActionsDynamoDBv2ToHclTerraform(struct!.dynamoDBv2),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsDynamoDBv2",
    },
    dynamo_db: {
      value: iotTopicRuleTopicRulePayloadActionsDynamoDbToHclTerraform(struct!.dynamoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsDynamoDb",
    },
    elasticsearch: {
      value: iotTopicRuleTopicRulePayloadActionsElasticsearchToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsElasticsearch",
    },
    firehose: {
      value: iotTopicRuleTopicRulePayloadActionsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsFirehose",
    },
    http: {
      value: iotTopicRuleTopicRulePayloadActionsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsHttp",
    },
    iot_analytics: {
      value: iotTopicRuleTopicRulePayloadActionsIotAnalyticsToHclTerraform(struct!.iotAnalytics),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotAnalytics",
    },
    iot_events: {
      value: iotTopicRuleTopicRulePayloadActionsIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotEvents",
    },
    iot_site_wise: {
      value: iotTopicRuleTopicRulePayloadActionsIotSiteWiseToHclTerraform(struct!.iotSiteWise),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsIotSiteWise",
    },
    kafka: {
      value: iotTopicRuleTopicRulePayloadActionsKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsKafka",
    },
    kinesis: {
      value: iotTopicRuleTopicRulePayloadActionsKinesisToHclTerraform(struct!.kinesis),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsKinesis",
    },
    lambda: {
      value: iotTopicRuleTopicRulePayloadActionsLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsLambda",
    },
    location: {
      value: iotTopicRuleTopicRulePayloadActionsLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsLocation",
    },
    open_search: {
      value: iotTopicRuleTopicRulePayloadActionsOpenSearchToHclTerraform(struct!.openSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsOpenSearch",
    },
    republish: {
      value: iotTopicRuleTopicRulePayloadActionsRepublishToHclTerraform(struct!.republish),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsRepublish",
    },
    s3: {
      value: iotTopicRuleTopicRulePayloadActionsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsS3",
    },
    sns: {
      value: iotTopicRuleTopicRulePayloadActionsSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsSns",
    },
    sqs: {
      value: iotTopicRuleTopicRulePayloadActionsSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsSqs",
    },
    step_functions: {
      value: iotTopicRuleTopicRulePayloadActionsStepFunctionsToHclTerraform(struct!.stepFunctions),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsStepFunctions",
    },
    timestream: {
      value: iotTopicRuleTopicRulePayloadActionsTimestreamToHclTerraform(struct!.timestream),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsTimestream",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchAlarm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchAlarm = this._cloudwatchAlarm?.internalValue;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._cloudwatchMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetric = this._cloudwatchMetric?.internalValue;
    }
    if (this._dynamoDBv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
    }
    if (this._dynamoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._iotAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotAnalytics = this._iotAnalytics?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._iotSiteWise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._openSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSearch = this._openSearch?.internalValue;
    }
    if (this._republish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.republish = this._republish?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    if (this._stepFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctions = this._stepFunctions?.internalValue;
    }
    if (this._timestream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestream = this._timestream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchAlarm.internalValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._cloudwatchMetric.internalValue = undefined;
      this._dynamoDBv2.internalValue = undefined;
      this._dynamoDb.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._http.internalValue = undefined;
      this._iotAnalytics.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._iotSiteWise.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kinesis.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._location.internalValue = undefined;
      this._openSearch.internalValue = undefined;
      this._republish.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
      this._stepFunctions.internalValue = undefined;
      this._timestream.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchAlarm.internalValue = value.cloudwatchAlarm;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._cloudwatchMetric.internalValue = value.cloudwatchMetric;
      this._dynamoDBv2.internalValue = value.dynamoDBv2;
      this._dynamoDb.internalValue = value.dynamoDb;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._firehose.internalValue = value.firehose;
      this._http.internalValue = value.http;
      this._iotAnalytics.internalValue = value.iotAnalytics;
      this._iotEvents.internalValue = value.iotEvents;
      this._iotSiteWise.internalValue = value.iotSiteWise;
      this._kafka.internalValue = value.kafka;
      this._kinesis.internalValue = value.kinesis;
      this._lambda.internalValue = value.lambda;
      this._location.internalValue = value.location;
      this._openSearch.internalValue = value.openSearch;
      this._republish.internalValue = value.republish;
      this._s3.internalValue = value.s3;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
      this._stepFunctions.internalValue = value.stepFunctions;
      this._timestream.internalValue = value.timestream;
    }
  }

  // cloudwatch_alarm - computed: true, optional: true, required: false
  private _cloudwatchAlarm = new IotTopicRuleTopicRulePayloadActionsCloudwatchAlarmOutputReference(this, "cloudwatch_alarm");
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public putCloudwatchAlarm(value: IotTopicRuleTopicRulePayloadActionsCloudwatchAlarm) {
    this._cloudwatchAlarm.internalValue = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm.internalValue;
  }

  // cloudwatch_logs - computed: true, optional: true, required: false
  private _cloudwatchLogs = new IotTopicRuleTopicRulePayloadActionsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: IotTopicRuleTopicRulePayloadActionsCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // cloudwatch_metric - computed: true, optional: true, required: false
  private _cloudwatchMetric = new IotTopicRuleTopicRulePayloadActionsCloudwatchMetricOutputReference(this, "cloudwatch_metric");
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: IotTopicRuleTopicRulePayloadActionsCloudwatchMetric) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // dynamo_d_bv_2 - computed: true, optional: true, required: false
  private _dynamoDBv2 = new IotTopicRuleTopicRulePayloadActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }
  public putDynamoDBv2(value: IotTopicRuleTopicRulePayloadActionsDynamoDBv2) {
    this._dynamoDBv2.internalValue = value;
  }
  public resetDynamoDBv2() {
    this._dynamoDBv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDBv2Input() {
    return this._dynamoDBv2.internalValue;
  }

  // dynamo_db - computed: true, optional: true, required: false
  private _dynamoDb = new IotTopicRuleTopicRulePayloadActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: IotTopicRuleTopicRulePayloadActionsDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // elasticsearch - computed: true, optional: true, required: false
  private _elasticsearch = new IotTopicRuleTopicRulePayloadActionsElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: IotTopicRuleTopicRulePayloadActionsElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new IotTopicRuleTopicRulePayloadActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IotTopicRuleTopicRulePayloadActionsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // http - computed: true, optional: true, required: false
  private _http = new IotTopicRuleTopicRulePayloadActionsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: IotTopicRuleTopicRulePayloadActionsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // iot_analytics - computed: true, optional: true, required: false
  private _iotAnalytics = new IotTopicRuleTopicRulePayloadActionsIotAnalyticsOutputReference(this, "iot_analytics");
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public putIotAnalytics(value: IotTopicRuleTopicRulePayloadActionsIotAnalytics) {
    this._iotAnalytics.internalValue = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics.internalValue;
  }

  // iot_events - computed: true, optional: true, required: false
  private _iotEvents = new IotTopicRuleTopicRulePayloadActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IotTopicRuleTopicRulePayloadActionsIotEvents) {
    this._iotEvents.internalValue = value;
  }
  public resetIotEvents() {
    this._iotEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents.internalValue;
  }

  // iot_site_wise - computed: true, optional: true, required: false
  private _iotSiteWise = new IotTopicRuleTopicRulePayloadActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }
  public putIotSiteWise(value: IotTopicRuleTopicRulePayloadActionsIotSiteWise) {
    this._iotSiteWise.internalValue = value;
  }
  public resetIotSiteWise() {
    this._iotSiteWise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseInput() {
    return this._iotSiteWise.internalValue;
  }

  // kafka - computed: true, optional: true, required: false
  private _kafka = new IotTopicRuleTopicRulePayloadActionsKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: IotTopicRuleTopicRulePayloadActionsKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kinesis - computed: true, optional: true, required: false
  private _kinesis = new IotTopicRuleTopicRulePayloadActionsKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: IotTopicRuleTopicRulePayloadActionsKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IotTopicRuleTopicRulePayloadActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IotTopicRuleTopicRulePayloadActionsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // location - computed: true, optional: true, required: false
  private _location = new IotTopicRuleTopicRulePayloadActionsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: IotTopicRuleTopicRulePayloadActionsLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // open_search - computed: true, optional: true, required: false
  private _openSearch = new IotTopicRuleTopicRulePayloadActionsOpenSearchOutputReference(this, "open_search");
  public get openSearch() {
    return this._openSearch;
  }
  public putOpenSearch(value: IotTopicRuleTopicRulePayloadActionsOpenSearch) {
    this._openSearch.internalValue = value;
  }
  public resetOpenSearch() {
    this._openSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSearchInput() {
    return this._openSearch.internalValue;
  }

  // republish - computed: true, optional: true, required: false
  private _republish = new IotTopicRuleTopicRulePayloadActionsRepublishOutputReference(this, "republish");
  public get republish() {
    return this._republish;
  }
  public putRepublish(value: IotTopicRuleTopicRulePayloadActionsRepublish) {
    this._republish.internalValue = value;
  }
  public resetRepublish() {
    this._republish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new IotTopicRuleTopicRulePayloadActionsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: IotTopicRuleTopicRulePayloadActionsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IotTopicRuleTopicRulePayloadActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IotTopicRuleTopicRulePayloadActionsSns) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: true, optional: true, required: false
  private _sqs = new IotTopicRuleTopicRulePayloadActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IotTopicRuleTopicRulePayloadActionsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // step_functions - computed: true, optional: true, required: false
  private _stepFunctions = new IotTopicRuleTopicRulePayloadActionsStepFunctionsOutputReference(this, "step_functions");
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public putStepFunctions(value: IotTopicRuleTopicRulePayloadActionsStepFunctions) {
    this._stepFunctions.internalValue = value;
  }
  public resetStepFunctions() {
    this._stepFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions.internalValue;
  }

  // timestream - computed: true, optional: true, required: false
  private _timestream = new IotTopicRuleTopicRulePayloadActionsTimestreamOutputReference(this, "timestream");
  public get timestream() {
    return this._timestream;
  }
  public putTimestream(value: IotTopicRuleTopicRulePayloadActionsTimestream) {
    this._timestream.internalValue = value;
  }
  public resetTimestream() {
    this._timestream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamInput() {
    return this._timestream.internalValue;
  }
}

export class IotTopicRuleTopicRulePayloadActionsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadActions[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadActionsOutputReference {
    return new IotTopicRuleTopicRulePayloadActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}
  */
  readonly stateValue?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_reason: cdktn.stringToTerraform(struct!.stateReason),
    state_value: cdktn.stringToTerraform(struct!.stateValue),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_reason: {
      value: cdktn.stringToHclTerraform(struct!.stateReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_value: {
      value: cdktn.stringToHclTerraform(struct!.stateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateReason = this._stateReason;
    }
    if (this._stateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateValue = this._stateValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
      this._roleArn = undefined;
      this._stateReason = undefined;
      this._stateValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
      this._roleArn = value.roleArn;
      this._stateReason = value.stateReason;
      this._stateValue = value.stateValue;
    }
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_reason - computed: true, optional: true, required: false
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  public resetStateReason() {
    this._stateReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // state_value - computed: true, optional: true, required: false
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  public resetStateValue() {
    this._stateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#log_group_name IotTopicRule#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_name: {
      value: cdktn.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
    metric_value: cdktn.stringToTerraform(struct!.metricValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_timestamp: {
      value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_unit: {
      value: cdktn.stringToHclTerraform(struct!.metricUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktn.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTimestamp = this._metricTimestamp;
    }
    if (this._metricUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUnit = this._metricUnit;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricTimestamp = undefined;
      this._metricUnit = undefined;
      this._metricValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricTimestamp = value.metricTimestamp;
      this._metricUnit = value.metricUnit;
      this._metricValue = value.metricValue;
      this._roleArn = value.roleArn;
    }
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: true, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_timestamp - computed: true, optional: true, required: false
  private _metricTimestamp?: string; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp;
  }

  // metric_unit - computed: true, optional: true, required: false
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  public resetMetricUnit() {
    this._metricUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit;
  }

  // metric_value - computed: true, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableName = value.tableName;
    }
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
}
export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    put_item: iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToTerraform(struct!.putItem),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    put_item: {
      value: iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemToHclTerraform(struct!.putItem),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._putItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putItem = this._putItem?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._putItem.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._putItem.internalValue = value.putItem;
      this._roleArn = value.roleArn;
    }
  }

  // put_item - computed: true, optional: true, required: false
  private _putItem = new IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItemOutputReference(this, "put_item");
  public get putItem() {
    return this._putItem;
  }
  public putPutItem(value: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2PutItem) {
    this._putItem.internalValue = value;
  }
  public resetPutItem() {
    this._putItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionDynamoDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionDynamoDbToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hash_key_field: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_type: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_value: {
      value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_field: {
      value: cdktn.stringToHclTerraform(struct!.payloadField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_field: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_type: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key_value: {
      value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleTopicRulePayloadErrorActionDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionDynamoDb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyField = this._hashKeyField;
    }
    if (this._hashKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyType = this._hashKeyType;
    }
    if (this._hashKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyValue = this._hashKeyValue;
    }
    if (this._payloadField !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadField = this._payloadField;
    }
    if (this._rangeKeyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyField = this._rangeKeyField;
    }
    if (this._rangeKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyType = this._rangeKeyType;
    }
    if (this._rangeKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKeyValue = this._rangeKeyValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionDynamoDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashKeyField = value.hashKeyField;
      this._hashKeyType = value.hashKeyType;
      this._hashKeyValue = value.hashKeyValue;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
    }
  }

  // hash_key_field - computed: true, optional: true, required: false
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  public resetHashKeyField() {
    this._hashKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField;
  }

  // hash_key_type - computed: true, optional: true, required: false
  private _hashKeyType?: string; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType;
  }

  // hash_key_value - computed: true, optional: true, required: false
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  public resetHashKeyValue() {
    this._hashKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue;
  }

  // payload_field - computed: true, optional: true, required: false
  private _payloadField?: string; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField;
  }

  // range_key_field - computed: true, optional: true, required: false
  private _rangeKeyField?: string; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField;
  }

  // range_key_type - computed: true, optional: true, required: false
  private _rangeKeyType?: string; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType;
  }

  // range_key_value - computed: true, optional: true, required: false
  private _rangeKeyValue?: string; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
}
export interface IotTopicRuleTopicRulePayloadErrorActionElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
  */
  readonly type?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionElasticsearchToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleTopicRulePayloadErrorActionElasticsearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionElasticsearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionElasticsearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleTopicRulePayloadErrorActionFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionFirehoseToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktn.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._deliveryStreamName = undefined;
      this._roleArn = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._deliveryStreamName = value.deliveryStreamName;
      this._roleArn = value.roleArn;
      this._separator = value.separator;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // delivery_stream_name - computed: true, optional: true, required: false
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  public resetDeliveryStreamName() {
    this._deliveryStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#service_name IotTopicRule#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#signing_region IotTopicRule#signing_region}
  */
  readonly signingRegion?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
    signing_region: cdktn.stringToTerraform(struct!.signingRegion),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_region: {
      value: cdktn.stringToHclTerraform(struct!.signingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._serviceName = undefined;
      this._signingRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._serviceName = value.serviceName;
      this._signingRegion = value.signingRegion;
    }
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // signing_region - computed: true, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionHttpAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sigv_4 IotTopicRule#sigv_4}
  */
  readonly sigv4?: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sigv_4: iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToTerraform(struct!.sigv4),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionHttpAuthToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sigv_4: {
      value: iotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4ToHclTerraform(struct!.sigv4),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionHttpAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionHttpAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sigv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigv4 = this._sigv4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionHttpAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sigv4.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sigv4.internalValue = value.sigv4;
    }
  }

  // sigv_4 - computed: true, optional: true, required: false
  private _sigv4 = new IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4OutputReference(this, "sigv_4");
  public get sigv4() {
    return this._sigv4;
  }
  public putSigv4(value: IotTopicRuleTopicRulePayloadErrorActionHttpAuthSigv4) {
    this._sigv4.internalValue = value;
  }
  public resetSigv4() {
    this._sigv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigv4Input() {
    return this._sigv4.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_across_topics IotTopicRule#batch_across_topics}
  */
  readonly batchAcrossTopics?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#max_batch_open_ms IotTopicRule#max_batch_open_ms}
  */
  readonly maxBatchOpenMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#max_batch_size IotTopicRule#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#max_batch_size_bytes IotTopicRule#max_batch_size_bytes}
  */
  readonly maxBatchSizeBytes?: number;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_across_topics: cdktn.booleanToTerraform(struct!.batchAcrossTopics),
    max_batch_open_ms: cdktn.numberToTerraform(struct!.maxBatchOpenMs),
    max_batch_size: cdktn.numberToTerraform(struct!.maxBatchSize),
    max_batch_size_bytes: cdktn.numberToTerraform(struct!.maxBatchSizeBytes),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_across_topics: {
      value: cdktn.booleanToHclTerraform(struct!.batchAcrossTopics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_batch_open_ms: {
      value: cdktn.numberToHclTerraform(struct!.maxBatchOpenMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_batch_size: {
      value: cdktn.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_batch_size_bytes: {
      value: cdktn.numberToHclTerraform(struct!.maxBatchSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchAcrossTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchAcrossTopics = this._batchAcrossTopics;
    }
    if (this._maxBatchOpenMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchOpenMs = this._maxBatchOpenMs;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._maxBatchSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSizeBytes = this._maxBatchSizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchAcrossTopics = undefined;
      this._maxBatchOpenMs = undefined;
      this._maxBatchSize = undefined;
      this._maxBatchSizeBytes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchAcrossTopics = value.batchAcrossTopics;
      this._maxBatchOpenMs = value.maxBatchOpenMs;
      this._maxBatchSize = value.maxBatchSize;
      this._maxBatchSizeBytes = value.maxBatchSizeBytes;
    }
  }

  // batch_across_topics - computed: true, optional: true, required: false
  private _batchAcrossTopics?: boolean | cdktn.IResolvable; 
  public get batchAcrossTopics() {
    return this.getBooleanAttribute('batch_across_topics');
  }
  public set batchAcrossTopics(value: boolean | cdktn.IResolvable) {
    this._batchAcrossTopics = value;
  }
  public resetBatchAcrossTopics() {
    this._batchAcrossTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchAcrossTopicsInput() {
    return this._batchAcrossTopics;
  }

  // max_batch_open_ms - computed: true, optional: true, required: false
  private _maxBatchOpenMs?: number; 
  public get maxBatchOpenMs() {
    return this.getNumberAttribute('max_batch_open_ms');
  }
  public set maxBatchOpenMs(value: number) {
    this._maxBatchOpenMs = value;
  }
  public resetMaxBatchOpenMs() {
    this._maxBatchOpenMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchOpenMsInput() {
    return this._maxBatchOpenMs;
  }

  // max_batch_size - computed: true, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // max_batch_size_bytes - computed: true, optional: true, required: false
  private _maxBatchSizeBytes?: number; 
  public get maxBatchSizeBytes() {
    return this.getNumberAttribute('max_batch_size_bytes');
  }
  public set maxBatchSizeBytes(value: number) {
    this._maxBatchSizeBytes = value;
  }
  public resetMaxBatchSizeBytes() {
    this._maxBatchSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeBytesInput() {
    return this._maxBatchSizeBytes;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadErrorActionHttpHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionHttpHeaders | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadErrorActionHttpHeadersList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadErrorActionHttpHeaders[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadErrorActionHttpHeadersOutputReference {
    return new IotTopicRuleTopicRulePayloadErrorActionHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#auth IotTopicRule#auth}
  */
  readonly auth?: IotTopicRuleTopicRulePayloadErrorActionHttpAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_config IotTopicRule#batch_config}
  */
  readonly batchConfig?: IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#confirmation_url IotTopicRule#confirmation_url}
  */
  readonly confirmationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#enable_batching IotTopicRule#enable_batching}
  */
  readonly enableBatching?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#url IotTopicRule#url}
  */
  readonly url?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth: iotTopicRuleTopicRulePayloadErrorActionHttpAuthToTerraform(struct!.auth),
    batch_config: iotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigToTerraform(struct!.batchConfig),
    confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
    enable_batching: cdktn.booleanToTerraform(struct!.enableBatching),
    headers: cdktn.listMapper(iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToTerraform, false)(struct!.headers),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionHttpToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth: {
      value: iotTopicRuleTopicRulePayloadErrorActionHttpAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionHttpAuth",
    },
    batch_config: {
      value: iotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigToHclTerraform(struct!.batchConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig",
    },
    confirmation_url: {
      value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_batching: {
      value: cdktn.booleanToHclTerraform(struct!.enableBatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadErrorActionHttpHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionHttpHeadersList",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionHttp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._batchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchConfig = this._batchConfig?.internalValue;
    }
    if (this._confirmationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationUrl = this._confirmationUrl;
    }
    if (this._enableBatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBatching = this._enableBatching;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionHttp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._batchConfig.internalValue = undefined;
      this._confirmationUrl = undefined;
      this._enableBatching = undefined;
      this._headers.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._batchConfig.internalValue = value.batchConfig;
      this._confirmationUrl = value.confirmationUrl;
      this._enableBatching = value.enableBatching;
      this._headers.internalValue = value.headers;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new IotTopicRuleTopicRulePayloadErrorActionHttpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: IotTopicRuleTopicRulePayloadErrorActionHttpAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // batch_config - computed: true, optional: true, required: false
  private _batchConfig = new IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfigOutputReference(this, "batch_config");
  public get batchConfig() {
    return this._batchConfig;
  }
  public putBatchConfig(value: IotTopicRuleTopicRulePayloadErrorActionHttpBatchConfig) {
    this._batchConfig.internalValue = value;
  }
  public resetBatchConfig() {
    this._batchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchConfigInput() {
    return this._batchConfig.internalValue;
  }

  // confirmation_url - computed: true, optional: true, required: false
  private _confirmationUrl?: string; 
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
  public set confirmationUrl(value: string) {
    this._confirmationUrl = value;
  }
  public resetConfirmationUrl() {
    this._confirmationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationUrlInput() {
    return this._confirmationUrl;
  }

  // enable_batching - computed: true, optional: true, required: false
  private _enableBatching?: boolean | cdktn.IResolvable; 
  public get enableBatching() {
    return this.getBooleanAttribute('enable_batching');
  }
  public set enableBatching(value: boolean | cdktn.IResolvable) {
    this._enableBatching = value;
  }
  public resetEnableBatching() {
    this._enableBatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchingInput() {
    return this._enableBatching;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new IotTopicRuleTopicRulePayloadErrorActionHttpHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IotTopicRuleTopicRulePayloadErrorActionHttpHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    channel_name: cdktn.stringToTerraform(struct!.channelName),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_name: {
      value: cdktn.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotAnalytics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._channelName = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._channelName = value.channelName;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // channel_name - computed: true, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
  */
  readonly batchMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}
  */
  readonly inputName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
    input_name: cdktn.stringToTerraform(struct!.inputName),
    message_id: cdktn.stringToTerraform(struct!.messageId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotEventsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    batch_mode: {
      value: cdktn.booleanToHclTerraform(struct!.batchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktn.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchMode = this._batchMode;
    }
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchMode = undefined;
      this._inputName = undefined;
      this._messageId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchMode = value.batchMode;
      this._inputName = value.inputName;
      this._messageId = value.messageId;
      this._roleArn = value.roleArn;
    }
  }

  // batch_mode - computed: true, optional: true, required: false
  private _batchMode?: boolean | cdktn.IResolvable; 
  public get batchMode() {
    return this.getBooleanAttribute('batch_mode');
  }
  public set batchMode(value: boolean | cdktn.IResolvable) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

  // input_name - computed: true, optional: true, required: false
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  public resetInputName() {
    this._inputName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // message_id - computed: true, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#offset_in_nanos IotTopicRule#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#time_in_seconds IotTopicRule#time_in_seconds}
  */
  readonly timeInSeconds?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    offset_in_nanos: {
      value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_in_seconds: {
      value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsetInNanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetInNanos = this._offsetInNanos;
    }
    if (this._timeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInSeconds = this._timeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offsetInNanos = undefined;
      this._timeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offsetInNanos = value.offsetInNanos;
      this._timeInSeconds = value.timeInSeconds;
    }
  }

  // offset_in_nanos - computed: true, optional: true, required: false
  private _offsetInNanos?: string; 
  public get offsetInNanos() {
    return this.getStringAttribute('offset_in_nanos');
  }
  public set offsetInNanos(value: string) {
    this._offsetInNanos = value;
  }
  public resetOffsetInNanos() {
    this._offsetInNanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInNanosInput() {
    return this._offsetInNanos;
  }

  // time_in_seconds - computed: true, optional: true, required: false
  private _timeInSeconds?: string; 
  public get timeInSeconds() {
    return this.getStringAttribute('time_in_seconds');
  }
  public set timeInSeconds(value: string) {
    this._timeInSeconds = value;
  }
  public resetTimeInSeconds() {
    this._timeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInSecondsInput() {
    return this._timeInSeconds;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#boolean_value IotTopicRule#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#double_value IotTopicRule#double_value}
  */
  readonly doubleValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#integer_value IotTopicRule#integer_value}
  */
  readonly integerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#string_value IotTopicRule#string_value}
  */
  readonly stringValue?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
    double_value: cdktn.stringToTerraform(struct!.doubleValue),
    integer_value: cdktn.stringToTerraform(struct!.integerValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_value: {
      value: cdktn.stringToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    double_value: {
      value: cdktn.stringToHclTerraform(struct!.doubleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integer_value: {
      value: cdktn.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._doubleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleValue = this._doubleValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._doubleValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._doubleValue = value.doubleValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
    }
  }

  // boolean_value - computed: true, optional: true, required: false
  private _booleanValue?: string; 
  public get booleanValue() {
    return this.getStringAttribute('boolean_value');
  }
  public set booleanValue(value: string) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // double_value - computed: true, optional: true, required: false
  private _doubleValue?: string; 
  public get doubleValue() {
    return this.getStringAttribute('double_value');
  }
  public set doubleValue(value: string) {
    this._doubleValue = value;
  }
  public resetDoubleValue() {
    this._doubleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleValueInput() {
    return this._doubleValue;
  }

  // integer_value - computed: true, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#quality IotTopicRule#quality}
  */
  readonly quality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quality: cdktn.stringToTerraform(struct!.quality),
    timestamp: iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToTerraform(struct!.timestamp),
    value: iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    quality: {
      value: cdktn.stringToHclTerraform(struct!.quality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp",
    },
    value: {
      value: iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.quality = this._quality;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quality = undefined;
      this._timestamp.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quality = value.quality;
      this._timestamp.internalValue = value.timestamp;
      this._value.internalValue = value.value;
    }
  }

  // quality - computed: true, optional: true, required: false
  private _quality?: string; 
  public get quality() {
    return this.getStringAttribute('quality');
  }
  public set quality(value: string) {
    this._quality = value;
  }
  public resetQuality() {
    this._quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp = new IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value = new IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference {
    return new IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#asset_id IotTopicRule#asset_id}
  */
  readonly assetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#entry_id IotTopicRule#entry_id}
  */
  readonly entryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#property_alias IotTopicRule#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#property_id IotTopicRule#property_id}
  */
  readonly propertyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#property_values IotTopicRule#property_values}
  */
  readonly propertyValues?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues[] | cdktn.IResolvable;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_id: cdktn.stringToTerraform(struct!.assetId),
    entry_id: cdktn.stringToTerraform(struct!.entryId),
    property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_values: cdktn.listMapper(iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToTerraform, false)(struct!.propertyValues),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asset_id: {
      value: cdktn.stringToHclTerraform(struct!.assetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_id: {
      value: cdktn.stringToHclTerraform(struct!.entryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_alias: {
      value: cdktn.stringToHclTerraform(struct!.propertyAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_id: {
      value: cdktn.stringToHclTerraform(struct!.propertyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_values: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesToHclTerraform, false)(struct!.propertyValues),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetId = this._assetId;
    }
    if (this._entryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryId = this._entryId;
    }
    if (this._propertyAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyAlias = this._propertyAlias;
    }
    if (this._propertyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyId = this._propertyId;
    }
    if (this._propertyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValues = this._propertyValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._entryId = undefined;
      this._propertyAlias = undefined;
      this._propertyId = undefined;
      this._propertyValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetId = value.assetId;
      this._entryId = value.entryId;
      this._propertyAlias = value.propertyAlias;
      this._propertyId = value.propertyId;
      this._propertyValues.internalValue = value.propertyValues;
    }
  }

  // asset_id - computed: true, optional: true, required: false
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  public resetAssetId() {
    this._assetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // entry_id - computed: true, optional: true, required: false
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  public resetEntryId() {
    this._entryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // property_alias - computed: true, optional: true, required: false
  private _propertyAlias?: string; 
  public get propertyAlias() {
    return this.getStringAttribute('property_alias');
  }
  public set propertyAlias(value: string) {
    this._propertyAlias = value;
  }
  public resetPropertyAlias() {
    this._propertyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyAliasInput() {
    return this._propertyAlias;
  }

  // property_id - computed: true, optional: true, required: false
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  public resetPropertyId() {
    this._propertyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // property_values - computed: true, optional: true, required: false
  private _propertyValues = new IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesList(this, "property_values", false);
  public get propertyValues() {
    return this._propertyValues;
  }
  public putPropertyValues(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValues[] | cdktn.IResolvable) {
    this._propertyValues.internalValue = value;
  }
  public resetPropertyValues() {
    this._propertyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValuesInput() {
    return this._propertyValues.internalValue;
  }
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesOutputReference {
    return new IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionIotSiteWise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#put_asset_property_value_entries IotTopicRule#put_asset_property_value_entries}
  */
  readonly putAssetPropertyValueEntries?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    put_asset_property_value_entries: cdktn.listMapper(iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToTerraform, false)(struct!.putAssetPropertyValueEntries),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    put_asset_property_value_entries: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesToHclTerraform, false)(struct!.putAssetPropertyValueEntries),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionIotSiteWise | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._putAssetPropertyValueEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.putAssetPropertyValueEntries = this._putAssetPropertyValueEntries?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._putAssetPropertyValueEntries.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._putAssetPropertyValueEntries.internalValue = value.putAssetPropertyValueEntries;
      this._roleArn = value.roleArn;
    }
  }

  // put_asset_property_value_entries - computed: true, optional: true, required: false
  private _putAssetPropertyValueEntries = new IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesList(this, "put_asset_property_value_entries", false);
  public get putAssetPropertyValueEntries() {
    return this._putAssetPropertyValueEntries;
  }
  public putPutAssetPropertyValueEntries(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntries[] | cdktn.IResolvable) {
    this._putAssetPropertyValueEntries.internalValue = value;
  }
  public resetPutAssetPropertyValueEntries() {
    this._putAssetPropertyValueEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putAssetPropertyValueEntriesInput() {
    return this._putAssetPropertyValueEntries.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionKafkaHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionKafkaHeadersToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadErrorActionKafkaHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadErrorActionKafkaHeadersList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadErrorActionKafkaHeadersOutputReference {
    return new IotTopicRuleTopicRulePayloadErrorActionKafkaHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionKafka {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#client_properties IotTopicRule#client_properties}
  */
  readonly clientProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#destination_arn IotTopicRule#destination_arn}
  */
  readonly destinationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#partition IotTopicRule#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
    destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
    headers: cdktn.listMapper(iotTopicRuleTopicRulePayloadErrorActionKafkaHeadersToTerraform, false)(struct!.headers),
    key: cdktn.stringToTerraform(struct!.key),
    partition: cdktn.stringToTerraform(struct!.partition),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionKafkaToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    destination_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadErrorActionKafkaHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionKafkaHeadersList",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktn.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class IotTopicRuleTopicRulePayloadErrorActionKafkaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionKafka | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProperties = this._clientProperties;
    }
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionKafka | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientProperties = undefined;
      this._destinationArn = undefined;
      this._headers.internalValue = undefined;
      this._key = undefined;
      this._partition = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientProperties = value.clientProperties;
      this._destinationArn = value.destinationArn;
      this._headers.internalValue = value.headers;
      this._key = value.key;
      this._partition = value.partition;
      this._topic = value.topic;
    }
  }

  // client_properties - computed: true, optional: true, required: false
  private _clientProperties?: { [key: string]: string }; 
  public get clientProperties() {
    return this.getStringMapAttribute('client_properties');
  }
  public set clientProperties(value: { [key: string]: string }) {
    this._clientProperties = value;
  }
  public resetClientProperties() {
    this._clientProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPropertiesInput() {
    return this._clientProperties;
  }

  // destination_arn - computed: true, optional: true, required: false
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  public resetDestinationArn() {
    this._destinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new IotTopicRuleTopicRulePayloadErrorActionKafkaHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IotTopicRuleTopicRulePayloadErrorActionKafkaHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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
export interface IotTopicRuleTopicRulePayloadErrorActionKinesis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}
  */
  readonly streamName?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    stream_name: cdktn.stringToTerraform(struct!.streamName),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionKinesisToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    partition_key: {
      value: cdktn.stringToHclTerraform(struct!.partitionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktn.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionKinesis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionKinesis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionKey = undefined;
      this._roleArn = undefined;
      this._streamName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionKey = value.partitionKey;
      this._roleArn = value.roleArn;
      this._streamName = value.streamName;
    }
  }

  // partition_key - computed: true, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: true, optional: true, required: false
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  public resetStreamName() {
    this._streamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionLambdaToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: true, optional: true, required: false
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  public resetFunctionArn() {
    this._functionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionLocationTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionLocationTimestampToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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

export class IotTopicRuleTopicRulePayloadErrorActionLocationTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
export interface IotTopicRuleTopicRulePayloadErrorActionLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#device_id IotTopicRule#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#latitude IotTopicRule#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#longitude IotTopicRule#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#tracker_name IotTopicRule#tracker_name}
  */
  readonly trackerName?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionLocationToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_id: cdktn.stringToTerraform(struct!.deviceId),
    latitude: cdktn.stringToTerraform(struct!.latitude),
    longitude: cdktn.stringToTerraform(struct!.longitude),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    timestamp: iotTopicRuleTopicRulePayloadErrorActionLocationTimestampToTerraform(struct!.timestamp),
    tracker_name: cdktn.stringToTerraform(struct!.trackerName),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionLocationToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_id: {
      value: cdktn.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktn.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktn.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: iotTopicRuleTopicRulePayloadErrorActionLocationTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp",
    },
    tracker_name: {
      value: cdktn.stringToHclTerraform(struct!.trackerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    if (this._trackerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerName = this._trackerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._roleArn = undefined;
      this._timestamp.internalValue = undefined;
      this._trackerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._roleArn = value.roleArn;
      this._timestamp.internalValue = value.timestamp;
      this._trackerName = value.trackerName;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp = new IotTopicRuleTopicRulePayloadErrorActionLocationTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTopicRulePayloadErrorActionLocationTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }

  // tracker_name - computed: true, optional: true, required: false
  private _trackerName?: string; 
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  public resetTrackerName() {
    this._trackerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionOpenSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
  */
  readonly type?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionOpenSearchToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionOpenSearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    id: cdktn.stringToTerraform(struct!.id),
    index: cdktn.stringToTerraform(struct!.index),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionOpenSearchToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionOpenSearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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

export class IotTopicRuleTopicRulePayloadErrorActionOpenSearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionOpenSearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionOpenSearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._index = undefined;
      this._roleArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._index = value.index;
      this._roleArn = value.roleArn;
      this._type = value.type;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesOutputReference {
    return new IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#content_type IotTopicRule#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#correlation_data IotTopicRule#correlation_data}
  */
  readonly correlationData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#message_expiry IotTopicRule#message_expiry}
  */
  readonly messageExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#payload_format_indicator IotTopicRule#payload_format_indicator}
  */
  readonly payloadFormatIndicator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#response_topic IotTopicRule#response_topic}
  */
  readonly responseTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#user_properties IotTopicRule#user_properties}
  */
  readonly userProperties?: IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties[] | cdktn.IResolvable;
}

export function iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    correlation_data: cdktn.stringToTerraform(struct!.correlationData),
    message_expiry: cdktn.stringToTerraform(struct!.messageExpiry),
    payload_format_indicator: cdktn.stringToTerraform(struct!.payloadFormatIndicator),
    response_topic: cdktn.stringToTerraform(struct!.responseTopic),
    user_properties: cdktn.listMapper(iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesToTerraform, false)(struct!.userProperties),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation_data: {
      value: cdktn.stringToHclTerraform(struct!.correlationData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_expiry: {
      value: cdktn.stringToHclTerraform(struct!.messageExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_format_indicator: {
      value: cdktn.stringToHclTerraform(struct!.payloadFormatIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_topic: {
      value: cdktn.stringToHclTerraform(struct!.responseTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_properties: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesToHclTerraform, false)(struct!.userProperties),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._correlationData !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationData = this._correlationData;
    }
    if (this._messageExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageExpiry = this._messageExpiry;
    }
    if (this._payloadFormatIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFormatIndicator = this._payloadFormatIndicator;
    }
    if (this._responseTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTopic = this._responseTopic;
    }
    if (this._userProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProperties = this._userProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._correlationData = undefined;
      this._messageExpiry = undefined;
      this._payloadFormatIndicator = undefined;
      this._responseTopic = undefined;
      this._userProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._correlationData = value.correlationData;
      this._messageExpiry = value.messageExpiry;
      this._payloadFormatIndicator = value.payloadFormatIndicator;
      this._responseTopic = value.responseTopic;
      this._userProperties.internalValue = value.userProperties;
    }
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

  // correlation_data - computed: true, optional: true, required: false
  private _correlationData?: string; 
  public get correlationData() {
    return this.getStringAttribute('correlation_data');
  }
  public set correlationData(value: string) {
    this._correlationData = value;
  }
  public resetCorrelationData() {
    this._correlationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationDataInput() {
    return this._correlationData;
  }

  // message_expiry - computed: true, optional: true, required: false
  private _messageExpiry?: string; 
  public get messageExpiry() {
    return this.getStringAttribute('message_expiry');
  }
  public set messageExpiry(value: string) {
    this._messageExpiry = value;
  }
  public resetMessageExpiry() {
    this._messageExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageExpiryInput() {
    return this._messageExpiry;
  }

  // payload_format_indicator - computed: true, optional: true, required: false
  private _payloadFormatIndicator?: string; 
  public get payloadFormatIndicator() {
    return this.getStringAttribute('payload_format_indicator');
  }
  public set payloadFormatIndicator(value: string) {
    this._payloadFormatIndicator = value;
  }
  public resetPayloadFormatIndicator() {
    this._payloadFormatIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatIndicatorInput() {
    return this._payloadFormatIndicator;
  }

  // response_topic - computed: true, optional: true, required: false
  private _responseTopic?: string; 
  public get responseTopic() {
    return this.getStringAttribute('response_topic');
  }
  public set responseTopic(value: string) {
    this._responseTopic = value;
  }
  public resetResponseTopic() {
    this._responseTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTopicInput() {
    return this._responseTopic;
  }

  // user_properties - computed: true, optional: true, required: false
  private _userProperties = new IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserPropertiesList(this, "user_properties", false);
  public get userProperties() {
    return this._userProperties;
  }
  public putUserProperties(value: IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersUserProperties[] | cdktn.IResolvable) {
    this._userProperties.internalValue = value;
  }
  public resetUserProperties() {
    this._userProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPropertiesInput() {
    return this._userProperties.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionRepublish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#headers IotTopicRule#headers}
  */
  readonly headers?: IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
  */
  readonly topic?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    headers: iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersToTerraform(struct!.headers),
    qos: cdktn.numberToTerraform(struct!.qos),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionRepublishToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionRepublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    headers: {
      value: iotTopicRuleTopicRulePayloadErrorActionRepublishHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders",
    },
    qos: {
      value: cdktn.numberToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class IotTopicRuleTopicRulePayloadErrorActionRepublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionRepublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionRepublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._qos = undefined;
      this._roleArn = undefined;
      this._topic = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._qos = value.qos;
      this._roleArn = value.roleArn;
      this._topic = value.topic;
    }
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new IotTopicRuleTopicRulePayloadErrorActionRepublishHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IotTopicRuleTopicRulePayloadErrorActionRepublishHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // qos - computed: true, optional: true, required: false
  private _qos?: number; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
export interface IotTopicRuleTopicRulePayloadErrorActionS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#canned_acl IotTopicRule#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    key: cdktn.stringToTerraform(struct!.key),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionS3ToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionS3 | cdktn.IResolvable): any {
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
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._cannedAcl = undefined;
      this._key = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._cannedAcl = value.cannedAcl;
      this._key = value.key;
      this._roleArn = value.roleArn;
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

  // canned_acl - computed: true, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionSns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_format: cdktn.stringToTerraform(struct!.messageFormat),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionSnsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_format: {
      value: cdktn.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageFormat = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageFormat = value.messageFormat;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // message_format - computed: true, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_arn - computed: true, optional: true, required: false
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  public resetTargetArn() {
    this._targetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionSqs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#use_base_64 IotTopicRule#use_base_64}
  */
  readonly useBase64?: boolean | cdktn.IResolvable;
}

export function iotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionSqsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_base_64: {
      value: cdktn.booleanToHclTerraform(struct!.useBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueUrl = undefined;
      this._roleArn = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueUrl = value.queueUrl;
      this._roleArn = value.roleArn;
      this._useBase64 = value.useBase64;
    }
  }

  // queue_url - computed: true, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // use_base_64 - computed: true, optional: true, required: false
  private _useBase64?: boolean | cdktn.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
  public set useBase64(value: boolean | cdktn.IResolvable) {
    this._useBase64 = value;
  }
  public resetUseBase64() {
    this._useBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionStepFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionStepFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_name_prefix: {
      value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_machine_name: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionStepFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionStepFunctions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionNamePrefix = this._executionNamePrefix;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stateMachineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineName = this._stateMachineName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionStepFunctions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionNamePrefix = undefined;
      this._roleArn = undefined;
      this._stateMachineName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionNamePrefix = value.executionNamePrefix;
      this._roleArn = value.roleArn;
      this._stateMachineName = value.stateMachineName;
    }
  }

  // execution_name_prefix - computed: true, optional: true, required: false
  private _executionNamePrefix?: string; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state_machine_name - computed: true, optional: true, required: false
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  public resetStateMachineName() {
    this._stateMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions | cdktn.IResolvable): any {
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

export class IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions | cdktn.IResolvable | undefined) {
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

export class IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsList extends cdktn.ComplexList {
  public internalValue? : IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions[] | cdktn.IResolvable

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
  public get(index: number): IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsOutputReference {
    return new IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
  */
  readonly value?: string;
}

export function iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
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

export class IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
export interface IotTopicRuleTopicRulePayloadErrorActionTimestream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#database_name IotTopicRule#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#dimensions IotTopicRule#dimensions}
  */
  readonly dimensions?: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
  */
  readonly timestamp?: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp;
}

export function iotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    dimensions: cdktn.listMapper(iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToTerraform, false)(struct!.dimensions),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    timestamp: iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToTerraform(struct!.timestamp),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionTimestreamToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorActionTimestream | cdktn.IResolvable): any {
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
    dimensions: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
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
    timestamp: {
      value: iotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionTimestreamOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorActionTimestream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorActionTimestream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._dimensions.internalValue = undefined;
      this._roleArn = undefined;
      this._tableName = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._dimensions.internalValue = value.dimensions;
      this._roleArn = value.roleArn;
      this._tableName = value.tableName;
      this._timestamp.internalValue = value.timestamp;
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

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: IotTopicRuleTopicRulePayloadErrorActionTimestreamDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // timestamp - computed: true, optional: true, required: false
  private _timestamp = new IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IotTopicRuleTopicRulePayloadErrorActionTimestreamTimestamp) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayloadErrorAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#cloudwatch_logs IotTopicRule#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#dynamo_d_bv_2 IotTopicRule#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#dynamo_db IotTopicRule#dynamo_db}
  */
  readonly dynamoDb?: IotTopicRuleTopicRulePayloadErrorActionDynamoDb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleTopicRulePayloadErrorActionElasticsearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleTopicRulePayloadErrorActionFirehose;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#http IotTopicRule#http}
  */
  readonly http?: IotTopicRuleTopicRulePayloadErrorActionHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleTopicRulePayloadErrorActionIotEvents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#iot_site_wise IotTopicRule#iot_site_wise}
  */
  readonly iotSiteWise?: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#kafka IotTopicRule#kafka}
  */
  readonly kafka?: IotTopicRuleTopicRulePayloadErrorActionKafka;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleTopicRulePayloadErrorActionKinesis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleTopicRulePayloadErrorActionLambda;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#location IotTopicRule#location}
  */
  readonly location?: IotTopicRuleTopicRulePayloadErrorActionLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#open_search IotTopicRule#open_search}
  */
  readonly openSearch?: IotTopicRuleTopicRulePayloadErrorActionOpenSearch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleTopicRulePayloadErrorActionRepublish;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleTopicRulePayloadErrorActionS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleTopicRulePayloadErrorActionSns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleTopicRulePayloadErrorActionSqs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleTopicRulePayloadErrorActionStepFunctions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#timestream IotTopicRule#timestream}
  */
  readonly timestream?: IotTopicRuleTopicRulePayloadErrorActionTimestream;
}

export function iotTopicRuleTopicRulePayloadErrorActionToTerraform(struct?: IotTopicRuleTopicRulePayloadErrorAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_alarm: iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_logs: iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    cloudwatch_metric: iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamo_d_bv_2: iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: iotTopicRuleTopicRulePayloadErrorActionDynamoDbToTerraform(struct!.dynamoDb),
    elasticsearch: iotTopicRuleTopicRulePayloadErrorActionElasticsearchToTerraform(struct!.elasticsearch),
    firehose: iotTopicRuleTopicRulePayloadErrorActionFirehoseToTerraform(struct!.firehose),
    http: iotTopicRuleTopicRulePayloadErrorActionHttpToTerraform(struct!.http),
    iot_analytics: iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: iotTopicRuleTopicRulePayloadErrorActionIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToTerraform(struct!.iotSiteWise),
    kafka: iotTopicRuleTopicRulePayloadErrorActionKafkaToTerraform(struct!.kafka),
    kinesis: iotTopicRuleTopicRulePayloadErrorActionKinesisToTerraform(struct!.kinesis),
    lambda: iotTopicRuleTopicRulePayloadErrorActionLambdaToTerraform(struct!.lambda),
    location: iotTopicRuleTopicRulePayloadErrorActionLocationToTerraform(struct!.location),
    open_search: iotTopicRuleTopicRulePayloadErrorActionOpenSearchToTerraform(struct!.openSearch),
    republish: iotTopicRuleTopicRulePayloadErrorActionRepublishToTerraform(struct!.republish),
    s3: iotTopicRuleTopicRulePayloadErrorActionS3ToTerraform(struct!.s3),
    sns: iotTopicRuleTopicRulePayloadErrorActionSnsToTerraform(struct!.sns),
    sqs: iotTopicRuleTopicRulePayloadErrorActionSqsToTerraform(struct!.sqs),
    step_functions: iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToTerraform(struct!.stepFunctions),
    timestream: iotTopicRuleTopicRulePayloadErrorActionTimestreamToTerraform(struct!.timestream),
  }
}


export function iotTopicRuleTopicRulePayloadErrorActionToHclTerraform(struct?: IotTopicRuleTopicRulePayloadErrorAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_alarm: {
      value: iotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmToHclTerraform(struct!.cloudwatchAlarm),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm",
    },
    cloudwatch_logs: {
      value: iotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs",
    },
    cloudwatch_metric: {
      value: iotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricToHclTerraform(struct!.cloudwatchMetric),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric",
    },
    dynamo_d_bv_2: {
      value: iotTopicRuleTopicRulePayloadErrorActionDynamoDBv2ToHclTerraform(struct!.dynamoDBv2),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2",
    },
    dynamo_db: {
      value: iotTopicRuleTopicRulePayloadErrorActionDynamoDbToHclTerraform(struct!.dynamoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionDynamoDb",
    },
    elasticsearch: {
      value: iotTopicRuleTopicRulePayloadErrorActionElasticsearchToHclTerraform(struct!.elasticsearch),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionElasticsearch",
    },
    firehose: {
      value: iotTopicRuleTopicRulePayloadErrorActionFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionFirehose",
    },
    http: {
      value: iotTopicRuleTopicRulePayloadErrorActionHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionHttp",
    },
    iot_analytics: {
      value: iotTopicRuleTopicRulePayloadErrorActionIotAnalyticsToHclTerraform(struct!.iotAnalytics),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotAnalytics",
    },
    iot_events: {
      value: iotTopicRuleTopicRulePayloadErrorActionIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotEvents",
    },
    iot_site_wise: {
      value: iotTopicRuleTopicRulePayloadErrorActionIotSiteWiseToHclTerraform(struct!.iotSiteWise),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionIotSiteWise",
    },
    kafka: {
      value: iotTopicRuleTopicRulePayloadErrorActionKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionKafka",
    },
    kinesis: {
      value: iotTopicRuleTopicRulePayloadErrorActionKinesisToHclTerraform(struct!.kinesis),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionKinesis",
    },
    lambda: {
      value: iotTopicRuleTopicRulePayloadErrorActionLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionLambda",
    },
    location: {
      value: iotTopicRuleTopicRulePayloadErrorActionLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionLocation",
    },
    open_search: {
      value: iotTopicRuleTopicRulePayloadErrorActionOpenSearchToHclTerraform(struct!.openSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionOpenSearch",
    },
    republish: {
      value: iotTopicRuleTopicRulePayloadErrorActionRepublishToHclTerraform(struct!.republish),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionRepublish",
    },
    s3: {
      value: iotTopicRuleTopicRulePayloadErrorActionS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionS3",
    },
    sns: {
      value: iotTopicRuleTopicRulePayloadErrorActionSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionSns",
    },
    sqs: {
      value: iotTopicRuleTopicRulePayloadErrorActionSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionSqs",
    },
    step_functions: {
      value: iotTopicRuleTopicRulePayloadErrorActionStepFunctionsToHclTerraform(struct!.stepFunctions),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionStepFunctions",
    },
    timestream: {
      value: iotTopicRuleTopicRulePayloadErrorActionTimestreamToHclTerraform(struct!.timestream),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorActionTimestream",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadErrorActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayloadErrorAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchAlarm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchAlarm = this._cloudwatchAlarm?.internalValue;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._cloudwatchMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetric = this._cloudwatchMetric?.internalValue;
    }
    if (this._dynamoDBv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
    }
    if (this._dynamoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._iotAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotAnalytics = this._iotAnalytics?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._iotSiteWise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._openSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSearch = this._openSearch?.internalValue;
    }
    if (this._republish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.republish = this._republish?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    if (this._stepFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctions = this._stepFunctions?.internalValue;
    }
    if (this._timestream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestream = this._timestream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayloadErrorAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchAlarm.internalValue = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._cloudwatchMetric.internalValue = undefined;
      this._dynamoDBv2.internalValue = undefined;
      this._dynamoDb.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._http.internalValue = undefined;
      this._iotAnalytics.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._iotSiteWise.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kinesis.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._location.internalValue = undefined;
      this._openSearch.internalValue = undefined;
      this._republish.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
      this._stepFunctions.internalValue = undefined;
      this._timestream.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchAlarm.internalValue = value.cloudwatchAlarm;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._cloudwatchMetric.internalValue = value.cloudwatchMetric;
      this._dynamoDBv2.internalValue = value.dynamoDBv2;
      this._dynamoDb.internalValue = value.dynamoDb;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._firehose.internalValue = value.firehose;
      this._http.internalValue = value.http;
      this._iotAnalytics.internalValue = value.iotAnalytics;
      this._iotEvents.internalValue = value.iotEvents;
      this._iotSiteWise.internalValue = value.iotSiteWise;
      this._kafka.internalValue = value.kafka;
      this._kinesis.internalValue = value.kinesis;
      this._lambda.internalValue = value.lambda;
      this._location.internalValue = value.location;
      this._openSearch.internalValue = value.openSearch;
      this._republish.internalValue = value.republish;
      this._s3.internalValue = value.s3;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
      this._stepFunctions.internalValue = value.stepFunctions;
      this._timestream.internalValue = value.timestream;
    }
  }

  // cloudwatch_alarm - computed: true, optional: true, required: false
  private _cloudwatchAlarm = new IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarmOutputReference(this, "cloudwatch_alarm");
  public get cloudwatchAlarm() {
    return this._cloudwatchAlarm;
  }
  public putCloudwatchAlarm(value: IotTopicRuleTopicRulePayloadErrorActionCloudwatchAlarm) {
    this._cloudwatchAlarm.internalValue = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm.internalValue;
  }

  // cloudwatch_logs - computed: true, optional: true, required: false
  private _cloudwatchLogs = new IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: IotTopicRuleTopicRulePayloadErrorActionCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // cloudwatch_metric - computed: true, optional: true, required: false
  private _cloudwatchMetric = new IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetricOutputReference(this, "cloudwatch_metric");
  public get cloudwatchMetric() {
    return this._cloudwatchMetric;
  }
  public putCloudwatchMetric(value: IotTopicRuleTopicRulePayloadErrorActionCloudwatchMetric) {
    this._cloudwatchMetric.internalValue = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric.internalValue;
  }

  // dynamo_d_bv_2 - computed: true, optional: true, required: false
  private _dynamoDBv2 = new IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }
  public putDynamoDBv2(value: IotTopicRuleTopicRulePayloadErrorActionDynamoDBv2) {
    this._dynamoDBv2.internalValue = value;
  }
  public resetDynamoDBv2() {
    this._dynamoDBv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDBv2Input() {
    return this._dynamoDBv2.internalValue;
  }

  // dynamo_db - computed: true, optional: true, required: false
  private _dynamoDb = new IotTopicRuleTopicRulePayloadErrorActionDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: IotTopicRuleTopicRulePayloadErrorActionDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // elasticsearch - computed: true, optional: true, required: false
  private _elasticsearch = new IotTopicRuleTopicRulePayloadErrorActionElasticsearchOutputReference(this, "elasticsearch");
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: IotTopicRuleTopicRulePayloadErrorActionElasticsearch) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new IotTopicRuleTopicRulePayloadErrorActionFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IotTopicRuleTopicRulePayloadErrorActionFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // http - computed: true, optional: true, required: false
  private _http = new IotTopicRuleTopicRulePayloadErrorActionHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: IotTopicRuleTopicRulePayloadErrorActionHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // iot_analytics - computed: true, optional: true, required: false
  private _iotAnalytics = new IotTopicRuleTopicRulePayloadErrorActionIotAnalyticsOutputReference(this, "iot_analytics");
  public get iotAnalytics() {
    return this._iotAnalytics;
  }
  public putIotAnalytics(value: IotTopicRuleTopicRulePayloadErrorActionIotAnalytics) {
    this._iotAnalytics.internalValue = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics.internalValue;
  }

  // iot_events - computed: true, optional: true, required: false
  private _iotEvents = new IotTopicRuleTopicRulePayloadErrorActionIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IotTopicRuleTopicRulePayloadErrorActionIotEvents) {
    this._iotEvents.internalValue = value;
  }
  public resetIotEvents() {
    this._iotEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents.internalValue;
  }

  // iot_site_wise - computed: true, optional: true, required: false
  private _iotSiteWise = new IotTopicRuleTopicRulePayloadErrorActionIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }
  public putIotSiteWise(value: IotTopicRuleTopicRulePayloadErrorActionIotSiteWise) {
    this._iotSiteWise.internalValue = value;
  }
  public resetIotSiteWise() {
    this._iotSiteWise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseInput() {
    return this._iotSiteWise.internalValue;
  }

  // kafka - computed: true, optional: true, required: false
  private _kafka = new IotTopicRuleTopicRulePayloadErrorActionKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: IotTopicRuleTopicRulePayloadErrorActionKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kinesis - computed: true, optional: true, required: false
  private _kinesis = new IotTopicRuleTopicRulePayloadErrorActionKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: IotTopicRuleTopicRulePayloadErrorActionKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IotTopicRuleTopicRulePayloadErrorActionLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IotTopicRuleTopicRulePayloadErrorActionLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // location - computed: true, optional: true, required: false
  private _location = new IotTopicRuleTopicRulePayloadErrorActionLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: IotTopicRuleTopicRulePayloadErrorActionLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // open_search - computed: true, optional: true, required: false
  private _openSearch = new IotTopicRuleTopicRulePayloadErrorActionOpenSearchOutputReference(this, "open_search");
  public get openSearch() {
    return this._openSearch;
  }
  public putOpenSearch(value: IotTopicRuleTopicRulePayloadErrorActionOpenSearch) {
    this._openSearch.internalValue = value;
  }
  public resetOpenSearch() {
    this._openSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSearchInput() {
    return this._openSearch.internalValue;
  }

  // republish - computed: true, optional: true, required: false
  private _republish = new IotTopicRuleTopicRulePayloadErrorActionRepublishOutputReference(this, "republish");
  public get republish() {
    return this._republish;
  }
  public putRepublish(value: IotTopicRuleTopicRulePayloadErrorActionRepublish) {
    this._republish.internalValue = value;
  }
  public resetRepublish() {
    this._republish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new IotTopicRuleTopicRulePayloadErrorActionS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: IotTopicRuleTopicRulePayloadErrorActionS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IotTopicRuleTopicRulePayloadErrorActionSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IotTopicRuleTopicRulePayloadErrorActionSns) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }

  // sqs - computed: true, optional: true, required: false
  private _sqs = new IotTopicRuleTopicRulePayloadErrorActionSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IotTopicRuleTopicRulePayloadErrorActionSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }

  // step_functions - computed: true, optional: true, required: false
  private _stepFunctions = new IotTopicRuleTopicRulePayloadErrorActionStepFunctionsOutputReference(this, "step_functions");
  public get stepFunctions() {
    return this._stepFunctions;
  }
  public putStepFunctions(value: IotTopicRuleTopicRulePayloadErrorActionStepFunctions) {
    this._stepFunctions.internalValue = value;
  }
  public resetStepFunctions() {
    this._stepFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions.internalValue;
  }

  // timestream - computed: true, optional: true, required: false
  private _timestream = new IotTopicRuleTopicRulePayloadErrorActionTimestreamOutputReference(this, "timestream");
  public get timestream() {
    return this._timestream;
  }
  public putTimestream(value: IotTopicRuleTopicRulePayloadErrorActionTimestream) {
    this._timestream.internalValue = value;
  }
  public resetTimestream() {
    this._timestream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestreamInput() {
    return this._timestream.internalValue;
  }
}
export interface IotTopicRuleTopicRulePayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#actions IotTopicRule#actions}
  */
  readonly actions: IotTopicRuleTopicRulePayloadActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#aws_iot_sql_version IotTopicRule#aws_iot_sql_version}
  */
  readonly awsIotSqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#description IotTopicRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#error_action IotTopicRule#error_action}
  */
  readonly errorAction?: IotTopicRuleTopicRulePayloadErrorAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#rule_disabled IotTopicRule#rule_disabled}
  */
  readonly ruleDisabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#sql IotTopicRule#sql}
  */
  readonly sql: string;
}

export function iotTopicRuleTopicRulePayloadToTerraform(struct?: IotTopicRuleTopicRulePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(iotTopicRuleTopicRulePayloadActionsToTerraform, false)(struct!.actions),
    aws_iot_sql_version: cdktn.stringToTerraform(struct!.awsIotSqlVersion),
    description: cdktn.stringToTerraform(struct!.description),
    error_action: iotTopicRuleTopicRulePayloadErrorActionToTerraform(struct!.errorAction),
    rule_disabled: cdktn.booleanToTerraform(struct!.ruleDisabled),
    sql: cdktn.stringToTerraform(struct!.sql),
  }
}


export function iotTopicRuleTopicRulePayloadToHclTerraform(struct?: IotTopicRuleTopicRulePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(iotTopicRuleTopicRulePayloadActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "IotTopicRuleTopicRulePayloadActionsList",
    },
    aws_iot_sql_version: {
      value: cdktn.stringToHclTerraform(struct!.awsIotSqlVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_action: {
      value: iotTopicRuleTopicRulePayloadErrorActionToHclTerraform(struct!.errorAction),
      isBlock: true,
      type: "struct",
      storageClassType: "IotTopicRuleTopicRulePayloadErrorAction",
    },
    rule_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.ruleDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotTopicRuleTopicRulePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotTopicRuleTopicRulePayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._awsIotSqlVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIotSqlVersion = this._awsIotSqlVersion;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._errorAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAction = this._errorAction?.internalValue;
    }
    if (this._ruleDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDisabled = this._ruleDisabled;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotTopicRuleTopicRulePayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._awsIotSqlVersion = undefined;
      this._description = undefined;
      this._errorAction.internalValue = undefined;
      this._ruleDisabled = undefined;
      this._sql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._awsIotSqlVersion = value.awsIotSqlVersion;
      this._description = value.description;
      this._errorAction.internalValue = value.errorAction;
      this._ruleDisabled = value.ruleDisabled;
      this._sql = value.sql;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new IotTopicRuleTopicRulePayloadActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IotTopicRuleTopicRulePayloadActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // aws_iot_sql_version - computed: true, optional: true, required: false
  private _awsIotSqlVersion?: string; 
  public get awsIotSqlVersion() {
    return this.getStringAttribute('aws_iot_sql_version');
  }
  public set awsIotSqlVersion(value: string) {
    this._awsIotSqlVersion = value;
  }
  public resetAwsIotSqlVersion() {
    this._awsIotSqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIotSqlVersionInput() {
    return this._awsIotSqlVersion;
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

  // error_action - computed: true, optional: true, required: false
  private _errorAction = new IotTopicRuleTopicRulePayloadErrorActionOutputReference(this, "error_action");
  public get errorAction() {
    return this._errorAction;
  }
  public putErrorAction(value: IotTopicRuleTopicRulePayloadErrorAction) {
    this._errorAction.internalValue = value;
  }
  public resetErrorAction() {
    this._errorAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction.internalValue;
  }

  // rule_disabled - computed: true, optional: true, required: false
  private _ruleDisabled?: boolean | cdktn.IResolvable; 
  public get ruleDisabled() {
    return this.getBooleanAttribute('rule_disabled');
  }
  public set ruleDisabled(value: boolean | cdktn.IResolvable) {
    this._ruleDisabled = value;
  }
  public resetRuleDisabled() {
    this._ruleDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDisabledInput() {
    return this._ruleDisabled;
  }

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule awscc_iot_topic_rule}
*/
export class IotTopicRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_topic_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotTopicRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotTopicRule to import
  * @param importFromId The id of the existing IotTopicRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotTopicRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_topic_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iot_topic_rule awscc_iot_topic_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_topic_rule',
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
    this._ruleName = config.ruleName;
    this._tags.internalValue = config.tags;
    this._topicRulePayload.internalValue = config.topicRulePayload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotTopicRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotTopicRuleTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // topic_rule_payload - computed: false, optional: false, required: true
  private _topicRulePayload = new IotTopicRuleTopicRulePayloadOutputReference(this, "topic_rule_payload");
  public get topicRulePayload() {
    return this._topicRulePayload;
  }
  public putTopicRulePayload(value: IotTopicRuleTopicRulePayload) {
    this._topicRulePayload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicRulePayloadInput() {
    return this._topicRulePayload.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_name: cdktn.stringToTerraform(this._ruleName),
      tags: cdktn.listMapper(iotTopicRuleTagsToTerraform, false)(this._tags.internalValue),
      topic_rule_payload: iotTopicRuleTopicRulePayloadToTerraform(this._topicRulePayload.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotTopicRuleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotTopicRuleTagsList",
      },
      topic_rule_payload: {
        value: iotTopicRuleTopicRulePayloadToHclTerraform(this._topicRulePayload.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotTopicRuleTopicRulePayload",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
