import * as cdktn from 'cdktn';
import { LexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification,
lexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationToTerraform,
lexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationToHclTerraform,
LexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationOutputReference,
LexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification,
lexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationToTerraform,
lexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationToHclTerraform,
LexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationOutputReference,
LexBotBotLocalesIntentsSlotsMultipleValuesSetting,
lexBotBotLocalesIntentsSlotsMultipleValuesSettingToTerraform,
lexBotBotLocalesIntentsSlotsMultipleValuesSettingToHclTerraform,
LexBotBotLocalesIntentsSlotsMultipleValuesSettingOutputReference,
LexBotBotLocalesIntentsSlotsObfuscationSetting,
lexBotBotLocalesIntentsSlotsObfuscationSettingToTerraform,
lexBotBotLocalesIntentsSlotsObfuscationSettingToHclTerraform,
LexBotBotLocalesIntentsSlotsObfuscationSettingOutputReference,
LexBotBotLocalesIntentsDialogCodeHook,
lexBotBotLocalesIntentsDialogCodeHookToTerraform,
lexBotBotLocalesIntentsDialogCodeHookToHclTerraform,
LexBotBotLocalesIntentsDialogCodeHookOutputReference,
LexBotBotLocalesIntentsFulfillmentCodeHook,
lexBotBotLocalesIntentsFulfillmentCodeHookToTerraform,
lexBotBotLocalesIntentsFulfillmentCodeHookToHclTerraform,
LexBotBotLocalesIntentsFulfillmentCodeHookOutputReference,
LexBotBotLocalesIntentsInputContexts,
lexBotBotLocalesIntentsInputContextsToTerraform,
lexBotBotLocalesIntentsInputContextsToHclTerraform,
LexBotBotLocalesIntentsInputContextsList,
LexBotBotLocalesIntentsIntentClosingSetting,
lexBotBotLocalesIntentsIntentClosingSettingToTerraform,
lexBotBotLocalesIntentsIntentClosingSettingToHclTerraform,
LexBotBotLocalesIntentsIntentClosingSettingOutputReference,
LexBotBotLocalesIntentsIntentConfirmationSetting,
lexBotBotLocalesIntentsIntentConfirmationSettingToTerraform,
lexBotBotLocalesIntentsIntentConfirmationSettingToHclTerraform,
LexBotBotLocalesIntentsIntentConfirmationSettingOutputReference,
LexBotBotLocalesIntentsKendraConfiguration,
lexBotBotLocalesIntentsKendraConfigurationToTerraform,
lexBotBotLocalesIntentsKendraConfigurationToHclTerraform,
LexBotBotLocalesIntentsKendraConfigurationOutputReference,
LexBotBotLocalesIntentsOutputContexts,
lexBotBotLocalesIntentsOutputContextsToTerraform,
lexBotBotLocalesIntentsOutputContextsToHclTerraform,
LexBotBotLocalesIntentsOutputContextsList,
LexBotBotLocalesIntentsSampleUtterances,
lexBotBotLocalesIntentsSampleUtterancesToTerraform,
lexBotBotLocalesIntentsSampleUtterancesToHclTerraform,
LexBotBotLocalesIntentsSampleUtterancesList,
LexBotBotLocalesIntentsSlotPriorities,
lexBotBotLocalesIntentsSlotPrioritiesToTerraform,
lexBotBotLocalesIntentsSlotPrioritiesToHclTerraform,
LexBotBotLocalesIntentsSlotPrioritiesList,
LexBotBotLocalesCustomVocabulary,
lexBotBotLocalesCustomVocabularyToTerraform,
lexBotBotLocalesCustomVocabularyToHclTerraform,
LexBotBotLocalesCustomVocabularyOutputReference } from './structs0.js';
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances {
  /**
  * The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents/slots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#utterance LexBot#utterance}
  */
  readonly utterance?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    utterance: cdktn.stringToTerraform(struct!.utterance),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    utterance: {
      value: cdktn.stringToHclTerraform(struct!.utterance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._utterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.utterance = this._utterance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._utterance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._utterance = value.utterance;
    }
  }

  // utterance - computed: true, optional: true, required: false
  private _utterance?: string;
  public get utterance() {
    return this.getStringAttribute('utterance');
  }
  public set utterance(value: string) {
    this._utterance = value;
  }
  public resetUtterance() {
    this._utterance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utteranceInput() {
    return this._utterance;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload {
  /**
  * The string that is sent to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons {
  /**
  * The text that appears on the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text LexBot#text}
  */
  readonly text?: string;
  /**
  * The value returned to Amazon Lex when the user chooses this button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard {
  /**
  * A list of buttons that should be displayed on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#buttons LexBot#buttons}
  */
  readonly buttons?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable;
  /**
  * The URL of an image to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_url LexBot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The subtitle to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#subtitle LexBot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * The title to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#title LexBot#title}
  */
  readonly title?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buttons: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform, false)(struct!.buttons),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buttons: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform, false)(struct!.buttons),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsList",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons.internalValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons.internalValue = value.buttons;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
    }
  }

  // buttons - computed: true, optional: true, required: false
  private _buttons = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }
  public putButtons(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable) {
    this._buttons.internalValue = value;
  }
  public resetButtons() {
    this._buttons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string;
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: true, optional: true, required: false
  private _subtitle?: string;
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage {
  /**
  * The message to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage {
  /**
  * The SSML text that defines the prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage {
  /**
  * A message in a custom format defined by the client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_payload LexBot#custom_payload}
  */
  readonly customPayload?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload;
  /**
  * A message that defines a response card that the client application can show to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_response_card LexBot#image_response_card}
  */
  readonly imageResponseCard?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard;
  /**
  * A message in plain text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#plain_text_message LexBot#plain_text_message}
  */
  readonly plainTextMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage;
  /**
  * A message in Speech Synthesis Markup Language (SSML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#ssml_message LexBot#ssml_message}
  */
  readonly ssmlMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadToTerraform(struct!.customPayload),
    image_response_card: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardToTerraform(struct!.imageResponseCard),
    plain_text_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct!.plainTextMessage),
    ssml_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageToTerraform(struct!.ssmlMessage),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct!.customPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload",
    },
    image_response_card: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct!.imageResponseCard),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard",
    },
    plain_text_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct!.plainTextMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage",
    },
    ssml_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct!.ssmlMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: true, optional: true, required: false
  private _imageResponseCard = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: true, optional: true, required: false
  private _plainTextMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: true, optional: true, required: false
  private _ssmlMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload {
  /**
  * The string that is sent to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons {
  /**
  * The text that appears on the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text LexBot#text}
  */
  readonly text?: string;
  /**
  * The value returned to Amazon Lex when the user chooses this button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard {
  /**
  * A list of buttons that should be displayed on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#buttons LexBot#buttons}
  */
  readonly buttons?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable;
  /**
  * The URL of an image to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_url LexBot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The subtitle to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#subtitle LexBot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * The title to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#title LexBot#title}
  */
  readonly title?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buttons: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform, false)(struct!.buttons),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buttons: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform, false)(struct!.buttons),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsList",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons.internalValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons.internalValue = value.buttons;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
    }
  }

  // buttons - computed: true, optional: true, required: false
  private _buttons = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }
  public putButtons(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable) {
    this._buttons.internalValue = value;
  }
  public resetButtons() {
    this._buttons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string;
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: true, optional: true, required: false
  private _subtitle?: string;
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage {
  /**
  * The message to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage {
  /**
  * The SSML text that defines the prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations {
  /**
  * A message in a custom format defined by the client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_payload LexBot#custom_payload}
  */
  readonly customPayload?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload;
  /**
  * A message that defines a response card that the client application can show to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_response_card LexBot#image_response_card}
  */
  readonly imageResponseCard?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard;
  /**
  * A message in plain text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#plain_text_message LexBot#plain_text_message}
  */
  readonly plainTextMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage;
  /**
  * A message in Speech Synthesis Markup Language (SSML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#ssml_message LexBot#ssml_message}
  */
  readonly ssmlMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct!.customPayload),
    image_response_card: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct!.imageResponseCard),
    plain_text_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct!.plainTextMessage),
    ssml_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct!.ssmlMessage),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct!.customPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload",
    },
    image_response_card: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct!.imageResponseCard),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard",
    },
    plain_text_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct!.plainTextMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage",
    },
    ssml_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct!.ssmlMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: true, optional: true, required: false
  private _imageResponseCard = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: true, optional: true, required: false
  private _plainTextMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: true, optional: true, required: false
  private _ssmlMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct {
  /**
  * The primary message that Amazon Lex should send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#message LexBot#message}
  */
  readonly message?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage;
  /**
  * Message variations to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#variations LexBot#variations}
  */
  readonly variations?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations[] | cdktn.IResolvable;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageToTerraform(struct!.message),
    variations: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsToTerraform, false)(struct!.variations),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage",
    },
    variations: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsToHclTerraform, false)(struct!.variations),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variations = this._variations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variations.internalValue = value.variations;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variations - computed: true, optional: true, required: false
  private _variations = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
  public putVariations(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations[] | cdktn.IResolvable) {
    this._variations.internalValue = value;
  }
  public resetVariations() {
    this._variations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse {
  /**
  * Indicates whether the user can interrupt a speech prompt from the bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#allow_interrupt LexBot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#message_groups_list LexBot#message_groups_list}
  */
  readonly messageGroupsList?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct[] | cdktn.IResolvable;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_groups_list: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructToTerraform, false)(struct!.messageGroupsList),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_groups_list: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructToHclTerraform, false)(struct!.messageGroupsList),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroupsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupsList = this._messageGroupsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroupsList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroupsList.internalValue = value.messageGroupsList;
    }
  }

  // allow_interrupt - computed: true, optional: true, required: false
  private _allowInterrupt?: boolean | cdktn.IResolvable;
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktn.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_groups_list - computed: true, optional: true, required: false
  private _messageGroupsList = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
  public putMessageGroupsList(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct[] | cdktn.IResolvable) {
    this._messageGroupsList.internalValue = value;
  }
  public resetMessageGroupsList() {
    this._messageGroupsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupsListInput() {
    return this._messageGroupsList.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload {
  /**
  * The string that is sent to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons {
  /**
  * The text that appears on the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text LexBot#text}
  */
  readonly text?: string;
  /**
  * The value returned to Amazon Lex when the user chooses this button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard {
  /**
  * A list of buttons that should be displayed on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#buttons LexBot#buttons}
  */
  readonly buttons?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable;
  /**
  * The URL of an image to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_url LexBot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The subtitle to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#subtitle LexBot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * The title to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#title LexBot#title}
  */
  readonly title?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buttons: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform, false)(struct!.buttons),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buttons: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform, false)(struct!.buttons),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons.internalValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons.internalValue = value.buttons;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
    }
  }

  // buttons - computed: true, optional: true, required: false
  private _buttons = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }
  public putButtons(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable) {
    this._buttons.internalValue = value;
  }
  public resetButtons() {
    this._buttons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string;
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: true, optional: true, required: false
  private _subtitle?: string;
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage {
  /**
  * The message to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage {
  /**
  * The SSML text that defines the prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage {
  /**
  * A message in a custom format defined by the client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_payload LexBot#custom_payload}
  */
  readonly customPayload?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload;
  /**
  * A message that defines a response card that the client application can show to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_response_card LexBot#image_response_card}
  */
  readonly imageResponseCard?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard;
  /**
  * A message in plain text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#plain_text_message LexBot#plain_text_message}
  */
  readonly plainTextMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage;
  /**
  * A message in Speech Synthesis Markup Language (SSML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#ssml_message LexBot#ssml_message}
  */
  readonly ssmlMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct!.customPayload),
    image_response_card: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct!.imageResponseCard),
    plain_text_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct!.plainTextMessage),
    ssml_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct!.ssmlMessage),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct!.customPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload",
    },
    image_response_card: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct!.imageResponseCard),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard",
    },
    plain_text_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct!.plainTextMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage",
    },
    ssml_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct!.ssmlMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: true, optional: true, required: false
  private _imageResponseCard = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: true, optional: true, required: false
  private _plainTextMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: true, optional: true, required: false
  private _ssmlMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload {
  /**
  * The string that is sent to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons {
  /**
  * The text that appears on the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text LexBot#text}
  */
  readonly text?: string;
  /**
  * The value returned to Amazon Lex when the user chooses this button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard {
  /**
  * A list of buttons that should be displayed on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#buttons LexBot#buttons}
  */
  readonly buttons?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable;
  /**
  * The URL of an image to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_url LexBot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The subtitle to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#subtitle LexBot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * The title to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#title LexBot#title}
  */
  readonly title?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buttons: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform, false)(struct!.buttons),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buttons: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform, false)(struct!.buttons),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons.internalValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons.internalValue = value.buttons;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
    }
  }

  // buttons - computed: true, optional: true, required: false
  private _buttons = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }
  public putButtons(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable) {
    this._buttons.internalValue = value;
  }
  public resetButtons() {
    this._buttons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string;
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: true, optional: true, required: false
  private _subtitle?: string;
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage {
  /**
  * The message to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage {
  /**
  * The SSML text that defines the prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations {
  /**
  * A message in a custom format defined by the client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_payload LexBot#custom_payload}
  */
  readonly customPayload?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload;
  /**
  * A message that defines a response card that the client application can show to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_response_card LexBot#image_response_card}
  */
  readonly imageResponseCard?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard;
  /**
  * A message in plain text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#plain_text_message LexBot#plain_text_message}
  */
  readonly plainTextMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage;
  /**
  * A message in Speech Synthesis Markup Language (SSML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#ssml_message LexBot#ssml_message}
  */
  readonly ssmlMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct!.customPayload),
    image_response_card: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct!.imageResponseCard),
    plain_text_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct!.plainTextMessage),
    ssml_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct!.ssmlMessage),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct!.customPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload",
    },
    image_response_card: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct!.imageResponseCard),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard",
    },
    plain_text_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct!.plainTextMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage",
    },
    ssml_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct!.ssmlMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: true, optional: true, required: false
  private _imageResponseCard = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: true, optional: true, required: false
  private _plainTextMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: true, optional: true, required: false
  private _ssmlMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct {
  /**
  * The primary message that Amazon Lex should send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#message LexBot#message}
  */
  readonly message?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage;
  /**
  * Message variations to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#variations LexBot#variations}
  */
  readonly variations?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations[] | cdktn.IResolvable;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageToTerraform(struct!.message),
    variations: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsToTerraform, false)(struct!.variations),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage",
    },
    variations: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsToHclTerraform, false)(struct!.variations),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variations = this._variations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variations.internalValue = value.variations;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variations - computed: true, optional: true, required: false
  private _variations = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
  public putVariations(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations[] | cdktn.IResolvable) {
    this._variations.internalValue = value;
  }
  public resetVariations() {
    this._variations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse {
  /**
  * Indicates whether the user can interrupt a speech prompt from the bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#allow_interrupt LexBot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * How often a message should be sent to the user in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#frequency_in_seconds LexBot#frequency_in_seconds}
  */
  readonly frequencyInSeconds?: number;
  /**
  * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#message_groups_list LexBot#message_groups_list}
  */
  readonly messageGroupsList?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct[] | cdktn.IResolvable;
  /**
  * If Amazon Lex waits longer than this length of time in seconds for a response, it will stop sending messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#timeout_in_seconds LexBot#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    frequency_in_seconds: cdktn.numberToTerraform(struct!.frequencyInSeconds),
    message_groups_list: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructToTerraform, false)(struct!.messageGroupsList),
    timeout_in_seconds: cdktn.numberToTerraform(struct!.timeoutInSeconds),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.frequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_groups_list: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructToHclTerraform, false)(struct!.messageGroupsList),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructList",
    },
    timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._frequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyInSeconds = this._frequencyInSeconds;
    }
    if (this._messageGroupsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupsList = this._messageGroupsList?.internalValue;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._frequencyInSeconds = undefined;
      this._messageGroupsList.internalValue = undefined;
      this._timeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._frequencyInSeconds = value.frequencyInSeconds;
      this._messageGroupsList.internalValue = value.messageGroupsList;
      this._timeoutInSeconds = value.timeoutInSeconds;
    }
  }

  // allow_interrupt - computed: true, optional: true, required: false
  private _allowInterrupt?: boolean | cdktn.IResolvable;
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktn.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // frequency_in_seconds - computed: true, optional: true, required: false
  private _frequencyInSeconds?: number;
  public get frequencyInSeconds() {
    return this.getNumberAttribute('frequency_in_seconds');
  }
  public set frequencyInSeconds(value: number) {
    this._frequencyInSeconds = value;
  }
  public resetFrequencyInSeconds() {
    this._frequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInSecondsInput() {
    return this._frequencyInSeconds;
  }

  // message_groups_list - computed: true, optional: true, required: false
  private _messageGroupsList = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
  public putMessageGroupsList(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct[] | cdktn.IResolvable) {
    this._messageGroupsList.internalValue = value;
  }
  public resetMessageGroupsList() {
    this._messageGroupsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupsListInput() {
    return this._messageGroupsList.internalValue;
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number;
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload {
  /**
  * The string that is sent to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons {
  /**
  * The text that appears on the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text LexBot#text}
  */
  readonly text?: string;
  /**
  * The value returned to Amazon Lex when the user chooses this button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard {
  /**
  * A list of buttons that should be displayed on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#buttons LexBot#buttons}
  */
  readonly buttons?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable;
  /**
  * The URL of an image to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_url LexBot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The subtitle to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#subtitle LexBot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * The title to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#title LexBot#title}
  */
  readonly title?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buttons: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform, false)(struct!.buttons),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buttons: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform, false)(struct!.buttons),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons.internalValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons.internalValue = value.buttons;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
    }
  }

  // buttons - computed: true, optional: true, required: false
  private _buttons = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }
  public putButtons(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons[] | cdktn.IResolvable) {
    this._buttons.internalValue = value;
  }
  public resetButtons() {
    this._buttons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string;
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: true, optional: true, required: false
  private _subtitle?: string;
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage {
  /**
  * The message to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage {
  /**
  * The SSML text that defines the prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage {
  /**
  * A message in a custom format defined by the client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_payload LexBot#custom_payload}
  */
  readonly customPayload?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload;
  /**
  * A message that defines a response card that the client application can show to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_response_card LexBot#image_response_card}
  */
  readonly imageResponseCard?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard;
  /**
  * A message in plain text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#plain_text_message LexBot#plain_text_message}
  */
  readonly plainTextMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage;
  /**
  * A message in Speech Synthesis Markup Language (SSML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#ssml_message LexBot#ssml_message}
  */
  readonly ssmlMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct!.customPayload),
    image_response_card: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct!.imageResponseCard),
    plain_text_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct!.plainTextMessage),
    ssml_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct!.ssmlMessage),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct!.customPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload",
    },
    image_response_card: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct!.imageResponseCard),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard",
    },
    plain_text_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct!.plainTextMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage",
    },
    ssml_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct!.ssmlMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: true, optional: true, required: false
  private _imageResponseCard = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: true, optional: true, required: false
  private _plainTextMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: true, optional: true, required: false
  private _ssmlMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload {
  /**
  * The string that is sent to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons {
  /**
  * The text that appears on the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text LexBot#text}
  */
  readonly text?: string;
  /**
  * The value returned to Amazon Lex when the user chooses this button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string;
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard {
  /**
  * A list of buttons that should be displayed on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#buttons LexBot#buttons}
  */
  readonly buttons?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable;
  /**
  * The URL of an image to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_url LexBot#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The subtitle to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#subtitle LexBot#subtitle}
  */
  readonly subtitle?: string;
  /**
  * The title to display on the response card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#title LexBot#title}
  */
  readonly title?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buttons: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform, false)(struct!.buttons),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buttons: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform, false)(struct!.buttons),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttons = this._buttons?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttons.internalValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttons.internalValue = value.buttons;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
    }
  }

  // buttons - computed: true, optional: true, required: false
  private _buttons = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }
  public putButtons(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons[] | cdktn.IResolvable) {
    this._buttons.internalValue = value;
  }
  public resetButtons() {
    this._buttons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonsInput() {
    return this._buttons.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string;
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: true, optional: true, required: false
  private _subtitle?: string;
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage {
  /**
  * The message to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage {
  /**
  * The SSML text that defines the prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations {
  /**
  * A message in a custom format defined by the client application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_payload LexBot#custom_payload}
  */
  readonly customPayload?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload;
  /**
  * A message that defines a response card that the client application can show to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#image_response_card LexBot#image_response_card}
  */
  readonly imageResponseCard?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard;
  /**
  * A message in plain text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#plain_text_message LexBot#plain_text_message}
  */
  readonly plainTextMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage;
  /**
  * A message in Speech Synthesis Markup Language (SSML).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#ssml_message LexBot#ssml_message}
  */
  readonly ssmlMessage?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct!.customPayload),
    image_response_card: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct!.imageResponseCard),
    plain_text_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct!.plainTextMessage),
    ssml_message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct!.ssmlMessage),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct!.customPayload),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload",
    },
    image_response_card: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct!.imageResponseCard),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard",
    },
    plain_text_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct!.plainTextMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage",
    },
    ssml_message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct!.ssmlMessage),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: true, optional: true, required: false
  private _customPayload = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: true, optional: true, required: false
  private _imageResponseCard = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: true, optional: true, required: false
  private _plainTextMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: true, optional: true, required: false
  private _ssmlMessage = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct {
  /**
  * The primary message that Amazon Lex should send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#message LexBot#message}
  */
  readonly message?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage;
  /**
  * Message variations to send to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#variations LexBot#variations}
  */
  readonly variations?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations[] | cdktn.IResolvable;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageToTerraform(struct!.message),
    variations: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsToTerraform, false)(struct!.variations),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage",
    },
    variations: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsToHclTerraform, false)(struct!.variations),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variations = this._variations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variations.internalValue = value.variations;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variations - computed: true, optional: true, required: false
  private _variations = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
  public putVariations(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations[] | cdktn.IResolvable) {
    this._variations.internalValue = value;
  }
  public resetVariations() {
    this._variations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructOutputReference {
    return new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse {
  /**
  * Indicates whether the user can interrupt a speech prompt from the bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#allow_interrupt LexBot#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#message_groups_list LexBot#message_groups_list}
  */
  readonly messageGroupsList?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct[] | cdktn.IResolvable;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_groups_list: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructToTerraform, false)(struct!.messageGroupsList),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_groups_list: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructToHclTerraform, false)(struct!.messageGroupsList),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroupsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupsList = this._messageGroupsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroupsList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroupsList.internalValue = value.messageGroupsList;
    }
  }

  // allow_interrupt - computed: true, optional: true, required: false
  private _allowInterrupt?: boolean | cdktn.IResolvable;
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktn.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_groups_list - computed: true, optional: true, required: false
  private _messageGroupsList = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
  public putMessageGroupsList(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct[] | cdktn.IResolvable) {
    this._messageGroupsList.internalValue = value;
  }
  public resetMessageGroupsList() {
    this._messageGroupsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupsListInput() {
    return this._messageGroupsList.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification {
  /**
  * The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#continue_response LexBot#continue_response}
  */
  readonly continueResponse?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse;
  /**
  * Specifies whether the bot will wait for a user to respond.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#is_active LexBot#is_active}
  */
  readonly isActive?: boolean | cdktn.IResolvable;
  /**
  * The response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#still_waiting_response LexBot#still_waiting_response}
  */
  readonly stillWaitingResponse?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse;
  /**
  * The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#waiting_response LexBot#waiting_response}
  */
  readonly waitingResponse?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continue_response: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseToTerraform(struct!.continueResponse),
    is_active: cdktn.booleanToTerraform(struct!.isActive),
    still_waiting_response: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToTerraform(struct!.stillWaitingResponse),
    waiting_response: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToTerraform(struct!.waitingResponse),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continue_response: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseToHclTerraform(struct!.continueResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse",
    },
    is_active: {
      value: cdktn.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    still_waiting_response: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToHclTerraform(struct!.stillWaitingResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse",
    },
    waiting_response: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToHclTerraform(struct!.waitingResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueResponse = this._continueResponse?.internalValue;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._stillWaitingResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stillWaitingResponse = this._stillWaitingResponse?.internalValue;
    }
    if (this._waitingResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitingResponse = this._waitingResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continueResponse.internalValue = undefined;
      this._isActive = undefined;
      this._stillWaitingResponse.internalValue = undefined;
      this._waitingResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continueResponse.internalValue = value.continueResponse;
      this._isActive = value.isActive;
      this._stillWaitingResponse.internalValue = value.stillWaitingResponse;
      this._waitingResponse.internalValue = value.waitingResponse;
    }
  }

  // continue_response - computed: true, optional: true, required: false
  private _continueResponse = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference(this, "continue_response");
  public get continueResponse() {
    return this._continueResponse;
  }
  public putContinueResponse(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse) {
    this._continueResponse.internalValue = value;
  }
  public resetContinueResponse() {
    this._continueResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueResponseInput() {
    return this._continueResponse.internalValue;
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktn.IResolvable;
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktn.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // still_waiting_response - computed: true, optional: true, required: false
  private _stillWaitingResponse = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference(this, "still_waiting_response");
  public get stillWaitingResponse() {
    return this._stillWaitingResponse;
  }
  public putStillWaitingResponse(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse) {
    this._stillWaitingResponse.internalValue = value;
  }
  public resetStillWaitingResponse() {
    this._stillWaitingResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stillWaitingResponseInput() {
    return this._stillWaitingResponse.internalValue;
  }

  // waiting_response - computed: true, optional: true, required: false
  private _waitingResponse = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference(this, "waiting_response");
  public get waitingResponse() {
    return this._waitingResponse;
  }
  public putWaitingResponse(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse) {
    this._waitingResponse.internalValue = value;
  }
  public resetWaitingResponse() {
    this._waitingResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitingResponseInput() {
    return this._waitingResponse.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlotsValueElicitationSetting {
  /**
  * A list of default values for a slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#default_value_specification LexBot#default_value_specification}
  */
  readonly defaultValueSpecification?: LexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification;
  /**
  * The prompt that Amazon Lex uses to elicit the slot value from the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#prompt_specification LexBot#prompt_specification}
  */
  readonly promptSpecification?: LexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification;
  /**
  * If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#sample_utterances LexBot#sample_utterances}
  */
  readonly sampleUtterances?: LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances[] | cdktn.IResolvable;
  /**
  * Specifies whether the slot is required or optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#slot_constraint LexBot#slot_constraint}
  */
  readonly slotConstraint?: string;
  /**
  * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#wait_and_continue_specification LexBot#wait_and_continue_specification}
  */
  readonly waitAndContinueSpecification?: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification;
}

export function lexBotBotLocalesIntentsSlotsValueElicitationSettingToTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value_specification: lexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationToTerraform(struct!.defaultValueSpecification),
    prompt_specification: lexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationToTerraform(struct!.promptSpecification),
    sample_utterances: cdktn.listMapper(lexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesToTerraform, false)(struct!.sampleUtterances),
    slot_constraint: cdktn.stringToTerraform(struct!.slotConstraint),
    wait_and_continue_specification: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationToTerraform(struct!.waitAndContinueSpecification),
  }
}


export function lexBotBotLocalesIntentsSlotsValueElicitationSettingToHclTerraform(struct?: LexBotBotLocalesIntentsSlotsValueElicitationSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value_specification: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationToHclTerraform(struct!.defaultValueSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification",
    },
    prompt_specification: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationToHclTerraform(struct!.promptSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification",
    },
    sample_utterances: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesToHclTerraform, false)(struct!.sampleUtterances),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesList",
    },
    slot_constraint: {
      value: cdktn.stringToHclTerraform(struct!.slotConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_and_continue_specification: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationToHclTerraform(struct!.waitAndContinueSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsValueElicitationSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesIntentsSlotsValueElicitationSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValueSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValueSpecification = this._defaultValueSpecification?.internalValue;
    }
    if (this._promptSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptSpecification = this._promptSpecification?.internalValue;
    }
    if (this._sampleUtterances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleUtterances = this._sampleUtterances?.internalValue;
    }
    if (this._slotConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotConstraint = this._slotConstraint;
    }
    if (this._waitAndContinueSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAndContinueSpecification = this._waitAndContinueSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlotsValueElicitationSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValueSpecification.internalValue = undefined;
      this._promptSpecification.internalValue = undefined;
      this._sampleUtterances.internalValue = undefined;
      this._slotConstraint = undefined;
      this._waitAndContinueSpecification.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValueSpecification.internalValue = value.defaultValueSpecification;
      this._promptSpecification.internalValue = value.promptSpecification;
      this._sampleUtterances.internalValue = value.sampleUtterances;
      this._slotConstraint = value.slotConstraint;
      this._waitAndContinueSpecification.internalValue = value.waitAndContinueSpecification;
    }
  }

  // default_value_specification - computed: true, optional: true, required: false
  private _defaultValueSpecification = new LexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationOutputReference(this, "default_value_specification");
  public get defaultValueSpecification() {
    return this._defaultValueSpecification;
  }
  public putDefaultValueSpecification(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification) {
    this._defaultValueSpecification.internalValue = value;
  }
  public resetDefaultValueSpecification() {
    this._defaultValueSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueSpecificationInput() {
    return this._defaultValueSpecification.internalValue;
  }

  // prompt_specification - computed: true, optional: true, required: false
  private _promptSpecification = new LexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationOutputReference(this, "prompt_specification");
  public get promptSpecification() {
    return this._promptSpecification;
  }
  public putPromptSpecification(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification) {
    this._promptSpecification.internalValue = value;
  }
  public resetPromptSpecification() {
    this._promptSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptSpecificationInput() {
    return this._promptSpecification.internalValue;
  }

  // sample_utterances - computed: true, optional: true, required: false
  private _sampleUtterances = new LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesList(this, "sample_utterances", false);
  public get sampleUtterances() {
    return this._sampleUtterances;
  }
  public putSampleUtterances(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances[] | cdktn.IResolvable) {
    this._sampleUtterances.internalValue = value;
  }
  public resetSampleUtterances() {
    this._sampleUtterances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtterancesInput() {
    return this._sampleUtterances.internalValue;
  }

  // slot_constraint - computed: true, optional: true, required: false
  private _slotConstraint?: string;
  public get slotConstraint() {
    return this.getStringAttribute('slot_constraint');
  }
  public set slotConstraint(value: string) {
    this._slotConstraint = value;
  }
  public resetSlotConstraint() {
    this._slotConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotConstraintInput() {
    return this._slotConstraint;
  }

  // wait_and_continue_specification - computed: true, optional: true, required: false
  private _waitAndContinueSpecification = new LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationOutputReference(this, "wait_and_continue_specification");
  public get waitAndContinueSpecification() {
    return this._waitAndContinueSpecification;
  }
  public putWaitAndContinueSpecification(value: LexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification) {
    this._waitAndContinueSpecification.internalValue = value;
  }
  public resetWaitAndContinueSpecification() {
    this._waitAndContinueSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAndContinueSpecificationInput() {
    return this._waitAndContinueSpecification.internalValue;
  }
}
export interface LexBotBotLocalesIntentsSlots {
  /**
  * A description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Indicates whether a slot can return multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#multiple_values_setting LexBot#multiple_values_setting}
  */
  readonly multipleValuesSetting?: LexBotBotLocalesIntentsSlotsMultipleValuesSetting;
  /**
  * Unique name for a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#name LexBot#name}
  */
  readonly name?: string;
  /**
  * Determines whether Amazon Lex obscures slot values in conversation logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#obfuscation_setting LexBot#obfuscation_setting}
  */
  readonly obfuscationSetting?: LexBotBotLocalesIntentsSlotsObfuscationSetting;
  /**
  * The slot type name that is used in the slot. Allows for custom and built-in slot type names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#slot_type_name LexBot#slot_type_name}
  */
  readonly slotTypeName?: string;
  /**
  * Settings that you can use for eliciting a slot value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value_elicitation_setting LexBot#value_elicitation_setting}
  */
  readonly valueElicitationSetting?: LexBotBotLocalesIntentsSlotsValueElicitationSetting;
}

export function lexBotBotLocalesIntentsSlotsToTerraform(struct?: LexBotBotLocalesIntentsSlots | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    multiple_values_setting: lexBotBotLocalesIntentsSlotsMultipleValuesSettingToTerraform(struct!.multipleValuesSetting),
    name: cdktn.stringToTerraform(struct!.name),
    obfuscation_setting: lexBotBotLocalesIntentsSlotsObfuscationSettingToTerraform(struct!.obfuscationSetting),
    slot_type_name: cdktn.stringToTerraform(struct!.slotTypeName),
    value_elicitation_setting: lexBotBotLocalesIntentsSlotsValueElicitationSettingToTerraform(struct!.valueElicitationSetting),
  }
}


export function lexBotBotLocalesIntentsSlotsToHclTerraform(struct?: LexBotBotLocalesIntentsSlots | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_values_setting: {
      value: lexBotBotLocalesIntentsSlotsMultipleValuesSettingToHclTerraform(struct!.multipleValuesSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsMultipleValuesSetting",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obfuscation_setting: {
      value: lexBotBotLocalesIntentsSlotsObfuscationSettingToHclTerraform(struct!.obfuscationSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsObfuscationSetting",
    },
    slot_type_name: {
      value: cdktn.stringToHclTerraform(struct!.slotTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_elicitation_setting: {
      value: lexBotBotLocalesIntentsSlotsValueElicitationSettingToHclTerraform(struct!.valueElicitationSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsSlotsValueElicitationSetting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsSlotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntentsSlots | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._multipleValuesSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleValuesSetting = this._multipleValuesSetting?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._obfuscationSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.obfuscationSetting = this._obfuscationSetting?.internalValue;
    }
    if (this._slotTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeName = this._slotTypeName;
    }
    if (this._valueElicitationSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueElicitationSetting = this._valueElicitationSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntentsSlots | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._multipleValuesSetting.internalValue = undefined;
      this._name = undefined;
      this._obfuscationSetting.internalValue = undefined;
      this._slotTypeName = undefined;
      this._valueElicitationSetting.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._multipleValuesSetting.internalValue = value.multipleValuesSetting;
      this._name = value.name;
      this._obfuscationSetting.internalValue = value.obfuscationSetting;
      this._slotTypeName = value.slotTypeName;
      this._valueElicitationSetting.internalValue = value.valueElicitationSetting;
    }
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

  // multiple_values_setting - computed: true, optional: true, required: false
  private _multipleValuesSetting = new LexBotBotLocalesIntentsSlotsMultipleValuesSettingOutputReference(this, "multiple_values_setting");
  public get multipleValuesSetting() {
    return this._multipleValuesSetting;
  }
  public putMultipleValuesSetting(value: LexBotBotLocalesIntentsSlotsMultipleValuesSetting) {
    this._multipleValuesSetting.internalValue = value;
  }
  public resetMultipleValuesSetting() {
    this._multipleValuesSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleValuesSettingInput() {
    return this._multipleValuesSetting.internalValue;
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

  // obfuscation_setting - computed: true, optional: true, required: false
  private _obfuscationSetting = new LexBotBotLocalesIntentsSlotsObfuscationSettingOutputReference(this, "obfuscation_setting");
  public get obfuscationSetting() {
    return this._obfuscationSetting;
  }
  public putObfuscationSetting(value: LexBotBotLocalesIntentsSlotsObfuscationSetting) {
    this._obfuscationSetting.internalValue = value;
  }
  public resetObfuscationSetting() {
    this._obfuscationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obfuscationSettingInput() {
    return this._obfuscationSetting.internalValue;
  }

  // slot_type_name - computed: true, optional: true, required: false
  private _slotTypeName?: string;
  public get slotTypeName() {
    return this.getStringAttribute('slot_type_name');
  }
  public set slotTypeName(value: string) {
    this._slotTypeName = value;
  }
  public resetSlotTypeName() {
    this._slotTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeNameInput() {
    return this._slotTypeName;
  }

  // value_elicitation_setting - computed: true, optional: true, required: false
  private _valueElicitationSetting = new LexBotBotLocalesIntentsSlotsValueElicitationSettingOutputReference(this, "value_elicitation_setting");
  public get valueElicitationSetting() {
    return this._valueElicitationSetting;
  }
  public putValueElicitationSetting(value: LexBotBotLocalesIntentsSlotsValueElicitationSetting) {
    this._valueElicitationSetting.internalValue = value;
  }
  public resetValueElicitationSetting() {
    this._valueElicitationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueElicitationSettingInput() {
    return this._valueElicitationSetting.internalValue;
  }
}

export class LexBotBotLocalesIntentsSlotsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntentsSlots[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsSlotsOutputReference {
    return new LexBotBotLocalesIntentsSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesIntents {
  /**
  * A description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#dialog_code_hook LexBot#dialog_code_hook}
  */
  readonly dialogCodeHook?: LexBotBotLocalesIntentsDialogCodeHook;
  /**
  * Settings that determine if a Lambda function should be invoked to fulfill a specific intent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#fulfillment_code_hook LexBot#fulfillment_code_hook}
  */
  readonly fulfillmentCodeHook?: LexBotBotLocalesIntentsFulfillmentCodeHook;
  /**
  * The list of input contexts specified for the intent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#input_contexts LexBot#input_contexts}
  */
  readonly inputContexts?: LexBotBotLocalesIntentsInputContexts[] | cdktn.IResolvable;
  /**
  * Response that Amazon Lex sends to the user when the intent is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#intent_closing_setting LexBot#intent_closing_setting}
  */
  readonly intentClosingSetting?: LexBotBotLocalesIntentsIntentClosingSetting;
  /**
  * Prompts that Amazon Lex sends to the user to confirm the completion of an intent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#intent_confirmation_setting LexBot#intent_confirmation_setting}
  */
  readonly intentConfirmationSetting?: LexBotBotLocalesIntentsIntentConfirmationSetting;
  /**
  * Configuration for searching a Amazon Kendra index specified for the intent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#kendra_configuration LexBot#kendra_configuration}
  */
  readonly kendraConfiguration?: LexBotBotLocalesIntentsKendraConfiguration;
  /**
  * Unique name for a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#name LexBot#name}
  */
  readonly name?: string;
  /**
  * A list of contexts that the intent activates when it is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#output_contexts LexBot#output_contexts}
  */
  readonly outputContexts?: LexBotBotLocalesIntentsOutputContexts[] | cdktn.IResolvable;
  /**
  * A unique identifier for the built-in intent to base this intent on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#parent_intent_signature LexBot#parent_intent_signature}
  */
  readonly parentIntentSignature?: string;
  /**
  * An array of sample utterances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#sample_utterances LexBot#sample_utterances}
  */
  readonly sampleUtterances?: LexBotBotLocalesIntentsSampleUtterances[] | cdktn.IResolvable;
  /**
  * List for slot priorities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#slot_priorities LexBot#slot_priorities}
  */
  readonly slotPriorities?: LexBotBotLocalesIntentsSlotPriorities[] | cdktn.IResolvable;
  /**
  * List of slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#slots LexBot#slots}
  */
  readonly slots?: LexBotBotLocalesIntentsSlots[] | cdktn.IResolvable;
}

export function lexBotBotLocalesIntentsToTerraform(struct?: LexBotBotLocalesIntents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    dialog_code_hook: lexBotBotLocalesIntentsDialogCodeHookToTerraform(struct!.dialogCodeHook),
    fulfillment_code_hook: lexBotBotLocalesIntentsFulfillmentCodeHookToTerraform(struct!.fulfillmentCodeHook),
    input_contexts: cdktn.listMapper(lexBotBotLocalesIntentsInputContextsToTerraform, false)(struct!.inputContexts),
    intent_closing_setting: lexBotBotLocalesIntentsIntentClosingSettingToTerraform(struct!.intentClosingSetting),
    intent_confirmation_setting: lexBotBotLocalesIntentsIntentConfirmationSettingToTerraform(struct!.intentConfirmationSetting),
    kendra_configuration: lexBotBotLocalesIntentsKendraConfigurationToTerraform(struct!.kendraConfiguration),
    name: cdktn.stringToTerraform(struct!.name),
    output_contexts: cdktn.listMapper(lexBotBotLocalesIntentsOutputContextsToTerraform, false)(struct!.outputContexts),
    parent_intent_signature: cdktn.stringToTerraform(struct!.parentIntentSignature),
    sample_utterances: cdktn.listMapper(lexBotBotLocalesIntentsSampleUtterancesToTerraform, false)(struct!.sampleUtterances),
    slot_priorities: cdktn.listMapper(lexBotBotLocalesIntentsSlotPrioritiesToTerraform, false)(struct!.slotPriorities),
    slots: cdktn.listMapper(lexBotBotLocalesIntentsSlotsToTerraform, false)(struct!.slots),
  }
}


export function lexBotBotLocalesIntentsToHclTerraform(struct?: LexBotBotLocalesIntents | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dialog_code_hook: {
      value: lexBotBotLocalesIntentsDialogCodeHookToHclTerraform(struct!.dialogCodeHook),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsDialogCodeHook",
    },
    fulfillment_code_hook: {
      value: lexBotBotLocalesIntentsFulfillmentCodeHookToHclTerraform(struct!.fulfillmentCodeHook),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsFulfillmentCodeHook",
    },
    input_contexts: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsInputContextsToHclTerraform, false)(struct!.inputContexts),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsInputContextsList",
    },
    intent_closing_setting: {
      value: lexBotBotLocalesIntentsIntentClosingSettingToHclTerraform(struct!.intentClosingSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsIntentClosingSetting",
    },
    intent_confirmation_setting: {
      value: lexBotBotLocalesIntentsIntentConfirmationSettingToHclTerraform(struct!.intentConfirmationSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsIntentConfirmationSetting",
    },
    kendra_configuration: {
      value: lexBotBotLocalesIntentsKendraConfigurationToHclTerraform(struct!.kendraConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesIntentsKendraConfiguration",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_contexts: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsOutputContextsToHclTerraform, false)(struct!.outputContexts),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsOutputContextsList",
    },
    parent_intent_signature: {
      value: cdktn.stringToHclTerraform(struct!.parentIntentSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_utterances: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSampleUtterancesToHclTerraform, false)(struct!.sampleUtterances),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSampleUtterancesList",
    },
    slot_priorities: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotPrioritiesToHclTerraform, false)(struct!.slotPriorities),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesIntentsSlotPrioritiesList",
    },
    slots: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsSlotsToHclTerraform, false)(struct!.slots),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotBotLocalesIntentsSlotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesIntentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesIntents | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dialogCodeHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogCodeHook = this._dialogCodeHook?.internalValue;
    }
    if (this._fulfillmentCodeHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fulfillmentCodeHook = this._fulfillmentCodeHook?.internalValue;
    }
    if (this._inputContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputContexts = this._inputContexts?.internalValue;
    }
    if (this._intentClosingSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intentClosingSetting = this._intentClosingSetting?.internalValue;
    }
    if (this._intentConfirmationSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intentConfirmationSetting = this._intentConfirmationSetting?.internalValue;
    }
    if (this._kendraConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraConfiguration = this._kendraConfiguration?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputContexts = this._outputContexts?.internalValue;
    }
    if (this._parentIntentSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentIntentSignature = this._parentIntentSignature;
    }
    if (this._sampleUtterances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleUtterances = this._sampleUtterances?.internalValue;
    }
    if (this._slotPriorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotPriorities = this._slotPriorities?.internalValue;
    }
    if (this._slots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slots = this._slots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesIntents | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dialogCodeHook.internalValue = undefined;
      this._fulfillmentCodeHook.internalValue = undefined;
      this._inputContexts.internalValue = undefined;
      this._intentClosingSetting.internalValue = undefined;
      this._intentConfirmationSetting.internalValue = undefined;
      this._kendraConfiguration.internalValue = undefined;
      this._name = undefined;
      this._outputContexts.internalValue = undefined;
      this._parentIntentSignature = undefined;
      this._sampleUtterances.internalValue = undefined;
      this._slotPriorities.internalValue = undefined;
      this._slots.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dialogCodeHook.internalValue = value.dialogCodeHook;
      this._fulfillmentCodeHook.internalValue = value.fulfillmentCodeHook;
      this._inputContexts.internalValue = value.inputContexts;
      this._intentClosingSetting.internalValue = value.intentClosingSetting;
      this._intentConfirmationSetting.internalValue = value.intentConfirmationSetting;
      this._kendraConfiguration.internalValue = value.kendraConfiguration;
      this._name = value.name;
      this._outputContexts.internalValue = value.outputContexts;
      this._parentIntentSignature = value.parentIntentSignature;
      this._sampleUtterances.internalValue = value.sampleUtterances;
      this._slotPriorities.internalValue = value.slotPriorities;
      this._slots.internalValue = value.slots;
    }
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

  // dialog_code_hook - computed: true, optional: true, required: false
  private _dialogCodeHook = new LexBotBotLocalesIntentsDialogCodeHookOutputReference(this, "dialog_code_hook");
  public get dialogCodeHook() {
    return this._dialogCodeHook;
  }
  public putDialogCodeHook(value: LexBotBotLocalesIntentsDialogCodeHook) {
    this._dialogCodeHook.internalValue = value;
  }
  public resetDialogCodeHook() {
    this._dialogCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogCodeHookInput() {
    return this._dialogCodeHook.internalValue;
  }

  // fulfillment_code_hook - computed: true, optional: true, required: false
  private _fulfillmentCodeHook = new LexBotBotLocalesIntentsFulfillmentCodeHookOutputReference(this, "fulfillment_code_hook");
  public get fulfillmentCodeHook() {
    return this._fulfillmentCodeHook;
  }
  public putFulfillmentCodeHook(value: LexBotBotLocalesIntentsFulfillmentCodeHook) {
    this._fulfillmentCodeHook.internalValue = value;
  }
  public resetFulfillmentCodeHook() {
    this._fulfillmentCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulfillmentCodeHookInput() {
    return this._fulfillmentCodeHook.internalValue;
  }

  // input_contexts - computed: true, optional: true, required: false
  private _inputContexts = new LexBotBotLocalesIntentsInputContextsList(this, "input_contexts", false);
  public get inputContexts() {
    return this._inputContexts;
  }
  public putInputContexts(value: LexBotBotLocalesIntentsInputContexts[] | cdktn.IResolvable) {
    this._inputContexts.internalValue = value;
  }
  public resetInputContexts() {
    this._inputContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputContextsInput() {
    return this._inputContexts.internalValue;
  }

  // intent_closing_setting - computed: true, optional: true, required: false
  private _intentClosingSetting = new LexBotBotLocalesIntentsIntentClosingSettingOutputReference(this, "intent_closing_setting");
  public get intentClosingSetting() {
    return this._intentClosingSetting;
  }
  public putIntentClosingSetting(value: LexBotBotLocalesIntentsIntentClosingSetting) {
    this._intentClosingSetting.internalValue = value;
  }
  public resetIntentClosingSetting() {
    this._intentClosingSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentClosingSettingInput() {
    return this._intentClosingSetting.internalValue;
  }

  // intent_confirmation_setting - computed: true, optional: true, required: false
  private _intentConfirmationSetting = new LexBotBotLocalesIntentsIntentConfirmationSettingOutputReference(this, "intent_confirmation_setting");
  public get intentConfirmationSetting() {
    return this._intentConfirmationSetting;
  }
  public putIntentConfirmationSetting(value: LexBotBotLocalesIntentsIntentConfirmationSetting) {
    this._intentConfirmationSetting.internalValue = value;
  }
  public resetIntentConfirmationSetting() {
    this._intentConfirmationSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentConfirmationSettingInput() {
    return this._intentConfirmationSetting.internalValue;
  }

  // kendra_configuration - computed: true, optional: true, required: false
  private _kendraConfiguration = new LexBotBotLocalesIntentsKendraConfigurationOutputReference(this, "kendra_configuration");
  public get kendraConfiguration() {
    return this._kendraConfiguration;
  }
  public putKendraConfiguration(value: LexBotBotLocalesIntentsKendraConfiguration) {
    this._kendraConfiguration.internalValue = value;
  }
  public resetKendraConfiguration() {
    this._kendraConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraConfigurationInput() {
    return this._kendraConfiguration.internalValue;
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

  // output_contexts - computed: true, optional: true, required: false
  private _outputContexts = new LexBotBotLocalesIntentsOutputContextsList(this, "output_contexts", false);
  public get outputContexts() {
    return this._outputContexts;
  }
  public putOutputContexts(value: LexBotBotLocalesIntentsOutputContexts[] | cdktn.IResolvable) {
    this._outputContexts.internalValue = value;
  }
  public resetOutputContexts() {
    this._outputContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputContextsInput() {
    return this._outputContexts.internalValue;
  }

  // parent_intent_signature - computed: true, optional: true, required: false
  private _parentIntentSignature?: string;
  public get parentIntentSignature() {
    return this.getStringAttribute('parent_intent_signature');
  }
  public set parentIntentSignature(value: string) {
    this._parentIntentSignature = value;
  }
  public resetParentIntentSignature() {
    this._parentIntentSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIntentSignatureInput() {
    return this._parentIntentSignature;
  }

  // sample_utterances - computed: true, optional: true, required: false
  private _sampleUtterances = new LexBotBotLocalesIntentsSampleUtterancesList(this, "sample_utterances", false);
  public get sampleUtterances() {
    return this._sampleUtterances;
  }
  public putSampleUtterances(value: LexBotBotLocalesIntentsSampleUtterances[] | cdktn.IResolvable) {
    this._sampleUtterances.internalValue = value;
  }
  public resetSampleUtterances() {
    this._sampleUtterances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUtterancesInput() {
    return this._sampleUtterances.internalValue;
  }

  // slot_priorities - computed: true, optional: true, required: false
  private _slotPriorities = new LexBotBotLocalesIntentsSlotPrioritiesList(this, "slot_priorities", false);
  public get slotPriorities() {
    return this._slotPriorities;
  }
  public putSlotPriorities(value: LexBotBotLocalesIntentsSlotPriorities[] | cdktn.IResolvable) {
    this._slotPriorities.internalValue = value;
  }
  public resetSlotPriorities() {
    this._slotPriorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotPrioritiesInput() {
    return this._slotPriorities.internalValue;
  }

  // slots - computed: true, optional: true, required: false
  private _slots = new LexBotBotLocalesIntentsSlotsList(this, "slots", true);
  public get slots() {
    return this._slots;
  }
  public putSlots(value: LexBotBotLocalesIntentsSlots[] | cdktn.IResolvable) {
    this._slots.internalValue = value;
  }
  public resetSlots() {
    this._slots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots.internalValue;
  }
}

export class LexBotBotLocalesIntentsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesIntents[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesIntentsOutputReference {
    return new LexBotBotLocalesIntentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource {
  /**
  * The Amazon KMS key required to decrypt the contents of the grammar, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#kms_key_arn LexBot#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The name of the S3 bucket that contains the grammar source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#s3_bucket_name LexBot#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * The path to the grammar in the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#s3_object_key LexBot#s3_object_key}
  */
  readonly s3ObjectKey?: string;
}

export function lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceToTerraform(struct?: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    s3_object_key: cdktn.stringToTerraform(struct!.s3ObjectKey),
  }
}


export function lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceToHclTerraform(struct?: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_key: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectKey = this._s3ObjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectKey = value.s3ObjectKey;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string;
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_object_key - computed: true, optional: true, required: false
  private _s3ObjectKey?: string;
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
  public set s3ObjectKey(value: string) {
    this._s3ObjectKey = value;
  }
  public resetS3ObjectKey() {
    this._s3ObjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectKeyInput() {
    return this._s3ObjectKey;
  }
}
export interface LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting {
  /**
  * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#source LexBot#source}
  */
  readonly source?: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource;
}

export function lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingToTerraform(struct?: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceToTerraform(struct!.source),
  }
}


export function lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingToHclTerraform(struct?: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
    }
  }

  // source - computed: true, optional: true, required: false
  private _source = new LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LexBotBotLocalesSlotTypesExternalSourceSetting {
  /**
  * Settings required for a slot type based on a grammar that you provide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#grammar_slot_type_setting LexBot#grammar_slot_type_setting}
  */
  readonly grammarSlotTypeSetting?: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting;
}

export function lexBotBotLocalesSlotTypesExternalSourceSettingToTerraform(struct?: LexBotBotLocalesSlotTypesExternalSourceSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grammar_slot_type_setting: lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingToTerraform(struct!.grammarSlotTypeSetting),
  }
}


export function lexBotBotLocalesSlotTypesExternalSourceSettingToHclTerraform(struct?: LexBotBotLocalesSlotTypesExternalSourceSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grammar_slot_type_setting: {
      value: lexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingToHclTerraform(struct!.grammarSlotTypeSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesExternalSourceSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesExternalSourceSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grammarSlotTypeSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grammarSlotTypeSetting = this._grammarSlotTypeSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesExternalSourceSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grammarSlotTypeSetting.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grammarSlotTypeSetting.internalValue = value.grammarSlotTypeSetting;
    }
  }

  // grammar_slot_type_setting - computed: true, optional: true, required: false
  private _grammarSlotTypeSetting = new LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingOutputReference(this, "grammar_slot_type_setting");
  public get grammarSlotTypeSetting() {
    return this._grammarSlotTypeSetting;
  }
  public putGrammarSlotTypeSetting(value: LexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting) {
    this._grammarSlotTypeSetting.internalValue = value;
  }
  public resetGrammarSlotTypeSetting() {
    this._grammarSlotTypeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grammarSlotTypeSettingInput() {
    return this._grammarSlotTypeSetting.internalValue;
  }
}
export interface LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue {
  /**
  * The value that can be used for a slot type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesSlotTypesSlotTypeValuesSampleValueToTerraform(struct?: LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesSlotTypesSlotTypeValuesSampleValueToHclTerraform(struct?: LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesSlotTypeValuesSampleValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}
export interface LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms {
  /**
  * The value that can be used for a slot type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotLocalesSlotTypesSlotTypeValuesSynonymsToTerraform(struct?: LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotLocalesSlotTypesSlotTypeValuesSynonymsToHclTerraform(struct?: LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesSlotTypeValuesSynonymsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
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
}

export class LexBotBotLocalesSlotTypesSlotTypeValuesSynonymsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesSlotTypesSlotTypeValuesSynonymsOutputReference {
    return new LexBotBotLocalesSlotTypesSlotTypeValuesSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesSlotTypesSlotTypeValues {
  /**
  * Defines one of the values for a slot type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#sample_value LexBot#sample_value}
  */
  readonly sampleValue?: LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue;
  /**
  * Additional values related to the slot type entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#synonyms LexBot#synonyms}
  */
  readonly synonyms?: LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms[] | cdktn.IResolvable;
}

export function lexBotBotLocalesSlotTypesSlotTypeValuesToTerraform(struct?: LexBotBotLocalesSlotTypesSlotTypeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sample_value: lexBotBotLocalesSlotTypesSlotTypeValuesSampleValueToTerraform(struct!.sampleValue),
    synonyms: cdktn.listMapper(lexBotBotLocalesSlotTypesSlotTypeValuesSynonymsToTerraform, false)(struct!.synonyms),
  }
}


export function lexBotBotLocalesSlotTypesSlotTypeValuesToHclTerraform(struct?: LexBotBotLocalesSlotTypesSlotTypeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sample_value: {
      value: lexBotBotLocalesSlotTypesSlotTypeValuesSampleValueToHclTerraform(struct!.sampleValue),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue",
    },
    synonyms: {
      value: cdktn.listMapperHcl(lexBotBotLocalesSlotTypesSlotTypeValuesSynonymsToHclTerraform, false)(struct!.synonyms),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesSlotTypesSlotTypeValuesSynonymsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesSlotTypeValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesSlotTypesSlotTypeValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleValue = this._sampleValue?.internalValue;
    }
    if (this._synonyms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesSlotTypeValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sampleValue.internalValue = undefined;
      this._synonyms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sampleValue.internalValue = value.sampleValue;
      this._synonyms.internalValue = value.synonyms;
    }
  }

  // sample_value - computed: true, optional: true, required: false
  private _sampleValue = new LexBotBotLocalesSlotTypesSlotTypeValuesSampleValueOutputReference(this, "sample_value");
  public get sampleValue() {
    return this._sampleValue;
  }
  public putSampleValue(value: LexBotBotLocalesSlotTypesSlotTypeValuesSampleValue) {
    this._sampleValue.internalValue = value;
  }
  public resetSampleValue() {
    this._sampleValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleValueInput() {
    return this._sampleValue.internalValue;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms = new LexBotBotLocalesSlotTypesSlotTypeValuesSynonymsList(this, "synonyms", false);
  public get synonyms() {
    return this._synonyms;
  }
  public putSynonyms(value: LexBotBotLocalesSlotTypesSlotTypeValuesSynonyms[] | cdktn.IResolvable) {
    this._synonyms.internalValue = value;
  }
  public resetSynonyms() {
    this._synonyms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms.internalValue;
  }
}

export class LexBotBotLocalesSlotTypesSlotTypeValuesList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesSlotTypesSlotTypeValues[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesSlotTypesSlotTypeValuesOutputReference {
    return new LexBotBotLocalesSlotTypesSlotTypeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting {
  /**
  * Enables using slot values as a custom vocabulary when recognizing user utterances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#audio_recognition_strategy LexBot#audio_recognition_strategy}
  */
  readonly audioRecognitionStrategy?: string;
}

export function lexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingToTerraform(struct?: LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_recognition_strategy: cdktn.stringToTerraform(struct!.audioRecognitionStrategy),
  }
}


export function lexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingToHclTerraform(struct?: LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_recognition_strategy: {
      value: cdktn.stringToHclTerraform(struct!.audioRecognitionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioRecognitionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioRecognitionStrategy = this._audioRecognitionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioRecognitionStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioRecognitionStrategy = value.audioRecognitionStrategy;
    }
  }

  // audio_recognition_strategy - computed: true, optional: true, required: false
  private _audioRecognitionStrategy?: string;
  public get audioRecognitionStrategy() {
    return this.getStringAttribute('audio_recognition_strategy');
  }
  public set audioRecognitionStrategy(value: string) {
    this._audioRecognitionStrategy = value;
  }
  public resetAudioRecognitionStrategy() {
    this._audioRecognitionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRecognitionStrategyInput() {
    return this._audioRecognitionStrategy;
  }
}
export interface LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter {
  /**
  * Regex pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#pattern LexBot#pattern}
  */
  readonly pattern?: string;
}

export function lexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterToTerraform(struct?: LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern: cdktn.stringToTerraform(struct!.pattern),
  }
}


export function lexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterToHclTerraform(struct?: LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string;
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface LexBotBotLocalesSlotTypesValueSelectionSetting {
  /**
  * Provides settings that enable advanced recognition settings for slot values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#advanced_recognition_setting LexBot#advanced_recognition_setting}
  */
  readonly advancedRecognitionSetting?: LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting;
  /**
  * A regular expression used to validate the value of a slot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#regex_filter LexBot#regex_filter}
  */
  readonly regexFilter?: LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#resolution_strategy LexBot#resolution_strategy}
  */
  readonly resolutionStrategy?: string;
}

export function lexBotBotLocalesSlotTypesValueSelectionSettingToTerraform(struct?: LexBotBotLocalesSlotTypesValueSelectionSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    advanced_recognition_setting: lexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingToTerraform(struct!.advancedRecognitionSetting),
    regex_filter: lexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterToTerraform(struct!.regexFilter),
    resolution_strategy: cdktn.stringToTerraform(struct!.resolutionStrategy),
  }
}


export function lexBotBotLocalesSlotTypesValueSelectionSettingToHclTerraform(struct?: LexBotBotLocalesSlotTypesValueSelectionSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    advanced_recognition_setting: {
      value: lexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingToHclTerraform(struct!.advancedRecognitionSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting",
    },
    regex_filter: {
      value: lexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterToHclTerraform(struct!.regexFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter",
    },
    resolution_strategy: {
      value: cdktn.stringToHclTerraform(struct!.resolutionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesValueSelectionSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesSlotTypesValueSelectionSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedRecognitionSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedRecognitionSetting = this._advancedRecognitionSetting?.internalValue;
    }
    if (this._regexFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexFilter = this._regexFilter?.internalValue;
    }
    if (this._resolutionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionStrategy = this._resolutionStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypesValueSelectionSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedRecognitionSetting.internalValue = undefined;
      this._regexFilter.internalValue = undefined;
      this._resolutionStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedRecognitionSetting.internalValue = value.advancedRecognitionSetting;
      this._regexFilter.internalValue = value.regexFilter;
      this._resolutionStrategy = value.resolutionStrategy;
    }
  }

  // advanced_recognition_setting - computed: true, optional: true, required: false
  private _advancedRecognitionSetting = new LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingOutputReference(this, "advanced_recognition_setting");
  public get advancedRecognitionSetting() {
    return this._advancedRecognitionSetting;
  }
  public putAdvancedRecognitionSetting(value: LexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting) {
    this._advancedRecognitionSetting.internalValue = value;
  }
  public resetAdvancedRecognitionSetting() {
    this._advancedRecognitionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRecognitionSettingInput() {
    return this._advancedRecognitionSetting.internalValue;
  }

  // regex_filter - computed: true, optional: true, required: false
  private _regexFilter = new LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterOutputReference(this, "regex_filter");
  public get regexFilter() {
    return this._regexFilter;
  }
  public putRegexFilter(value: LexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter) {
    this._regexFilter.internalValue = value;
  }
  public resetRegexFilter() {
    this._regexFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFilterInput() {
    return this._regexFilter.internalValue;
  }

  // resolution_strategy - computed: true, optional: true, required: false
  private _resolutionStrategy?: string;
  public get resolutionStrategy() {
    return this.getStringAttribute('resolution_strategy');
  }
  public set resolutionStrategy(value: string) {
    this._resolutionStrategy = value;
  }
  public resetResolutionStrategy() {
    this._resolutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionStrategyInput() {
    return this._resolutionStrategy;
  }
}
export interface LexBotBotLocalesSlotTypes {
  /**
  * A description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Provides information about the external source of the slot type's definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#external_source_setting LexBot#external_source_setting}
  */
  readonly externalSourceSetting?: LexBotBotLocalesSlotTypesExternalSourceSetting;
  /**
  * Unique name for a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#name LexBot#name}
  */
  readonly name?: string;
  /**
  * The built-in slot type used as a parent of this slot type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#parent_slot_type_signature LexBot#parent_slot_type_signature}
  */
  readonly parentSlotTypeSignature?: string;
  /**
  * A List of slot type values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#slot_type_values LexBot#slot_type_values}
  */
  readonly slotTypeValues?: LexBotBotLocalesSlotTypesSlotTypeValues[] | cdktn.IResolvable;
  /**
  * Contains settings used by Amazon Lex to select a slot value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value_selection_setting LexBot#value_selection_setting}
  */
  readonly valueSelectionSetting?: LexBotBotLocalesSlotTypesValueSelectionSetting;
}

export function lexBotBotLocalesSlotTypesToTerraform(struct?: LexBotBotLocalesSlotTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    external_source_setting: lexBotBotLocalesSlotTypesExternalSourceSettingToTerraform(struct!.externalSourceSetting),
    name: cdktn.stringToTerraform(struct!.name),
    parent_slot_type_signature: cdktn.stringToTerraform(struct!.parentSlotTypeSignature),
    slot_type_values: cdktn.listMapper(lexBotBotLocalesSlotTypesSlotTypeValuesToTerraform, false)(struct!.slotTypeValues),
    value_selection_setting: lexBotBotLocalesSlotTypesValueSelectionSettingToTerraform(struct!.valueSelectionSetting),
  }
}


export function lexBotBotLocalesSlotTypesToHclTerraform(struct?: LexBotBotLocalesSlotTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_source_setting: {
      value: lexBotBotLocalesSlotTypesExternalSourceSettingToHclTerraform(struct!.externalSourceSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesExternalSourceSetting",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_slot_type_signature: {
      value: cdktn.stringToHclTerraform(struct!.parentSlotTypeSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_type_values: {
      value: cdktn.listMapperHcl(lexBotBotLocalesSlotTypesSlotTypeValuesToHclTerraform, false)(struct!.slotTypeValues),
      isBlock: true,
      type: "list",
      storageClassType: "LexBotBotLocalesSlotTypesSlotTypeValuesList",
    },
    value_selection_setting: {
      value: lexBotBotLocalesSlotTypesValueSelectionSettingToHclTerraform(struct!.valueSelectionSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesSlotTypesValueSelectionSetting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesSlotTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocalesSlotTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalSourceSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSourceSetting = this._externalSourceSetting?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentSlotTypeSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentSlotTypeSignature = this._parentSlotTypeSignature;
    }
    if (this._slotTypeValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypeValues = this._slotTypeValues?.internalValue;
    }
    if (this._valueSelectionSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSelectionSetting = this._valueSelectionSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesSlotTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalSourceSetting.internalValue = undefined;
      this._name = undefined;
      this._parentSlotTypeSignature = undefined;
      this._slotTypeValues.internalValue = undefined;
      this._valueSelectionSetting.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalSourceSetting.internalValue = value.externalSourceSetting;
      this._name = value.name;
      this._parentSlotTypeSignature = value.parentSlotTypeSignature;
      this._slotTypeValues.internalValue = value.slotTypeValues;
      this._valueSelectionSetting.internalValue = value.valueSelectionSetting;
    }
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

  // external_source_setting - computed: true, optional: true, required: false
  private _externalSourceSetting = new LexBotBotLocalesSlotTypesExternalSourceSettingOutputReference(this, "external_source_setting");
  public get externalSourceSetting() {
    return this._externalSourceSetting;
  }
  public putExternalSourceSetting(value: LexBotBotLocalesSlotTypesExternalSourceSetting) {
    this._externalSourceSetting.internalValue = value;
  }
  public resetExternalSourceSetting() {
    this._externalSourceSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSourceSettingInput() {
    return this._externalSourceSetting.internalValue;
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

  // parent_slot_type_signature - computed: true, optional: true, required: false
  private _parentSlotTypeSignature?: string;
  public get parentSlotTypeSignature() {
    return this.getStringAttribute('parent_slot_type_signature');
  }
  public set parentSlotTypeSignature(value: string) {
    this._parentSlotTypeSignature = value;
  }
  public resetParentSlotTypeSignature() {
    this._parentSlotTypeSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentSlotTypeSignatureInput() {
    return this._parentSlotTypeSignature;
  }

  // slot_type_values - computed: true, optional: true, required: false
  private _slotTypeValues = new LexBotBotLocalesSlotTypesSlotTypeValuesList(this, "slot_type_values", false);
  public get slotTypeValues() {
    return this._slotTypeValues;
  }
  public putSlotTypeValues(value: LexBotBotLocalesSlotTypesSlotTypeValues[] | cdktn.IResolvable) {
    this._slotTypeValues.internalValue = value;
  }
  public resetSlotTypeValues() {
    this._slotTypeValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypeValuesInput() {
    return this._slotTypeValues.internalValue;
  }

  // value_selection_setting - computed: true, optional: true, required: false
  private _valueSelectionSetting = new LexBotBotLocalesSlotTypesValueSelectionSettingOutputReference(this, "value_selection_setting");
  public get valueSelectionSetting() {
    return this._valueSelectionSetting;
  }
  public putValueSelectionSetting(value: LexBotBotLocalesSlotTypesValueSelectionSetting) {
    this._valueSelectionSetting.internalValue = value;
  }
  public resetValueSelectionSetting() {
    this._valueSelectionSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSelectionSettingInput() {
    return this._valueSelectionSetting.internalValue;
  }
}

export class LexBotBotLocalesSlotTypesList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocalesSlotTypes[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesSlotTypesOutputReference {
    return new LexBotBotLocalesSlotTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotLocalesVoiceSettings {
  /**
  * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#engine LexBot#engine}
  */
  readonly engine?: string;
  /**
  * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#voice_id LexBot#voice_id}
  */
  readonly voiceId?: string;
}

export function lexBotBotLocalesVoiceSettingsToTerraform(struct?: LexBotBotLocalesVoiceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    engine: cdktn.stringToTerraform(struct!.engine),
    voice_id: cdktn.stringToTerraform(struct!.voiceId),
  }
}


export function lexBotBotLocalesVoiceSettingsToHclTerraform(struct?: LexBotBotLocalesVoiceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    engine: {
      value: cdktn.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_id: {
      value: cdktn.stringToHclTerraform(struct!.voiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesVoiceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotBotLocalesVoiceSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._voiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceId = this._voiceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocalesVoiceSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engine = undefined;
      this._voiceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engine = value.engine;
      this._voiceId = value.voiceId;
    }
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // voice_id - computed: true, optional: true, required: false
  private _voiceId?: string;
  public get voiceId() {
    return this.getStringAttribute('voice_id');
  }
  public set voiceId(value: string) {
    this._voiceId = value;
  }
  public resetVoiceId() {
    this._voiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceIdInput() {
    return this._voiceId;
  }
}
export interface LexBotBotLocales {
  /**
  * A custom vocabulary is a list of specific phrases that you want Amazon Lex V2 to recognize in the audio input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#custom_vocabulary LexBot#custom_vocabulary}
  */
  readonly customVocabulary?: LexBotBotLocalesCustomVocabulary;
  /**
  * A description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * List of intents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#intents LexBot#intents}
  */
  readonly intents?: LexBotBotLocalesIntents[] | cdktn.IResolvable;
  /**
  * The identifier of the language and locale that the bot will be used in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#locale_id LexBot#locale_id}
  */
  readonly localeId?: string;
  /**
  * The specified confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#nlu_confidence_threshold LexBot#nlu_confidence_threshold}
  */
  readonly nluConfidenceThreshold?: number;
  /**
  * List of SlotTypes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#slot_types LexBot#slot_types}
  */
  readonly slotTypes?: LexBotBotLocalesSlotTypes[] | cdktn.IResolvable;
  /**
  * Settings for using an Amazon Polly voice to communicate with a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#voice_settings LexBot#voice_settings}
  */
  readonly voiceSettings?: LexBotBotLocalesVoiceSettings;
}

export function lexBotBotLocalesToTerraform(struct?: LexBotBotLocales | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_vocabulary: lexBotBotLocalesCustomVocabularyToTerraform(struct!.customVocabulary),
    description: cdktn.stringToTerraform(struct!.description),
    intents: cdktn.listMapper(lexBotBotLocalesIntentsToTerraform, false)(struct!.intents),
    locale_id: cdktn.stringToTerraform(struct!.localeId),
    nlu_confidence_threshold: cdktn.numberToTerraform(struct!.nluConfidenceThreshold),
    slot_types: cdktn.listMapper(lexBotBotLocalesSlotTypesToTerraform, false)(struct!.slotTypes),
    voice_settings: lexBotBotLocalesVoiceSettingsToTerraform(struct!.voiceSettings),
  }
}


export function lexBotBotLocalesToHclTerraform(struct?: LexBotBotLocales | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_vocabulary: {
      value: lexBotBotLocalesCustomVocabularyToHclTerraform(struct!.customVocabulary),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesCustomVocabulary",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intents: {
      value: cdktn.listMapperHcl(lexBotBotLocalesIntentsToHclTerraform, false)(struct!.intents),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotBotLocalesIntentsList",
    },
    locale_id: {
      value: cdktn.stringToHclTerraform(struct!.localeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nlu_confidence_threshold: {
      value: cdktn.numberToHclTerraform(struct!.nluConfidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_types: {
      value: cdktn.listMapperHcl(lexBotBotLocalesSlotTypesToHclTerraform, false)(struct!.slotTypes),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotBotLocalesSlotTypesList",
    },
    voice_settings: {
      value: lexBotBotLocalesVoiceSettingsToHclTerraform(struct!.voiceSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotBotLocalesVoiceSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotBotLocalesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotLocales | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVocabulary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVocabulary = this._customVocabulary?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._intents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intents = this._intents?.internalValue;
    }
    if (this._localeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localeId = this._localeId;
    }
    if (this._nluConfidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.nluConfidenceThreshold = this._nluConfidenceThreshold;
    }
    if (this._slotTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotTypes = this._slotTypes?.internalValue;
    }
    if (this._voiceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceSettings = this._voiceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotBotLocales | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVocabulary.internalValue = undefined;
      this._description = undefined;
      this._intents.internalValue = undefined;
      this._localeId = undefined;
      this._nluConfidenceThreshold = undefined;
      this._slotTypes.internalValue = undefined;
      this._voiceSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVocabulary.internalValue = value.customVocabulary;
      this._description = value.description;
      this._intents.internalValue = value.intents;
      this._localeId = value.localeId;
      this._nluConfidenceThreshold = value.nluConfidenceThreshold;
      this._slotTypes.internalValue = value.slotTypes;
      this._voiceSettings.internalValue = value.voiceSettings;
    }
  }

  // custom_vocabulary - computed: true, optional: true, required: false
  private _customVocabulary = new LexBotBotLocalesCustomVocabularyOutputReference(this, "custom_vocabulary");
  public get customVocabulary() {
    return this._customVocabulary;
  }
  public putCustomVocabulary(value: LexBotBotLocalesCustomVocabulary) {
    this._customVocabulary.internalValue = value;
  }
  public resetCustomVocabulary() {
    this._customVocabulary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVocabularyInput() {
    return this._customVocabulary.internalValue;
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

  // intents - computed: true, optional: true, required: false
  private _intents = new LexBotBotLocalesIntentsList(this, "intents", true);
  public get intents() {
    return this._intents;
  }
  public putIntents(value: LexBotBotLocalesIntents[] | cdktn.IResolvable) {
    this._intents.internalValue = value;
  }
  public resetIntents() {
    this._intents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentsInput() {
    return this._intents.internalValue;
  }

  // locale_id - computed: true, optional: true, required: false
  private _localeId?: string;
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
  public set localeId(value: string) {
    this._localeId = value;
  }
  public resetLocaleId() {
    this._localeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeIdInput() {
    return this._localeId;
  }

  // nlu_confidence_threshold - computed: true, optional: true, required: false
  private _nluConfidenceThreshold?: number;
  public get nluConfidenceThreshold() {
    return this.getNumberAttribute('nlu_confidence_threshold');
  }
  public set nluConfidenceThreshold(value: number) {
    this._nluConfidenceThreshold = value;
  }
  public resetNluConfidenceThreshold() {
    this._nluConfidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluConfidenceThresholdInput() {
    return this._nluConfidenceThreshold;
  }

  // slot_types - computed: true, optional: true, required: false
  private _slotTypes = new LexBotBotLocalesSlotTypesList(this, "slot_types", true);
  public get slotTypes() {
    return this._slotTypes;
  }
  public putSlotTypes(value: LexBotBotLocalesSlotTypes[] | cdktn.IResolvable) {
    this._slotTypes.internalValue = value;
  }
  public resetSlotTypes() {
    this._slotTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotTypesInput() {
    return this._slotTypes.internalValue;
  }

  // voice_settings - computed: true, optional: true, required: false
  private _voiceSettings = new LexBotBotLocalesVoiceSettingsOutputReference(this, "voice_settings");
  public get voiceSettings() {
    return this._voiceSettings;
  }
  public putVoiceSettings(value: LexBotBotLocalesVoiceSettings) {
    this._voiceSettings.internalValue = value;
  }
  public resetVoiceSettings() {
    this._voiceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceSettingsInput() {
    return this._voiceSettings.internalValue;
  }
}

export class LexBotBotLocalesList extends cdktn.ComplexList {
  public internalValue? : LexBotBotLocales[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotLocalesOutputReference {
    return new LexBotBotLocalesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotBotTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#key LexBot#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotBotTagsToTerraform(struct?: LexBotBotTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotBotTagsToHclTerraform(struct?: LexBotBotTags | cdktn.IResolvable): any {
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

export class LexBotBotTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotBotTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotBotTags | cdktn.IResolvable | undefined) {
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

export class LexBotBotTagsList extends cdktn.ComplexList {
  public internalValue? : LexBotBotTags[] | cdktn.IResolvable

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
  public get(index: number): LexBotBotTagsOutputReference {
    return new LexBotBotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotDataPrivacy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#child_directed LexBot#child_directed}
  */
  readonly childDirected: boolean | cdktn.IResolvable;
}

export function lexBotDataPrivacyToTerraform(struct?: LexBotDataPrivacy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    child_directed: cdktn.booleanToTerraform(struct!.childDirected),
  }
}


export function lexBotDataPrivacyToHclTerraform(struct?: LexBotDataPrivacy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    child_directed: {
      value: cdktn.booleanToHclTerraform(struct!.childDirected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotDataPrivacyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotDataPrivacy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childDirected !== undefined) {
      hasAnyValues = true;
      internalValueResult.childDirected = this._childDirected;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotDataPrivacy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._childDirected = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._childDirected = value.childDirected;
    }
  }

  // child_directed - computed: false, optional: false, required: true
  private _childDirected?: boolean | cdktn.IResolvable;
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }
  public set childDirected(value: boolean | cdktn.IResolvable) {
    this._childDirected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childDirectedInput() {
    return this._childDirected;
  }
}
export interface LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {
  /**
  * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#code_hook_interface_version LexBot#code_hook_interface_version}
  */
  readonly codeHookInterfaceVersion?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#lambda_arn LexBot#lambda_arn}
  */
  readonly lambdaArn?: string;
}

export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_hook_interface_version: cdktn.stringToTerraform(struct!.codeHookInterfaceVersion),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToHclTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_hook_interface_version: {
      value: cdktn.stringToHclTerraform(struct!.codeHookInterfaceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeHookInterfaceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeHookInterfaceVersion = this._codeHookInterfaceVersion;
    }
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeHookInterfaceVersion = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeHookInterfaceVersion = value.codeHookInterfaceVersion;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // code_hook_interface_version - computed: true, optional: true, required: false
  private _codeHookInterfaceVersion?: string;
  public get codeHookInterfaceVersion() {
    return this.getStringAttribute('code_hook_interface_version');
  }
  public set codeHookInterfaceVersion(value: string) {
    this._codeHookInterfaceVersion = value;
  }
  public resetCodeHookInterfaceVersion() {
    this._codeHookInterfaceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHookInterfaceVersionInput() {
    return this._codeHookInterfaceVersion;
  }

  // lambda_arn - computed: true, optional: true, required: false
  private _lambdaArn?: string;
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  public resetLambdaArn() {
    this._lambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}
export interface LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {
  /**
  * Contains information about code hooks that Amazon Lex calls during a conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#lambda_code_hook LexBot#lambda_code_hook}
  */
  readonly lambdaCodeHook?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook;
}

export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_code_hook: lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToTerraform(struct!.lambdaCodeHook),
  }
}


export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToHclTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_code_hook: {
      value: lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToHclTerraform(struct!.lambdaCodeHook),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaCodeHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaCodeHook = this._lambdaCodeHook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaCodeHook.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaCodeHook.internalValue = value.lambdaCodeHook;
    }
  }

  // lambda_code_hook - computed: true, optional: true, required: false
  private _lambdaCodeHook = new LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(this, "lambda_code_hook");
  public get lambdaCodeHook() {
    return this._lambdaCodeHook;
  }
  public putLambdaCodeHook(value: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook) {
    this._lambdaCodeHook.internalValue = value;
  }
  public resetLambdaCodeHook() {
    this._lambdaCodeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaCodeHookInput() {
    return this._lambdaCodeHook.internalValue;
  }
}
export interface LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting {
  /**
  * Contains information about code hooks that Amazon Lex calls during a conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#code_hook_specification LexBot#code_hook_specification}
  */
  readonly codeHookSpecification?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification;
  /**
  * Whether the Lambda code hook is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#enabled LexBot#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingToTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_hook_specification: lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToTerraform(struct!.codeHookSpecification),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingToHclTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_hook_specification: {
      value: lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToHclTerraform(struct!.codeHookSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeHookSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeHookSpecification = this._codeHookSpecification?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeHookSpecification.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeHookSpecification.internalValue = value.codeHookSpecification;
      this._enabled = value.enabled;
    }
  }

  // code_hook_specification - computed: true, optional: true, required: false
  private _codeHookSpecification = new LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(this, "code_hook_specification");
  public get codeHookSpecification() {
    return this._codeHookSpecification;
  }
  public putCodeHookSpecification(value: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification) {
    this._codeHookSpecification.internalValue = value;
  }
  public resetCodeHookSpecification() {
    this._codeHookSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHookSpecificationInput() {
    return this._codeHookSpecification.internalValue;
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
}
export interface LexBotTestBotAliasSettingsBotAliasLocaleSettings {
  /**
  * You can use this parameter to specify a specific Lambda function to run different functions in different locales.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#bot_alias_locale_setting LexBot#bot_alias_locale_setting}
  */
  readonly botAliasLocaleSetting?: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting;
  /**
  * A string used to identify the locale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#locale_id LexBot#locale_id}
  */
  readonly localeId?: string;
}

export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsToTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_alias_locale_setting: lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingToTerraform(struct!.botAliasLocaleSetting),
    locale_id: cdktn.stringToTerraform(struct!.localeId),
  }
}


export function lexBotTestBotAliasSettingsBotAliasLocaleSettingsToHclTerraform(struct?: LexBotTestBotAliasSettingsBotAliasLocaleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bot_alias_locale_setting: {
      value: lexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingToHclTerraform(struct!.botAliasLocaleSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting",
    },
    locale_id: {
      value: cdktn.stringToHclTerraform(struct!.localeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsBotAliasLocaleSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotTestBotAliasSettingsBotAliasLocaleSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botAliasLocaleSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botAliasLocaleSetting = this._botAliasLocaleSetting?.internalValue;
    }
    if (this._localeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localeId = this._localeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsBotAliasLocaleSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botAliasLocaleSetting.internalValue = undefined;
      this._localeId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botAliasLocaleSetting.internalValue = value.botAliasLocaleSetting;
      this._localeId = value.localeId;
    }
  }

  // bot_alias_locale_setting - computed: true, optional: true, required: false
  private _botAliasLocaleSetting = new LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(this, "bot_alias_locale_setting");
  public get botAliasLocaleSetting() {
    return this._botAliasLocaleSetting;
  }
  public putBotAliasLocaleSetting(value: LexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting) {
    this._botAliasLocaleSetting.internalValue = value;
  }
  public resetBotAliasLocaleSetting() {
    this._botAliasLocaleSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botAliasLocaleSettingInput() {
    return this._botAliasLocaleSetting.internalValue;
  }

  // locale_id - computed: true, optional: true, required: false
  private _localeId?: string;
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
  public set localeId(value: string) {
    this._localeId = value;
  }
  public resetLocaleId() {
    this._localeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeIdInput() {
    return this._localeId;
  }
}

export class LexBotTestBotAliasSettingsBotAliasLocaleSettingsList extends cdktn.ComplexList {
  public internalValue? : LexBotTestBotAliasSettingsBotAliasLocaleSettings[] | cdktn.IResolvable

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
  public get(index: number): LexBotTestBotAliasSettingsBotAliasLocaleSettingsOutputReference {
    return new LexBotTestBotAliasSettingsBotAliasLocaleSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket {
  /**
  * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#kms_key_arn LexBot#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The Amazon S3 key of the deployment package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#log_prefix LexBot#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#s3_bucket_arn LexBot#s3_bucket_arn}
  */
  readonly s3BucketArn?: string;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    log_prefix: cdktn.stringToTerraform(struct!.logPrefix),
    s3_bucket_arn: cdktn.stringToTerraform(struct!.s3BucketArn),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._logPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPrefix = this._logPrefix;
    }
    if (this._s3BucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketArn = this._s3BucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._logPrefix = undefined;
      this._s3BucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._logPrefix = value.logPrefix;
      this._s3BucketArn = value.s3BucketArn;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // log_prefix - computed: true, optional: true, required: false
  private _logPrefix?: string;
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
  public set logPrefix(value: string) {
    this._logPrefix = value;
  }
  public resetLogPrefix() {
    this._logPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPrefixInput() {
    return this._logPrefix;
  }

  // s3_bucket_arn - computed: true, optional: true, required: false
  private _s3BucketArn?: string;
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }
  public resetS3BucketArn() {
    this._s3BucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketArnInput() {
    return this._s3BucketArn;
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination {
  /**
  * Specifies an Amazon S3 bucket for logging audio conversations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#s3_bucket LexBot#s3_bucket}
  */
  readonly s3Bucket?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket: lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketToTerraform(struct!.s3Bucket),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket: {
      value: lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketToHclTerraform(struct!.s3Bucket),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Bucket.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Bucket.internalValue = value.s3Bucket;
    }
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket = new LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(this, "s3_bucket");
  public get s3Bucket() {
    return this._s3Bucket;
  }
  public putS3Bucket(value: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket) {
    this._s3Bucket.internalValue = value;
  }
  public resetS3Bucket() {
    this._s3Bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket.internalValue;
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings {
  /**
  * The location of audio log files collected when conversation logging is enabled for a bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#destination LexBot#destination}
  */
  readonly destination?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#enabled LexBot#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationToTerraform(struct!.destination),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._enabled = undefined;
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
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination) {
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
}

export class LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsList extends cdktn.ComplexList {
  public internalValue? : LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings[] | cdktn.IResolvable

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
  public get(index: number): LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsOutputReference {
    return new LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch {
  /**
  * A string used to identify the groupArn for the Cloudwatch Log Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#cloudwatch_log_group_arn LexBot#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * A string containing the value for the Log Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#log_prefix LexBot#log_prefix}
  */
  readonly logPrefix?: string;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group_arn: cdktn.stringToTerraform(struct!.cloudwatchLogGroupArn),
    log_prefix: cdktn.stringToTerraform(struct!.logPrefix),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_prefix: {
      value: cdktn.stringToHclTerraform(struct!.logPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroupArn = this._cloudwatchLogGroupArn;
    }
    if (this._logPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPrefix = this._logPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupArn = undefined;
      this._logPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroupArn = value.cloudwatchLogGroupArn;
      this._logPrefix = value.logPrefix;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: true, required: false
  private _cloudwatchLogGroupArn?: string;
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn;
  }

  // log_prefix - computed: true, optional: true, required: false
  private _logPrefix?: string;
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
  public set logPrefix(value: string) {
    this._logPrefix = value;
  }
  public resetLogPrefix() {
    this._logPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPrefixInput() {
    return this._logPrefix;
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#cloudwatch LexBot#cloudwatch}
  */
  readonly cloudwatch?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch: lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchToTerraform(struct!.cloudwatch),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch: {
      value: lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchToHclTerraform(struct!.cloudwatch),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatch.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatch.internalValue = value.cloudwatch;
    }
  }

  // cloudwatch - computed: true, optional: true, required: false
  private _cloudwatch = new LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings {
  /**
  * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#destination LexBot#destination}
  */
  readonly destination?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#enabled LexBot#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationToTerraform(struct!.destination),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._enabled = undefined;
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
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination = new LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination) {
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
}

export class LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsList extends cdktn.ComplexList {
  public internalValue? : LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings[] | cdktn.IResolvable

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
  public get(index: number): LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsOutputReference {
    return new LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotTestBotAliasSettingsConversationLogSettings {
  /**
  * List of audio log settings that pertain to the conversation log settings for the bot's TestBotAlias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#audio_log_settings LexBot#audio_log_settings}
  */
  readonly audioLogSettings?: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings[] | cdktn.IResolvable;
  /**
  * List of text log settings that pertain to the conversation log settings for the bot's TestBotAlias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#text_log_settings LexBot#text_log_settings}
  */
  readonly textLogSettings?: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings[] | cdktn.IResolvable;
}

export function lexBotTestBotAliasSettingsConversationLogSettingsToTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_log_settings: cdktn.listMapper(lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsToTerraform, false)(struct!.audioLogSettings),
    text_log_settings: cdktn.listMapper(lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsToTerraform, false)(struct!.textLogSettings),
  }
}


export function lexBotTestBotAliasSettingsConversationLogSettingsToHclTerraform(struct?: LexBotTestBotAliasSettingsConversationLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_log_settings: {
      value: cdktn.listMapperHcl(lexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsToHclTerraform, false)(struct!.audioLogSettings),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsList",
    },
    text_log_settings: {
      value: cdktn.listMapperHcl(lexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsToHclTerraform, false)(struct!.textLogSettings),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsConversationLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsConversationLogSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioLogSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioLogSettings = this._audioLogSettings?.internalValue;
    }
    if (this._textLogSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogSettings = this._textLogSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsConversationLogSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioLogSettings.internalValue = undefined;
      this._textLogSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioLogSettings.internalValue = value.audioLogSettings;
      this._textLogSettings.internalValue = value.textLogSettings;
    }
  }

  // audio_log_settings - computed: true, optional: true, required: false
  private _audioLogSettings = new LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsList(this, "audio_log_settings", true);
  public get audioLogSettings() {
    return this._audioLogSettings;
  }
  public putAudioLogSettings(value: LexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings[] | cdktn.IResolvable) {
    this._audioLogSettings.internalValue = value;
  }
  public resetAudioLogSettings() {
    this._audioLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioLogSettingsInput() {
    return this._audioLogSettings.internalValue;
  }

  // text_log_settings - computed: true, optional: true, required: false
  private _textLogSettings = new LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsList(this, "text_log_settings", true);
  public get textLogSettings() {
    return this._textLogSettings;
  }
  public putTextLogSettings(value: LexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings[] | cdktn.IResolvable) {
    this._textLogSettings.internalValue = value;
  }
  public resetTextLogSettings() {
    this._textLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogSettingsInput() {
    return this._textLogSettings.internalValue;
  }
}
export interface LexBotTestBotAliasSettingsSentimentAnalysisSettings {
  /**
  * Enable to call Amazon Comprehend for Sentiment natively within Lex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#detect_sentiment LexBot#detect_sentiment}
  */
  readonly detectSentiment?: boolean | cdktn.IResolvable;
}

export function lexBotTestBotAliasSettingsSentimentAnalysisSettingsToTerraform(struct?: LexBotTestBotAliasSettingsSentimentAnalysisSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detect_sentiment: cdktn.booleanToTerraform(struct!.detectSentiment),
  }
}


export function lexBotTestBotAliasSettingsSentimentAnalysisSettingsToHclTerraform(struct?: LexBotTestBotAliasSettingsSentimentAnalysisSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detect_sentiment: {
      value: cdktn.booleanToHclTerraform(struct!.detectSentiment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsSentimentAnalysisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettingsSentimentAnalysisSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectSentiment !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectSentiment = this._detectSentiment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettingsSentimentAnalysisSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectSentiment = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectSentiment = value.detectSentiment;
    }
  }

  // detect_sentiment - computed: true, optional: true, required: false
  private _detectSentiment?: boolean | cdktn.IResolvable;
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }
  public set detectSentiment(value: boolean | cdktn.IResolvable) {
    this._detectSentiment = value;
  }
  public resetDetectSentiment() {
    this._detectSentiment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectSentimentInput() {
    return this._detectSentiment;
  }
}
export interface LexBotTestBotAliasSettings {
  /**
  * A list of bot alias locale settings to add to the bot alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#bot_alias_locale_settings LexBot#bot_alias_locale_settings}
  */
  readonly botAliasLocaleSettings?: LexBotTestBotAliasSettingsBotAliasLocaleSettings[] | cdktn.IResolvable;
  /**
  * Contains information about code hooks that Amazon Lex calls during a conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#conversation_log_settings LexBot#conversation_log_settings}
  */
  readonly conversationLogSettings?: LexBotTestBotAliasSettingsConversationLogSettings;
  /**
  * A description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#sentiment_analysis_settings LexBot#sentiment_analysis_settings}
  */
  readonly sentimentAnalysisSettings?: LexBotTestBotAliasSettingsSentimentAnalysisSettings;
}

export function lexBotTestBotAliasSettingsToTerraform(struct?: LexBotTestBotAliasSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_alias_locale_settings: cdktn.listMapper(lexBotTestBotAliasSettingsBotAliasLocaleSettingsToTerraform, false)(struct!.botAliasLocaleSettings),
    conversation_log_settings: lexBotTestBotAliasSettingsConversationLogSettingsToTerraform(struct!.conversationLogSettings),
    description: cdktn.stringToTerraform(struct!.description),
    sentiment_analysis_settings: lexBotTestBotAliasSettingsSentimentAnalysisSettingsToTerraform(struct!.sentimentAnalysisSettings),
  }
}


export function lexBotTestBotAliasSettingsToHclTerraform(struct?: LexBotTestBotAliasSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bot_alias_locale_settings: {
      value: cdktn.listMapperHcl(lexBotTestBotAliasSettingsBotAliasLocaleSettingsToHclTerraform, false)(struct!.botAliasLocaleSettings),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotTestBotAliasSettingsBotAliasLocaleSettingsList",
    },
    conversation_log_settings: {
      value: lexBotTestBotAliasSettingsConversationLogSettingsToHclTerraform(struct!.conversationLogSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsConversationLogSettings",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentiment_analysis_settings: {
      value: lexBotTestBotAliasSettingsSentimentAnalysisSettingsToHclTerraform(struct!.sentimentAnalysisSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotTestBotAliasSettingsSentimentAnalysisSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotTestBotAliasSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTestBotAliasSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botAliasLocaleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botAliasLocaleSettings = this._botAliasLocaleSettings?.internalValue;
    }
    if (this._conversationLogSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationLogSettings = this._conversationLogSettings?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._sentimentAnalysisSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentAnalysisSettings = this._sentimentAnalysisSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotTestBotAliasSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botAliasLocaleSettings.internalValue = undefined;
      this._conversationLogSettings.internalValue = undefined;
      this._description = undefined;
      this._sentimentAnalysisSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botAliasLocaleSettings.internalValue = value.botAliasLocaleSettings;
      this._conversationLogSettings.internalValue = value.conversationLogSettings;
      this._description = value.description;
      this._sentimentAnalysisSettings.internalValue = value.sentimentAnalysisSettings;
    }
  }

  // bot_alias_locale_settings - computed: true, optional: true, required: false
  private _botAliasLocaleSettings = new LexBotTestBotAliasSettingsBotAliasLocaleSettingsList(this, "bot_alias_locale_settings", true);
  public get botAliasLocaleSettings() {
    return this._botAliasLocaleSettings;
  }
  public putBotAliasLocaleSettings(value: LexBotTestBotAliasSettingsBotAliasLocaleSettings[] | cdktn.IResolvable) {
    this._botAliasLocaleSettings.internalValue = value;
  }
  public resetBotAliasLocaleSettings() {
    this._botAliasLocaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botAliasLocaleSettingsInput() {
    return this._botAliasLocaleSettings.internalValue;
  }

  // conversation_log_settings - computed: true, optional: true, required: false
  private _conversationLogSettings = new LexBotTestBotAliasSettingsConversationLogSettingsOutputReference(this, "conversation_log_settings");
  public get conversationLogSettings() {
    return this._conversationLogSettings;
  }
  public putConversationLogSettings(value: LexBotTestBotAliasSettingsConversationLogSettings) {
    this._conversationLogSettings.internalValue = value;
  }
  public resetConversationLogSettings() {
    this._conversationLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationLogSettingsInput() {
    return this._conversationLogSettings.internalValue;
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

  // sentiment_analysis_settings - computed: true, optional: true, required: false
  private _sentimentAnalysisSettings = new LexBotTestBotAliasSettingsSentimentAnalysisSettingsOutputReference(this, "sentiment_analysis_settings");
  public get sentimentAnalysisSettings() {
    return this._sentimentAnalysisSettings;
  }
  public putSentimentAnalysisSettings(value: LexBotTestBotAliasSettingsSentimentAnalysisSettings) {
    this._sentimentAnalysisSettings.internalValue = value;
  }
  public resetSentimentAnalysisSettings() {
    this._sentimentAnalysisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentAnalysisSettingsInput() {
    return this._sentimentAnalysisSettings.internalValue;
  }
}
export interface LexBotTestBotAliasTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#key LexBot#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot#value LexBot#value}
  */
  readonly value?: string;
}

export function lexBotTestBotAliasTagsToTerraform(struct?: LexBotTestBotAliasTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotTestBotAliasTagsToHclTerraform(struct?: LexBotTestBotAliasTags | cdktn.IResolvable): any {
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

export class LexBotTestBotAliasTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotTestBotAliasTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotTestBotAliasTags | cdktn.IResolvable | undefined) {
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

export class LexBotTestBotAliasTagsList extends cdktn.ComplexList {
  public internalValue? : LexBotTestBotAliasTags[] | cdktn.IResolvable

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
  public get(index: number): LexBotTestBotAliasTagsOutputReference {
    return new LexBotTestBotAliasTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
