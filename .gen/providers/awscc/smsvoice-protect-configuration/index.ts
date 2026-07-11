// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SmsvoiceProtectConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * An array of CountryRule containing the rules for the NumberCapability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#country_rule_set SmsvoiceProtectConfiguration#country_rule_set}
  */
  readonly countryRuleSet?: SmsvoiceProtectConfigurationCountryRuleSet;
  /**
  * When set to true deletion protection is enabled and protect configuration cannot be deleted. By default this is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#deletion_protection_enabled SmsvoiceProtectConfiguration#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#tags SmsvoiceProtectConfiguration#tags}
  */
  readonly tags?: SmsvoiceProtectConfigurationTags[] | cdktn.IResolvable;
}
export interface SmsvoiceProtectConfigurationCountryRuleSetMms {
  /**
  * The two-letter ISO country code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}
  */
  readonly countryCode?: string;
  /**
  * The types of protection that can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}
  */
  readonly protectStatus?: string;
}

export function smsvoiceProtectConfigurationCountryRuleSetMmsToTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSetMms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    protect_status: cdktn.stringToTerraform(struct!.protectStatus),
  }
}


export function smsvoiceProtectConfigurationCountryRuleSetMmsToHclTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSetMms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_status: {
      value: cdktn.stringToHclTerraform(struct!.protectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmsvoiceProtectConfigurationCountryRuleSetMms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._protectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectStatus = this._protectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoiceProtectConfigurationCountryRuleSetMms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._protectStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._protectStatus = value.protectStatus;
    }
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string;
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // protect_status - computed: true, optional: true, required: false
  private _protectStatus?: string;
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }
  public set protectStatus(value: string) {
    this._protectStatus = value;
  }
  public resetProtectStatus() {
    this._protectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectStatusInput() {
    return this._protectStatus;
  }
}

export class SmsvoiceProtectConfigurationCountryRuleSetMmsList extends cdktn.ComplexList {
  public internalValue? : SmsvoiceProtectConfigurationCountryRuleSetMms[] | cdktn.IResolvable

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
  public get(index: number): SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference {
    return new SmsvoiceProtectConfigurationCountryRuleSetMmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmsvoiceProtectConfigurationCountryRuleSetSms {
  /**
  * The two-letter ISO country code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}
  */
  readonly countryCode?: string;
  /**
  * The types of protection that can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}
  */
  readonly protectStatus?: string;
}

export function smsvoiceProtectConfigurationCountryRuleSetSmsToTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSetSms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    protect_status: cdktn.stringToTerraform(struct!.protectStatus),
  }
}


export function smsvoiceProtectConfigurationCountryRuleSetSmsToHclTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSetSms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_status: {
      value: cdktn.stringToHclTerraform(struct!.protectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmsvoiceProtectConfigurationCountryRuleSetSms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._protectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectStatus = this._protectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoiceProtectConfigurationCountryRuleSetSms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._protectStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._protectStatus = value.protectStatus;
    }
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string;
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // protect_status - computed: true, optional: true, required: false
  private _protectStatus?: string;
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }
  public set protectStatus(value: string) {
    this._protectStatus = value;
  }
  public resetProtectStatus() {
    this._protectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectStatusInput() {
    return this._protectStatus;
  }
}

export class SmsvoiceProtectConfigurationCountryRuleSetSmsList extends cdktn.ComplexList {
  public internalValue? : SmsvoiceProtectConfigurationCountryRuleSetSms[] | cdktn.IResolvable

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
  public get(index: number): SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference {
    return new SmsvoiceProtectConfigurationCountryRuleSetSmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmsvoiceProtectConfigurationCountryRuleSetVoice {
  /**
  * The two-letter ISO country code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#country_code SmsvoiceProtectConfiguration#country_code}
  */
  readonly countryCode?: string;
  /**
  * The types of protection that can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#protect_status SmsvoiceProtectConfiguration#protect_status}
  */
  readonly protectStatus?: string;
}

export function smsvoiceProtectConfigurationCountryRuleSetVoiceToTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSetVoice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    country_code: cdktn.stringToTerraform(struct!.countryCode),
    protect_status: cdktn.stringToTerraform(struct!.protectStatus),
  }
}


