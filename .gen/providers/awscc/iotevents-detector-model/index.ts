// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IoteventsDetectorModelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Information that defines how a detector operates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#detector_model_definition IoteventsDetectorModel#detector_model_definition}
  */
  readonly detectorModelDefinition: IoteventsDetectorModelDetectorModelDefinition;
  /**
  * A brief description of the detector model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#detector_model_description IoteventsDetectorModel#detector_model_description}
  */
  readonly detectorModelDescription?: string;
  /**
  * The name of the detector model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#detector_model_name IoteventsDetectorModel#detector_model_name}
  */
  readonly detectorModelName?: string;
  /**
  * Information about the order in which events are evaluated and how actions are executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#evaluation_method IoteventsDetectorModel#evaluation_method}
  */
  readonly evaluationMethod?: string;
  /**
  * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information. 
  *  This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#key IoteventsDetectorModel#key}
  */
  readonly key?: string;
  /**
  * The ARN of the role that grants permission to ITE to perform its operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#role_arn IoteventsDetectorModel#role_arn}
  */
  readonly roleArn: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#tags IoteventsDetectorModel#tags}
  */
  readonly tags?: IoteventsDetectorModelTags[] | cdktn.IResolvable;
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer {
  /**
  * The name of the timer to clear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._tableName = value.tableName;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2PayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2Payload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField?: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:
  *   +  ``'STRING'`` - The hash key is a string.
  *   +  ``'NUMBER'`` - The hash key is a number.
  *   
  *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue?: string;
  /**
  * The type of operation to perform. You can specify the following values: 
  *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   
  *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.
  *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:
  *   +  ``'STRING'`` - The range key is a string.
  *   +  ``'NUMBER'`` - The range key is number.
  *   
  *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb | cdktn.IResolvable): any {
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
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb | cdktn.IResolvable | undefined {
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
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
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
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payload.internalValue = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
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
      this._operation = value.operation;
      this._payload.internalValue = value.payload;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamName = undefined;
      this._payload.internalValue = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStreamName = value.deliveryStreamName;
      this._payload.internalValue = value.payload;
      this._separator = value.separator;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehosePayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents {
  /**
  * The name of the ITE input where the data is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName?: string;
  /**
  * You can configure the action payload when you send a message to an ITE input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_name: cdktn.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputName = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputName = value.inputName;
      this._payload.internalValue = value.payload;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * The timestamp associated with the asset property value. The default is the current event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * The value to send to an asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quality: cdktn.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
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
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp",
    },
    value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined) {
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
  private _timestamp = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueTimestamp) {
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
  private _value = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueValue) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_id: cdktn.stringToTerraform(struct!.assetId),
    entry_id: cdktn.stringToTerraform(struct!.entryId),
    property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise | cdktn.IResolvable): any {
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
    property_value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueToHclTerraform(struct!.propertyValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise | cdktn.IResolvable | undefined {
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
    if (this._propertyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValue = this._propertyValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._entryId = undefined;
      this._propertyAlias = undefined;
      this._propertyId = undefined;
      this._propertyValue.internalValue = undefined;
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
      this._propertyValue.internalValue = value.propertyValue;
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

  // property_value - computed: true, optional: true, required: false
  private _propertyValue = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValueOutputReference(this, "property_value");
  public get propertyValue() {
    return this._propertyValue;
  }
  public putPropertyValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWisePropertyValue) {
    this._propertyValue.internalValue = value;
  }
  public resetPropertyValue() {
    this._propertyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic?: string;
  /**
  * You can configure the action payload when you publish a message to an IoTCore topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mqtt_topic: {
      value: cdktn.stringToHclTerraform(struct!.mqttTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mqttTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopic = this._mqttTopic;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mqttTopic = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mqttTopic = value.mqttTopic;
      this._payload.internalValue = value.payload;
    }
  }

  // mqtt_topic - computed: true, optional: true, required: false
  private _mqttTopic?: string; 
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }
  public set mqttTopic(value: string) {
    this._mqttTopic = value;
  }
  public resetMqttTopic() {
    this._mqttTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicInput() {
    return this._mqttTopic;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn?: string;
  /**
  * You can configure the action payload when you send a message to a Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda | cdktn.IResolvable): any {
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
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
      this._payload.internalValue = value.payload;
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
    seconds: cdktn.numberToTerraform(struct!.seconds),
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_expression: {
      value: cdktn.stringToHclTerraform(struct!.durationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationExpression = this._durationExpression;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationExpression = undefined;
      this._seconds = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationExpression = value.durationExpression;
      this._seconds = value.seconds;
      this._timerName = value.timerName;
    }
  }

  // duration_expression - computed: true, optional: true, required: false
  private _durationExpression?: string; 
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }
  public set durationExpression(value: string) {
    this._durationExpression = value;
  }
  public resetDurationExpression() {
    this._durationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationExpressionInput() {
    return this._durationExpression;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable {
  /**
  * The new value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: string;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    variable_name: cdktn.stringToTerraform(struct!.variableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktn.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._variableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._variableName = value.variableName;
    }
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

  // variable_name - computed: true, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns {
  /**
  * You can configure the action payload when you send a message as an Amazon SNS push notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._targetArn = value.targetArn;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs {
  /**
  * You can configure the action payload when you send a message to an Amazon SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload",
    },
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._queueUrl = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._queueUrl = value.queueUrl;
      this._useBase64 = value.useBase64;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions {
  /**
  * Information needed to clear the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose;
  /**
  * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise;
  /**
  * Publishes an MQTT message with the given topic to the IoT message broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish;
  /**
  * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda;
  /**
  * Information needed to reset the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer;
  /**
  * Sets a variable to a specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToTerraform(struct!.sqs),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clear_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerToHclTerraform(struct!.clearTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer",
    },
    dynamo_d_bv_2: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2ToHclTerraform(struct!.dynamoDBv2),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2",
    },
    dynamo_db: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbToHclTerraform(struct!.dynamoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb",
    },
    firehose: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose",
    },
    iot_events: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents",
    },
    iot_site_wise: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseToHclTerraform(struct!.iotSiteWise),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise",
    },
    iot_topic_publish: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishToHclTerraform(struct!.iotTopicPublish),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish",
    },
    lambda: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda",
    },
    reset_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerToHclTerraform(struct!.resetTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer",
    },
    set_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerToHclTerraform(struct!.setTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer",
    },
    set_variable: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableToHclTerraform(struct!.setVariable),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable",
    },
    sns: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns",
    },
    sqs: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearTimer = this._clearTimer?.internalValue;
    }
    if (this._dynamoDBv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
    }
    if (this._dynamoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._iotSiteWise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
    }
    if (this._iotTopicPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._resetTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTimer = this._resetTimer?.internalValue;
    }
    if (this._setTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTimer = this._setTimer?.internalValue;
    }
    if (this._setVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVariable = this._setVariable?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = undefined;
      this._dynamoDBv2.internalValue = undefined;
      this._dynamoDb.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._iotSiteWise.internalValue = undefined;
      this._iotTopicPublish.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._resetTimer.internalValue = undefined;
      this._setTimer.internalValue = undefined;
      this._setVariable.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = value.clearTimer;
      this._dynamoDBv2.internalValue = value.dynamoDBv2;
      this._dynamoDb.internalValue = value.dynamoDb;
      this._firehose.internalValue = value.firehose;
      this._iotEvents.internalValue = value.iotEvents;
      this._iotSiteWise.internalValue = value.iotSiteWise;
      this._iotTopicPublish.internalValue = value.iotTopicPublish;
      this._lambda.internalValue = value.lambda;
      this._resetTimer.internalValue = value.resetTimer;
      this._setTimer.internalValue = value.setTimer;
      this._setVariable.internalValue = value.setVariable;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
    }
  }

  // clear_timer - computed: true, optional: true, required: false
  private _clearTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimerOutputReference(this, "clear_timer");
  public get clearTimer() {
    return this._clearTimer;
  }
  public putClearTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsClearTimer) {
    this._clearTimer.internalValue = value;
  }
  public resetClearTimer() {
    this._clearTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTimerInput() {
    return this._clearTimer.internalValue;
  }

  // dynamo_d_bv_2 - computed: true, optional: true, required: false
  private _dynamoDBv2 = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }
  public putDynamoDBv2(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDBv2) {
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
  private _dynamoDb = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // iot_events - computed: true, optional: true, required: false
  private _iotEvents = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotEvents) {
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
  private _iotSiteWise = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }
  public putIotSiteWise(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotSiteWise) {
    this._iotSiteWise.internalValue = value;
  }
  public resetIotSiteWise() {
    this._iotSiteWise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseInput() {
    return this._iotSiteWise.internalValue;
  }

  // iot_topic_publish - computed: true, optional: true, required: false
  private _iotTopicPublish = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublishOutputReference(this, "iot_topic_publish");
  public get iotTopicPublish() {
    return this._iotTopicPublish;
  }
  public putIotTopicPublish(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsIotTopicPublish) {
    this._iotTopicPublish.internalValue = value;
  }
  public resetIotTopicPublish() {
    this._iotTopicPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotTopicPublishInput() {
    return this._iotTopicPublish.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // reset_timer - computed: true, optional: true, required: false
  private _resetTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimerOutputReference(this, "reset_timer");
  public get resetTimer() {
    return this._resetTimer;
  }
  public putResetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsResetTimer) {
    this._resetTimer.internalValue = value;
  }
  public resetResetTimer() {
    this._resetTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimerInput() {
    return this._resetTimer.internalValue;
  }

  // set_timer - computed: true, optional: true, required: false
  private _setTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimerOutputReference(this, "set_timer");
  public get setTimer() {
    return this._setTimer;
  }
  public putSetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetTimer) {
    this._setTimer.internalValue = value;
  }
  public resetSetTimer() {
    this._setTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTimerInput() {
    return this._setTimer.internalValue;
  }

  // set_variable - computed: true, optional: true, required: false
  private _setVariable = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariableOutputReference(this, "set_variable");
  public get setVariable() {
    return this._setVariable;
  }
  public putSetVariable(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSetVariable) {
    this._setVariable.internalValue = value;
  }
  public resetSetVariable() {
    this._setVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVariableInput() {
    return this._setVariable.internalValue;
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSns) {
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
  private _sqs = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents {
  /**
  * The actions to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions[] | cdktn.IResolvable;
  /**
  * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToTerraform, false)(struct!.actions),
    condition: cdktn.stringToTerraform(struct!.condition),
    event_name: cdktn.stringToTerraform(struct!.eventName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsList",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._condition = undefined;
      this._eventName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._condition = value.condition;
      this._eventName = value.eventName;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter {
  /**
  * Specifies the actions that are performed when the state is entered and the ``condition`` is ``TRUE``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#events IoteventsDetectorModel#events}
  */
  readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents[] | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToTerraform, false)(struct!.events),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsToHclTerraform, false)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events.internalValue = value.events;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterEvents[] | cdktn.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer {
  /**
  * The name of the timer to clear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._tableName = value.tableName;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2PayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2Payload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField?: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:
  *   +  ``'STRING'`` - The hash key is a string.
  *   +  ``'NUMBER'`` - The hash key is a number.
  *   
  *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue?: string;
  /**
  * The type of operation to perform. You can specify the following values: 
  *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   
  *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.
  *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:
  *   +  ``'STRING'`` - The range key is a string.
  *   +  ``'NUMBER'`` - The range key is number.
  *   
  *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb | cdktn.IResolvable): any {
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
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb | cdktn.IResolvable | undefined {
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
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
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
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payload.internalValue = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
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
      this._operation = value.operation;
      this._payload.internalValue = value.payload;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamName = undefined;
      this._payload.internalValue = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStreamName = value.deliveryStreamName;
      this._payload.internalValue = value.payload;
      this._separator = value.separator;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehosePayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents {
  /**
  * The name of the ITE input where the data is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName?: string;
  /**
  * You can configure the action payload when you send a message to an ITE input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_name: cdktn.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputName = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputName = value.inputName;
      this._payload.internalValue = value.payload;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * The timestamp associated with the asset property value. The default is the current event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * The value to send to an asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quality: cdktn.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
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
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp",
    },
    value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined) {
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
  private _timestamp = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueTimestamp) {
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
  private _value = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueValue) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_id: cdktn.stringToTerraform(struct!.assetId),
    entry_id: cdktn.stringToTerraform(struct!.entryId),
    property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise | cdktn.IResolvable): any {
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
    property_value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueToHclTerraform(struct!.propertyValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise | cdktn.IResolvable | undefined {
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
    if (this._propertyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValue = this._propertyValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._entryId = undefined;
      this._propertyAlias = undefined;
      this._propertyId = undefined;
      this._propertyValue.internalValue = undefined;
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
      this._propertyValue.internalValue = value.propertyValue;
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

  // property_value - computed: true, optional: true, required: false
  private _propertyValue = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValueOutputReference(this, "property_value");
  public get propertyValue() {
    return this._propertyValue;
  }
  public putPropertyValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWisePropertyValue) {
    this._propertyValue.internalValue = value;
  }
  public resetPropertyValue() {
    this._propertyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic?: string;
  /**
  * You can configure the action payload when you publish a message to an IoTCore topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mqtt_topic: {
      value: cdktn.stringToHclTerraform(struct!.mqttTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mqttTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopic = this._mqttTopic;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mqttTopic = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mqttTopic = value.mqttTopic;
      this._payload.internalValue = value.payload;
    }
  }

  // mqtt_topic - computed: true, optional: true, required: false
  private _mqttTopic?: string; 
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }
  public set mqttTopic(value: string) {
    this._mqttTopic = value;
  }
  public resetMqttTopic() {
    this._mqttTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicInput() {
    return this._mqttTopic;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn?: string;
  /**
  * You can configure the action payload when you send a message to a Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda | cdktn.IResolvable): any {
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
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
      this._payload.internalValue = value.payload;
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
    seconds: cdktn.numberToTerraform(struct!.seconds),
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_expression: {
      value: cdktn.stringToHclTerraform(struct!.durationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationExpression = this._durationExpression;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationExpression = undefined;
      this._seconds = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationExpression = value.durationExpression;
      this._seconds = value.seconds;
      this._timerName = value.timerName;
    }
  }

  // duration_expression - computed: true, optional: true, required: false
  private _durationExpression?: string; 
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }
  public set durationExpression(value: string) {
    this._durationExpression = value;
  }
  public resetDurationExpression() {
    this._durationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationExpressionInput() {
    return this._durationExpression;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable {
  /**
  * The new value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: string;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    variable_name: cdktn.stringToTerraform(struct!.variableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktn.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._variableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._variableName = value.variableName;
    }
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

  // variable_name - computed: true, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns {
  /**
  * You can configure the action payload when you send a message as an Amazon SNS push notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._targetArn = value.targetArn;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs {
  /**
  * You can configure the action payload when you send a message to an Amazon SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload",
    },
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._queueUrl = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._queueUrl = value.queueUrl;
      this._useBase64 = value.useBase64;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions {
  /**
  * Information needed to clear the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose;
  /**
  * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise;
  /**
  * Publishes an MQTT message with the given topic to the IoT message broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish;
  /**
  * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda;
  /**
  * Information needed to reset the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer;
  /**
  * Sets a variable to a specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToTerraform(struct!.sqs),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clear_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerToHclTerraform(struct!.clearTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer",
    },
    dynamo_d_bv_2: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2ToHclTerraform(struct!.dynamoDBv2),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2",
    },
    dynamo_db: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbToHclTerraform(struct!.dynamoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb",
    },
    firehose: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose",
    },
    iot_events: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents",
    },
    iot_site_wise: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseToHclTerraform(struct!.iotSiteWise),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise",
    },
    iot_topic_publish: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishToHclTerraform(struct!.iotTopicPublish),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish",
    },
    lambda: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda",
    },
    reset_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerToHclTerraform(struct!.resetTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer",
    },
    set_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerToHclTerraform(struct!.setTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer",
    },
    set_variable: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableToHclTerraform(struct!.setVariable),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable",
    },
    sns: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns",
    },
    sqs: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearTimer = this._clearTimer?.internalValue;
    }
    if (this._dynamoDBv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
    }
    if (this._dynamoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._iotSiteWise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
    }
    if (this._iotTopicPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._resetTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTimer = this._resetTimer?.internalValue;
    }
    if (this._setTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTimer = this._setTimer?.internalValue;
    }
    if (this._setVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVariable = this._setVariable?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = undefined;
      this._dynamoDBv2.internalValue = undefined;
      this._dynamoDb.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._iotSiteWise.internalValue = undefined;
      this._iotTopicPublish.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._resetTimer.internalValue = undefined;
      this._setTimer.internalValue = undefined;
      this._setVariable.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = value.clearTimer;
      this._dynamoDBv2.internalValue = value.dynamoDBv2;
      this._dynamoDb.internalValue = value.dynamoDb;
      this._firehose.internalValue = value.firehose;
      this._iotEvents.internalValue = value.iotEvents;
      this._iotSiteWise.internalValue = value.iotSiteWise;
      this._iotTopicPublish.internalValue = value.iotTopicPublish;
      this._lambda.internalValue = value.lambda;
      this._resetTimer.internalValue = value.resetTimer;
      this._setTimer.internalValue = value.setTimer;
      this._setVariable.internalValue = value.setVariable;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
    }
  }

  // clear_timer - computed: true, optional: true, required: false
  private _clearTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimerOutputReference(this, "clear_timer");
  public get clearTimer() {
    return this._clearTimer;
  }
  public putClearTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsClearTimer) {
    this._clearTimer.internalValue = value;
  }
  public resetClearTimer() {
    this._clearTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTimerInput() {
    return this._clearTimer.internalValue;
  }

  // dynamo_d_bv_2 - computed: true, optional: true, required: false
  private _dynamoDBv2 = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }
  public putDynamoDBv2(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDBv2) {
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
  private _dynamoDb = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // iot_events - computed: true, optional: true, required: false
  private _iotEvents = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotEvents) {
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
  private _iotSiteWise = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }
  public putIotSiteWise(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotSiteWise) {
    this._iotSiteWise.internalValue = value;
  }
  public resetIotSiteWise() {
    this._iotSiteWise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseInput() {
    return this._iotSiteWise.internalValue;
  }

  // iot_topic_publish - computed: true, optional: true, required: false
  private _iotTopicPublish = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublishOutputReference(this, "iot_topic_publish");
  public get iotTopicPublish() {
    return this._iotTopicPublish;
  }
  public putIotTopicPublish(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsIotTopicPublish) {
    this._iotTopicPublish.internalValue = value;
  }
  public resetIotTopicPublish() {
    this._iotTopicPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotTopicPublishInput() {
    return this._iotTopicPublish.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // reset_timer - computed: true, optional: true, required: false
  private _resetTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimerOutputReference(this, "reset_timer");
  public get resetTimer() {
    return this._resetTimer;
  }
  public putResetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsResetTimer) {
    this._resetTimer.internalValue = value;
  }
  public resetResetTimer() {
    this._resetTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimerInput() {
    return this._resetTimer.internalValue;
  }

  // set_timer - computed: true, optional: true, required: false
  private _setTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimerOutputReference(this, "set_timer");
  public get setTimer() {
    return this._setTimer;
  }
  public putSetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetTimer) {
    this._setTimer.internalValue = value;
  }
  public resetSetTimer() {
    this._setTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTimerInput() {
    return this._setTimer.internalValue;
  }

  // set_variable - computed: true, optional: true, required: false
  private _setVariable = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariableOutputReference(this, "set_variable");
  public get setVariable() {
    return this._setVariable;
  }
  public putSetVariable(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSetVariable) {
    this._setVariable.internalValue = value;
  }
  public resetSetVariable() {
    this._setVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVariableInput() {
    return this._setVariable.internalValue;
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSns) {
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
  private _sqs = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents {
  /**
  * The actions to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions[] | cdktn.IResolvable;
  /**
  * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToTerraform, false)(struct!.actions),
    condition: cdktn.stringToTerraform(struct!.condition),
    event_name: cdktn.stringToTerraform(struct!.eventName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsList",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._condition = undefined;
      this._eventName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._condition = value.condition;
      this._eventName = value.eventName;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnExit {
  /**
  * Specifies the ``actions`` that are performed when the state is exited and the ``condition`` is ``TRUE``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#events IoteventsDetectorModel#events}
  */
  readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents[] | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToTerraform, false)(struct!.events),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsToHclTerraform, false)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnExitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnExit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events.internalValue = value.events;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExitEvents[] | cdktn.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer {
  /**
  * The name of the timer to clear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._tableName = value.tableName;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2PayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2Payload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField?: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:
  *   +  ``'STRING'`` - The hash key is a string.
  *   +  ``'NUMBER'`` - The hash key is a number.
  *   
  *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue?: string;
  /**
  * The type of operation to perform. You can specify the following values: 
  *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   
  *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.
  *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:
  *   +  ``'STRING'`` - The range key is a string.
  *   +  ``'NUMBER'`` - The range key is number.
  *   
  *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb | cdktn.IResolvable): any {
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
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb | cdktn.IResolvable | undefined {
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
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
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
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payload.internalValue = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
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
      this._operation = value.operation;
      this._payload.internalValue = value.payload;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamName = undefined;
      this._payload.internalValue = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStreamName = value.deliveryStreamName;
      this._payload.internalValue = value.payload;
      this._separator = value.separator;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehosePayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents {
  /**
  * The name of the ITE input where the data is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName?: string;
  /**
  * You can configure the action payload when you send a message to an ITE input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_name: cdktn.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputName = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputName = value.inputName;
      this._payload.internalValue = value.payload;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * The timestamp associated with the asset property value. The default is the current event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * The value to send to an asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quality: cdktn.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
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
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp",
    },
    value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined) {
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
  private _timestamp = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueTimestamp) {
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
  private _value = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueValue) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_id: cdktn.stringToTerraform(struct!.assetId),
    entry_id: cdktn.stringToTerraform(struct!.entryId),
    property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise | cdktn.IResolvable): any {
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
    property_value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueToHclTerraform(struct!.propertyValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise | cdktn.IResolvable | undefined {
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
    if (this._propertyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValue = this._propertyValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._entryId = undefined;
      this._propertyAlias = undefined;
      this._propertyId = undefined;
      this._propertyValue.internalValue = undefined;
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
      this._propertyValue.internalValue = value.propertyValue;
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

  // property_value - computed: true, optional: true, required: false
  private _propertyValue = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValueOutputReference(this, "property_value");
  public get propertyValue() {
    return this._propertyValue;
  }
  public putPropertyValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWisePropertyValue) {
    this._propertyValue.internalValue = value;
  }
  public resetPropertyValue() {
    this._propertyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic?: string;
  /**
  * You can configure the action payload when you publish a message to an IoTCore topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mqtt_topic: {
      value: cdktn.stringToHclTerraform(struct!.mqttTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mqttTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopic = this._mqttTopic;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mqttTopic = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mqttTopic = value.mqttTopic;
      this._payload.internalValue = value.payload;
    }
  }

  // mqtt_topic - computed: true, optional: true, required: false
  private _mqttTopic?: string; 
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }
  public set mqttTopic(value: string) {
    this._mqttTopic = value;
  }
  public resetMqttTopic() {
    this._mqttTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicInput() {
    return this._mqttTopic;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn?: string;
  /**
  * You can configure the action payload when you send a message to a Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda | cdktn.IResolvable): any {
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
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
      this._payload.internalValue = value.payload;
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
    seconds: cdktn.numberToTerraform(struct!.seconds),
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_expression: {
      value: cdktn.stringToHclTerraform(struct!.durationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationExpression = this._durationExpression;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationExpression = undefined;
      this._seconds = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationExpression = value.durationExpression;
      this._seconds = value.seconds;
      this._timerName = value.timerName;
    }
  }

  // duration_expression - computed: true, optional: true, required: false
  private _durationExpression?: string; 
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }
  public set durationExpression(value: string) {
    this._durationExpression = value;
  }
  public resetDurationExpression() {
    this._durationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationExpressionInput() {
    return this._durationExpression;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable {
  /**
  * The new value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: string;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    variable_name: cdktn.stringToTerraform(struct!.variableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktn.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._variableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._variableName = value.variableName;
    }
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

  // variable_name - computed: true, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns {
  /**
  * You can configure the action payload when you send a message as an Amazon SNS push notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._targetArn = value.targetArn;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs {
  /**
  * You can configure the action payload when you send a message to an Amazon SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload",
    },
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._queueUrl = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._queueUrl = value.queueUrl;
      this._useBase64 = value.useBase64;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions {
  /**
  * Information needed to clear the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose;
  /**
  * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise;
  /**
  * Publishes an MQTT message with the given topic to the IoT message broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish;
  /**
  * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda;
  /**
  * Information needed to reset the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer;
  /**
  * Sets a variable to a specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToTerraform(struct!.sqs),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clear_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerToHclTerraform(struct!.clearTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer",
    },
    dynamo_d_bv_2: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2ToHclTerraform(struct!.dynamoDBv2),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2",
    },
    dynamo_db: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbToHclTerraform(struct!.dynamoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb",
    },
    firehose: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose",
    },
    iot_events: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents",
    },
    iot_site_wise: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseToHclTerraform(struct!.iotSiteWise),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise",
    },
    iot_topic_publish: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishToHclTerraform(struct!.iotTopicPublish),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish",
    },
    lambda: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda",
    },
    reset_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerToHclTerraform(struct!.resetTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer",
    },
    set_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerToHclTerraform(struct!.setTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer",
    },
    set_variable: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableToHclTerraform(struct!.setVariable),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable",
    },
    sns: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns",
    },
    sqs: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearTimer = this._clearTimer?.internalValue;
    }
    if (this._dynamoDBv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
    }
    if (this._dynamoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._iotSiteWise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
    }
    if (this._iotTopicPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._resetTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTimer = this._resetTimer?.internalValue;
    }
    if (this._setTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTimer = this._setTimer?.internalValue;
    }
    if (this._setVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVariable = this._setVariable?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = undefined;
      this._dynamoDBv2.internalValue = undefined;
      this._dynamoDb.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._iotSiteWise.internalValue = undefined;
      this._iotTopicPublish.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._resetTimer.internalValue = undefined;
      this._setTimer.internalValue = undefined;
      this._setVariable.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = value.clearTimer;
      this._dynamoDBv2.internalValue = value.dynamoDBv2;
      this._dynamoDb.internalValue = value.dynamoDb;
      this._firehose.internalValue = value.firehose;
      this._iotEvents.internalValue = value.iotEvents;
      this._iotSiteWise.internalValue = value.iotSiteWise;
      this._iotTopicPublish.internalValue = value.iotTopicPublish;
      this._lambda.internalValue = value.lambda;
      this._resetTimer.internalValue = value.resetTimer;
      this._setTimer.internalValue = value.setTimer;
      this._setVariable.internalValue = value.setVariable;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
    }
  }

  // clear_timer - computed: true, optional: true, required: false
  private _clearTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimerOutputReference(this, "clear_timer");
  public get clearTimer() {
    return this._clearTimer;
  }
  public putClearTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsClearTimer) {
    this._clearTimer.internalValue = value;
  }
  public resetClearTimer() {
    this._clearTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTimerInput() {
    return this._clearTimer.internalValue;
  }

  // dynamo_d_bv_2 - computed: true, optional: true, required: false
  private _dynamoDBv2 = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }
  public putDynamoDBv2(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDBv2) {
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
  private _dynamoDb = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // iot_events - computed: true, optional: true, required: false
  private _iotEvents = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotEvents) {
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
  private _iotSiteWise = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }
  public putIotSiteWise(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotSiteWise) {
    this._iotSiteWise.internalValue = value;
  }
  public resetIotSiteWise() {
    this._iotSiteWise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseInput() {
    return this._iotSiteWise.internalValue;
  }

  // iot_topic_publish - computed: true, optional: true, required: false
  private _iotTopicPublish = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublishOutputReference(this, "iot_topic_publish");
  public get iotTopicPublish() {
    return this._iotTopicPublish;
  }
  public putIotTopicPublish(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsIotTopicPublish) {
    this._iotTopicPublish.internalValue = value;
  }
  public resetIotTopicPublish() {
    this._iotTopicPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotTopicPublishInput() {
    return this._iotTopicPublish.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // reset_timer - computed: true, optional: true, required: false
  private _resetTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimerOutputReference(this, "reset_timer");
  public get resetTimer() {
    return this._resetTimer;
  }
  public putResetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsResetTimer) {
    this._resetTimer.internalValue = value;
  }
  public resetResetTimer() {
    this._resetTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimerInput() {
    return this._resetTimer.internalValue;
  }

  // set_timer - computed: true, optional: true, required: false
  private _setTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimerOutputReference(this, "set_timer");
  public get setTimer() {
    return this._setTimer;
  }
  public putSetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetTimer) {
    this._setTimer.internalValue = value;
  }
  public resetSetTimer() {
    this._setTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTimerInput() {
    return this._setTimer.internalValue;
  }

  // set_variable - computed: true, optional: true, required: false
  private _setVariable = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariableOutputReference(this, "set_variable");
  public get setVariable() {
    return this._setVariable;
  }
  public putSetVariable(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSetVariable) {
    this._setVariable.internalValue = value;
  }
  public resetSetVariable() {
    this._setVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVariableInput() {
    return this._setVariable.internalValue;
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSns) {
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
  private _sqs = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents {
  /**
  * The actions to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions[] | cdktn.IResolvable;
  /**
  * Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToTerraform, false)(struct!.actions),
    condition: cdktn.stringToTerraform(struct!.condition),
    event_name: cdktn.stringToTerraform(struct!.eventName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsList",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._condition = undefined;
      this._eventName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._condition = value.condition;
      this._eventName = value.eventName;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer {
  /**
  * The name of the timer to clear.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 {
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload;
  /**
  * The name of the DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToTerraform(struct!.payload),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._tableName = value.tableName;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2PayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2Payload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb {
  /**
  * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_field IoteventsDetectorModel#hash_key_field}
  */
  readonly hashKeyField?: string;
  /**
  * The data type for the hash key (also called the partition key). You can specify the following values:
  *   +  ``'STRING'`` - The hash key is a string.
  *   +  ``'NUMBER'`` - The hash key is a number.
  *   
  *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_type IoteventsDetectorModel#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * The value of the hash key (also called the partition key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#hash_key_value IoteventsDetectorModel#hash_key_value}
  */
  readonly hashKeyValue?: string;
  /**
  * The type of operation to perform. You can specify the following values: 
  *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  *   
  *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#operation IoteventsDetectorModel#operation}
  */
  readonly operation?: string;
  /**
  * Information needed to configure the payload.
  *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload;
  /**
  * The name of the DynamoDB column that receives the action payload.
  *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload_field IoteventsDetectorModel#payload_field}
  */
  readonly payloadField?: string;
  /**
  * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_field IoteventsDetectorModel#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * The data type for the range key (also called the sort key), You can specify the following values:
  *   +  ``'STRING'`` - The range key is a string.
  *   +  ``'NUMBER'`` - The range key is number.
  *   
  *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_type IoteventsDetectorModel#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * The value of the range key (also called the sort key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#range_key_value IoteventsDetectorModel#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#table_name IoteventsDetectorModel#table_name}
  */
  readonly tableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
    operation: cdktn.stringToTerraform(struct!.operation),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToTerraform(struct!.payload),
    payload_field: cdktn.stringToTerraform(struct!.payloadField),
    range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
    table_name: cdktn.stringToTerraform(struct!.tableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb | cdktn.IResolvable): any {
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
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb | cdktn.IResolvable | undefined {
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
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
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
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKeyField = undefined;
      this._hashKeyType = undefined;
      this._hashKeyValue = undefined;
      this._operation = undefined;
      this._payload.internalValue = undefined;
      this._payloadField = undefined;
      this._rangeKeyField = undefined;
      this._rangeKeyType = undefined;
      this._rangeKeyValue = undefined;
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
      this._operation = value.operation;
      this._payload.internalValue = value.payload;
      this._payloadField = value.payloadField;
      this._rangeKeyField = value.rangeKeyField;
      this._rangeKeyType = value.rangeKeyType;
      this._rangeKeyValue = value.rangeKeyValue;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose {
  /**
  * The name of the Kinesis Data Firehose delivery stream where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#delivery_stream_name IoteventsDetectorModel#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload;
  /**
  * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#separator IoteventsDetectorModel#separator}
  */
  readonly separator?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToTerraform(struct!.payload),
    separator: cdktn.stringToTerraform(struct!.separator),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delivery_stream_name: {
      value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamName = this._deliveryStreamName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStreamName = undefined;
      this._payload.internalValue = undefined;
      this._separator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStreamName = value.deliveryStreamName;
      this._payload.internalValue = value.payload;
      this._separator = value.separator;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehosePayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents {
  /**
  * The name of the ITE input where the data is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#input_name IoteventsDetectorModel#input_name}
  */
  readonly inputName?: string;
  /**
  * You can configure the action payload when you send a message to an ITE input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_name: cdktn.stringToTerraform(struct!.inputName),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_name: {
      value: cdktn.stringToHclTerraform(struct!.inputName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputName = this._inputName;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputName = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputName = value.inputName;
      this._payload.internalValue = value.payload;
    }
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp {
  /**
  * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#offset_in_nanos IoteventsDetectorModel#offset_in_nanos}
  */
  readonly offsetInNanos?: string;
  /**
  * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#time_in_seconds IoteventsDetectorModel#time_in_seconds}
  */
  readonly timeInSeconds?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
    time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue {
  /**
  * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#boolean_value IoteventsDetectorModel#boolean_value}
  */
  readonly booleanValue?: string;
  /**
  * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#double_value IoteventsDetectorModel#double_value}
  */
  readonly doubleValue?: string;
  /**
  * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#integer_value IoteventsDetectorModel#integer_value}
  */
  readonly integerValue?: string;
  /**
  * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#string_value IoteventsDetectorModel#string_value}
  */
  readonly stringValue?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue | cdktn.IResolvable | undefined) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue {
  /**
  * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#quality IoteventsDetectorModel#quality}
  */
  readonly quality?: string;
  /**
  * The timestamp associated with the asset property value. The default is the current event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timestamp IoteventsDetectorModel#timestamp}
  */
  readonly timestamp?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp;
  /**
  * The value to send to an asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quality: cdktn.stringToTerraform(struct!.quality),
    timestamp: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToTerraform(struct!.timestamp),
    value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToTerraform(struct!.value),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable): any {
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
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp",
    },
    value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue | cdktn.IResolvable | undefined) {
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
  private _timestamp = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueTimestamp) {
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
  private _value = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueValue) {
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise {
  /**
  * The ID of the asset that has the specified property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#asset_id IoteventsDetectorModel#asset_id}
  */
  readonly assetId?: string;
  /**
  * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#entry_id IoteventsDetectorModel#entry_id}
  */
  readonly entryId?: string;
  /**
  * The alias of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_alias IoteventsDetectorModel#property_alias}
  */
  readonly propertyAlias?: string;
  /**
  * The ID of the asset property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_id IoteventsDetectorModel#property_id}
  */
  readonly propertyId?: string;
  /**
  * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#property_value IoteventsDetectorModel#property_value}
  */
  readonly propertyValue?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asset_id: cdktn.stringToTerraform(struct!.assetId),
    entry_id: cdktn.stringToTerraform(struct!.entryId),
    property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
    property_id: cdktn.stringToTerraform(struct!.propertyId),
    property_value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToTerraform(struct!.propertyValue),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise | cdktn.IResolvable): any {
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
    property_value: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueToHclTerraform(struct!.propertyValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise | cdktn.IResolvable | undefined {
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
    if (this._propertyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValue = this._propertyValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetId = undefined;
      this._entryId = undefined;
      this._propertyAlias = undefined;
      this._propertyId = undefined;
      this._propertyValue.internalValue = undefined;
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
      this._propertyValue.internalValue = value.propertyValue;
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

  // property_value - computed: true, optional: true, required: false
  private _propertyValue = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValueOutputReference(this, "property_value");
  public get propertyValue() {
    return this._propertyValue;
  }
  public putPropertyValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWisePropertyValue) {
    this._propertyValue.internalValue = value;
  }
  public resetPropertyValue() {
    this._propertyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish {
  /**
  * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#mqtt_topic IoteventsDetectorModel#mqtt_topic}
  */
  readonly mqttTopic?: string;
  /**
  * You can configure the action payload when you publish a message to an IoTCore topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mqtt_topic: {
      value: cdktn.stringToHclTerraform(struct!.mqttTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mqttTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mqttTopic = this._mqttTopic;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mqttTopic = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mqttTopic = value.mqttTopic;
      this._payload.internalValue = value.payload;
    }
  }

  // mqtt_topic - computed: true, optional: true, required: false
  private _mqttTopic?: string; 
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }
  public set mqttTopic(value: string) {
    this._mqttTopic = value;
  }
  public resetMqttTopic() {
    this._mqttTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicInput() {
    return this._mqttTopic;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda {
  /**
  * The ARN of the Lambda function that is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#function_arn IoteventsDetectorModel#function_arn}
  */
  readonly functionArn?: string;
  /**
  * You can configure the action payload when you send a message to a Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToTerraform(struct!.payload),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda | cdktn.IResolvable): any {
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
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionArn = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionArn = value.functionArn;
      this._payload.internalValue = value.payload;
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

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer {
  /**
  * The name of the timer to reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timerName = value.timerName;
    }
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer {
  /**
  * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#duration_expression IoteventsDetectorModel#duration_expression}
  */
  readonly durationExpression?: string;
  /**
  * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#seconds IoteventsDetectorModel#seconds}
  */
  readonly seconds?: number;
  /**
  * The name of the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#timer_name IoteventsDetectorModel#timer_name}
  */
  readonly timerName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_expression: cdktn.stringToTerraform(struct!.durationExpression),
    seconds: cdktn.numberToTerraform(struct!.seconds),
    timer_name: cdktn.stringToTerraform(struct!.timerName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_expression: {
      value: cdktn.stringToHclTerraform(struct!.durationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_name: {
      value: cdktn.stringToHclTerraform(struct!.timerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationExpression = this._durationExpression;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._timerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerName = this._timerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationExpression = undefined;
      this._seconds = undefined;
      this._timerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationExpression = value.durationExpression;
      this._seconds = value.seconds;
      this._timerName = value.timerName;
    }
  }

  // duration_expression - computed: true, optional: true, required: false
  private _durationExpression?: string; 
  public get durationExpression() {
    return this.getStringAttribute('duration_expression');
  }
  public set durationExpression(value: string) {
    this._durationExpression = value;
  }
  public resetDurationExpression() {
    this._durationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationExpressionInput() {
    return this._durationExpression;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }

  // timer_name - computed: true, optional: true, required: false
  private _timerName?: string; 
  public get timerName() {
    return this.getStringAttribute('timer_name');
  }
  public set timerName(value: string) {
    this._timerName = value;
  }
  public resetTimerName() {
    this._timerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerNameInput() {
    return this._timerName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable {
  /**
  * The new value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: string;
  /**
  * The name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#variable_name IoteventsDetectorModel#variable_name}
  */
  readonly variableName?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    variable_name: cdktn.stringToTerraform(struct!.variableName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktn.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._variableName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._variableName = value.variableName;
    }
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

  // variable_name - computed: true, optional: true, required: false
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  public resetVariableName() {
    this._variableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns {
  /**
  * You can configure the action payload when you send a message as an Amazon SNS push notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload;
  /**
  * The ARN of the Amazon SNS target where the message is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#target_arn IoteventsDetectorModel#target_arn}
  */
  readonly targetArn?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToTerraform(struct!.payload),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload",
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._targetArn = value.targetArn;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload {
  /**
  * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#content_expression IoteventsDetectorModel#content_expression}
  */
  readonly contentExpression?: string;
  /**
  * The value of the payload type can be either ``STRING`` or ``JSON``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#type IoteventsDetectorModel#type}
  */
  readonly type?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_expression: cdktn.stringToTerraform(struct!.contentExpression),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_expression: {
      value: cdktn.stringToHclTerraform(struct!.contentExpression),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentExpression = this._contentExpression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentExpression = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentExpression = value.contentExpression;
      this._type = value.type;
    }
  }

  // content_expression - computed: true, optional: true, required: false
  private _contentExpression?: string; 
  public get contentExpression() {
    return this.getStringAttribute('content_expression');
  }
  public set contentExpression(value: string) {
    this._contentExpression = value;
  }
  public resetContentExpression() {
    this._contentExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentExpressionInput() {
    return this._contentExpression;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs {
  /**
  * You can configure the action payload when you send a message to an Amazon SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#payload IoteventsDetectorModel#payload}
  */
  readonly payload?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload;
  /**
  * The URL of the SQS queue where the data is written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#queue_url IoteventsDetectorModel#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#use_base_64 IoteventsDetectorModel#use_base_64}
  */
  readonly useBase64?: boolean | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToTerraform(struct!.payload),
    queue_url: cdktn.stringToTerraform(struct!.queueUrl),
    use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload",
    },
    queue_url: {
      value: cdktn.stringToHclTerraform(struct!.queueUrl),
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

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._useBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBase64 = this._useBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
      this._queueUrl = undefined;
      this._useBase64 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
      this._queueUrl = value.queueUrl;
      this._useBase64 = value.useBase64;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
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
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions {
  /**
  * Information needed to clear the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#clear_timer IoteventsDetectorModel#clear_timer}
  */
  readonly clearTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_d_bv_2 IoteventsDetectorModel#dynamo_d_bv_2}
  */
  readonly dynamoDBv2?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2;
  /**
  * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#dynamo_db IoteventsDetectorModel#dynamo_db}
  */
  readonly dynamoDb?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#firehose IoteventsDetectorModel#firehose}
  */
  readonly firehose?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose;
  /**
  * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_events IoteventsDetectorModel#iot_events}
  */
  readonly iotEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents;
  /**
  * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_site_wise IoteventsDetectorModel#iot_site_wise}
  */
  readonly iotSiteWise?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise;
  /**
  * Publishes an MQTT message with the given topic to the IoT message broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#iot_topic_publish IoteventsDetectorModel#iot_topic_publish}
  */
  readonly iotTopicPublish?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish;
  /**
  * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#lambda IoteventsDetectorModel#lambda}
  */
  readonly lambda?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda;
  /**
  * Information needed to reset the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#reset_timer IoteventsDetectorModel#reset_timer}
  */
  readonly resetTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer;
  /**
  * Information needed to set the timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_timer IoteventsDetectorModel#set_timer}
  */
  readonly setTimer?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer;
  /**
  * Sets a variable to a specified value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#set_variable IoteventsDetectorModel#set_variable}
  */
  readonly setVariable?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sns IoteventsDetectorModel#sns}
  */
  readonly sns?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns;
  /**
  * Sends an Amazon SNS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#sqs IoteventsDetectorModel#sqs}
  */
  readonly sqs?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clear_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToTerraform(struct!.clearTimer),
    dynamo_d_bv_2: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToTerraform(struct!.dynamoDBv2),
    dynamo_db: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToTerraform(struct!.dynamoDb),
    firehose: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToTerraform(struct!.firehose),
    iot_events: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToTerraform(struct!.iotEvents),
    iot_site_wise: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToTerraform(struct!.iotSiteWise),
    iot_topic_publish: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToTerraform(struct!.iotTopicPublish),
    lambda: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToTerraform(struct!.lambda),
    reset_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToTerraform(struct!.resetTimer),
    set_timer: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToTerraform(struct!.setTimer),
    set_variable: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToTerraform(struct!.setVariable),
    sns: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToTerraform(struct!.sns),
    sqs: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToTerraform(struct!.sqs),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clear_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerToHclTerraform(struct!.clearTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer",
    },
    dynamo_d_bv_2: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2ToHclTerraform(struct!.dynamoDBv2),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2",
    },
    dynamo_db: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbToHclTerraform(struct!.dynamoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb",
    },
    firehose: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose",
    },
    iot_events: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsToHclTerraform(struct!.iotEvents),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents",
    },
    iot_site_wise: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseToHclTerraform(struct!.iotSiteWise),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise",
    },
    iot_topic_publish: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishToHclTerraform(struct!.iotTopicPublish),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish",
    },
    lambda: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaToHclTerraform(struct!.lambda),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda",
    },
    reset_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerToHclTerraform(struct!.resetTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer",
    },
    set_timer: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerToHclTerraform(struct!.setTimer),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer",
    },
    set_variable: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableToHclTerraform(struct!.setVariable),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable",
    },
    sns: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns",
    },
    sqs: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsToHclTerraform(struct!.sqs),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearTimer = this._clearTimer?.internalValue;
    }
    if (this._dynamoDBv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
    }
    if (this._dynamoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._iotEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotEvents = this._iotEvents?.internalValue;
    }
    if (this._iotSiteWise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
    }
    if (this._iotTopicPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._resetTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTimer = this._resetTimer?.internalValue;
    }
    if (this._setTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTimer = this._setTimer?.internalValue;
    }
    if (this._setVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVariable = this._setVariable?.internalValue;
    }
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    if (this._sqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqs = this._sqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = undefined;
      this._dynamoDBv2.internalValue = undefined;
      this._dynamoDb.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._iotEvents.internalValue = undefined;
      this._iotSiteWise.internalValue = undefined;
      this._iotTopicPublish.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._resetTimer.internalValue = undefined;
      this._setTimer.internalValue = undefined;
      this._setVariable.internalValue = undefined;
      this._sns.internalValue = undefined;
      this._sqs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearTimer.internalValue = value.clearTimer;
      this._dynamoDBv2.internalValue = value.dynamoDBv2;
      this._dynamoDb.internalValue = value.dynamoDb;
      this._firehose.internalValue = value.firehose;
      this._iotEvents.internalValue = value.iotEvents;
      this._iotSiteWise.internalValue = value.iotSiteWise;
      this._iotTopicPublish.internalValue = value.iotTopicPublish;
      this._lambda.internalValue = value.lambda;
      this._resetTimer.internalValue = value.resetTimer;
      this._setTimer.internalValue = value.setTimer;
      this._setVariable.internalValue = value.setVariable;
      this._sns.internalValue = value.sns;
      this._sqs.internalValue = value.sqs;
    }
  }

  // clear_timer - computed: true, optional: true, required: false
  private _clearTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimerOutputReference(this, "clear_timer");
  public get clearTimer() {
    return this._clearTimer;
  }
  public putClearTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsClearTimer) {
    this._clearTimer.internalValue = value;
  }
  public resetClearTimer() {
    this._clearTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearTimerInput() {
    return this._clearTimer.internalValue;
  }

  // dynamo_d_bv_2 - computed: true, optional: true, required: false
  private _dynamoDBv2 = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2OutputReference(this, "dynamo_d_bv_2");
  public get dynamoDBv2() {
    return this._dynamoDBv2;
  }
  public putDynamoDBv2(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDBv2) {
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
  private _dynamoDb = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDbOutputReference(this, "dynamo_db");
  public get dynamoDb() {
    return this._dynamoDb;
  }
  public putDynamoDb(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsDynamoDb) {
    this._dynamoDb.internalValue = value;
  }
  public resetDynamoDb() {
    this._dynamoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamoDbInput() {
    return this._dynamoDb.internalValue;
  }

  // firehose - computed: true, optional: true, required: false
  private _firehose = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // iot_events - computed: true, optional: true, required: false
  private _iotEvents = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEventsOutputReference(this, "iot_events");
  public get iotEvents() {
    return this._iotEvents;
  }
  public putIotEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotEvents) {
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
  private _iotSiteWise = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWiseOutputReference(this, "iot_site_wise");
  public get iotSiteWise() {
    return this._iotSiteWise;
  }
  public putIotSiteWise(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotSiteWise) {
    this._iotSiteWise.internalValue = value;
  }
  public resetIotSiteWise() {
    this._iotSiteWise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotSiteWiseInput() {
    return this._iotSiteWise.internalValue;
  }

  // iot_topic_publish - computed: true, optional: true, required: false
  private _iotTopicPublish = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublishOutputReference(this, "iot_topic_publish");
  public get iotTopicPublish() {
    return this._iotTopicPublish;
  }
  public putIotTopicPublish(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsIotTopicPublish) {
    this._iotTopicPublish.internalValue = value;
  }
  public resetIotTopicPublish() {
    this._iotTopicPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotTopicPublishInput() {
    return this._iotTopicPublish.internalValue;
  }

  // lambda - computed: true, optional: true, required: false
  private _lambda = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // reset_timer - computed: true, optional: true, required: false
  private _resetTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimerOutputReference(this, "reset_timer");
  public get resetTimer() {
    return this._resetTimer;
  }
  public putResetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsResetTimer) {
    this._resetTimer.internalValue = value;
  }
  public resetResetTimer() {
    this._resetTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimerInput() {
    return this._resetTimer.internalValue;
  }

  // set_timer - computed: true, optional: true, required: false
  private _setTimer = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimerOutputReference(this, "set_timer");
  public get setTimer() {
    return this._setTimer;
  }
  public putSetTimer(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetTimer) {
    this._setTimer.internalValue = value;
  }
  public resetSetTimer() {
    this._setTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTimerInput() {
    return this._setTimer.internalValue;
  }

  // set_variable - computed: true, optional: true, required: false
  private _setVariable = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariableOutputReference(this, "set_variable");
  public get setVariable() {
    return this._setVariable;
  }
  public putSetVariable(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSetVariable) {
    this._setVariable.internalValue = value;
  }
  public resetSetVariable() {
    this._setVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVariableInput() {
    return this._setVariable.internalValue;
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSns) {
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
  private _sqs = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqsOutputReference(this, "sqs");
  public get sqs() {
    return this._sqs;
  }
  public putSqs(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsSqs) {
    this._sqs.internalValue = value;
  }
  public resetSqs() {
    this._sqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs.internalValue;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents {
  /**
  * The actions to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#actions IoteventsDetectorModel#actions}
  */
  readonly actions?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions[] | cdktn.IResolvable;
  /**
  * Required. A Boolean expression that when TRUE causes the actions to be performed and the ``nextState`` to be entered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#condition IoteventsDetectorModel#condition}
  */
  readonly condition?: string;
  /**
  * The name of the transition event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#event_name IoteventsDetectorModel#event_name}
  */
  readonly eventName?: string;
  /**
  * The next state to enter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#next_state IoteventsDetectorModel#next_state}
  */
  readonly nextState?: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToTerraform, false)(struct!.actions),
    condition: cdktn.stringToTerraform(struct!.condition),
    event_name: cdktn.stringToTerraform(struct!.eventName),
    next_state: cdktn.stringToTerraform(struct!.nextState),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsList",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_state: {
      value: cdktn.stringToHclTerraform(struct!.nextState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._nextState !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextState = this._nextState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._condition = undefined;
      this._eventName = undefined;
      this._nextState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._condition = value.condition;
      this._eventName = value.eventName;
      this._nextState = value.nextState;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // next_state - computed: true, optional: true, required: false
  private _nextState?: string; 
  public get nextState() {
    return this.getStringAttribute('next_state');
  }
  public set nextState(value: string) {
    this._nextState = value;
  }
  public resetNextState() {
    this._nextState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStateInput() {
    return this._nextState;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStatesOnInput {
  /**
  * Specifies the actions performed when the ``condition`` evaluates to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#events IoteventsDetectorModel#events}
  */
  readonly events?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents[] | cdktn.IResolvable;
  /**
  * Specifies the actions performed, and the next state entered, when a ``condition`` evaluates to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#transition_events IoteventsDetectorModel#transition_events}
  */
  readonly transitionEvents?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents[] | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    events: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToTerraform, false)(struct!.events),
    transition_events: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToTerraform, false)(struct!.transitionEvents),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    events: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsToHclTerraform, false)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsList",
    },
    transition_events: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsToHclTerraform, false)(struct!.transitionEvents),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOnInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStatesOnInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._transitionEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionEvents = this._transitionEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events.internalValue = undefined;
      this._transitionEvents.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events.internalValue = value.events;
      this._transitionEvents.internalValue = value.transitionEvents;
    }
  }

  // events - computed: true, optional: true, required: false
  private _events = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputEvents[] | cdktn.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // transition_events - computed: true, optional: true, required: false
  private _transitionEvents = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEventsList(this, "transition_events", false);
  public get transitionEvents() {
    return this._transitionEvents;
  }
  public putTransitionEvents(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInputTransitionEvents[] | cdktn.IResolvable) {
    this._transitionEvents.internalValue = value;
  }
  public resetTransitionEvents() {
    this._transitionEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionEventsInput() {
    return this._transitionEvents.internalValue;
  }
}
export interface IoteventsDetectorModelDetectorModelDefinitionStates {
  /**
  * When entering this state, perform these ``actions`` if the ``condition`` is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#on_enter IoteventsDetectorModel#on_enter}
  */
  readonly onEnter?: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter;
  /**
  * When exiting this state, perform these ``actions`` if the specified ``condition`` is ``TRUE``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#on_exit IoteventsDetectorModel#on_exit}
  */
  readonly onExit?: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit;
  /**
  * When an input is received and the ``condition`` is TRUE, perform the specified ``actions``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#on_input IoteventsDetectorModel#on_input}
  */
  readonly onInput?: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput;
  /**
  * The name of the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#state_name IoteventsDetectorModel#state_name}
  */
  readonly stateName: string;
}

export function ioteventsDetectorModelDetectorModelDefinitionStatesToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_enter: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToTerraform(struct!.onEnter),
    on_exit: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToTerraform(struct!.onExit),
    on_input: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToTerraform(struct!.onInput),
    state_name: cdktn.stringToTerraform(struct!.stateName),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionStatesToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinitionStates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_enter: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnEnterToHclTerraform(struct!.onEnter),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter",
    },
    on_exit: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnExitToHclTerraform(struct!.onExit),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnExit",
    },
    on_input: {
      value: ioteventsDetectorModelDetectorModelDefinitionStatesOnInputToHclTerraform(struct!.onInput),
      isBlock: true,
      type: "struct",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesOnInput",
    },
    state_name: {
      value: cdktn.stringToHclTerraform(struct!.stateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinitionStates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onEnter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onEnter = this._onEnter?.internalValue;
    }
    if (this._onExit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onExit = this._onExit?.internalValue;
    }
    if (this._onInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onInput = this._onInput?.internalValue;
    }
    if (this._stateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateName = this._stateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinitionStates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onEnter.internalValue = undefined;
      this._onExit.internalValue = undefined;
      this._onInput.internalValue = undefined;
      this._stateName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onEnter.internalValue = value.onEnter;
      this._onExit.internalValue = value.onExit;
      this._onInput.internalValue = value.onInput;
      this._stateName = value.stateName;
    }
  }

  // on_enter - computed: true, optional: true, required: false
  private _onEnter = new IoteventsDetectorModelDetectorModelDefinitionStatesOnEnterOutputReference(this, "on_enter");
  public get onEnter() {
    return this._onEnter;
  }
  public putOnEnter(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnEnter) {
    this._onEnter.internalValue = value;
  }
  public resetOnEnter() {
    this._onEnter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEnterInput() {
    return this._onEnter.internalValue;
  }

  // on_exit - computed: true, optional: true, required: false
  private _onExit = new IoteventsDetectorModelDetectorModelDefinitionStatesOnExitOutputReference(this, "on_exit");
  public get onExit() {
    return this._onExit;
  }
  public putOnExit(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnExit) {
    this._onExit.internalValue = value;
  }
  public resetOnExit() {
    this._onExit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExitInput() {
    return this._onExit.internalValue;
  }

  // on_input - computed: true, optional: true, required: false
  private _onInput = new IoteventsDetectorModelDetectorModelDefinitionStatesOnInputOutputReference(this, "on_input");
  public get onInput() {
    return this._onInput;
  }
  public putOnInput(value: IoteventsDetectorModelDetectorModelDefinitionStatesOnInput) {
    this._onInput.internalValue = value;
  }
  public resetOnInput() {
    this._onInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInputInput() {
    return this._onInput.internalValue;
  }

  // state_name - computed: false, optional: false, required: true
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
  }
}

export class IoteventsDetectorModelDetectorModelDefinitionStatesList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelDetectorModelDefinitionStates[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelDetectorModelDefinitionStatesOutputReference {
    return new IoteventsDetectorModelDetectorModelDefinitionStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IoteventsDetectorModelDetectorModelDefinition {
  /**
  * The state that is entered at the creation of each detector (instance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#initial_state_name IoteventsDetectorModel#initial_state_name}
  */
  readonly initialStateName: string;
  /**
  * Information about the states of the detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#states IoteventsDetectorModel#states}
  */
  readonly states: IoteventsDetectorModelDetectorModelDefinitionStates[] | cdktn.IResolvable;
}

export function ioteventsDetectorModelDetectorModelDefinitionToTerraform(struct?: IoteventsDetectorModelDetectorModelDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    initial_state_name: cdktn.stringToTerraform(struct!.initialStateName),
    states: cdktn.listMapper(ioteventsDetectorModelDetectorModelDefinitionStatesToTerraform, false)(struct!.states),
  }
}


export function ioteventsDetectorModelDetectorModelDefinitionToHclTerraform(struct?: IoteventsDetectorModelDetectorModelDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    initial_state_name: {
      value: cdktn.stringToHclTerraform(struct!.initialStateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    states: {
      value: cdktn.listMapperHcl(ioteventsDetectorModelDetectorModelDefinitionStatesToHclTerraform, false)(struct!.states),
      isBlock: true,
      type: "list",
      storageClassType: "IoteventsDetectorModelDetectorModelDefinitionStatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IoteventsDetectorModelDetectorModelDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IoteventsDetectorModelDetectorModelDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialStateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialStateName = this._initialStateName;
    }
    if (this._states?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.states = this._states?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IoteventsDetectorModelDetectorModelDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialStateName = undefined;
      this._states.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialStateName = value.initialStateName;
      this._states.internalValue = value.states;
    }
  }

  // initial_state_name - computed: false, optional: false, required: true
  private _initialStateName?: string; 
  public get initialStateName() {
    return this.getStringAttribute('initial_state_name');
  }
  public set initialStateName(value: string) {
    this._initialStateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialStateNameInput() {
    return this._initialStateName;
  }

  // states - computed: false, optional: false, required: true
  private _states = new IoteventsDetectorModelDetectorModelDefinitionStatesList(this, "states", false);
  public get states() {
    return this._states;
  }
  public putStates(value: IoteventsDetectorModelDetectorModelDefinitionStates[] | cdktn.IResolvable) {
    this._states.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states.internalValue;
  }
}
export interface IoteventsDetectorModelTags {
  /**
  * The tag's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#key IoteventsDetectorModel#key}
  */
  readonly key?: string;
  /**
  * The tag's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#value IoteventsDetectorModel#value}
  */
  readonly value?: string;
}

export function ioteventsDetectorModelTagsToTerraform(struct?: IoteventsDetectorModelTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ioteventsDetectorModelTagsToHclTerraform(struct?: IoteventsDetectorModelTags | cdktn.IResolvable): any {
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

export class IoteventsDetectorModelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IoteventsDetectorModelTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IoteventsDetectorModelTags | cdktn.IResolvable | undefined) {
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

export class IoteventsDetectorModelTagsList extends cdktn.ComplexList {
  public internalValue? : IoteventsDetectorModelTags[] | cdktn.IResolvable

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
  public get(index: number): IoteventsDetectorModelTagsOutputReference {
    return new IoteventsDetectorModelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model awscc_iotevents_detector_model}
*/
export class IoteventsDetectorModel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotevents_detector_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IoteventsDetectorModel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IoteventsDetectorModel to import
  * @param importFromId The id of the existing IoteventsDetectorModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IoteventsDetectorModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotevents_detector_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotevents_detector_model awscc_iotevents_detector_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IoteventsDetectorModelConfig
  */
  public constructor(scope: Construct, id: string, config: IoteventsDetectorModelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotevents_detector_model',
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
    this._detectorModelDefinition.internalValue = config.detectorModelDefinition;
    this._detectorModelDescription = config.detectorModelDescription;
    this._detectorModelName = config.detectorModelName;
    this._evaluationMethod = config.evaluationMethod;
    this._key = config.key;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detector_model_definition - computed: false, optional: false, required: true
  private _detectorModelDefinition = new IoteventsDetectorModelDetectorModelDefinitionOutputReference(this, "detector_model_definition");
  public get detectorModelDefinition() {
    return this._detectorModelDefinition;
  }
  public putDetectorModelDefinition(value: IoteventsDetectorModelDetectorModelDefinition) {
    this._detectorModelDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModelDefinitionInput() {
    return this._detectorModelDefinition.internalValue;
  }

  // detector_model_description - computed: true, optional: true, required: false
  private _detectorModelDescription?: string; 
  public get detectorModelDescription() {
    return this.getStringAttribute('detector_model_description');
  }
  public set detectorModelDescription(value: string) {
    this._detectorModelDescription = value;
  }
  public resetDetectorModelDescription() {
    this._detectorModelDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModelDescriptionInput() {
    return this._detectorModelDescription;
  }

  // detector_model_name - computed: true, optional: true, required: false
  private _detectorModelName?: string; 
  public get detectorModelName() {
    return this.getStringAttribute('detector_model_name');
  }
  public set detectorModelName(value: string) {
    this._detectorModelName = value;
  }
  public resetDetectorModelName() {
    this._detectorModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModelNameInput() {
    return this._detectorModelName;
  }

  // evaluation_method - computed: true, optional: true, required: false
  private _evaluationMethod?: string; 
  public get evaluationMethod() {
    return this.getStringAttribute('evaluation_method');
  }
  public set evaluationMethod(value: string) {
    this._evaluationMethod = value;
  }
  public resetEvaluationMethod() {
    this._evaluationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMethodInput() {
    return this._evaluationMethod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IoteventsDetectorModelTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IoteventsDetectorModelTags[] | cdktn.IResolvable) {
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
      detector_model_definition: ioteventsDetectorModelDetectorModelDefinitionToTerraform(this._detectorModelDefinition.internalValue),
      detector_model_description: cdktn.stringToTerraform(this._detectorModelDescription),
      detector_model_name: cdktn.stringToTerraform(this._detectorModelName),
      evaluation_method: cdktn.stringToTerraform(this._evaluationMethod),
      key: cdktn.stringToTerraform(this._key),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(ioteventsDetectorModelTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detector_model_definition: {
        value: ioteventsDetectorModelDetectorModelDefinitionToHclTerraform(this._detectorModelDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IoteventsDetectorModelDetectorModelDefinition",
      },
      detector_model_description: {
        value: cdktn.stringToHclTerraform(this._detectorModelDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_model_name: {
        value: cdktn.stringToHclTerraform(this._detectorModelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_method: {
        value: cdktn.stringToHclTerraform(this._evaluationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktn.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ioteventsDetectorModelTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IoteventsDetectorModelTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
