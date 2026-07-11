// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CognitoUserPoolRegionalConfigurationAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}
  */
  readonly emailConfiguration?: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}
  */
  readonly lambdaConfig?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}
  */
  readonly smsConfiguration?: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration;
  /**
  * The status of the replica. Set to ACTIVE or INACTIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}
  */
  readonly userPoolTags?: { [key: string]: string };
}
export interface CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}
  */
  readonly configurationSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}
  */
  readonly emailSendingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}
  */
  readonly replyToEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}
  */
  readonly sourceArn?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration_set: cdktn.stringToTerraform(struct!.configurationSet),
    email_sending_account: cdktn.stringToTerraform(struct!.emailSendingAccount),
    from: cdktn.stringToTerraform(struct!.from),
    reply_to_email_address: cdktn.stringToTerraform(struct!.replyToEmailAddress),
    source_arn: cdktn.stringToTerraform(struct!.sourceArn),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration_set: {
      value: cdktn.stringToHclTerraform(struct!.configurationSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sending_account: {
      value: cdktn.stringToHclTerraform(struct!.emailSendingAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_to_email_address: {
      value: cdktn.stringToHclTerraform(struct!.replyToEmailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSet = this._configurationSet;
    }
    if (this._emailSendingAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSendingAccount = this._emailSendingAccount;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._replyToEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyToEmailAddress = this._replyToEmailAddress;
    }
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationSet = undefined;
      this._emailSendingAccount = undefined;
      this._from = undefined;
      this._replyToEmailAddress = undefined;
      this._sourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationSet = value.configurationSet;
      this._emailSendingAccount = value.emailSendingAccount;
      this._from = value.from;
      this._replyToEmailAddress = value.replyToEmailAddress;
      this._sourceArn = value.sourceArn;
    }
  }

  // configuration_set - computed: true, optional: true, required: false
  private _configurationSet?: string;
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }
  public set configurationSet(value: string) {
    this._configurationSet = value;
  }
  public resetConfigurationSet() {
    this._configurationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetInput() {
    return this._configurationSet;
  }

  // email_sending_account - computed: true, optional: true, required: false
  private _emailSendingAccount?: string;
  public get emailSendingAccount() {
    return this.getStringAttribute('email_sending_account');
  }
  public set emailSendingAccount(value: string) {
    this._emailSendingAccount = value;
  }
  public resetEmailSendingAccount() {
    this._emailSendingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendingAccountInput() {
    return this._emailSendingAccount;
  }

  // from - computed: true, optional: true, required: false
  private _from?: string;
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // reply_to_email_address - computed: true, optional: true, required: false
  private _replyToEmailAddress?: string;
  public get replyToEmailAddress() {
    return this.getStringAttribute('reply_to_email_address');
  }
  public set replyToEmailAddress(value: string) {
    this._replyToEmailAddress = value;
  }
  public resetReplyToEmailAddress() {
    this._replyToEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToEmailAddressInput() {
    return this._replyToEmailAddress;
  }

  // source_arn - computed: true, optional: true, required: false
  private _sourceArn?: string;
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn;
  }
}
export interface CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}
  */
  readonly lambdaVersion?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
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

  // lambda_version - computed: true, optional: true, required: false
  private _lambdaVersion?: string;
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  public resetLambdaVersion() {
    this._lambdaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}
  */
  readonly lambdaVersion?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
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

  // lambda_version - computed: true, optional: true, required: false
  private _lambdaVersion?: string;
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  public resetLambdaVersion() {
    this._lambdaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}
  */
  readonly lambdaVersion?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
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

  // lambda_version - computed: true, optional: true, required: false
  private _lambdaVersion?: string;
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  public resetLambdaVersion() {
    this._lambdaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}
  */
  readonly lambdaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}
  */
  readonly lambdaVersion?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktn.stringToTerraform(struct!.lambdaVersion),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_version: {
      value: cdktn.stringToHclTerraform(struct!.lambdaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    if (this._lambdaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaVersion = this._lambdaVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
      this._lambdaVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
      this._lambdaVersion = value.lambdaVersion;
    }
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

  // lambda_version - computed: true, optional: true, required: false
  private _lambdaVersion?: string;
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  public resetLambdaVersion() {
    this._lambdaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion;
  }
}
export interface CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}
  */
  readonly createAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}
  */
  readonly customEmailSender?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}
  */
  readonly customSmsSender?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}
  */
  readonly defineAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}
  */
  readonly inboundFederation?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}
  */
  readonly postAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}
  */
  readonly postConfirmation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}
  */
  readonly preAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}
  */
  readonly preSignUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}
  */
  readonly preTokenGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}
  */
  readonly preTokenGenerationConfig?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}
  */
  readonly userMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}
  */
  readonly verifyAuthChallengeResponse?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create_auth_challenge: cdktn.stringToTerraform(struct!.createAuthChallenge),
    custom_email_sender: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderToTerraform(struct!.customEmailSender),
    custom_message: cdktn.stringToTerraform(struct!.customMessage),
    custom_sms_sender: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderToTerraform(struct!.customSmsSender),
    define_auth_challenge: cdktn.stringToTerraform(struct!.defineAuthChallenge),
    inbound_federation: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationToTerraform(struct!.inboundFederation),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    post_authentication: cdktn.stringToTerraform(struct!.postAuthentication),
    post_confirmation: cdktn.stringToTerraform(struct!.postConfirmation),
    pre_authentication: cdktn.stringToTerraform(struct!.preAuthentication),
    pre_sign_up: cdktn.stringToTerraform(struct!.preSignUp),
    pre_token_generation: cdktn.stringToTerraform(struct!.preTokenGeneration),
    pre_token_generation_config: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigToTerraform(struct!.preTokenGenerationConfig),
    user_migration: cdktn.stringToTerraform(struct!.userMigration),
    verify_auth_challenge_response: cdktn.stringToTerraform(struct!.verifyAuthChallengeResponse),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create_auth_challenge: {
      value: cdktn.stringToHclTerraform(struct!.createAuthChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_email_sender: {
      value: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderToHclTerraform(struct!.customEmailSender),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender",
    },
    custom_message: {
      value: cdktn.stringToHclTerraform(struct!.customMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_sms_sender: {
      value: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderToHclTerraform(struct!.customSmsSender),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender",
    },
    define_auth_challenge: {
      value: cdktn.stringToHclTerraform(struct!.defineAuthChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_federation: {
      value: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationToHclTerraform(struct!.inboundFederation),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_authentication: {
      value: cdktn.stringToHclTerraform(struct!.postAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_confirmation: {
      value: cdktn.stringToHclTerraform(struct!.postConfirmation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_authentication: {
      value: cdktn.stringToHclTerraform(struct!.preAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_sign_up: {
      value: cdktn.stringToHclTerraform(struct!.preSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_token_generation: {
      value: cdktn.stringToHclTerraform(struct!.preTokenGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_token_generation_config: {
      value: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigToHclTerraform(struct!.preTokenGenerationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig",
    },
    user_migration: {
      value: cdktn.stringToHclTerraform(struct!.userMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_auth_challenge_response: {
      value: cdktn.stringToHclTerraform(struct!.verifyAuthChallengeResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createAuthChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAuthChallenge = this._createAuthChallenge;
    }
    if (this._customEmailSender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEmailSender = this._customEmailSender?.internalValue;
    }
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._customSmsSender?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSmsSender = this._customSmsSender?.internalValue;
    }
    if (this._defineAuthChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.defineAuthChallenge = this._defineAuthChallenge;
    }
    if (this._inboundFederation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFederation = this._inboundFederation?.internalValue;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._postAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAuthentication = this._postAuthentication;
    }
    if (this._postConfirmation !== undefined) {
      hasAnyValues = true;
      internalValueResult.postConfirmation = this._postConfirmation;
    }
    if (this._preAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAuthentication = this._preAuthentication;
    }
    if (this._preSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSignUp = this._preSignUp;
    }
    if (this._preTokenGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTokenGeneration = this._preTokenGeneration;
    }
    if (this._preTokenGenerationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preTokenGenerationConfig = this._preTokenGenerationConfig?.internalValue;
    }
    if (this._userMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMigration = this._userMigration;
    }
    if (this._verifyAuthChallengeResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAuthChallengeResponse = this._verifyAuthChallengeResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createAuthChallenge = undefined;
      this._customEmailSender.internalValue = undefined;
      this._customMessage = undefined;
      this._customSmsSender.internalValue = undefined;
      this._defineAuthChallenge = undefined;
      this._inboundFederation.internalValue = undefined;
      this._kmsKeyId = undefined;
      this._postAuthentication = undefined;
      this._postConfirmation = undefined;
      this._preAuthentication = undefined;
      this._preSignUp = undefined;
      this._preTokenGeneration = undefined;
      this._preTokenGenerationConfig.internalValue = undefined;
      this._userMigration = undefined;
      this._verifyAuthChallengeResponse = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createAuthChallenge = value.createAuthChallenge;
      this._customEmailSender.internalValue = value.customEmailSender;
      this._customMessage = value.customMessage;
      this._customSmsSender.internalValue = value.customSmsSender;
      this._defineAuthChallenge = value.defineAuthChallenge;
      this._inboundFederation.internalValue = value.inboundFederation;
      this._kmsKeyId = value.kmsKeyId;
      this._postAuthentication = value.postAuthentication;
      this._postConfirmation = value.postConfirmation;
      this._preAuthentication = value.preAuthentication;
      this._preSignUp = value.preSignUp;
      this._preTokenGeneration = value.preTokenGeneration;
      this._preTokenGenerationConfig.internalValue = value.preTokenGenerationConfig;
      this._userMigration = value.userMigration;
      this._verifyAuthChallengeResponse = value.verifyAuthChallengeResponse;
    }
  }

  // create_auth_challenge - computed: true, optional: true, required: false
  private _createAuthChallenge?: string;
  public get createAuthChallenge() {
    return this.getStringAttribute('create_auth_challenge');
  }
  public set createAuthChallenge(value: string) {
    this._createAuthChallenge = value;
  }
  public resetCreateAuthChallenge() {
    this._createAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAuthChallengeInput() {
    return this._createAuthChallenge;
  }

  // custom_email_sender - computed: true, optional: true, required: false
  private _customEmailSender = new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(this, "custom_email_sender");
  public get customEmailSender() {
    return this._customEmailSender;
  }
  public putCustomEmailSender(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender) {
    this._customEmailSender.internalValue = value;
  }
  public resetCustomEmailSender() {
    this._customEmailSender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEmailSenderInput() {
    return this._customEmailSender.internalValue;
  }

  // custom_message - computed: true, optional: true, required: false
  private _customMessage?: string;
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // custom_sms_sender - computed: true, optional: true, required: false
  private _customSmsSender = new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(this, "custom_sms_sender");
  public get customSmsSender() {
    return this._customSmsSender;
  }
  public putCustomSmsSender(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender) {
    this._customSmsSender.internalValue = value;
  }
  public resetCustomSmsSender() {
    this._customSmsSender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSmsSenderInput() {
    return this._customSmsSender.internalValue;
  }

  // define_auth_challenge - computed: true, optional: true, required: false
  private _defineAuthChallenge?: string;
  public get defineAuthChallenge() {
    return this.getStringAttribute('define_auth_challenge');
  }
  public set defineAuthChallenge(value: string) {
    this._defineAuthChallenge = value;
  }
  public resetDefineAuthChallenge() {
    this._defineAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineAuthChallengeInput() {
    return this._defineAuthChallenge;
  }

  // inbound_federation - computed: true, optional: true, required: false
  private _inboundFederation = new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(this, "inbound_federation");
  public get inboundFederation() {
    return this._inboundFederation;
  }
  public putInboundFederation(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation) {
    this._inboundFederation.internalValue = value;
  }
  public resetInboundFederation() {
    this._inboundFederation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFederationInput() {
    return this._inboundFederation.internalValue;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // post_authentication - computed: true, optional: true, required: false
  private _postAuthentication?: string;
  public get postAuthentication() {
    return this.getStringAttribute('post_authentication');
  }
  public set postAuthentication(value: string) {
    this._postAuthentication = value;
  }
  public resetPostAuthentication() {
    this._postAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthenticationInput() {
    return this._postAuthentication;
  }

  // post_confirmation - computed: true, optional: true, required: false
  private _postConfirmation?: string;
  public get postConfirmation() {
    return this.getStringAttribute('post_confirmation');
  }
  public set postConfirmation(value: string) {
    this._postConfirmation = value;
  }
  public resetPostConfirmation() {
    this._postConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postConfirmationInput() {
    return this._postConfirmation;
  }

  // pre_authentication - computed: true, optional: true, required: false
  private _preAuthentication?: string;
  public get preAuthentication() {
    return this.getStringAttribute('pre_authentication');
  }
  public set preAuthentication(value: string) {
    this._preAuthentication = value;
  }
  public resetPreAuthentication() {
    this._preAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationInput() {
    return this._preAuthentication;
  }

  // pre_sign_up - computed: true, optional: true, required: false
  private _preSignUp?: string;
  public get preSignUp() {
    return this.getStringAttribute('pre_sign_up');
  }
  public set preSignUp(value: string) {
    this._preSignUp = value;
  }
  public resetPreSignUp() {
    this._preSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSignUpInput() {
    return this._preSignUp;
  }

  // pre_token_generation - computed: true, optional: true, required: false
  private _preTokenGeneration?: string;
  public get preTokenGeneration() {
    return this.getStringAttribute('pre_token_generation');
  }
  public set preTokenGeneration(value: string) {
    this._preTokenGeneration = value;
  }
  public resetPreTokenGeneration() {
    this._preTokenGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTokenGenerationInput() {
    return this._preTokenGeneration;
  }

  // pre_token_generation_config - computed: true, optional: true, required: false
  private _preTokenGenerationConfig = new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(this, "pre_token_generation_config");
  public get preTokenGenerationConfig() {
    return this._preTokenGenerationConfig;
  }
  public putPreTokenGenerationConfig(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig) {
    this._preTokenGenerationConfig.internalValue = value;
  }
  public resetPreTokenGenerationConfig() {
    this._preTokenGenerationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTokenGenerationConfigInput() {
    return this._preTokenGenerationConfig.internalValue;
  }

  // user_migration - computed: true, optional: true, required: false
  private _userMigration?: string;
  public get userMigration() {
    return this.getStringAttribute('user_migration');
  }
  public set userMigration(value: string) {
    this._userMigration = value;
  }
  public resetUserMigration() {
    this._userMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMigrationInput() {
    return this._userMigration;
  }

  // verify_auth_challenge_response - computed: true, optional: true, required: false
  private _verifyAuthChallengeResponse?: string;
  public get verifyAuthChallengeResponse() {
    return this.getStringAttribute('verify_auth_challenge_response');
  }
  public set verifyAuthChallengeResponse(value: string) {
    this._verifyAuthChallengeResponse = value;
  }
  public resetVerifyAuthChallengeResponse() {
    this._verifyAuthChallengeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAuthChallengeResponseInput() {
    return this._verifyAuthChallengeResponse;
  }
}
export interface CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}
  */
  readonly snsCallerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}
  */
  readonly snsRegion?: string;
}

export function cognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationToTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_id: cdktn.stringToTerraform(struct!.externalId),
    sns_caller_arn: cdktn.stringToTerraform(struct!.snsCallerArn),
    sns_region: cdktn.stringToTerraform(struct!.snsRegion),
  }
}


export function cognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationToHclTerraform(struct?: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_caller_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsCallerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_region: {
      value: cdktn.stringToHclTerraform(struct!.snsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._snsCallerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsCallerArn = this._snsCallerArn;
    }
    if (this._snsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsRegion = this._snsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._snsCallerArn = undefined;
      this._snsRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._snsCallerArn = value.snsCallerArn;
      this._snsRegion = value.snsRegion;
    }
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string;
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // sns_caller_arn - computed: true, optional: true, required: false
  private _snsCallerArn?: string;
  public get snsCallerArn() {
    return this.getStringAttribute('sns_caller_arn');
  }
  public set snsCallerArn(value: string) {
    this._snsCallerArn = value;
  }
  public resetSnsCallerArn() {
    this._snsCallerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsCallerArnInput() {
    return this._snsCallerArn;
  }

  // sns_region - computed: true, optional: true, required: false
  private _snsRegion?: string;
  public get snsRegion() {
    return this.getStringAttribute('sns_region');
  }
  public set snsRegion(value: string) {
    this._snsRegion = value;
  }
  public resetSnsRegion() {
    this._snsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsRegionInput() {
    return this._snsRegion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}
*/
export class CognitoUserPoolRegionalConfigurationAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_regional_configuration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoUserPoolRegionalConfigurationAttachment to import
  * @param importFromId The id of the existing CognitoUserPoolRegionalConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoUserPoolRegionalConfigurationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_regional_configuration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolRegionalConfigurationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolRegionalConfigurationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_regional_configuration_attachment',
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
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._lambdaConfig.internalValue = config.lambdaConfig;
    this._smsConfiguration.internalValue = config.smsConfiguration;
    this._status = config.status;
    this._userPoolId = config.userPoolId;
    this._userPoolTags = config.userPoolTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_configuration - computed: true, optional: true, required: false
  private _emailConfiguration = new CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(this, "email_configuration");
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration) {
    this._emailConfiguration.internalValue = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_config - computed: true, optional: true, required: false
  private _lambdaConfig = new CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }

  // sms_configuration - computed: true, optional: true, required: false
  private _smsConfiguration = new CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(this, "sms_configuration");
  public get smsConfiguration() {
    return this._smsConfiguration;
  }
  public putSmsConfiguration(value: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration) {
    this._smsConfiguration.internalValue = value;
  }
  public resetSmsConfiguration() {
    this._smsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsConfigurationInput() {
    return this._smsConfiguration.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string;
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // user_pool_tags - computed: true, optional: true, required: false
  private _userPoolTags?: { [key: string]: string };
  public get userPoolTags() {
    return this.getStringMapAttribute('user_pool_tags');
  }
  public set userPoolTags(value: { [key: string]: string }) {
    this._userPoolTags = value;
  }
  public resetUserPoolTags() {
    this._userPoolTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolTagsInput() {
    return this._userPoolTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_configuration: cognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationToTerraform(this._emailConfiguration.internalValue),
      lambda_config: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigToTerraform(this._lambdaConfig.internalValue),
      sms_configuration: cognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationToTerraform(this._smsConfiguration.internalValue),
      status: cdktn.stringToTerraform(this._status),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
      user_pool_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._userPoolTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_configuration: {
        value: cognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationToHclTerraform(this._emailConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration",
      },
      lambda_config: {
        value: cognitoUserPoolRegionalConfigurationAttachmentLambdaConfigToHclTerraform(this._lambdaConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig",
      },
      sms_configuration: {
        value: cognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationToHclTerraform(this._smsConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._userPoolTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
