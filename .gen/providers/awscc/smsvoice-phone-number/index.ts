// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SmsvoicePhoneNumberConfig extends cdktn.TerraformMetaArguments {
  /**
  * When set to true the sender ID can't be deleted. By default this is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#deletion_protection_enabled SmsvoicePhoneNumber#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#iso_country_code SmsvoicePhoneNumber#iso_country_code}
  */
  readonly isoCountryCode: string;
  /**
  * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#mandatory_keywords SmsvoicePhoneNumber#mandatory_keywords}
  */
  readonly mandatoryKeywords: SmsvoicePhoneNumberMandatoryKeywords;
  /**
  * Indicates if the phone number will be used for text messages, voice messages, or both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#number_capabilities SmsvoicePhoneNumber#number_capabilities}
  */
  readonly numberCapabilities: string[];
  /**
  * The type of phone number to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#number_type SmsvoicePhoneNumber#number_type}
  */
  readonly numberType: string;
  /**
  * The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#opt_out_list_name SmsvoicePhoneNumber#opt_out_list_name}
  */
  readonly optOutListName?: string;
  /**
  * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#optional_keywords SmsvoicePhoneNumber#optional_keywords}
  */
  readonly optionalKeywords?: SmsvoicePhoneNumberOptionalKeywords[] | cdktn.IResolvable;
  /**
  * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#self_managed_opt_outs_enabled SmsvoicePhoneNumber#self_managed_opt_outs_enabled}
  */
  readonly selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#tags SmsvoicePhoneNumber#tags}
  */
  readonly tags?: SmsvoicePhoneNumberTags[] | cdktn.IResolvable;
  /**
  * When you set up two-way SMS, you can receive incoming messages from your customers. When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#two_way SmsvoicePhoneNumber#two_way}
  */
  readonly twoWay?: SmsvoicePhoneNumberTwoWay;
}
export interface SmsvoicePhoneNumberMandatoryKeywordsHelp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}
  */
  readonly message: string;
}

export function smsvoicePhoneNumberMandatoryKeywordsHelpToTerraform(struct?: SmsvoicePhoneNumberMandatoryKeywordsHelp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
  }
}


export function smsvoicePhoneNumberMandatoryKeywordsHelpToHclTerraform(struct?: SmsvoicePhoneNumberMandatoryKeywordsHelp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmsvoicePhoneNumberMandatoryKeywordsHelp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoicePhoneNumberMandatoryKeywordsHelp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface SmsvoicePhoneNumberMandatoryKeywordsStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}
  */
  readonly message: string;
}

export function smsvoicePhoneNumberMandatoryKeywordsStopToTerraform(struct?: SmsvoicePhoneNumberMandatoryKeywordsStop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
  }
}


export function smsvoicePhoneNumberMandatoryKeywordsStopToHclTerraform(struct?: SmsvoicePhoneNumberMandatoryKeywordsStop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmsvoicePhoneNumberMandatoryKeywordsStop | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoicePhoneNumberMandatoryKeywordsStop | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface SmsvoicePhoneNumberMandatoryKeywords {
  /**
  * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#help SmsvoicePhoneNumber#help}
  */
  readonly help: SmsvoicePhoneNumberMandatoryKeywordsHelp;
  /**
  * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#stop SmsvoicePhoneNumber#stop}
  */
  readonly stop: SmsvoicePhoneNumberMandatoryKeywordsStop;
}

export function smsvoicePhoneNumberMandatoryKeywordsToTerraform(struct?: SmsvoicePhoneNumberMandatoryKeywords | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    help: smsvoicePhoneNumberMandatoryKeywordsHelpToTerraform(struct!.help),
    stop: smsvoicePhoneNumberMandatoryKeywordsStopToTerraform(struct!.stop),
  }
}


