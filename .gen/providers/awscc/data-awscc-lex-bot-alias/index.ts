// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lex_bot_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLexBotAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lex_bot_alias#id DataAwsccLexBotAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook {
}

export function dataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookToHclTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHook | undefined) {
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
export interface DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification {
}

export function dataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationToHclTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_code_hook - computed: true, optional: false, required: false
  private _lambdaCodeHook = new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationLambdaCodeHookOutputReference(this, "lambda_code_hook");
  public get lambdaCodeHook() {
    return this._lambdaCodeHook;
  }
}
export interface DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting {
}

export function dataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingToTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingToHclTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_hook_specification - computed: true, optional: false, required: false
  private _codeHookSpecification = new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingCodeHookSpecificationOutputReference(this, "code_hook_specification");
  public get codeHookSpecification() {
    return this._codeHookSpecification;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccLexBotAliasBotAliasLocaleSettings {
}

export function dataAwsccLexBotAliasBotAliasLocaleSettingsToTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasBotAliasLocaleSettingsToHclTerraform(struct?: DataAwsccLexBotAliasBotAliasLocaleSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotAliasBotAliasLocaleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasBotAliasLocaleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bot_alias_locale_setting - computed: true, optional: false, required: false
  private _botAliasLocaleSetting = new DataAwsccLexBotAliasBotAliasLocaleSettingsBotAliasLocaleSettingOutputReference(this, "bot_alias_locale_setting");
  public get botAliasLocaleSetting() {
    return this._botAliasLocaleSetting;
  }

  // locale_id - computed: true, optional: false, required: false
  public get localeId() {
    return this.getStringAttribute('locale_id');
  }
}

export class DataAwsccLexBotAliasBotAliasLocaleSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference {
    return new DataAwsccLexBotAliasBotAliasLocaleSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotAliasBotAliasTags {
}

export function dataAwsccLexBotAliasBotAliasTagsToTerraform(struct?: DataAwsccLexBotAliasBotAliasTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasBotAliasTagsToHclTerraform(struct?: DataAwsccLexBotAliasBotAliasTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasBotAliasTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotAliasBotAliasTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasBotAliasTags | undefined) {
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

export class DataAwsccLexBotAliasBotAliasTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotAliasBotAliasTagsOutputReference {
    return new DataAwsccLexBotAliasBotAliasTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket {
}

export function dataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3Bucket | undefined) {
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
export interface DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination {
}

export function dataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  private _s3Bucket = new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationS3BucketOutputReference(this, "s3_bucket");
  public get s3Bucket() {
    return this._s3Bucket;
  }
}
export interface DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings {
}

export function dataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettingsAudioLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference {
    return new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch {
}

export function dataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatch | undefined) {
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
export interface DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination {
}

export function dataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch - computed: true, optional: false, required: false
  private _cloudwatch = new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
}
export interface DataAwsccLexBotAliasConversationLogSettingsTextLogSettings {
}

export function dataAwsccLexBotAliasConversationLogSettingsTextLogSettingsToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsTextLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsTextLogSettingsToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettingsTextLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettingsTextLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettingsTextLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference {
    return new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLexBotAliasConversationLogSettings {
}

export function dataAwsccLexBotAliasConversationLogSettingsToTerraform(struct?: DataAwsccLexBotAliasConversationLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasConversationLogSettingsToHclTerraform(struct?: DataAwsccLexBotAliasConversationLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasConversationLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasConversationLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasConversationLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_log_settings - computed: true, optional: false, required: false
  private _audioLogSettings = new DataAwsccLexBotAliasConversationLogSettingsAudioLogSettingsList(this, "audio_log_settings", true);
  public get audioLogSettings() {
    return this._audioLogSettings;
  }

  // text_log_settings - computed: true, optional: false, required: false
  private _textLogSettings = new DataAwsccLexBotAliasConversationLogSettingsTextLogSettingsList(this, "text_log_settings", true);
  public get textLogSettings() {
    return this._textLogSettings;
  }
}
export interface DataAwsccLexBotAliasSentimentAnalysisSettings {
}

export function dataAwsccLexBotAliasSentimentAnalysisSettingsToTerraform(struct?: DataAwsccLexBotAliasSentimentAnalysisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLexBotAliasSentimentAnalysisSettingsToHclTerraform(struct?: DataAwsccLexBotAliasSentimentAnalysisSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLexBotAliasSentimentAnalysisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLexBotAliasSentimentAnalysisSettings | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lex_bot_alias awscc_lex_bot_alias}
*/
export class DataAwsccLexBotAlias extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lex_bot_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLexBotAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLexBotAlias to import
  * @param importFromId The id of the existing DataAwsccLexBotAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lex_bot_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLexBotAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lex_bot_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lex_bot_alias awscc_lex_bot_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLexBotAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLexBotAliasConfig) {
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
    this._id = config.id;
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

  // bot_alias_locale_settings - computed: true, optional: false, required: false
  private _botAliasLocaleSettings = new DataAwsccLexBotAliasBotAliasLocaleSettingsList(this, "bot_alias_locale_settings", true);
  public get botAliasLocaleSettings() {
    return this._botAliasLocaleSettings;
  }

  // bot_alias_name - computed: true, optional: false, required: false
  public get botAliasName() {
    return this.getStringAttribute('bot_alias_name');
  }

  // bot_alias_status - computed: true, optional: false, required: false
  public get botAliasStatus() {
    return this.getStringAttribute('bot_alias_status');
  }

  // bot_alias_tags - computed: true, optional: false, required: false
  private _botAliasTags = new DataAwsccLexBotAliasBotAliasTagsList(this, "bot_alias_tags", true);
  public get botAliasTags() {
    return this._botAliasTags;
  }

  // bot_id - computed: true, optional: false, required: false
  public get botId() {
    return this.getStringAttribute('bot_id');
  }

  // bot_version - computed: true, optional: false, required: false
  public get botVersion() {
    return this.getStringAttribute('bot_version');
  }

  // conversation_log_settings - computed: true, optional: false, required: false
  private _conversationLogSettings = new DataAwsccLexBotAliasConversationLogSettingsOutputReference(this, "conversation_log_settings");
  public get conversationLogSettings() {
    return this._conversationLogSettings;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // sentiment_analysis_settings - computed: true, optional: false, required: false
  private _sentimentAnalysisSettings = new DataAwsccLexBotAliasSentimentAnalysisSettingsOutputReference(this, "sentiment_analysis_settings");
  public get sentimentAnalysisSettings() {
    return this._sentimentAnalysisSettings;
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
