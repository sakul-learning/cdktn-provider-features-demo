// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LexBotAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of bot alias locale settings to add to the bot alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#bot_alias_locale_settings LexBotAlias#bot_alias_locale_settings}
  */
  readonly botAliasLocaleSettings?: LexBotAliasBotAliasLocaleSettings[] | cdktn.IResolvable;
  /**
  * A unique identifier for a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#bot_alias_name LexBotAlias#bot_alias_name}
  */
  readonly botAliasName: string;
  /**
  * A list of tags to add to the bot alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#bot_alias_tags LexBotAlias#bot_alias_tags}
  */
  readonly botAliasTags?: LexBotAliasBotAliasTags[] | cdktn.IResolvable;
  /**
  * Unique ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#bot_id LexBotAlias#bot_id}
  */
  readonly botId: string;
  /**
  * The version of a bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#bot_version LexBotAlias#bot_version}
  */
  readonly botVersion?: string;
  /**
  * Contains information about code hooks that Amazon Lex calls during a conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#conversation_log_settings LexBotAlias#conversation_log_settings}
  */
  readonly conversationLogSettings?: LexBotAliasConversationLogSettings;
  /**
  * A description of the bot alias. Use the description to help identify the bot alias in lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#description LexBotAlias#description}
  */
  readonly description?: string;
  /**
  * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#sentiment_analysis_settings LexBotAlias#sentiment_analysis_settings}
  */
  readonly sentimentAnalysisSettings?: LexBotAliasSentimentAnalysisSettings;
}
export interface LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {
  /**
  * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#code_hook_interface_version LexBotAlias#code_hook_interface_version}
  */
  readonly codeHookInterfaceVersion?: string;
  /**
  * The Amazon Resource Name (ARN) of the Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#lambda_arn LexBotAlias#lambda_arn}
  */
  readonly lambdaArn?: string;
}