export function smsvoicePhoneNumberMandatoryKeywordsToHclTerraform(struct?: SmsvoicePhoneNumberMandatoryKeywords | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    help: {
      value: smsvoicePhoneNumberMandatoryKeywordsHelpToHclTerraform(struct!.help),
      isBlock: true,
      type: "struct",
      storageClassType: "SmsvoicePhoneNumberMandatoryKeywordsHelp",
    },
    stop: {
      value: smsvoicePhoneNumberMandatoryKeywordsStopToHclTerraform(struct!.stop),
      isBlock: true,
      type: "struct",
      storageClassType: "SmsvoicePhoneNumberMandatoryKeywordsStop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoicePhoneNumberMandatoryKeywordsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmsvoicePhoneNumberMandatoryKeywords | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._help?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.help = this._help?.internalValue;
    }
    if (this._stop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stop = this._stop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoicePhoneNumberMandatoryKeywords | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._help.internalValue = undefined;
      this._stop.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._help.internalValue = value.help;
      this._stop.internalValue = value.stop;
    }
  }

  // help - computed: false, optional: false, required: true
  private _help = new SmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference(this, "help");
  public get help() {
    return this._help;
  }
  public putHelp(value: SmsvoicePhoneNumberMandatoryKeywordsHelp) {
    this._help.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helpInput() {
    return this._help.internalValue;
  }

  // stop - computed: false, optional: false, required: true
  private _stop = new SmsvoicePhoneNumberMandatoryKeywordsStopOutputReference(this, "stop");
  public get stop() {
    return this._stop;
  }
  public putStop(value: SmsvoicePhoneNumberMandatoryKeywordsStop) {
    this._stop.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInput() {
    return this._stop.internalValue;
  }
}
export interface SmsvoicePhoneNumberOptionalKeywords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#action SmsvoicePhoneNumber#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#keyword SmsvoicePhoneNumber#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#message SmsvoicePhoneNumber#message}
  */
  readonly message?: string;
}

export function smsvoicePhoneNumberOptionalKeywordsToTerraform(struct?: SmsvoicePhoneNumberOptionalKeywords | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    keyword: cdktn.stringToTerraform(struct!.keyword),
    message: cdktn.stringToTerraform(struct!.message),
  }
}


