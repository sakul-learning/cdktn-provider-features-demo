// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/smsvoice_phone_number
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSmsvoicePhoneNumberConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/smsvoice_phone_number#id DataAwsccSmsvoicePhoneNumber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelp {
}

export function dataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelpToTerraform(struct?: DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelpToHclTerraform(struct?: DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStop {
}

export function dataAwsccSmsvoicePhoneNumberMandatoryKeywordsStopToTerraform(struct?: DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStop): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoicePhoneNumberMandatoryKeywordsStopToHclTerraform(struct?: DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStop): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}
export interface DataAwsccSmsvoicePhoneNumberMandatoryKeywords {
}

export function dataAwsccSmsvoicePhoneNumberMandatoryKeywordsToTerraform(struct?: DataAwsccSmsvoicePhoneNumberMandatoryKeywords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoicePhoneNumberMandatoryKeywordsToHclTerraform(struct?: DataAwsccSmsvoicePhoneNumberMandatoryKeywords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoicePhoneNumberMandatoryKeywordsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSmsvoicePhoneNumberMandatoryKeywords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoicePhoneNumberMandatoryKeywords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // help - computed: true, optional: false, required: false
  private _help = new DataAwsccSmsvoicePhoneNumberMandatoryKeywordsHelpOutputReference(this, "help");
  public get help() {
    return this._help;
  }

  // stop - computed: true, optional: false, required: false
  private _stop = new DataAwsccSmsvoicePhoneNumberMandatoryKeywordsStopOutputReference(this, "stop");
  public get stop() {
    return this._stop;
  }
}
export interface DataAwsccSmsvoicePhoneNumberOptionalKeywords {
}

export function dataAwsccSmsvoicePhoneNumberOptionalKeywordsToTerraform(struct?: DataAwsccSmsvoicePhoneNumberOptionalKeywords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoicePhoneNumberOptionalKeywordsToHclTerraform(struct?: DataAwsccSmsvoicePhoneNumberOptionalKeywords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoicePhoneNumberOptionalKeywordsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSmsvoicePhoneNumberOptionalKeywords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoicePhoneNumberOptionalKeywords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // keyword - computed: true, optional: false, required: false
  public get keyword() {
    return this.getStringAttribute('keyword');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataAwsccSmsvoicePhoneNumberOptionalKeywordsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSmsvoicePhoneNumberOptionalKeywordsOutputReference {
    return new DataAwsccSmsvoicePhoneNumberOptionalKeywordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSmsvoicePhoneNumberTags {
}

export function dataAwsccSmsvoicePhoneNumberTagsToTerraform(struct?: DataAwsccSmsvoicePhoneNumberTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoicePhoneNumberTagsToHclTerraform(struct?: DataAwsccSmsvoicePhoneNumberTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoicePhoneNumberTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSmsvoicePhoneNumberTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoicePhoneNumberTags | undefined) {
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

export class DataAwsccSmsvoicePhoneNumberTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSmsvoicePhoneNumberTagsOutputReference {
    return new DataAwsccSmsvoicePhoneNumberTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSmsvoicePhoneNumberTwoWay {
}

export function dataAwsccSmsvoicePhoneNumberTwoWayToTerraform(struct?: DataAwsccSmsvoicePhoneNumberTwoWay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSmsvoicePhoneNumberTwoWayToHclTerraform(struct?: DataAwsccSmsvoicePhoneNumberTwoWay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSmsvoicePhoneNumberTwoWayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSmsvoicePhoneNumberTwoWay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSmsvoicePhoneNumberTwoWay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_arn - computed: true, optional: false, required: false
  public get channelArn() {
    return this.getStringAttribute('channel_arn');
  }

  // channel_role - computed: true, optional: false, required: false
  public get channelRole() {
    return this.getStringAttribute('channel_role');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/smsvoice_phone_number awscc_smsvoice_phone_number}
*/
export class DataAwsccSmsvoicePhoneNumber extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_smsvoice_phone_number";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSmsvoicePhoneNumber resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSmsvoicePhoneNumber to import
  * @param importFromId The id of the existing DataAwsccSmsvoicePhoneNumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/smsvoice_phone_number#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSmsvoicePhoneNumber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_phone_number", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/smsvoice_phone_number awscc_smsvoice_phone_number} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSmsvoicePhoneNumberConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSmsvoicePhoneNumberConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_smsvoice_phone_number',
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

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
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

  // iso_country_code - computed: true, optional: false, required: false
  public get isoCountryCode() {
    return this.getStringAttribute('iso_country_code');
  }

  // mandatory_keywords - computed: true, optional: false, required: false
  private _mandatoryKeywords = new DataAwsccSmsvoicePhoneNumberMandatoryKeywordsOutputReference(this, "mandatory_keywords");
  public get mandatoryKeywords() {
    return this._mandatoryKeywords;
  }

  // number_capabilities - computed: true, optional: false, required: false
  public get numberCapabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('number_capabilities'));
  }

  // number_type - computed: true, optional: false, required: false
  public get numberType() {
    return this.getStringAttribute('number_type');
  }

  // opt_out_list_name - computed: true, optional: false, required: false
  public get optOutListName() {
    return this.getStringAttribute('opt_out_list_name');
  }

  // optional_keywords - computed: true, optional: false, required: false
  private _optionalKeywords = new DataAwsccSmsvoicePhoneNumberOptionalKeywordsList(this, "optional_keywords", true);
  public get optionalKeywords() {
    return this._optionalKeywords;
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // phone_number_id - computed: true, optional: false, required: false
  public get phoneNumberId() {
    return this.getStringAttribute('phone_number_id');
  }

  // self_managed_opt_outs_enabled - computed: true, optional: false, required: false
  public get selfManagedOptOutsEnabled() {
    return this.getBooleanAttribute('self_managed_opt_outs_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSmsvoicePhoneNumberTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // two_way - computed: true, optional: false, required: false
  private _twoWay = new DataAwsccSmsvoicePhoneNumberTwoWayOutputReference(this, "two_way");
  public get twoWay() {
    return this._twoWay;
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