export function smsvoiceProtectConfigurationCountryRuleSetVoiceToHclTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSetVoice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    country_code: {
      value: cdktn.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_status: {
      value: cdktn.stringToHclTerraform(struct!.protectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmsvoiceProtectConfigurationCountryRuleSetVoice | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._protectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectStatus = this._protectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoiceProtectConfigurationCountryRuleSetVoice | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._protectStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._protectStatus = value.protectStatus;
    }
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string;
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // protect_status - computed: true, optional: true, required: false
  private _protectStatus?: string;
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }
  public set protectStatus(value: string) {
    this._protectStatus = value;
  }
  public resetProtectStatus() {
    this._protectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectStatusInput() {
    return this._protectStatus;
  }
}

export class SmsvoiceProtectConfigurationCountryRuleSetVoiceList extends cdktn.ComplexList {
  public internalValue? : SmsvoiceProtectConfigurationCountryRuleSetVoice[] | cdktn.IResolvable

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
  public get(index: number): SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference {
    return new SmsvoiceProtectConfigurationCountryRuleSetVoiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmsvoiceProtectConfigurationCountryRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#mms SmsvoiceProtectConfiguration#mms}
  */
  readonly mms?: SmsvoiceProtectConfigurationCountryRuleSetMms[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#sms SmsvoiceProtectConfiguration#sms}
  */
  readonly sms?: SmsvoiceProtectConfigurationCountryRuleSetSms[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#voice SmsvoiceProtectConfiguration#voice}
  */
  readonly voice?: SmsvoiceProtectConfigurationCountryRuleSetVoice[] | cdktn.IResolvable;
}

export function smsvoiceProtectConfigurationCountryRuleSetToTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mms: cdktn.listMapper(smsvoiceProtectConfigurationCountryRuleSetMmsToTerraform, false)(struct!.mms),
    sms: cdktn.listMapper(smsvoiceProtectConfigurationCountryRuleSetSmsToTerraform, false)(struct!.sms),
    voice: cdktn.listMapper(smsvoiceProtectConfigurationCountryRuleSetVoiceToTerraform, false)(struct!.voice),
  }
}


export function smsvoiceProtectConfigurationCountryRuleSetToHclTerraform(struct?: SmsvoiceProtectConfigurationCountryRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mms: {
      value: cdktn.listMapperHcl(smsvoiceProtectConfigurationCountryRuleSetMmsToHclTerraform, false)(struct!.mms),
      isBlock: true,
      type: "set",
      storageClassType: "SmsvoiceProtectConfigurationCountryRuleSetMmsList",
    },
    sms: {
      value: cdktn.listMapperHcl(smsvoiceProtectConfigurationCountryRuleSetSmsToHclTerraform, false)(struct!.sms),
      isBlock: true,
      type: "set",
      storageClassType: "SmsvoiceProtectConfigurationCountryRuleSetSmsList",
    },
    voice: {
      value: cdktn.listMapperHcl(smsvoiceProtectConfigurationCountryRuleSetVoiceToHclTerraform, false)(struct!.voice),
      isBlock: true,
      type: "set",
      storageClassType: "SmsvoiceProtectConfigurationCountryRuleSetVoiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmsvoiceProtectConfigurationCountryRuleSetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmsvoiceProtectConfigurationCountryRuleSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mms = this._mms?.internalValue;
    }
    if (this._sms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms?.internalValue;
    }
    if (this._voice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voice = this._voice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmsvoiceProtectConfigurationCountryRuleSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mms.internalValue = undefined;
      this._sms.internalValue = undefined;
      this._voice.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mms.internalValue = value.mms;
      this._sms.internalValue = value.sms;
      this._voice.internalValue = value.voice;
    }
  }

  // mms - computed: true, optional: true, required: false
  private _mms = new SmsvoiceProtectConfigurationCountryRuleSetMmsList(this, "mms", true);
  public get mms() {
    return this._mms;
  }
  public putMms(value: SmsvoiceProtectConfigurationCountryRuleSetMms[] | cdktn.IResolvable) {
    this._mms.internalValue = value;
  }
  public resetMms() {
    this._mms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmsInput() {
    return this._mms.internalValue;
  }

  // sms - computed: true, optional: true, required: false
  private _sms = new SmsvoiceProtectConfigurationCountryRuleSetSmsList(this, "sms", true);
  public get sms() {
    return this._sms;
  }
  public putSms(value: SmsvoiceProtectConfigurationCountryRuleSetSms[] | cdktn.IResolvable) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // voice - computed: true, optional: true, required: false
  private _voice = new SmsvoiceProtectConfigurationCountryRuleSetVoiceList(this, "voice", true);
  public get voice() {
    return this._voice;
  }
  public putVoice(value: SmsvoiceProtectConfigurationCountryRuleSetVoice[] | cdktn.IResolvable) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }
}
export interface SmsvoiceProtectConfigurationTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#key SmsvoiceProtectConfiguration#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#value SmsvoiceProtectConfiguration#value}
  */
  readonly value?: string;
}

