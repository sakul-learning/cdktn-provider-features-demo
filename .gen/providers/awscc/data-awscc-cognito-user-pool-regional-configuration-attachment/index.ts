// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#id DataAwsccCognitoUserPoolRegionalConfigurationAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_set - computed: true, optional: false, required: false
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }

  // email_sending_account - computed: true, optional: false, required: false
  public get emailSendingAccount() {
    return this.getStringAttribute('email_sending_account');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // reply_to_email_address - computed: true, optional: false, required: false
  public get replyToEmailAddress() {
    return this.getStringAttribute('reply_to_email_address');
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_auth_challenge - computed: true, optional: false, required: false
  public get createAuthChallenge() {
    return this.getStringAttribute('create_auth_challenge');
  }

  // custom_email_sender - computed: true, optional: false, required: false
  private _customEmailSender = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(this, "custom_email_sender");
  public get customEmailSender() {
    return this._customEmailSender;
  }

  // custom_message - computed: true, optional: false, required: false
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }

  // custom_sms_sender - computed: true, optional: false, required: false
  private _customSmsSender = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(this, "custom_sms_sender");
  public get customSmsSender() {
    return this._customSmsSender;
  }

  // define_auth_challenge - computed: true, optional: false, required: false
  public get defineAuthChallenge() {
    return this.getStringAttribute('define_auth_challenge');
  }

  // inbound_federation - computed: true, optional: false, required: false
  private _inboundFederation = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(this, "inbound_federation");
  public get inboundFederation() {
    return this._inboundFederation;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // post_authentication - computed: true, optional: false, required: false
  public get postAuthentication() {
    return this.getStringAttribute('post_authentication');
  }

  // post_confirmation - computed: true, optional: false, required: false
  public get postConfirmation() {
    return this.getStringAttribute('post_confirmation');
  }

  // pre_authentication - computed: true, optional: false, required: false
  public get preAuthentication() {
    return this.getStringAttribute('pre_authentication');
  }

  // pre_sign_up - computed: true, optional: false, required: false
  public get preSignUp() {
    return this.getStringAttribute('pre_sign_up');
  }

  // pre_token_generation - computed: true, optional: false, required: false
  public get preTokenGeneration() {
    return this.getStringAttribute('pre_token_generation');
  }

  // pre_token_generation_config - computed: true, optional: false, required: false
  private _preTokenGenerationConfig = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(this, "pre_token_generation_config");
  public get preTokenGenerationConfig() {
    return this._preTokenGenerationConfig;
  }

  // user_migration - computed: true, optional: false, required: false
  public get userMigration() {
    return this.getStringAttribute('user_migration');
  }

  // verify_auth_challenge_response - computed: true, optional: false, required: false
  public get verifyAuthChallengeResponse() {
    return this.getStringAttribute('verify_auth_challenge_response');
  }
}
export interface DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration {
}

export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // sns_caller_arn - computed: true, optional: false, required: false
  public get snsCallerArn() {
    return this.getStringAttribute('sns_caller_arn');
  }

  // sns_region - computed: true, optional: false, required: false
  public get snsRegion() {
    return this.getStringAttribute('sns_region');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}
*/
export class DataAwsccCognitoUserPoolRegionalConfigurationAttachment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_regional_configuration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoUserPoolRegionalConfigurationAttachment to import
  * @param importFromId The id of the existing DataAwsccCognitoUserPoolRegionalConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoUserPoolRegionalConfigurationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_regional_configuration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_regional_configuration_attachment',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_configuration - computed: true, optional: false, required: false
  private _emailConfiguration = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(this, "email_configuration");
  public get emailConfiguration() {
    return this._emailConfiguration;
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

  // lambda_config - computed: true, optional: false, required: false
  private _lambdaConfig = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }

  // sms_configuration - computed: true, optional: false, required: false
  private _smsConfiguration = new DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(this, "sms_configuration");
  public get smsConfiguration() {
    return this._smsConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }

  // user_pool_tags - computed: true, optional: false, required: false
  private _userPoolTags = new cdktn.StringMap(this, "user_pool_tags");
  public get userPoolTags() {
    return this._userPoolTags;
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
