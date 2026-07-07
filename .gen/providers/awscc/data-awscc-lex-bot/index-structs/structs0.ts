import * as cdktn from 'cdktn';
export interface DataAwsccLexBotBotFileS3Location {
}

export function dataAwsccLexBotBotFileS3LocationToTerraform(struct?: DataAwsccLexBotBotFileS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotFileS3LocationToHclTerraform(struct?: DataAwsccLexBotBotFileS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotFileS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotFileS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotFileS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_object_key - computed: true, optional: false, required: false
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }

  // s3_object_version - computed: true, optional: false, required: false
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
}
export interface DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItems {
}

export function dataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsToTerraform(struct?: DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsToHclTerraform(struct?: DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // phrase - computed: true, optional: false, required: false
  public get phrase() {
    return this.getStringAttribute('phrase');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsOutputReference {
    return new DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesCustomVocabulary {
}

export function dataAwsccLexBotBotLocalesCustomVocabularyToTerraform(struct?: DataAwsccLexBotBotLocalesCustomVocabulary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesCustomVocabularyToHclTerraform(struct?: DataAwsccLexBotBotLocalesCustomVocabulary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesCustomVocabularyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesCustomVocabulary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesCustomVocabulary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_vocabulary_items - computed: true, optional: false, required: false
  private _customVocabularyItems = new DataAwsccLexBotBotLocalesCustomVocabularyCustomVocabularyItemsList(this, "custom_vocabulary_items", true);
  public get customVocabularyItems() {
    return this._customVocabularyItems;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsDialogCodeHook {
}

export function dataAwsccLexBotBotLocalesIntentsDialogCodeHookToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsDialogCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsDialogCodeHookToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsDialogCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsDialogCodeHookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsDialogCodeHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsDialogCodeHook | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariations {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroups {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponse | undefined) {
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

  // delay_in_seconds - computed: true, optional: false, required: false
  public get delayInSeconds() {
    return this.getNumberAttribute('delay_in_seconds');
  }

  // message_groups - computed: true, optional: false, required: false
  private _messageGroups = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseMessageGroupsList(this, "message_groups", false);
  public get messageGroups() {
    return this._messageGroups;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariations {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroups {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponse | undefined) {
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

  // message_groups - computed: true, optional: false, required: false
  private _messageGroups = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseMessageGroupsList(this, "message_groups", false);
  public get messageGroups() {
    return this._messageGroups;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // start_response - computed: true, optional: false, required: false
  private _startResponse = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationStartResponseOutputReference(this, "start_response");
  public get startResponse() {
    return this._startResponse;
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // update_response - computed: true, optional: false, required: false
  private _updateResponse = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationUpdateResponseOutputReference(this, "update_response");
  public get updateResponse() {
    return this._updateResponse;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponse | undefined) {
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
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponse | undefined) {
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
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponse | undefined) {
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
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_response - computed: true, optional: false, required: false
  private _failureResponse = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationFailureResponseOutputReference(this, "failure_response");
  public get failureResponse() {
    return this._failureResponse;
  }

  // success_response - computed: true, optional: false, required: false
  private _successResponse = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationSuccessResponseOutputReference(this, "success_response");
  public get successResponse() {
    return this._successResponse;
  }

  // timeout_response - computed: true, optional: false, required: false
  private _timeoutResponse = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationTimeoutResponseOutputReference(this, "timeout_response");
  public get timeoutResponse() {
    return this._timeoutResponse;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHook {
}

export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHook | undefined) {
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

  // fulfillment_updates_specification - computed: true, optional: false, required: false
  private _fulfillmentUpdatesSpecification = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookFulfillmentUpdatesSpecificationOutputReference(this, "fulfillment_updates_specification");
  public get fulfillmentUpdatesSpecification() {
    return this._fulfillmentUpdatesSpecification;
  }

  // post_fulfillment_status_specification - computed: true, optional: false, required: false
  private _postFulfillmentStatusSpecification = new DataAwsccLexBotBotLocalesIntentsFulfillmentCodeHookPostFulfillmentStatusSpecificationOutputReference(this, "post_fulfillment_status_specification");
  public get postFulfillmentStatusSpecification() {
    return this._postFulfillmentStatusSpecification;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsInputContexts {
}

export function dataAwsccLexBotBotLocalesIntentsInputContextsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsInputContexts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsInputContextsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsInputContexts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsInputContextsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsInputContexts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsInputContexts | undefined) {
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
}

export class DataAwsccLexBotBotLocalesIntentsInputContextsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsInputContextsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsInputContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponse {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponse | undefined) {
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
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentClosingSetting {
}

export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentClosingSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentClosingSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentClosingSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentClosingSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentClosingSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // closing_response - computed: true, optional: false, required: false
  private _closingResponse = new DataAwsccLexBotBotLocalesIntentsIntentClosingSettingClosingResponseOutputReference(this, "closing_response");
  public get closingResponse() {
    return this._closingResponse;
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponse {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponse): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponse | undefined) {
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
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_audio_input - computed: true, optional: false, required: false
  public get allowAudioInput() {
    return this.getBooleanAttribute('allow_audio_input');
  }

  // allow_dtmf_input - computed: true, optional: false, required: false
  public get allowDtmfInput() {
    return this.getBooleanAttribute('allow_dtmf_input');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_timeout_ms - computed: true, optional: false, required: false
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }

  // max_length_ms - computed: true, optional: false, required: false
  public get maxLengthMs() {
    return this.getNumberAttribute('max_length_ms');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deletion_character - computed: true, optional: false, required: false
  public get deletionCharacter() {
    return this.getStringAttribute('deletion_character');
  }

  // end_character - computed: true, optional: false, required: false
  public get endCharacter() {
    return this.getStringAttribute('end_character');
  }

  // end_timeout_ms - computed: true, optional: false, required: false
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_specification - computed: true, optional: false, required: false
  private _audioSpecification = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference(this, "audio_specification");
  public get audioSpecification() {
    return this._audioSpecification;
  }

  // dtmf_specification - computed: true, optional: false, required: false
  private _dtmfSpecification = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference(this, "dtmf_specification");
  public get dtmfSpecification() {
    return this._dtmfSpecification;
  }

  // start_timeout_ms - computed: true, optional: false, required: false
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_timeout_ms - computed: true, optional: false, required: false
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecification | undefined) {
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

  // allowed_input_types - computed: true, optional: false, required: false
  private _allowedInputTypes = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference(this, "allowed_input_types");
  public get allowedInputTypes() {
    return this._allowedInputTypes;
  }

  // audio_and_dtmf_input_specification - computed: true, optional: false, required: false
  private _audioAndDtmfInputSpecification = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference(this, "audio_and_dtmf_input_specification");
  public get audioAndDtmfInputSpecification() {
    return this._audioAndDtmfInputSpecification;
  }

  // text_input_specification - computed: true, optional: false, required: false
  private _textInputSpecification = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference(this, "text_input_specification");
  public get textInputSpecification() {
    return this._textInputSpecification;
  }
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecification | undefined) {
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

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // message_groups_list - computed: true, optional: false, required: false
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }

  // message_selection_strategy - computed: true, optional: false, required: false
  public get messageSelectionStrategy() {
    return this.getStringAttribute('message_selection_strategy');
  }

  // prompt_attempts_specification - computed: true, optional: false, required: false
  private _promptAttemptsSpecification = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationPromptAttemptsSpecificationMap(this, "prompt_attempts_specification");
  public get promptAttemptsSpecification() {
    return this._promptAttemptsSpecification;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsIntentConfirmationSetting {
}

export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsIntentConfirmationSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsIntentConfirmationSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // declination_response - computed: true, optional: false, required: false
  private _declinationResponse = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingDeclinationResponseOutputReference(this, "declination_response");
  public get declinationResponse() {
    return this._declinationResponse;
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // prompt_specification - computed: true, optional: false, required: false
  private _promptSpecification = new DataAwsccLexBotBotLocalesIntentsIntentConfirmationSettingPromptSpecificationOutputReference(this, "prompt_specification");
  public get promptSpecification() {
    return this._promptSpecification;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsKendraConfiguration {
}

export function dataAwsccLexBotBotLocalesIntentsKendraConfigurationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsKendraConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsKendraConfigurationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsKendraConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsKendraConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsKendraConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsKendraConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kendra_index - computed: true, optional: false, required: false
  public get kendraIndex() {
    return this.getStringAttribute('kendra_index');
  }

  // query_filter_string - computed: true, optional: false, required: false
  public get queryFilterString() {
    return this.getStringAttribute('query_filter_string');
  }

  // query_filter_string_enabled - computed: true, optional: false, required: false
  public get queryFilterStringEnabled() {
    return this.getBooleanAttribute('query_filter_string_enabled');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsOutputContexts {
}

export function dataAwsccLexBotBotLocalesIntentsOutputContextsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsOutputContexts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsOutputContextsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsOutputContexts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsOutputContextsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsOutputContexts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsOutputContexts | undefined) {
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

  // time_to_live_in_seconds - computed: true, optional: false, required: false
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }

  // turns_to_live - computed: true, optional: false, required: false
  public get turnsToLive() {
    return this.getNumberAttribute('turns_to_live');
  }
}

export class DataAwsccLexBotBotLocalesIntentsOutputContextsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsOutputContextsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsOutputContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSampleUtterances {
}

export function dataAwsccLexBotBotLocalesIntentsSampleUtterancesToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSampleUtterances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSampleUtterancesToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSampleUtterances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSampleUtterancesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSampleUtterances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSampleUtterances | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsSampleUtterancesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSampleUtterancesOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSampleUtterancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotPriorities {
}

export function dataAwsccLexBotBotLocalesIntentsSlotPrioritiesToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotPriorities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotPrioritiesToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotPriorities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotPrioritiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // slot_name - computed: true, optional: false, required: false
  public get slotName() {
    return this.getStringAttribute('slot_name');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotPrioritiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotPrioritiesOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotPrioritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSetting {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSettingToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsMultipleValuesSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_multiple_values - computed: true, optional: false, required: false
  public get allowMultipleValues() {
    return this.getBooleanAttribute('allow_multiple_values');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSetting {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsObfuscationSettingToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsObfuscationSettingToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsObfuscationSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // obfuscation_setting_type - computed: true, optional: false, required: false
  public get obfuscationSettingType() {
    return this.getStringAttribute('obfuscation_setting_type');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value_list - computed: true, optional: false, required: false
  private _defaultValueList = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingDefaultValueSpecificationDefaultValueListStructList(this, "default_value_list", false);
  public get defaultValueList() {
    return this._defaultValueList;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessagePlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayload | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtons | undefined) {
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

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buttons - computed: true, optional: false, required: false
  private _buttons = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardButtonsList(this, "buttons", false);
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessage | undefined) {
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
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariations {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_payload - computed: true, optional: false, required: false
  private _customPayload = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsCustomPayloadOutputReference(this, "custom_payload");
  public get customPayload() {
    return this._customPayload;
  }

  // image_response_card - computed: true, optional: false, required: false
  private _imageResponseCard = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsImageResponseCardOutputReference(this, "image_response_card");
  public get imageResponseCard() {
    return this._imageResponseCard;
  }

  // plain_text_message - computed: true, optional: false, required: false
  private _plainTextMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsPlainTextMessageOutputReference(this, "plain_text_message");
  public get plainTextMessage() {
    return this._plainTextMessage;
  }

  // ssml_message - computed: true, optional: false, required: false
  private _ssmlMessage = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsSsmlMessageOutputReference(this, "ssml_message");
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStruct {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  private _message = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }

  // variations - computed: true, optional: false, required: false
  private _variations = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_audio_input - computed: true, optional: false, required: false
  public get allowAudioInput() {
    return this.getBooleanAttribute('allow_audio_input');
  }

  // allow_dtmf_input - computed: true, optional: false, required: false
  public get allowDtmfInput() {
    return this.getBooleanAttribute('allow_dtmf_input');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_timeout_ms - computed: true, optional: false, required: false
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }

  // max_length_ms - computed: true, optional: false, required: false
  public get maxLengthMs() {
    return this.getNumberAttribute('max_length_ms');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deletion_character - computed: true, optional: false, required: false
  public get deletionCharacter() {
    return this.getStringAttribute('deletion_character');
  }

  // end_character - computed: true, optional: false, required: false
  public get endCharacter() {
    return this.getStringAttribute('end_character');
  }

  // end_timeout_ms - computed: true, optional: false, required: false
  public get endTimeoutMs() {
    return this.getNumberAttribute('end_timeout_ms');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_specification - computed: true, optional: false, required: false
  private _audioSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationAudioSpecificationOutputReference(this, "audio_specification");
  public get audioSpecification() {
    return this._audioSpecification;
  }

  // dtmf_specification - computed: true, optional: false, required: false
  private _dtmfSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationDtmfSpecificationOutputReference(this, "dtmf_specification");
  public get dtmfSpecification() {
    return this._dtmfSpecification;
  }

  // start_timeout_ms - computed: true, optional: false, required: false
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // start_timeout_ms - computed: true, optional: false, required: false
  public get startTimeoutMs() {
    return this.getNumberAttribute('start_timeout_ms');
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecification | undefined) {
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

  // allowed_input_types - computed: true, optional: false, required: false
  private _allowedInputTypes = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAllowedInputTypesOutputReference(this, "allowed_input_types");
  public get allowedInputTypes() {
    return this._allowedInputTypes;
  }

  // audio_and_dtmf_input_specification - computed: true, optional: false, required: false
  private _audioAndDtmfInputSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationAudioAndDtmfInputSpecificationOutputReference(this, "audio_and_dtmf_input_specification");
  public get audioAndDtmfInputSpecification() {
    return this._audioAndDtmfInputSpecification;
  }

  // text_input_specification - computed: true, optional: false, required: false
  private _textInputSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationTextInputSpecificationOutputReference(this, "text_input_specification");
  public get textInputSpecification() {
    return this._textInputSpecification;
  }
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference {
    return new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification {
}

export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationToTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationToHclTerraform(struct?: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecification | undefined) {
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

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // message_groups_list - computed: true, optional: false, required: false
  private _messageGroupsList = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationMessageGroupsListStructList(this, "message_groups_list", false);
  public get messageGroupsList() {
    return this._messageGroupsList;
  }

  // message_selection_strategy - computed: true, optional: false, required: false
  public get messageSelectionStrategy() {
    return this.getStringAttribute('message_selection_strategy');
  }

  // prompt_attempts_specification - computed: true, optional: false, required: false
  private _promptAttemptsSpecification = new DataAwsccLexBotBotLocalesIntentsSlotsValueElicitationSettingPromptSpecificationPromptAttemptsSpecificationMap(this, "prompt_attempts_specification");
  public get promptAttemptsSpecification() {
    return this._promptAttemptsSpecification;
  }
}