export function smsvoiceProtectConfigurationTagsToTerraform(struct?: SmsvoiceProtectConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function smsvoiceProtectConfigurationTagsToHclTerraform(struct?: SmsvoiceProtectConfigurationTags | cdktn.IResolvable): any {
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

export class SmsvoiceProtectConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SmsvoiceProtectConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SmsvoiceProtectConfigurationTags | cdktn.IResolvable | undefined) {
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

export class SmsvoiceProtectConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : SmsvoiceProtectConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): SmsvoiceProtectConfigurationTagsOutputReference {
    return new SmsvoiceProtectConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration}
*/
export class SmsvoiceProtectConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_smsvoice_protect_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SmsvoiceProtectConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmsvoiceProtectConfiguration to import
  * @param importFromId The id of the existing SmsvoiceProtectConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmsvoiceProtectConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_protect_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/smsvoice_protect_configuration awscc_smsvoice_protect_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmsvoiceProtectConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmsvoiceProtectConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_smsvoice_protect_configuration',
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
    this._countryRuleSet.internalValue = config.countryRuleSet;
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // country_rule_set - computed: true, optional: true, required: false
  private _countryRuleSet = new SmsvoiceProtectConfigurationCountryRuleSetOutputReference(this, "country_rule_set");
  public get countryRuleSet() {
    return this._countryRuleSet;
  }
  public putCountryRuleSet(value: SmsvoiceProtectConfigurationCountryRuleSet) {
    this._countryRuleSet.internalValue = value;
  }
  public resetCountryRuleSet() {
    this._countryRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryRuleSetInput() {
    return this._countryRuleSet.internalValue;
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

  // protect_configuration_id - computed: true, optional: false, required: false
  public get protectConfigurationId() {
    return this.getStringAttribute('protect_configuration_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SmsvoiceProtectConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SmsvoiceProtectConfigurationTags[] | cdktn.IResolvable) {
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
      country_rule_set: smsvoiceProtectConfigurationCountryRuleSetToTerraform(this._countryRuleSet.internalValue),
      deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
      tags: cdktn.listMapper(smsvoiceProtectConfigurationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      country_rule_set: {
        value: smsvoiceProtectConfigurationCountryRuleSetToHclTerraform(this._countryRuleSet.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SmsvoiceProtectConfigurationCountryRuleSet",
      },
      deletion_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.listMapperHcl(smsvoiceProtectConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmsvoiceProtectConfigurationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