export function lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToTerraform(struct?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_hook_interface_version: cdktn.stringToTerraform(struct!.codeHookInterfaceVersion),
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToHclTerraform(struct?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable): any {
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

export class LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | cdktn.IResolvable | undefined) {
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
export interface LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {
  /**
  * Contains information about code hooks that Amazon Lex calls during a conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#lambda_code_hook LexBotAlias#lambda_code_hook}
  */
  readonly lambdaCodeHook?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook;
}

export function lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToTerraform(struct?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_code_hook: lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToTerraform(struct!.lambdaCodeHook),
  }
}


export function lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToHclTerraform(struct?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_code_hook: {
      value: lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToHclTerraform(struct!.lambdaCodeHook),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | cdktn.IResolvable | undefined) {
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
  private _lambdaCodeHook = new LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(this, "lambda_code_hook");
  public get lambdaCodeHook() {
    return this._lambdaCodeHook;
  }
  public putLambdaCodeHook(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook) {
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
export interface LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting {
  /**
  * Contains information about code hooks that Amazon Lex calls during a conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#code_hook_specification LexBotAlias#code_hook_specification}
  */
  readonly codeHookSpecification?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification;
  /**
  * Whether the Lambda code hook is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingToTerraform(struct?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_hook_specification: lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToTerraform(struct!.codeHookSpecification),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingToHclTerraform(struct?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_hook_specification: {
      value: lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToHclTerraform(struct!.codeHookSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification",
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

export class LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting | cdktn.IResolvable | undefined) {
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
  private _codeHookSpecification = new LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(this, "code_hook_specification");
  public get codeHookSpecification() {
    return this._codeHookSpecification;
  }
  public putCodeHookSpecification(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification) {
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
export interface LexBotAliasBotAliasLocaleSettings {
  /**
  * You can use this parameter to specify a specific Lambda function to run different functions in different locales.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#bot_alias_locale_setting LexBotAlias#bot_alias_locale_setting}
  */
  readonly botAliasLocaleSetting?: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting;
  /**
  * A string used to identify the locale
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#locale_id LexBotAlias#locale_id}
  */
  readonly localeId?: string;
}

export function lexBotAliasBotAliasLocaleSettingsToTerraform(struct?: LexBotAliasBotAliasLocaleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bot_alias_locale_setting: lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingToTerraform(struct!.botAliasLocaleSetting),
    locale_id: cdktn.stringToTerraform(struct!.localeId),
  }
}


export function lexBotAliasBotAliasLocaleSettingsToHclTerraform(struct?: LexBotAliasBotAliasLocaleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bot_alias_locale_setting: {
      value: lexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingToHclTerraform(struct!.botAliasLocaleSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting",
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

export class LexBotAliasBotAliasLocaleSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotAliasBotAliasLocaleSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasBotAliasLocaleSettings | cdktn.IResolvable | undefined) {
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
  private _botAliasLocaleSetting = new LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(this, "bot_alias_locale_setting");
  public get botAliasLocaleSetting() {
    return this._botAliasLocaleSetting;
  }
  public putBotAliasLocaleSetting(value: LexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting) {
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

export class LexBotAliasBotAliasLocaleSettingsList extends cdktn.ComplexList {
  public internalValue? : LexBotAliasBotAliasLocaleSettings[] | cdktn.IResolvable

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
  public get(index: number): LexBotAliasBotAliasLocaleSettingsOutputReference {
    return new LexBotAliasBotAliasLocaleSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotAliasBotAliasTags {
  /**
  * A string used to identify this tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#key LexBotAlias#key}
  */
  readonly key?: string;
  /**
  * A string containing the value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#value LexBotAlias#value}
  */
  readonly value?: string;
}

export function lexBotAliasBotAliasTagsToTerraform(struct?: LexBotAliasBotAliasTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexBotAliasBotAliasTagsToHclTerraform(struct?: LexBotAliasBotAliasTags | cdktn.IResolvable): any {
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

export class LexBotAliasBotAliasTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotAliasBotAliasTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasBotAliasTags | cdktn.IResolvable | undefined) {
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

export class LexBotAliasBotAliasTagsList extends cdktn.ComplexList {
  public internalValue? : LexBotAliasBotAliasTags[] | cdktn.IResolvable

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
  public get(index: number): LexBotAliasBotAliasTagsOutputReference {
    return new LexBotAliasBotAliasTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket {
  /**
  * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * The Amazon S3 key of the deployment package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#s3_bucket_arn LexBotAlias#s3_bucket_arn}
  */
  readonly s3BucketArn?: string;
}

export function lexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketToTerraform(struct?: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable): any {
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


export function lexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketToHclTerraform(struct?: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable): any {
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

export class LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket | cdktn.IResolvable | undefined) {
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
export interface LexBotAliasConversationLogSettingsAudioLogSettingsDestination {
  /**
  * Specifies an Amazon S3 bucket for logging audio conversations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#s3_bucket LexBotAlias#s3_bucket}
  */
  readonly s3Bucket?: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket;
}

export function lexBotAliasConversationLogSettingsAudioLogSettingsDestinationToTerraform(struct?: LexBotAliasConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket: lexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketToTerraform(struct!.s3Bucket),
  }
}


export function lexBotAliasConversationLogSettingsAudioLogSettingsDestinationToHclTerraform(struct?: LexBotAliasConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket: {
      value: lexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketToHclTerraform(struct!.s3Bucket),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettingsAudioLogSettingsDestination | cdktn.IResolvable | undefined) {
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
  private _s3Bucket = new LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(this, "s3_bucket");
  public get s3Bucket() {
    return this._s3Bucket;
  }
  public putS3Bucket(value: LexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket) {
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
export interface LexBotAliasConversationLogSettingsAudioLogSettings {
  /**
  * The location of audio log files collected when conversation logging is enabled for a bot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}
  */
  readonly destination?: LexBotAliasConversationLogSettingsAudioLogSettingsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lexBotAliasConversationLogSettingsAudioLogSettingsToTerraform(struct?: LexBotAliasConversationLogSettingsAudioLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: lexBotAliasConversationLogSettingsAudioLogSettingsDestinationToTerraform(struct!.destination),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function lexBotAliasConversationLogSettingsAudioLogSettingsToHclTerraform(struct?: LexBotAliasConversationLogSettingsAudioLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: lexBotAliasConversationLogSettingsAudioLogSettingsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasConversationLogSettingsAudioLogSettingsDestination",
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

export class LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotAliasConversationLogSettingsAudioLogSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettingsAudioLogSettings | cdktn.IResolvable | undefined) {
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
  private _destination = new LexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LexBotAliasConversationLogSettingsAudioLogSettingsDestination) {
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

export class LexBotAliasConversationLogSettingsAudioLogSettingsList extends cdktn.ComplexList {
  public internalValue? : LexBotAliasConversationLogSettingsAudioLogSettings[] | cdktn.IResolvable

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
  public get(index: number): LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference {
    return new LexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch {
  /**
  * A string used to identify the groupArn for the Cloudwatch Log Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#cloudwatch_log_group_arn LexBotAlias#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * A string containing the value for the Log Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#log_prefix LexBotAlias#log_prefix}
  */
  readonly logPrefix?: string;
}

export function lexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchToTerraform(struct?: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group_arn: cdktn.stringToTerraform(struct!.cloudwatchLogGroupArn),
    log_prefix: cdktn.stringToTerraform(struct!.logPrefix),
  }
}


export function lexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchToHclTerraform(struct?: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable): any {
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

export class LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch | cdktn.IResolvable | undefined) {
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
export interface LexBotAliasConversationLogSettingsTextLogSettingsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#cloudwatch LexBotAlias#cloudwatch}
  */
  readonly cloudwatch?: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch;
}

export function lexBotAliasConversationLogSettingsTextLogSettingsDestinationToTerraform(struct?: LexBotAliasConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch: lexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchToTerraform(struct!.cloudwatch),
  }
}


export function lexBotAliasConversationLogSettingsTextLogSettingsDestinationToHclTerraform(struct?: LexBotAliasConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch: {
      value: lexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchToHclTerraform(struct!.cloudwatch),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettingsTextLogSettingsDestination | cdktn.IResolvable | undefined) {
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
  private _cloudwatch = new LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: LexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch) {
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
export interface LexBotAliasConversationLogSettingsTextLogSettings {
  /**
  * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}
  */
  readonly destination?: LexBotAliasConversationLogSettingsTextLogSettingsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#enabled LexBotAlias#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function lexBotAliasConversationLogSettingsTextLogSettingsToTerraform(struct?: LexBotAliasConversationLogSettingsTextLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: lexBotAliasConversationLogSettingsTextLogSettingsDestinationToTerraform(struct!.destination),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function lexBotAliasConversationLogSettingsTextLogSettingsToHclTerraform(struct?: LexBotAliasConversationLogSettingsTextLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: lexBotAliasConversationLogSettingsTextLogSettingsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "LexBotAliasConversationLogSettingsTextLogSettingsDestination",
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

export class LexBotAliasConversationLogSettingsTextLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotAliasConversationLogSettingsTextLogSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettingsTextLogSettings | cdktn.IResolvable | undefined) {
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
  private _destination = new LexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LexBotAliasConversationLogSettingsTextLogSettingsDestination) {
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

export class LexBotAliasConversationLogSettingsTextLogSettingsList extends cdktn.ComplexList {
  public internalValue? : LexBotAliasConversationLogSettingsTextLogSettings[] | cdktn.IResolvable

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
  public get(index: number): LexBotAliasConversationLogSettingsTextLogSettingsOutputReference {
    return new LexBotAliasConversationLogSettingsTextLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotAliasConversationLogSettings {
  /**
  * List of audio log settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#audio_log_settings LexBotAlias#audio_log_settings}
  */
  readonly audioLogSettings?: LexBotAliasConversationLogSettingsAudioLogSettings[] | cdktn.IResolvable;
  /**
  * List of text log settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#text_log_settings LexBotAlias#text_log_settings}
  */
  readonly textLogSettings?: LexBotAliasConversationLogSettingsTextLogSettings[] | cdktn.IResolvable;
}

export function lexBotAliasConversationLogSettingsToTerraform(struct?: LexBotAliasConversationLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_log_settings: cdktn.listMapper(lexBotAliasConversationLogSettingsAudioLogSettingsToTerraform, false)(struct!.audioLogSettings),
    text_log_settings: cdktn.listMapper(lexBotAliasConversationLogSettingsTextLogSettingsToTerraform, false)(struct!.textLogSettings),
  }
}


export function lexBotAliasConversationLogSettingsToHclTerraform(struct?: LexBotAliasConversationLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_log_settings: {
      value: cdktn.listMapperHcl(lexBotAliasConversationLogSettingsAudioLogSettingsToHclTerraform, false)(struct!.audioLogSettings),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotAliasConversationLogSettingsAudioLogSettingsList",
    },
    text_log_settings: {
      value: cdktn.listMapperHcl(lexBotAliasConversationLogSettingsTextLogSettingsToHclTerraform, false)(struct!.textLogSettings),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotAliasConversationLogSettingsTextLogSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotAliasConversationLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasConversationLogSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasConversationLogSettings | cdktn.IResolvable | undefined) {
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
  private _audioLogSettings = new LexBotAliasConversationLogSettingsAudioLogSettingsList(this, "audio_log_settings", true);
  public get audioLogSettings() {
    return this._audioLogSettings;
  }
  public putAudioLogSettings(value: LexBotAliasConversationLogSettingsAudioLogSettings[] | cdktn.IResolvable) {
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
  private _textLogSettings = new LexBotAliasConversationLogSettingsTextLogSettingsList(this, "text_log_settings", true);
  public get textLogSettings() {
    return this._textLogSettings;
  }
  public putTextLogSettings(value: LexBotAliasConversationLogSettingsTextLogSettings[] | cdktn.IResolvable) {
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
export interface LexBotAliasSentimentAnalysisSettings {
  /**
  * Enable to call Amazon Comprehend for Sentiment natively within Lex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#detect_sentiment LexBotAlias#detect_sentiment}
  */
  readonly detectSentiment?: boolean | cdktn.IResolvable;
}

export function lexBotAliasSentimentAnalysisSettingsToTerraform(struct?: LexBotAliasSentimentAnalysisSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detect_sentiment: cdktn.booleanToTerraform(struct!.detectSentiment),
  }
}


export function lexBotAliasSentimentAnalysisSettingsToHclTerraform(struct?: LexBotAliasSentimentAnalysisSettings | cdktn.IResolvable): any {
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

export class LexBotAliasSentimentAnalysisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotAliasSentimentAnalysisSettings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotAliasSentimentAnalysisSettings | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias awscc_lex_bot_alias}
*/
export class LexBotAlias extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lex_bot_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LexBotAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LexBotAlias to import
  * @param importFromId The id of the existing LexBotAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LexBotAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lex_bot_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lex_bot_alias awscc_lex_bot_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexBotAliasConfig
  */
  public constructor(scope: Construct, id: string, config: LexBotAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lex_bot_alias',
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
    this._botAliasLocaleSettings.internalValue = config.botAliasLocaleSettings;
    this._botAliasName = config.botAliasName;
    this._botAliasTags.internalValue = config.botAliasTags;
    this._botId = config.botId;
    this._botVersion = config.botVersion;
    this._conversationLogSettings.internalValue = config.conversationLogSettings;
    this._description = config.description;
    this._sentimentAnalysisSettings.internalValue = config.sentimentAnalysisSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bot_alias_id - computed: true, optional: false, required: false
  public get botAliasId() {
    return this.getStringAttribute('bot_alias_id');
  }

  // bot_alias_locale_settings - computed: true, optional: true, required: false
  private _botAliasLocaleSettings = new LexBotAliasBotAliasLocaleSettingsList(this, "bot_alias_locale_settings", true);
  public get botAliasLocaleSettings() {
    return this._botAliasLocaleSettings;
  }
  public putBotAliasLocaleSettings(value: LexBotAliasBotAliasLocaleSettings[] | cdktn.IResolvable) {
    this._botAliasLocaleSettings.internalValue = value;
  }
  public resetBotAliasLocaleSettings() {
    this._botAliasLocaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botAliasLocaleSettingsInput() {
    return this._botAliasLocaleSettings.internalValue;
  }

  // bot_alias_name - computed: false, optional: false, required: true
  private _botAliasName?: string;
  public get botAliasName() {
    return this.getStringAttribute('bot_alias_name');
  }
  public set botAliasName(value: string) {
    this._botAliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botAliasNameInput() {
    return this._botAliasName;
  }

  // bot_alias_status - computed: true, optional: false, required: false
  public get botAliasStatus() {
    return this.getStringAttribute('bot_alias_status');
  }

  // bot_alias_tags - computed: true, optional: true, required: false
  private _botAliasTags = new LexBotAliasBotAliasTagsList(this, "bot_alias_tags", true);
  public get botAliasTags() {
    return this._botAliasTags;
  }
  public putBotAliasTags(value: LexBotAliasBotAliasTags[] | cdktn.IResolvable) {
    this._botAliasTags.internalValue = value;
  }
  public resetBotAliasTags() {
    this._botAliasTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botAliasTagsInput() {
    return this._botAliasTags.internalValue;
  }

  // bot_id - computed: false, optional: false, required: true
  private _botId?: string;
  public get botId() {
    return this.getStringAttribute('bot_id');
  }
  public set botId(value: string) {
    this._botId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botIdInput() {
    return this._botId;
  }

  // bot_version - computed: true, optional: true, required: false
  private _botVersion?: string;
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }
  public set botVersion(value: string) {
    this._botVersion = value;
  }
  public resetBotVersion() {
    this._botVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botVersionInput() {
    return this._botVersion;
  }

  // conversation_log_settings - computed: true, optional: true, required: false
  private _conversationLogSettings = new LexBotAliasConversationLogSettingsOutputReference(this, "conversation_log_settings");
  public get conversationLogSettings() {
    return this._conversationLogSettings;
  }
  public putConversationLogSettings(value: LexBotAliasConversationLogSettings) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sentiment_analysis_settings - computed: true, optional: true, required: false
  private _sentimentAnalysisSettings = new LexBotAliasSentimentAnalysisSettingsOutputReference(this, "sentiment_analysis_settings");
  public get sentimentAnalysisSettings() {
    return this._sentimentAnalysisSettings;
  }
  public putSentimentAnalysisSettings(value: LexBotAliasSentimentAnalysisSettings) {
    this._sentimentAnalysisSettings.internalValue = value;
  }
  public resetSentimentAnalysisSettings() {
    this._sentimentAnalysisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentAnalysisSettingsInput() {
    return this._sentimentAnalysisSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_alias_locale_settings: cdktn.listMapper(lexBotAliasBotAliasLocaleSettingsToTerraform, false)(this._botAliasLocaleSettings.internalValue),
      bot_alias_name: cdktn.stringToTerraform(this._botAliasName),
      bot_alias_tags: cdktn.listMapper(lexBotAliasBotAliasTagsToTerraform, false)(this._botAliasTags.internalValue),
      bot_id: cdktn.stringToTerraform(this._botId),
      bot_version: cdktn.stringToTerraform(this._botVersion),
      conversation_log_settings: lexBotAliasConversationLogSettingsToTerraform(this._conversationLogSettings.internalValue),
      description: cdktn.stringToTerraform(this._description),
      sentiment_analysis_settings: lexBotAliasSentimentAnalysisSettingsToTerraform(this._sentimentAnalysisSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_alias_locale_settings: {
        value: cdktn.listMapperHcl(lexBotAliasBotAliasLocaleSettingsToHclTerraform, false)(this._botAliasLocaleSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LexBotAliasBotAliasLocaleSettingsList",
      },
      bot_alias_name: {
        value: cdktn.stringToHclTerraform(this._botAliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_alias_tags: {
        value: cdktn.listMapperHcl(lexBotAliasBotAliasTagsToHclTerraform, false)(this._botAliasTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LexBotAliasBotAliasTagsList",
      },
      bot_id: {
        value: cdktn.stringToHclTerraform(this._botId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_version: {
        value: cdktn.stringToHclTerraform(this._botVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conversation_log_settings: {
        value: lexBotAliasConversationLogSettingsToHclTerraform(this._conversationLogSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LexBotAliasConversationLogSettings",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sentiment_analysis_settings: {
        value: lexBotAliasSentimentAnalysisSettingsToHclTerraform(this._sentimentAnalysisSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LexBotAliasSentimentAnalysisSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
