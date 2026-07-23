// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectTestCaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * The content of the test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#content ConnectTestCase#content}
  */
  readonly content: string;
  /**
  * The description of the test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#description ConnectTestCase#description}
  */
  readonly description?: string;
  /**
  * Entry point for Testcase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}
  */
  readonly entryPoint?: ConnectTestCaseEntryPoint;
  /**
  * The initialization data of the test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}
  */
  readonly initializationData?: string;
  /**
  * The identifier of the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The name of the test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#name ConnectTestCase#name}
  */
  readonly name: string;
  /**
  * The status of the test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#status ConnectTestCase#status}
  */
  readonly status?: string;
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}
  */
  readonly tags?: ConnectTestCaseTags[] | cdktn.IResolvable;
}
export interface ConnectTestCaseEntryPointChatEntryPointParameters {
  /**
  * The flow id used for the TestCase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}
  */
  readonly flowId?: string;
}

export function connectTestCaseEntryPointChatEntryPointParametersToTerraform(struct?: ConnectTestCaseEntryPointChatEntryPointParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_id: cdktn.stringToTerraform(struct!.flowId),
  }
}


export function connectTestCaseEntryPointChatEntryPointParametersToHclTerraform(struct?: ConnectTestCaseEntryPointChatEntryPointParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_id: {
      value: cdktn.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTestCaseEntryPointChatEntryPointParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTestCaseEntryPointChatEntryPointParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTestCaseEntryPointChatEntryPointParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
    }
  }

  // flow_id - computed: true, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }
}
export interface ConnectTestCaseEntryPointVoiceCallEntryPointParameters {
  /**
  * The destination phonenumber of the EntryPoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#destination_phone_number ConnectTestCase#destination_phone_number}
  */
  readonly destinationPhoneNumber?: string;
  /**
  * The flow id used for the TestCase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}
  */
  readonly flowId?: string;
  /**
  * The source phonenumber of the EntryPoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#source_phone_number ConnectTestCase#source_phone_number}
  */
  readonly sourcePhoneNumber?: string;
}

export function connectTestCaseEntryPointVoiceCallEntryPointParametersToTerraform(struct?: ConnectTestCaseEntryPointVoiceCallEntryPointParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_phone_number: cdktn.stringToTerraform(struct!.destinationPhoneNumber),
    flow_id: cdktn.stringToTerraform(struct!.flowId),
    source_phone_number: cdktn.stringToTerraform(struct!.sourcePhoneNumber),
  }
}


