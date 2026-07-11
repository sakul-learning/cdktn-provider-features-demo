// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_message_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWisdomMessageTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_message_template#id DataAwsccWisdomMessageTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml {
}

export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlToTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }
}
export interface DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText {
}

export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextToTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }
}
export interface DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody {
}

export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyToTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // html - computed: true, optional: false, required: false
  private _html = new DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference(this, "html");
  public get html() {
    return this._html;
  }

  // plain_text - computed: true, optional: false, required: false
  private _plainText = new DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference(this, "plain_text");
  public get plainText() {
    return this._plainText;
  }
}
export interface DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders {
}

export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersToTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeaders | undefined) {
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

export class DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference {
    return new DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent {
}

export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentToTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  private _body = new DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}
export interface DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText {
}

export function dataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextToTerraform(struct?: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }
}
export interface DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody {
}

export function dataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyToTerraform(struct?: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // plain_text - computed: true, optional: false, required: false
  private _plainText = new DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference(this, "plain_text");
  public get plainText() {
    return this._plainText;
  }
}
export interface DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent {
}

export function dataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentToTerraform(struct?: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  private _body = new DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
}
export interface DataAwsccWisdomMessageTemplateContent {
}

export function dataAwsccWisdomMessageTemplateContentToTerraform(struct?: DataAwsccWisdomMessageTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateContentToHclTerraform(struct?: DataAwsccWisdomMessageTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_message_template_content - computed: true, optional: false, required: false
  private _emailMessageTemplateContent = new DataAwsccWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference(this, "email_message_template_content");
  public get emailMessageTemplateContent() {
    return this._emailMessageTemplateContent;
  }

  // sms_message_template_content - computed: true, optional: false, required: false
  private _smsMessageTemplateContent = new DataAwsccWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference(this, "sms_message_template_content");
  public get smsMessageTemplateContent() {
    return this._smsMessageTemplateContent;
  }
}
export interface DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes {
}

export function dataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesToTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesToHclTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
}
export interface DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes {
}

