import * as cdktn from 'cdktn';
import { DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationOutputReference,
DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationOutputReference,
DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSettingOutputReference,
DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSettingOutputReference,
DataAwsccLexBotBotLocalesIntentsDialogCodeHookOutputReference,
DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookOutputReference,
DataAwsccLexBotBotLocalesIntentsInputContextsList,
DataAwsccLexBotBotLocalesIntentsIntentClosingSettingOutputReference,
DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingOutputReference,
DataAwsccLexBotBotLocalesIntentsKendraConfigurationOutputReference,
DataAwsccLexBotBotLocalesIntentsOutputContextsList,
DataAwsccLexBotBotLocalesIntentsSampleUtterancesList,
DataAwsccLexBotBotLocalesIntentsSlotPrioritiesList,
DataAwsccLexBotBotLocalesCustomVocabularyOutputReference } from './structs0';
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // utterance - computed: true, optional: false, required: false
  public get utterance() {
    return this.getStringAttribute('utterance');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_interrupt - computed: true, optional: false, required: false
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }

  // message_groups_list - computed: true, optional: false, required: false
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_interrupt - computed: true, optional: false, required: false
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }

  // frequency_in_seconds - computed: true, optional: false, required: false
  public get frequencyInSeconds() {
    return this.getNumberAttribute('frequency_in_seconds');
  }

  // message_groups_list - computed: true, optional: false, required: false
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
  public get buttons() {
    return this._buttons;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_interrupt - computed: true, optional: false, required: false
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }

  // message_groups_list - computed: true, optional: false, required: false
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue_response - computed: true, optional: false, required: false
  private _continueResponse = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationContinueResponseOutputReference(this, "continue_response");
  public get continueResponse() {
    return this._continueResponse;
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // still_waiting_response - computed: true, optional: false, required: false
  private _stillWaitingResponse = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationStillWaitingResponseOutputReference(this, "still_waiting_response");
  public get stillWaitingResponse() {
    return this._stillWaitingResponse;
  }

  // waiting_response - computed: true, optional: false, required: false
  private _waitingResponse = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationWaitingResponseOutputReference(this, "waiting_response");
  public get waitingResponse() {
    return this._waitingResponse;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSetting {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value_specification - computed: true, optional: false, required: false
  private _defaultValueSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationOutputReference(this, "default_value_specification");
  public get defaultValueSpecification() {
    return this._defaultValueSpecification;
  }

  // prompt_specification - computed: true, optional: false, required: false
  private _promptSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationOutputReference(this, "prompt_specification");
  public get promptSpecification() {
    return this._promptSpecification;
  }

  // sample_utterances - computed: true, optional: false, required: false
  private _sampleUtterances = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingSampleUtterancesList(this, "sample_utterances", false);
  public get sampleUtterances() {
    return this._sampleUtterances;
  }

  // slot_constraint - computed: true, optional: false, required: false
  public get slotConstraint() {
    return this.getStringAttribute('slot_constraint');
  }

  // wait_and_continue_specification - computed: true, optional: false, required: false
  private _waitAndContinueSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingWaitAndContinueSpecificationOutputReference(this, "wait_and_continue_specification");
  public get waitAndContinueSpecification() {
    return this._waitAndContinueSpecification;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlots {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // multiple_values_setting - computed: true, optional: false, required: false
  private _multipleValuesSetting = new DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSettingOutputReference(this, "multiple_values_setting");
  public get multipleValuesSetting() {
    return this._multipleValuesSetting;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // obfuscation_setting - computed: true, optional: false, required: false
  private _obfuscationSetting = new DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSettingOutputReference(this, "obfuscation_setting");
  public get obfuscationSetting() {
    return this._obfuscationSetting;
  }

  // slot_type_name - computed: true, optional: false, required: false
  public get slotTypeName() {
    return this.getStringAttribute('slot_type_name');
  }

  // value_elicitation_setting - computed: true, optional: false, required: false
  private _valueElicitationSetting = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingOutputReference(this, "value_elicitation_setting");
  public get valueElicitationSetting() {
    return this._valueElicitationSetting;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntents {
}

export function dataAwsccLexBotBotLocalesIntentsToTerraform(struct?: DataAwsccLexBotBotLocalesIntents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dialog_code_hook - computed: true, optional: false, required: false
  private _dialogCodeHook = new DataAwsccLexBotBotLocalesIntentsDialogCodeHookOutputReference(this, "dialog_code_hook");
  public get dialogCodeHook() {
    return this._dialogCodeHook;
  }

  // fulfillment_code_hook - computed: true, optional: false, required: false
  private _fulfillmentCodeHook = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookOutputReference(this, "fulfillment_code_hook");
  public get fulfillmentCodeHook() {
    return this._fulfillmentCodeHook;
  }

  // input_contexts - computed: true, optional: false, required: false
  private _inputContexts = new DataAwsccLexBotBotLocalesIntentsInputContextsList(this, "input_contexts", false);
  public get inputContexts() {
    return this._inputContexts;
  }

  // intent_closing_setting - computed: true, optional: false, required: false
  private _intentClosingSetting = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingOutputReference(this, "intent_closing_setting");
  public get intentClosingSetting() {
    return this._intentClosingSetting;
  }

  // intent_confirmation_setting - computed: true, optional: false, required: false
  private _intentConfirmationSetting = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingOutputReference(this, "intent_confirmation_setting");
  public get intentConfirmationSetting() {
    return this._intentConfirmationSetting;
  }

  // kendra_configuration - computed: true, optional: false, required: false
  private _kendraConfiguration = new DataAwsccLexBotBotLocalesIntentsKendraConfigurationOutputReference(this, "kendra_configuration");
  public get kendraConfiguration() {
    return this._kendraConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_contexts - computed: true, optional: false, required: false
  private _outputContexts = new DataAwsccLexBotBotLocalesIntentsOutputContextsList(this, "output_contexts", false);
  public get outputContexts() {
    return this._outputContexts;
  }

  // parent_intent_signature - computed: true, optional: false, required: false
  public get parentIntentSignature() {
    return this.getStringAttribute('parent_intent_signature');
  }

  // sample_utterances - computed: true, optional: false, required: false
  private _sampleUtterances = new DataAwsccLexBotBotLocalesIntentsSampleUtterancesList(this, "sample_utterances", false);
  public get sampleUtterances() {
    return this._sampleUtterances;
  }

  // slot_priorities - computed: true, optional: false, required: false
  private _slotPriorities = new DataAwsccLexBotBotLocalesIntentsSlotPrioritiesList(this, "slot_priorities", false);
  public get slotPriorities() {
    return this._slotPriorities;
  }

  // slots - computed: true, optional: false, required: false
  private _slots = new DataAwsccLexBotBotLocalesIntentsSlotsList(this, "slots", true);
  public get slots() {
    return this._slots;
  }
}

export class DataAwsccLexBotBotLocalesIntentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource {
}

export function dataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_object_key - computed: true, optional: false, required: false
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting {
}

export function dataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesExternalSourceSetting {
}

export function dataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesExternalSourceSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesExternalSourceSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grammar_slot_type_setting - computed: true, optional: false, required: false
  private _grammarSlotTypeSetting = new DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingGrammarSlotTypeSettingOutputReference(this, "grammar_slot_type_setting");
  public get grammarSlotTypeSetting() {
    return this._grammarSlotTypeSetting;
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValue {
}

export function dataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValueToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValueToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonyms {
}

export function dataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonyms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonyms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonyms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonyms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsOutputReference {
    return new DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesSlotTypeValues {
}

export function dataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesSlotTypeValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesSlotTypeValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sample_value - computed: true, optional: false, required: false
  private _sampleValue = new DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSampleValueOutputReference(this, "sample_value");
  public get sampleValue() {
    return this._sampleValue;
  }

  // synonyms - computed: true, optional: false, required: false
  private _synonyms = new DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesSynonymsList(this, "synonyms", false);
  public get synonyms() {
    return this._synonyms;
  }
}

export class DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesOutputReference {
    return new DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting {
}

export function dataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_recognition_strategy - computed: true, optional: false, required: false
  public get audioRecognitionStrategy() {
    return this.getStringAttribute('audio_recognition_strategy');
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter {
}

export function dataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilter | undefined) {
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
export interface DataAwsccLexBotBotLocalesSlotTypesValueSelectionSetting {
}

export function dataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypesValueSelectionSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypesValueSelectionSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_recognition_setting - computed: true, optional: false, required: false
  private _advancedRecognitionSetting = new DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingAdvancedRecognitionSettingOutputReference(this, "advanced_recognition_setting");
  public get advancedRecognitionSetting() {
    return this._advancedRecognitionSetting;
  }

  // regex_filter - computed: true, optional: false, required: false
  private _regexFilter = new DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingRegexFilterOutputReference(this, "regex_filter");
  public get regexFilter() {
    return this._regexFilter;
  }

  // resolution_strategy - computed: true, optional: false, required: false
  public get resolutionStrategy() {
    return this.getStringAttribute('resolution_strategy');
  }
}
export interface DataAwsccLexBotBotLocalesSlotTypes {
}

export function dataAwsccLexBotBotLocalesSlotTypesToTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesSlotTypesToHclTerraform(struct?: DataAwsccLexBotBotLocalesSlotTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesSlotTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesSlotTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesSlotTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_source_setting - computed: true, optional: false, required: false
  private _externalSourceSetting = new DataAwsccLexBotBotLocalesSlotTypesExternalSourceSettingOutputReference(this, "external_source_setting");
  public get externalSourceSetting() {
    return this._externalSourceSetting;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_slot_type_signature - computed: true, optional: false, required: false
  public get parentSlotTypeSignature() {
    return this.getStringAttribute('parent_slot_type_signature');
  }

  // slot_type_values - computed: true, optional: false, required: false
  private _slotTypeValues = new DataAwsccLexBotBotLocalesSlotTypesSlotTypeValuesList(this, "slot_type_values", false);
  public get slotTypeValues() {
    return this._slotTypeValues;
  }

  // value_selection_setting - computed: true, optional: false, required: false
  private _valueSelectionSetting = new DataAwsccLexBotBotLocalesSlotTypesValueSelectionSettingOutputReference(this, "value_selection_setting");
  public get valueSelectionSetting() {
    return this._valueSelectionSetting;
  }
}

export class DataAwsccLexBotBotLocalesSlotTypesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesSlotTypesOutputReference {
    return new DataAwsccLexBotBotLocalesSlotTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesVoiceSettings {
}

export function dataAwsccLexBotBotLocalesVoiceSettingsToTerraform(struct?: DataAwsccLexBotBotLocalesVoiceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesVoiceSettingsToHclTerraform(struct?: DataAwsccLexBotBotLocalesVoiceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesVoiceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesVoiceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesVoiceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // voice_id - computed: true, optional: false, required: false
  public get voiceId() {
    return this.getStringAttribute('voice_id');
  }
}
export interface DataAwsccLexBotBotLocales {
}

export function dataAwsccLexBotBotLocalesToTerraform(struct?: DataAwsccLexBotBotLocales): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesToHclTerraform(struct?: DataAwsccLexBotBotLocales): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocales | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocales | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_vocabulary - computed: true, optional: false, required: false
  private _customVocabulary = new DataAwsccLexBotBotLocalesCustomVocabularyOutputReference(this, "custom_vocabulary");
  public get customVocabulary() {
    return this._customVocabulary;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // intents - computed: true, optional: false, required: false
  private _intents = new DataAwsccLexBotBotLocalesIntentsList(this, "intents", true);
  public get intents() {
    return this._intents;
  }

  // locale_id - computed: true, optional: false, required: false
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }

  // nlu_confidence_threshold - computed: true, optional: false, required: false
  public get nluConfidenceThreshold() {
    return this.getNumberAttribute('nlu_confidence_threshold');
  }

  // slot_types - computed: true, optional: false, required: false
  private _slotTypes = new DataAwsccLexBotBotLocalesSlotTypesList(this, "slot_types", true);
  public get slotTypes() {
    return this._slotTypes;
  }

  // voice_settings - computed: true, optional: false, required: false
  private _voiceSettings = new DataAwsccLexBotBotLocalesVoiceSettingsOutputReference(this, "voice_settings");
  public get voiceSettings() {
    return this._voiceSettings;
  }
}

export class DataAwsccLexBotBotLocalesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesOutputReference {
    return new DataAwsccLexBotBotLocalesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotTags {
}

export function dataAwsccLexBotBotTagsToTerraform(struct?: DataAwsccLexBotBotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotTagsToHclTerraform(struct?: DataAwsccLexBotBotTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotTags | undefined) {
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

export class DataAwsccLexBotBotTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotTagsOutputReference {
    return new DataAwsccLexBotBotTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotDataPrivacy {
}

export function dataAwsccLexBotDataPrivacyToTerraform(struct?: DataAwsccLexBotDataPrivacy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotDataPrivacyToHclTerraform(struct?: DataAwsccLexBotDataPrivacy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotDataPrivacyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotDataPrivacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotDataPrivacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_directed - computed: true, optional: false, required: false
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {
}

export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_hook_interface_version - computed: true, optional: false, required: false
  public get codeHookInterfaceVersion() {
    return this.getStringAttribute('code_hook_interface_version');
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {
}

export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_code_hook - computed: true, optional: false, required: false
  private _lambdaCodeHook = new DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(this, "lambda_code_hook");
  public get lambdaCodeHook() {
    return this._lambdaCodeHook;
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting {
}

export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_hook_specification - computed: true, optional: false, required: false
  private _codeHookSpecification = new DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(this, "code_hook_specification");
  public get codeHookSpecification() {
    return this._codeHookSpecification;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettings {
}

export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bot_alias_locale_setting - computed: true, optional: false, required: false
  private _botAliasLocaleSetting = new DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(this, "bot_alias_locale_setting");
  public get botAliasLocaleSetting() {
    return this._botAliasLocaleSetting;
  }

  // locale_id - computed: true, optional: false, required: false
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
}

export class DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsOutputReference {
    return new DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3Bucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // log_prefix - computed: true, optional: false, required: false
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }

  // s3_bucket_arn - computed: true, optional: false, required: false
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  private _s3Bucket = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(this, "s3_bucket");
  public get s3Bucket() {
    return this._s3Bucket;
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsOutputReference {
    return new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // log_prefix - computed: true, optional: false, required: false
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch - computed: true, optional: false, required: false
  private _cloudwatch = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsOutputReference {
    return new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsConversationLogSettings {
}

export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsConversationLogSettingsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsConversationLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsConversationLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsConversationLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_log_settings - computed: true, optional: false, required: false
  private _audioLogSettings = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsAudioLogSettingsList(this, "audio_log_settings", true);
  public get audioLogSettings() {
    return this._audioLogSettings;
  }

  // text_log_settings - computed: true, optional: false, required: false
  private _textLogSettings = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsTextLogSettingsList(this, "text_log_settings", true);
  public get textLogSettings() {
    return this._textLogSettings;
  }
}
export interface DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettings {
}

export function dataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettingsToTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettingsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detect_sentiment - computed: true, optional: false, required: false
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }
}
export interface DataAwsccLexBotTestBotAliasSettings {
}

export function dataAwsccLexBotTestBotAliasSettingsToTerraform(struct?: DataAwsccLexBotTestBotAliasSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasSettingsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotTestBotAliasSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bot_alias_locale_settings - computed: true, optional: false, required: false
  private _botAliasLocaleSettings = new DataAwsccLexBotTestBotAliasSettingsBotAliasLocaleSettingsList(this, "bot_alias_locale_settings", true);
  public get botAliasLocaleSettings() {
    return this._botAliasLocaleSettings;
  }

  // conversation_log_settings - computed: true, optional: false, required: false
  private _conversationLogSettings = new DataAwsccLexBotTestBotAliasSettingsConversationLogSettingsOutputReference(this, "conversation_log_settings");
  public get conversationLogSettings() {
    return this._conversationLogSettings;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // sentiment_analysis_settings - computed: true, optional: false, required: false
  private _sentimentAnalysisSettings = new DataAwsccLexBotTestBotAliasSettingsSentimentAnalysisSettingsOutputReference(this, "sentiment_analysis_settings");
  public get sentimentAnalysisSettings() {
    return this._sentimentAnalysisSettings;
  }
}
export interface DataAwsccLexBotTestBotAliasTags {
}

export function dataAwsccLexBotTestBotAliasTagsToTerraform(struct?: DataAwsccLexBotTestBotAliasTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotTestBotAliasTagsToHclTerraform(struct?: DataAwsccLexBotTestBotAliasTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotTestBotAliasTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotTestBotAliasTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotTestBotAliasTags | undefined) {
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

export class DataAwsccLexBotTestBotAliasTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotTestBotAliasTagsOutputReference {
    return new DataAwsccLexBotTestBotAliasTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