export function smsvoicePhoneNumberOptionalKeywordsToHclTerraform(struct?: SmsvoicePhoneNumberOptionalKeywords | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyword: {
      value: cdktn.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoicePhoneNumberOptionalKeywordsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmsvoicePhoneNumberOptionalKeywords | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoicePhoneNumberOptionalKeywords | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._keyword = undefined;
      this._message = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._keyword = value.keyword;
      this._message = value.message;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // keyword - computed: true, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}

export class SmsvoicePhoneNumberOptionalKeywordsList extends cdktn.ComplexList {
  public internalValue? : SmsvoicePhoneNumberOptionalKeywords[] | cdktn.IResolvable

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
  public get(index: number): SmsvoicePhoneNumberOptionalKeywordsOutputReference {
    return new SmsvoicePhoneNumberOptionalKeywordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmsvoicePhoneNumberTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#key SmsvoicePhoneNumber#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#value SmsvoicePhoneNumber#value}
  */
  readonly value?: string;
}

export function smsvoicePhoneNumberTagsToTerraform(struct?: SmsvoicePhoneNumberTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function smsvoicePhoneNumberTagsToHclTerraform(struct?: SmsvoicePhoneNumberTags | cdktn.IResolvable): any {
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

export class SmsvoicePhoneNumberTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmsvoicePhoneNumberTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SmsvoicePhoneNumberTags | cdktn.IResolvable | undefined) {
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

export class SmsvoicePhoneNumberTagsList extends cdktn.ComplexList {
  public internalValue? : SmsvoicePhoneNumberTags[] | cdktn.IResolvable

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
  public get(index: number): SmsvoicePhoneNumberTagsOutputReference {
    return new SmsvoicePhoneNumberTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmsvoicePhoneNumberTwoWay {
  /**
  * The Amazon Resource Name (ARN) of the two way channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#channel_arn SmsvoicePhoneNumber#channel_arn}
  */
  readonly channelArn?: string;
  /**
  * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#channel_role SmsvoicePhoneNumber#channel_role}
  */
  readonly channelRole?: string;
  /**
  * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#enabled SmsvoicePhoneNumber#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function smsvoicePhoneNumberTwoWayToTerraform(struct?: SmsvoicePhoneNumberTwoWay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_arn: cdktn.stringToTerraform(struct!.channelArn),
    channel_role: cdktn.stringToTerraform(struct!.channelRole),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function smsvoicePhoneNumberTwoWayToHclTerraform(struct?: SmsvoicePhoneNumberTwoWay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_arn: {
      value: cdktn.stringToHclTerraform(struct!.channelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_role: {
      value: cdktn.stringToHclTerraform(struct!.channelRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SmsvoicePhoneNumberTwoWayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmsvoicePhoneNumberTwoWay | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelArn = this._channelArn;
    }
    if (this._channelRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelRole = this._channelRole;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoicePhoneNumberTwoWay | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelArn = undefined;
      this._channelRole = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelArn = value.channelArn;
      this._channelRole = value.channelRole;
      this._enabled = value.enabled;
    }
  }

  // channel_arn - computed: true, optional: true, required: false
  private _channelArn?: string; 
  public get channelArn() {
    return this.getStringAttribute('channel_arn');
  }
  public set channelArn(value: string) {
    this._channelArn = value;
  }
  public resetChannelArn() {
    this._channelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelArnInput() {
    return this._channelArn;
  }

  // channel_role - computed: true, optional: true, required: false
  private _channelRole?: string; 
  public get channelRole() {
    return this.getStringAttribute('channel_role');
  }
  public set channelRole(value: string) {
    this._channelRole = value;
  }
  public resetChannelRole() {
    this._channelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelRoleInput() {
    return this._channelRole;
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number awscc_smsvoice_phone_number}
*/
export class SmsvoicePhoneNumber extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_smsvoice_phone_number";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmsvoicePhoneNumber to import
  * @param importFromId The id of the existing SmsvoicePhoneNumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmsvoicePhoneNumber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_phone_number", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/smsvoice_phone_number awscc_smsvoice_phone_number} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmsvoicePhoneNumberConfig
  */
  public constructor(scope: Construct, id: string, config: SmsvoicePhoneNumberConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_smsvoice_phone_number',
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
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._isoCountryCode = config.isoCountryCode;
    this._mandatoryKeywords.internalValue = config.mandatoryKeywords;
    this._numberCapabilities = config.numberCapabilities;
    this._numberType = config.numberType;
    this._optOutListName = config.optOutListName;
    this._optionalKeywords.internalValue = config.optionalKeywords;
    this._selfManagedOptOutsEnabled = config.selfManagedOptOutsEnabled;
    this._tags.internalValue = config.tags;
    this._twoWay.internalValue = config.twoWay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iso_country_code - computed: false, optional: false, required: true
  private _isoCountryCode?: string; 
  public get isoCountryCode() {
    return this.getStringAttribute('iso_country_code');
  }
  public set isoCountryCode(value: string) {
    this._isoCountryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isoCountryCodeInput() {
    return this._isoCountryCode;
  }

  // mandatory_keywords - computed: false, optional: false, required: true
  private _mandatoryKeywords = new SmsvoicePhoneNumberMandatoryKeywordsOutputReference(this, "mandatory_keywords");
  public get mandatoryKeywords() {
    return this._mandatoryKeywords;
  }
  public putMandatoryKeywords(value: SmsvoicePhoneNumberMandatoryKeywords) {
    this._mandatoryKeywords.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryKeywordsInput() {
    return this._mandatoryKeywords.internalValue;
  }

  // number_capabilities - computed: false, optional: false, required: true
  private _numberCapabilities?: string[]; 
  public get numberCapabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('number_capabilities'));
  }
  public set numberCapabilities(value: string[]) {
    this._numberCapabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberCapabilitiesInput() {
    return this._numberCapabilities;
  }

  // number_type - computed: false, optional: false, required: true
  private _numberType?: string; 
  public get numberType() {
    return this.getStringAttribute('number_type');
  }
  public set numberType(value: string) {
    this._numberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberTypeInput() {
    return this._numberType;
  }

  // opt_out_list_name - computed: true, optional: true, required: false
  private _optOutListName?: string; 
  public get optOutListName() {
    return this.getStringAttribute('opt_out_list_name');
  }
  public set optOutListName(value: string) {
    this._optOutListName = value;
  }
  public resetOptOutListName() {
    this._optOutListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutListNameInput() {
    return this._optOutListName;
  }

  // optional_keywords - computed: true, optional: true, required: false
  private _optionalKeywords = new SmsvoicePhoneNumberOptionalKeywordsList(this, "optional_keywords", true);
  public get optionalKeywords() {
    return this._optionalKeywords;
  }
  public putOptionalKeywords(value: SmsvoicePhoneNumberOptionalKeywords[] | cdktn.IResolvable) {
    this._optionalKeywords.internalValue = value;
  }
  public resetOptionalKeywords() {
    this._optionalKeywords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalKeywordsInput() {
    return this._optionalKeywords.internalValue;
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // phone_number_id - computed: true, optional: false, required: false
  public get phoneNumberId() {
    return this.getStringAttribute('phone_number_id');
  }

  // self_managed_opt_outs_enabled - computed: true, optional: true, required: false
  private _selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable; 
  public get selfManagedOptOutsEnabled() {
    return this.getBooleanAttribute('self_managed_opt_outs_enabled');
  }
  public set selfManagedOptOutsEnabled(value: boolean | cdktn.IResolvable) {
    this._selfManagedOptOutsEnabled = value;
  }
  public resetSelfManagedOptOutsEnabled() {
    this._selfManagedOptOutsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedOptOutsEnabledInput() {
    return this._selfManagedOptOutsEnabled;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SmsvoicePhoneNumberTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SmsvoicePhoneNumberTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // two_way - computed: true, optional: true, required: false
  private _twoWay = new SmsvoicePhoneNumberTwoWayOutputReference(this, "two_way");
  public get twoWay() {
    return this._twoWay;
  }
  public putTwoWay(value: SmsvoicePhoneNumberTwoWay) {
    this._twoWay.internalValue = value;
  }
  public resetTwoWay() {
    this._twoWay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayInput() {
    return this._twoWay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
      iso_country_code: cdktn.stringToTerraform(this._isoCountryCode),
      mandatory_keywords: smsvoicePhoneNumberMandatoryKeywordsToTerraform(this._mandatoryKeywords.internalValue),
      number_capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._numberCapabilities),
      number_type: cdktn.stringToTerraform(this._numberType),
      opt_out_list_name: cdktn.stringToTerraform(this._optOutListName),
      optional_keywords: cdktn.listMapper(smsvoicePhoneNumberOptionalKeywordsToTerraform, false)(this._optionalKeywords.internalValue),
      self_managed_opt_outs_enabled: cdktn.booleanToTerraform(this._selfManagedOptOutsEnabled),
      tags: cdktn.listMapper(smsvoicePhoneNumberTagsToTerraform, false)(this._tags.internalValue),
      two_way: smsvoicePhoneNumberTwoWayToTerraform(this._twoWay.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iso_country_code: {
        value: cdktn.stringToHclTerraform(this._isoCountryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory_keywords: {
        value: smsvoicePhoneNumberMandatoryKeywordsToHclTerraform(this._mandatoryKeywords.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SmsvoicePhoneNumberMandatoryKeywords",
      },
      number_capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._numberCapabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      number_type: {
        value: cdktn.stringToHclTerraform(this._numberType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_list_name: {
        value: cdktn.stringToHclTerraform(this._optOutListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optional_keywords: {
        value: cdktn.listMapperHcl(smsvoicePhoneNumberOptionalKeywordsToHclTerraform, false)(this._optionalKeywords.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmsvoicePhoneNumberOptionalKeywordsList",
      },
      self_managed_opt_outs_enabled: {
        value: cdktn.booleanToHclTerraform(this._selfManagedOptOutsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.listMapperHcl(smsvoicePhoneNumberTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmsvoicePhoneNumberTagsList",
      },
      two_way: {
        value: smsvoicePhoneNumberTwoWayToHclTerraform(this._twoWay.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SmsvoicePhoneNumberTwoWay",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
