// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotevents_alarm_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIoteventsAlarmModelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotevents_alarm_model#id DataAwsccIoteventsAlarmModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow {
}

export function dataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration {
}

export function dataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled_on_initialization - computed: true, optional: false, required: false
  public get disabledOnInitialization() {
    return this.getBooleanAttribute('disabled_on_initialization');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmCapabilities {
}

export function dataAwsccIoteventsAlarmModelAlarmCapabilitiesToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmCapabilitiesToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledge_flow - computed: true, optional: false, required: false
  private _acknowledgeFlow = new DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(this, "acknowledge_flow");
  public get acknowledgeFlow() {
    return this._acknowledgeFlow;
  }

  // initialization_configuration - computed: true, optional: false, required: false
  private _initializationConfiguration = new DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(this, "initialization_configuration");
  public get initializationConfiguration() {
    return this._initializationConfiguration;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2ToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2ToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb | undefined) {
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

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
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

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_name - computed: true, optional: false, required: false
  public get inputName() {
    return this.getStringAttribute('input_name');
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp | undefined) {
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
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue | undefined) {
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
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue | undefined) {
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
  private _timestamp = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise | undefined) {
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

  // property_value - computed: true, optional: false, required: false
  private _propertyValue = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(this, "property_value");
  public get propertyValue() {
    return this._propertyValue;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda | undefined) {
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

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_expression - computed: true, optional: false, required: false
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }

  // queue_url - computed: true, optional: false, required: false
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }

  // use_base_64 - computed: true, optional: false, required: false
  public get useBase64() {
    return this.getBooleanAttribute('use_base_64');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamo_d_bv_2 - computed: true, optional: false, required: false
  private _dynamoDBv2 = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }

  // dynamo_db - computed: true, optional: false, required: false
  private _dynamoDb = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }

  // firehose - computed: true, optional: false, required: false
  private _firehose = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }

  // iot_events - computed: true, optional: false, required: false
  private _iotEvents = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }

  // iot_site_wise - computed: true, optional: false, required: false
  private _iotSiteWise = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }

  // iot_topic_publish - computed: true, optional: false, required: false
  private _iotTopicPublish = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(this, "iot_topic_publish");
  public get iotTopicPublish() {
    return this._iotTopicPublish;
  }

  // lambda - computed: true, optional: false, required: false
  private _lambda = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }

  // sns - computed: true, optional: false, required: false
  private _sns = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }

  // sqs - computed: true, optional: false, required: false
  private _sqs = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference {
    return new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmEventActions {
}

export function dataAwsccIoteventsAlarmModelAlarmEventActionsToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmEventActionsToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmEventActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmEventActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmEventActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_actions - computed: true, optional: false, required: false
  private _alarmActions = new DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList(this, "alarm_actions", false);
  public get alarmActions() {
    return this._alarmActions;
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule {
}

export function dataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // input_property - computed: true, optional: false, required: false
  public get inputProperty() {
    return this.getStringAttribute('input_property');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}
export interface DataAwsccIoteventsAlarmModelAlarmRule {
}

export function dataAwsccIoteventsAlarmModelAlarmRuleToTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelAlarmRuleToHclTerraform(struct?: DataAwsccIoteventsAlarmModelAlarmRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelAlarmRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIoteventsAlarmModelAlarmRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelAlarmRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_rule - computed: true, optional: false, required: false
  private _simpleRule = new DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(this, "simple_rule");
  public get simpleRule() {
    return this._simpleRule;
  }
}
export interface DataAwsccIoteventsAlarmModelTags {
}

export function dataAwsccIoteventsAlarmModelTagsToTerraform(struct?: DataAwsccIoteventsAlarmModelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIoteventsAlarmModelTagsToHclTerraform(struct?: DataAwsccIoteventsAlarmModelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIoteventsAlarmModelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIoteventsAlarmModelTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIoteventsAlarmModelTags | undefined) {
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

export class DataAwsccIoteventsAlarmModelTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIoteventsAlarmModelTagsOutputReference {
    return new DataAwsccIoteventsAlarmModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotevents_alarm_model awscc_iotevents_alarm_model}
*/
export class DataAwsccIoteventsAlarmModel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotevents_alarm_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIoteventsAlarmModel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIoteventsAlarmModel to import
  * @param importFromId The id of the existing DataAwsccIoteventsAlarmModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIoteventsAlarmModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotevents_alarm_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotevents_alarm_model awscc_iotevents_alarm_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIoteventsAlarmModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIoteventsAlarmModelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotevents_alarm_model',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // alarm_capabilities - computed: true, optional: false, required: false
  private _alarmCapabilities = new DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference(this, "alarm_capabilities");
  public get alarmCapabilities() {
    return this._alarmCapabilities;
  }

  // alarm_event_actions - computed: true, optional: false, required: false
  private _alarmEventActions = new DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference(this, "alarm_event_actions");
  public get alarmEventActions() {
    return this._alarmEventActions;
  }

  // alarm_model_description - computed: true, optional: false, required: false
  public get alarmModelDescription() {
    return this.getStringAttribute('alarm_model_description');
  }

  // alarm_model_name - computed: true, optional: false, required: false
  public get alarmModelName() {
    return this.getStringAttribute('alarm_model_name');
  }

  // alarm_rule - computed: true, optional: false, required: false
  private _alarmRule = new DataAwsccIoteventsAlarmModelAlarmRuleOutputReference(this, "alarm_rule");
  public get alarmRule() {
    return this._alarmRule;
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIoteventsAlarmModelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