export function connectTestCaseEntryPointVoiceCallEntryPointParametersToHclTerraform(struct?: ConnectTestCaseEntryPointVoiceCallEntryPointParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_phone_number: {
      value: cdktn.stringToHclTerraform(struct!.destinationPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_id: {
      value: cdktn.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_phone_number: {
      value: cdktn.stringToHclTerraform(struct!.sourcePhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTestCaseEntryPointVoiceCallEntryPointParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPhoneNumber = this._destinationPhoneNumber;
    }
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._sourcePhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePhoneNumber = this._sourcePhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTestCaseEntryPointVoiceCallEntryPointParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPhoneNumber = undefined;
      this._flowId = undefined;
      this._sourcePhoneNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPhoneNumber = value.destinationPhoneNumber;
      this._flowId = value.flowId;
      this._sourcePhoneNumber = value.sourcePhoneNumber;
    }
  }

  // destination_phone_number - computed: true, optional: true, required: false
  private _destinationPhoneNumber?: string; 
  public get destinationPhoneNumber() {
    return this.getStringAttribute('destination_phone_number');
  }
  public set destinationPhoneNumber(value: string) {
    this._destinationPhoneNumber = value;
  }
  public resetDestinationPhoneNumber() {
    this._destinationPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPhoneNumberInput() {
    return this._destinationPhoneNumber;
  }

  // flow_id - computed: true, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // source_phone_number - computed: true, optional: true, required: false
  private _sourcePhoneNumber?: string; 
  public get sourcePhoneNumber() {
    return this.getStringAttribute('source_phone_number');
  }
  public set sourcePhoneNumber(value: string) {
    this._sourcePhoneNumber = value;
  }
  public resetSourcePhoneNumber() {
    this._sourcePhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePhoneNumberInput() {
    return this._sourcePhoneNumber;
  }
}
export interface ConnectTestCaseEntryPoint {
  /**
  * The chat entry point parameters for the test case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#chat_entry_point_parameters ConnectTestCase#chat_entry_point_parameters}
  */
  readonly chatEntryPointParameters?: ConnectTestCaseEntryPointChatEntryPointParameters;
  /**
  * The type of the Entry Point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#type ConnectTestCase#type}
  */
  readonly type?: string;
  /**
  * The voice call entry point parameters for the test case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#voice_call_entry_point_parameters ConnectTestCase#voice_call_entry_point_parameters}
  */
  readonly voiceCallEntryPointParameters?: ConnectTestCaseEntryPointVoiceCallEntryPointParameters;
}

export function connectTestCaseEntryPointToTerraform(struct?: ConnectTestCaseEntryPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chat_entry_point_parameters: connectTestCaseEntryPointChatEntryPointParametersToTerraform(struct!.chatEntryPointParameters),
    type: cdktn.stringToTerraform(struct!.type),
    voice_call_entry_point_parameters: connectTestCaseEntryPointVoiceCallEntryPointParametersToTerraform(struct!.voiceCallEntryPointParameters),
  }
}


export function connectTestCaseEntryPointToHclTerraform(struct?: ConnectTestCaseEntryPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chat_entry_point_parameters: {
      value: connectTestCaseEntryPointChatEntryPointParametersToHclTerraform(struct!.chatEntryPointParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTestCaseEntryPointChatEntryPointParameters",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_call_entry_point_parameters: {
      value: connectTestCaseEntryPointVoiceCallEntryPointParametersToHclTerraform(struct!.voiceCallEntryPointParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectTestCaseEntryPointVoiceCallEntryPointParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectTestCaseEntryPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectTestCaseEntryPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatEntryPointParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatEntryPointParameters = this._chatEntryPointParameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._voiceCallEntryPointParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceCallEntryPointParameters = this._voiceCallEntryPointParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectTestCaseEntryPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatEntryPointParameters.internalValue = undefined;
      this._type = undefined;
      this._voiceCallEntryPointParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatEntryPointParameters.internalValue = value.chatEntryPointParameters;
      this._type = value.type;
      this._voiceCallEntryPointParameters.internalValue = value.voiceCallEntryPointParameters;
    }
  }

  // chat_entry_point_parameters - computed: true, optional: true, required: false
  private _chatEntryPointParameters = new ConnectTestCaseEntryPointChatEntryPointParametersOutputReference(this, "chat_entry_point_parameters");
  public get chatEntryPointParameters() {
    return this._chatEntryPointParameters;
  }
  public putChatEntryPointParameters(value: ConnectTestCaseEntryPointChatEntryPointParameters) {
    this._chatEntryPointParameters.internalValue = value;
  }
  public resetChatEntryPointParameters() {
    this._chatEntryPointParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatEntryPointParametersInput() {
    return this._chatEntryPointParameters.internalValue;
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

  // voice_call_entry_point_parameters - computed: true, optional: true, required: false
  private _voiceCallEntryPointParameters = new ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference(this, "voice_call_entry_point_parameters");
  public get voiceCallEntryPointParameters() {
    return this._voiceCallEntryPointParameters;
  }
  public putVoiceCallEntryPointParameters(value: ConnectTestCaseEntryPointVoiceCallEntryPointParameters) {
    this._voiceCallEntryPointParameters.internalValue = value;
  }
  public resetVoiceCallEntryPointParameters() {
    this._voiceCallEntryPointParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceCallEntryPointParametersInput() {
    return this._voiceCallEntryPointParameters.internalValue;
  }
}
export interface ConnectTestCaseTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#key ConnectTestCase#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#value ConnectTestCase#value}
  */
  readonly value?: string;
}

export function connectTestCaseTagsToTerraform(struct?: ConnectTestCaseTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectTestCaseTagsToHclTerraform(struct?: ConnectTestCaseTags | cdktn.IResolvable): any {
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

export class ConnectTestCaseTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectTestCaseTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectTestCaseTags | cdktn.IResolvable | undefined) {
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

export class ConnectTestCaseTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectTestCaseTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectTestCaseTagsOutputReference {
    return new ConnectTestCaseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case awscc_connect_test_case}
*/
export class ConnectTestCase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_test_case";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectTestCase to import
  * @param importFromId The id of the existing ConnectTestCase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectTestCase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_test_case", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_test_case awscc_connect_test_case} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectTestCaseConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectTestCaseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_test_case',
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
    this._content = config.content;
    this._description = config.description;
    this._entryPoint.internalValue = config.entryPoint;
    this._initializationData = config.initializationData;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._status = config.status;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // entry_point - computed: true, optional: true, required: false
  private _entryPoint = new ConnectTestCaseEntryPointOutputReference(this, "entry_point");
  public get entryPoint() {
    return this._entryPoint;
  }
  public putEntryPoint(value: ConnectTestCaseEntryPoint) {
    this._entryPoint.internalValue = value;
  }
  public resetEntryPoint() {
    this._entryPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialization_data - computed: true, optional: true, required: false
  private _initializationData?: string; 
  public get initializationData() {
    return this.getStringAttribute('initialization_data');
  }
  public set initializationData(value: string) {
    this._initializationData = value;
  }
  public resetInitializationData() {
    this._initializationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationDataInput() {
    return this._initializationData;
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

  // last_modified_region - computed: true, optional: false, required: false
  public get lastModifiedRegion() {
    return this.getStringAttribute('last_modified_region');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectTestCaseTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectTestCaseTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // test_case_arn - computed: true, optional: false, required: false
  public get testCaseArn() {
    return this.getStringAttribute('test_case_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktn.stringToTerraform(this._content),
      description: cdktn.stringToTerraform(this._description),
      entry_point: connectTestCaseEntryPointToTerraform(this._entryPoint.internalValue),
      initialization_data: cdktn.stringToTerraform(this._initializationData),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      name: cdktn.stringToTerraform(this._name),
      status: cdktn.stringToTerraform(this._status),
      tags: cdktn.listMapper(connectTestCaseTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktn.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_point: {
        value: connectTestCaseEntryPointToHclTerraform(this._entryPoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectTestCaseEntryPoint",
      },
      initialization_data: {
        value: cdktn.stringToHclTerraform(this._initializationData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(connectTestCaseTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectTestCaseTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