export function dataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesToTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesToHclTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }

  // additional_information - computed: true, optional: false, required: false
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }

  // address_1 - computed: true, optional: false, required: false
  public get address1() {
    return this.getStringAttribute('address_1');
  }

  // address_2 - computed: true, optional: false, required: false
  public get address2() {
    return this.getStringAttribute('address_2');
  }

  // address_3 - computed: true, optional: false, required: false
  public get address3() {
    return this.getStringAttribute('address_3');
  }

  // address_4 - computed: true, optional: false, required: false
  public get address4() {
    return this.getStringAttribute('address_4');
  }

  // billing_address_1 - computed: true, optional: false, required: false
  public get billingAddress1() {
    return this.getStringAttribute('billing_address_1');
  }

  // billing_address_2 - computed: true, optional: false, required: false
  public get billingAddress2() {
    return this.getStringAttribute('billing_address_2');
  }

  // billing_address_3 - computed: true, optional: false, required: false
  public get billingAddress3() {
    return this.getStringAttribute('billing_address_3');
  }

  // billing_address_4 - computed: true, optional: false, required: false
  public get billingAddress4() {
    return this.getStringAttribute('billing_address_4');
  }

  // billing_city - computed: true, optional: false, required: false
  public get billingCity() {
    return this.getStringAttribute('billing_city');
  }

  // billing_country - computed: true, optional: false, required: false
  public get billingCountry() {
    return this.getStringAttribute('billing_country');
  }

  // billing_county - computed: true, optional: false, required: false
  public get billingCounty() {
    return this.getStringAttribute('billing_county');
  }

  // billing_postal_code - computed: true, optional: false, required: false
  public get billingPostalCode() {
    return this.getStringAttribute('billing_postal_code');
  }

  // billing_province - computed: true, optional: false, required: false
  public get billingProvince() {
    return this.getStringAttribute('billing_province');
  }

  // billing_state - computed: true, optional: false, required: false
  public get billingState() {
    return this.getStringAttribute('billing_state');
  }

  // birth_date - computed: true, optional: false, required: false
  public get birthDate() {
    return this.getStringAttribute('birth_date');
  }

  // business_email_address - computed: true, optional: false, required: false
  public get businessEmailAddress() {
    return this.getStringAttribute('business_email_address');
  }

  // business_name - computed: true, optional: false, required: false
  public get businessName() {
    return this.getStringAttribute('business_name');
  }

  // business_phone_number - computed: true, optional: false, required: false
  public get businessPhoneNumber() {
    return this.getStringAttribute('business_phone_number');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // county - computed: true, optional: false, required: false
  public get county() {
    return this.getStringAttribute('county');
  }

  // custom - computed: true, optional: false, required: false
  private _custom = new cdktn.StringMap(this, "custom");
  public get custom() {
    return this._custom;
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // gender - computed: true, optional: false, required: false
  public get gender() {
    return this.getStringAttribute('gender');
  }

  // home_phone_number - computed: true, optional: false, required: false
  public get homePhoneNumber() {
    return this.getStringAttribute('home_phone_number');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // mailing_address_1 - computed: true, optional: false, required: false
  public get mailingAddress1() {
    return this.getStringAttribute('mailing_address_1');
  }

  // mailing_address_2 - computed: true, optional: false, required: false
  public get mailingAddress2() {
    return this.getStringAttribute('mailing_address_2');
  }

  // mailing_address_3 - computed: true, optional: false, required: false
  public get mailingAddress3() {
    return this.getStringAttribute('mailing_address_3');
  }

  // mailing_address_4 - computed: true, optional: false, required: false
  public get mailingAddress4() {
    return this.getStringAttribute('mailing_address_4');
  }

  // mailing_city - computed: true, optional: false, required: false
  public get mailingCity() {
    return this.getStringAttribute('mailing_city');
  }

  // mailing_country - computed: true, optional: false, required: false
  public get mailingCountry() {
    return this.getStringAttribute('mailing_country');
  }

  // mailing_county - computed: true, optional: false, required: false
  public get mailingCounty() {
    return this.getStringAttribute('mailing_county');
  }

  // mailing_postal_code - computed: true, optional: false, required: false
  public get mailingPostalCode() {
    return this.getStringAttribute('mailing_postal_code');
  }

  // mailing_province - computed: true, optional: false, required: false
  public get mailingProvince() {
    return this.getStringAttribute('mailing_province');
  }

  // mailing_state - computed: true, optional: false, required: false
  public get mailingState() {
    return this.getStringAttribute('mailing_state');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }

  // mobile_phone_number - computed: true, optional: false, required: false
  public get mobilePhoneNumber() {
    return this.getStringAttribute('mobile_phone_number');
  }

  // party_type - computed: true, optional: false, required: false
  public get partyType() {
    return this.getStringAttribute('party_type');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // profile_arn - computed: true, optional: false, required: false
  public get profileArn() {
    return this.getStringAttribute('profile_arn');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getStringAttribute('province');
  }

  // shipping_address_1 - computed: true, optional: false, required: false
  public get shippingAddress1() {
    return this.getStringAttribute('shipping_address_1');
  }

  // shipping_address_2 - computed: true, optional: false, required: false
  public get shippingAddress2() {
    return this.getStringAttribute('shipping_address_2');
  }

  // shipping_address_3 - computed: true, optional: false, required: false
  public get shippingAddress3() {
    return this.getStringAttribute('shipping_address_3');
  }

  // shipping_address_4 - computed: true, optional: false, required: false
  public get shippingAddress4() {
    return this.getStringAttribute('shipping_address_4');
  }

  // shipping_city - computed: true, optional: false, required: false
  public get shippingCity() {
    return this.getStringAttribute('shipping_city');
  }

  // shipping_country - computed: true, optional: false, required: false
  public get shippingCountry() {
    return this.getStringAttribute('shipping_country');
  }

  // shipping_county - computed: true, optional: false, required: false
  public get shippingCounty() {
    return this.getStringAttribute('shipping_county');
  }

  // shipping_postal_code - computed: true, optional: false, required: false
  public get shippingPostalCode() {
    return this.getStringAttribute('shipping_postal_code');
  }

  // shipping_province - computed: true, optional: false, required: false
  public get shippingProvince() {
    return this.getStringAttribute('shipping_province');
  }

  // shipping_state - computed: true, optional: false, required: false
  public get shippingState() {
    return this.getStringAttribute('shipping_state');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint {
}

export function dataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointToTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointToHclTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}
export interface DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint {
}

export function dataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointToTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointToHclTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }
}
export interface DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes {
}

export function dataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesToTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesToHclTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_endpoint - computed: true, optional: false, required: false
  private _customerEndpoint = new DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference(this, "customer_endpoint");
  public get customerEndpoint() {
    return this._customerEndpoint;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // system_endpoint - computed: true, optional: false, required: false
  private _systemEndpoint = new DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference(this, "system_endpoint");
  public get systemEndpoint() {
    return this._systemEndpoint;
  }
}
export interface DataAwsccWisdomMessageTemplateDefaultAttributes {
}

export function dataAwsccWisdomMessageTemplateDefaultAttributesToTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateDefaultAttributesToHclTerraform(struct?: DataAwsccWisdomMessageTemplateDefaultAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateDefaultAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateDefaultAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_attributes - computed: true, optional: false, required: false
  private _agentAttributes = new DataAwsccWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference(this, "agent_attributes");
  public get agentAttributes() {
    return this._agentAttributes;
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new cdktn.StringMap(this, "custom_attributes");
  public get customAttributes() {
    return this._customAttributes;
  }

  // customer_profile_attributes - computed: true, optional: false, required: false
  private _customerProfileAttributes = new DataAwsccWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference(this, "customer_profile_attributes");
  public get customerProfileAttributes() {
    return this._customerProfileAttributes;
  }

  // system_attributes - computed: true, optional: false, required: false
  private _systemAttributes = new DataAwsccWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference(this, "system_attributes");
  public get systemAttributes() {
    return this._systemAttributes;
  }
}
export interface DataAwsccWisdomMessageTemplateGroupingConfiguration {
}

export function dataAwsccWisdomMessageTemplateGroupingConfigurationToTerraform(struct?: DataAwsccWisdomMessageTemplateGroupingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateGroupingConfigurationToHclTerraform(struct?: DataAwsccWisdomMessageTemplateGroupingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWisdomMessageTemplateGroupingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateGroupingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.getStringAttribute('criteria');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccWisdomMessageTemplateMessageTemplateAttachments {
}

export function dataAwsccWisdomMessageTemplateMessageTemplateAttachmentsToTerraform(struct?: DataAwsccWisdomMessageTemplateMessageTemplateAttachments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateMessageTemplateAttachmentsToHclTerraform(struct?: DataAwsccWisdomMessageTemplateMessageTemplateAttachments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomMessageTemplateMessageTemplateAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateMessageTemplateAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // attachment_name - computed: true, optional: false, required: false
  public get attachmentName() {
    return this.getStringAttribute('attachment_name');
  }

  // s3_presigned_url - computed: true, optional: false, required: false
  public get s3PresignedUrl() {
    return this.getStringAttribute('s3_presigned_url');
  }
}

export class DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference {
    return new DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWisdomMessageTemplateTags {
}

export function dataAwsccWisdomMessageTemplateTagsToTerraform(struct?: DataAwsccWisdomMessageTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWisdomMessageTemplateTagsToHclTerraform(struct?: DataAwsccWisdomMessageTemplateTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWisdomMessageTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWisdomMessageTemplateTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWisdomMessageTemplateTags | undefined) {
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

export class DataAwsccWisdomMessageTemplateTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWisdomMessageTemplateTagsOutputReference {
    return new DataAwsccWisdomMessageTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_message_template awscc_wisdom_message_template}
*/
export class DataAwsccWisdomMessageTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_message_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWisdomMessageTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWisdomMessageTemplate to import
  * @param importFromId The id of the existing DataAwsccWisdomMessageTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_message_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWisdomMessageTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_message_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/wisdom_message_template awscc_wisdom_message_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWisdomMessageTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWisdomMessageTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_message_template',
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

  // channel_subtype - computed: true, optional: false, required: false
  public get channelSubtype() {
    return this.getStringAttribute('channel_subtype');
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataAwsccWisdomMessageTemplateContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }

  // default_attributes - computed: true, optional: false, required: false
  private _defaultAttributes = new DataAwsccWisdomMessageTemplateDefaultAttributesOutputReference(this, "default_attributes");
  public get defaultAttributes() {
    return this._defaultAttributes;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // grouping_configuration - computed: true, optional: false, required: false
  private _groupingConfiguration = new DataAwsccWisdomMessageTemplateGroupingConfigurationOutputReference(this, "grouping_configuration");
  public get groupingConfiguration() {
    return this._groupingConfiguration;
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

  // knowledge_base_arn - computed: true, optional: false, required: false
  public get knowledgeBaseArn() {
    return this.getStringAttribute('knowledge_base_arn');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // message_template_arn - computed: true, optional: false, required: false
  public get messageTemplateArn() {
    return this.getStringAttribute('message_template_arn');
  }

  // message_template_attachments - computed: true, optional: false, required: false
  private _messageTemplateAttachments = new DataAwsccWisdomMessageTemplateMessageTemplateAttachmentsList(this, "message_template_attachments", false);
  public get messageTemplateAttachments() {
    return this._messageTemplateAttachments;
  }

  // message_template_content_sha_256 - computed: true, optional: false, required: false
  public get messageTemplateContentSha256() {
    return this.getStringAttribute('message_template_content_sha_256');
  }

  // message_template_id - computed: true, optional: false, required: false
  public get messageTemplateId() {
    return this.getStringAttribute('message_template_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWisdomMessageTemplateTagsList(this, "tags", true);
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
