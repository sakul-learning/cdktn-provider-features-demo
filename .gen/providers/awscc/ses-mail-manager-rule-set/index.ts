// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SesMailManagerRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#rule_set_name SesMailManagerRuleSet#rule_set_name}
  */
  readonly ruleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#rules SesMailManagerRuleSet#rules}
  */
  readonly rules: SesMailManagerRuleSetRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#tags SesMailManagerRuleSet#tags}
  */
  readonly tags?: SesMailManagerRuleSetTags[] | cdktn.IResolvable;
}
export interface SesMailManagerRuleSetRulesActionsAddHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#header_name SesMailManagerRuleSet#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#header_value SesMailManagerRuleSet#header_value}
  */
  readonly headerValue?: string;
}

export function sesMailManagerRuleSetRulesActionsAddHeaderToTerraform(struct?: SesMailManagerRuleSetRulesActionsAddHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
  }
}


export function sesMailManagerRuleSetRulesActionsAddHeaderToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsAddHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsAddHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsAddHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsAddHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: true, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}
export interface SesMailManagerRuleSetRulesActionsArchive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#target_archive SesMailManagerRuleSet#target_archive}
  */
  readonly targetArchive?: string;
}

export function sesMailManagerRuleSetRulesActionsArchiveToTerraform(struct?: SesMailManagerRuleSetRulesActionsArchive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    target_archive: cdktn.stringToTerraform(struct!.targetArchive),
  }
}


export function sesMailManagerRuleSetRulesActionsArchiveToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsArchive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_archive: {
      value: cdktn.stringToHclTerraform(struct!.targetArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsArchiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsArchive | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._targetArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArchive = this._targetArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsArchive | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._targetArchive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._targetArchive = value.targetArchive;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // target_archive - computed: true, optional: true, required: false
  private _targetArchive?: string; 
  public get targetArchive() {
    return this.getStringAttribute('target_archive');
  }
  public set targetArchive(value: string) {
    this._targetArchive = value;
  }
  public resetTargetArchive() {
    this._targetArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArchiveInput() {
    return this._targetArchive;
  }
}
export interface SesMailManagerRuleSetRulesActionsBounce {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#diagnostic_message SesMailManagerRuleSet#diagnostic_message}
  */
  readonly diagnosticMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#message SesMailManagerRuleSet#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#sender SesMailManagerRuleSet#sender}
  */
  readonly sender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#smtp_reply_code SesMailManagerRuleSet#smtp_reply_code}
  */
  readonly smtpReplyCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#status_code SesMailManagerRuleSet#status_code}
  */
  readonly statusCode?: string;
}

export function sesMailManagerRuleSetRulesActionsBounceToTerraform(struct?: SesMailManagerRuleSetRulesActionsBounce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    diagnostic_message: cdktn.stringToTerraform(struct!.diagnosticMessage),
    message: cdktn.stringToTerraform(struct!.message),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    sender: cdktn.stringToTerraform(struct!.sender),
    smtp_reply_code: cdktn.stringToTerraform(struct!.smtpReplyCode),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function sesMailManagerRuleSetRulesActionsBounceToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsBounce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diagnostic_message: {
      value: cdktn.stringToHclTerraform(struct!.diagnosticMessage),
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
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender: {
      value: cdktn.stringToHclTerraform(struct!.sender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_reply_code: {
      value: cdktn.stringToHclTerraform(struct!.smtpReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsBounceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsBounce | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._diagnosticMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosticMessage = this._diagnosticMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sender !== undefined) {
      hasAnyValues = true;
      internalValueResult.sender = this._sender;
    }
    if (this._smtpReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpReplyCode = this._smtpReplyCode;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsBounce | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._diagnosticMessage = undefined;
      this._message = undefined;
      this._roleArn = undefined;
      this._sender = undefined;
      this._smtpReplyCode = undefined;
      this._statusCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._diagnosticMessage = value.diagnosticMessage;
      this._message = value.message;
      this._roleArn = value.roleArn;
      this._sender = value.sender;
      this._smtpReplyCode = value.smtpReplyCode;
      this._statusCode = value.statusCode;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // diagnostic_message - computed: true, optional: true, required: false
  private _diagnosticMessage?: string; 
  public get diagnosticMessage() {
    return this.getStringAttribute('diagnostic_message');
  }
  public set diagnosticMessage(value: string) {
    this._diagnosticMessage = value;
  }
  public resetDiagnosticMessage() {
    this._diagnosticMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticMessageInput() {
    return this._diagnosticMessage;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // sender - computed: true, optional: true, required: false
  private _sender?: string; 
  public get sender() {
    return this.getStringAttribute('sender');
  }
  public set sender(value: string) {
    this._sender = value;
  }
  public resetSender() {
    this._sender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInput() {
    return this._sender;
  }

  // smtp_reply_code - computed: true, optional: true, required: false
  private _smtpReplyCode?: string; 
  public get smtpReplyCode() {
    return this.getStringAttribute('smtp_reply_code');
  }
  public set smtpReplyCode(value: string) {
    this._smtpReplyCode = value;
  }
  public resetSmtpReplyCode() {
    this._smtpReplyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpReplyCodeInput() {
    return this._smtpReplyCode;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface SesMailManagerRuleSetRulesActionsDeliverToMailbox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#mailbox_arn SesMailManagerRuleSet#mailbox_arn}
  */
  readonly mailboxArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
}

export function sesMailManagerRuleSetRulesActionsDeliverToMailboxToTerraform(struct?: SesMailManagerRuleSetRulesActionsDeliverToMailbox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    mailbox_arn: cdktn.stringToTerraform(struct!.mailboxArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function sesMailManagerRuleSetRulesActionsDeliverToMailboxToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsDeliverToMailbox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailbox_arn: {
      value: cdktn.stringToHclTerraform(struct!.mailboxArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsDeliverToMailbox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._mailboxArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailboxArn = this._mailboxArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsDeliverToMailbox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._mailboxArn = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._mailboxArn = value.mailboxArn;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // mailbox_arn - computed: true, optional: true, required: false
  private _mailboxArn?: string; 
  public get mailboxArn() {
    return this.getStringAttribute('mailbox_arn');
  }
  public set mailboxArn(value: string) {
    this._mailboxArn = value;
  }
  public resetMailboxArn() {
    this._mailboxArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailboxArnInput() {
    return this._mailboxArn;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface SesMailManagerRuleSetRulesActionsDeliverToQBusiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#application_id SesMailManagerRuleSet#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#index_id SesMailManagerRuleSet#index_id}
  */
  readonly indexId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
}

export function sesMailManagerRuleSetRulesActionsDeliverToQBusinessToTerraform(struct?: SesMailManagerRuleSetRulesActionsDeliverToQBusiness | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    application_id: cdktn.stringToTerraform(struct!.applicationId),
    index_id: cdktn.stringToTerraform(struct!.indexId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function sesMailManagerRuleSetRulesActionsDeliverToQBusinessToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsDeliverToQBusiness | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_id: {
      value: cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_id: {
      value: cdktn.stringToHclTerraform(struct!.indexId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsDeliverToQBusiness | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._indexId !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexId = this._indexId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsDeliverToQBusiness | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._applicationId = undefined;
      this._indexId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._applicationId = value.applicationId;
      this._indexId = value.indexId;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // index_id - computed: true, optional: true, required: false
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  public resetIndexId() {
    this._indexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface SesMailManagerRuleSetRulesActionsInvokeLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#function_arn SesMailManagerRuleSet#function_arn}
  */
  readonly functionArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#invocation_type SesMailManagerRuleSet#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#retry_time_minutes SesMailManagerRuleSet#retry_time_minutes}
  */
  readonly retryTimeMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
}

export function sesMailManagerRuleSetRulesActionsInvokeLambdaToTerraform(struct?: SesMailManagerRuleSetRulesActionsInvokeLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    retry_time_minutes: cdktn.numberToTerraform(struct!.retryTimeMinutes),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function sesMailManagerRuleSetRulesActionsInvokeLambdaToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsInvokeLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_type: {
      value: cdktn.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_time_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryTimeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsInvokeLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._retryTimeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimeMinutes = this._retryTimeMinutes;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsInvokeLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._functionArn = undefined;
      this._invocationType = undefined;
      this._retryTimeMinutes = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._functionArn = value.functionArn;
      this._invocationType = value.invocationType;
      this._retryTimeMinutes = value.retryTimeMinutes;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // function_arn - computed: true, optional: true, required: false
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  public resetFunctionArn() {
    this._functionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }

  // invocation_type - computed: true, optional: true, required: false
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  public resetInvocationType() {
    this._invocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }

  // retry_time_minutes - computed: true, optional: true, required: false
  private _retryTimeMinutes?: number; 
  public get retryTimeMinutes() {
    return this.getNumberAttribute('retry_time_minutes');
  }
  public set retryTimeMinutes(value: number) {
    this._retryTimeMinutes = value;
  }
  public resetRetryTimeMinutes() {
    this._retryTimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeMinutesInput() {
    return this._retryTimeMinutes;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface SesMailManagerRuleSetRulesActionsPublishToSns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#encoding SesMailManagerRuleSet#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#payload_type SesMailManagerRuleSet#payload_type}
  */
  readonly payloadType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#topic_arn SesMailManagerRuleSet#topic_arn}
  */
  readonly topicArn?: string;
}

export function sesMailManagerRuleSetRulesActionsPublishToSnsToTerraform(struct?: SesMailManagerRuleSetRulesActionsPublishToSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function sesMailManagerRuleSetRulesActionsPublishToSnsToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsPublishToSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsPublishToSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsPublishToSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsPublishToSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._encoding = undefined;
      this._payloadType = undefined;
      this._roleArn = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._encoding = value.encoding;
      this._payloadType = value.payloadType;
      this._roleArn = value.roleArn;
      this._topicArn = value.topicArn;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // payload_type - computed: true, optional: true, required: false
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic_arn - computed: true, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}
export interface SesMailManagerRuleSetRulesActionsRelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#mail_from SesMailManagerRuleSet#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#relay SesMailManagerRuleSet#relay}
  */
  readonly relay?: string;
}

export function sesMailManagerRuleSetRulesActionsRelayToTerraform(struct?: SesMailManagerRuleSetRulesActionsRelay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    mail_from: cdktn.stringToTerraform(struct!.mailFrom),
    relay: cdktn.stringToTerraform(struct!.relay),
  }
}


export function sesMailManagerRuleSetRulesActionsRelayToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsRelay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_from: {
      value: cdktn.stringToHclTerraform(struct!.mailFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay: {
      value: cdktn.stringToHclTerraform(struct!.relay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsRelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsRelay | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._mailFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFrom = this._mailFrom;
    }
    if (this._relay !== undefined) {
      hasAnyValues = true;
      internalValueResult.relay = this._relay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsRelay | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._mailFrom = undefined;
      this._relay = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._mailFrom = value.mailFrom;
      this._relay = value.relay;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // mail_from - computed: true, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // relay - computed: true, optional: true, required: false
  private _relay?: string; 
  public get relay() {
    return this.getStringAttribute('relay');
  }
  public set relay(value: string) {
    this._relay = value;
  }
  public resetRelay() {
    this._relay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay;
  }
}
export interface SesMailManagerRuleSetRulesActionsReplaceRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#replace_with SesMailManagerRuleSet#replace_with}
  */
  readonly replaceWith?: string[];
}

export function sesMailManagerRuleSetRulesActionsReplaceRecipientToTerraform(struct?: SesMailManagerRuleSetRulesActionsReplaceRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replace_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replaceWith),
  }
}


export function sesMailManagerRuleSetRulesActionsReplaceRecipientToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsReplaceRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replace_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replaceWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsReplaceRecipient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWith = this._replaceWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsReplaceRecipient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceWith = value.replaceWith;
    }
  }

  // replace_with - computed: true, optional: true, required: false
  private _replaceWith?: string[]; 
  public get replaceWith() {
    return this.getListAttribute('replace_with');
  }
  public set replaceWith(value: string[]) {
    this._replaceWith = value;
  }
  public resetReplaceWith() {
    this._replaceWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInput() {
    return this._replaceWith;
  }
}
export interface SesMailManagerRuleSetRulesActionsSend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
}

export function sesMailManagerRuleSetRulesActionsSendToTerraform(struct?: SesMailManagerRuleSetRulesActionsSend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function sesMailManagerRuleSetRulesActionsSendToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsSend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsSendOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsSend | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsSend | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface SesMailManagerRuleSetRulesActionsWriteToS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#action_failure_policy SesMailManagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#role_arn SesMailManagerRuleSet#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#s3_bucket SesMailManagerRuleSet#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#s3_prefix SesMailManagerRuleSet#s3_prefix}
  */
  readonly s3Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#s3_sse_kms_key_id SesMailManagerRuleSet#s3_sse_kms_key_id}
  */
  readonly s3SseKmsKeyId?: string;
}

export function sesMailManagerRuleSetRulesActionsWriteToS3ToTerraform(struct?: SesMailManagerRuleSetRulesActionsWriteToS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
    s3_sse_kms_key_id: cdktn.stringToTerraform(struct!.s3SseKmsKeyId),
  }
}


export function sesMailManagerRuleSetRulesActionsWriteToS3ToHclTerraform(struct?: SesMailManagerRuleSetRulesActionsWriteToS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_sse_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3SseKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsWriteToS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesActionsWriteToS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    if (this._s3SseKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SseKmsKeyId = this._s3SseKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActionsWriteToS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._roleArn = undefined;
      this._s3Bucket = undefined;
      this._s3Prefix = undefined;
      this._s3SseKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._roleArn = value.roleArn;
      this._s3Bucket = value.s3Bucket;
      this._s3Prefix = value.s3Prefix;
      this._s3SseKmsKeyId = value.s3SseKmsKeyId;
    }
  }

  // action_failure_policy - computed: true, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: true, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_sse_kms_key_id - computed: true, optional: true, required: false
  private _s3SseKmsKeyId?: string; 
  public get s3SseKmsKeyId() {
    return this.getStringAttribute('s3_sse_kms_key_id');
  }
  public set s3SseKmsKeyId(value: string) {
    this._s3SseKmsKeyId = value;
  }
  public resetS3SseKmsKeyId() {
    this._s3SseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SseKmsKeyIdInput() {
    return this._s3SseKmsKeyId;
  }
}
export interface SesMailManagerRuleSetRulesActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#add_header SesMailManagerRuleSet#add_header}
  */
  readonly addHeader?: SesMailManagerRuleSetRulesActionsAddHeader;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#archive SesMailManagerRuleSet#archive}
  */
  readonly archive?: SesMailManagerRuleSetRulesActionsArchive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#bounce SesMailManagerRuleSet#bounce}
  */
  readonly bounce?: SesMailManagerRuleSetRulesActionsBounce;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#deliver_to_mailbox SesMailManagerRuleSet#deliver_to_mailbox}
  */
  readonly deliverToMailbox?: SesMailManagerRuleSetRulesActionsDeliverToMailbox;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#deliver_to_q_business SesMailManagerRuleSet#deliver_to_q_business}
  */
  readonly deliverToQBusiness?: SesMailManagerRuleSetRulesActionsDeliverToQBusiness;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#drop SesMailManagerRuleSet#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#invoke_lambda SesMailManagerRuleSet#invoke_lambda}
  */
  readonly invokeLambda?: SesMailManagerRuleSetRulesActionsInvokeLambda;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#publish_to_sns SesMailManagerRuleSet#publish_to_sns}
  */
  readonly publishToSns?: SesMailManagerRuleSetRulesActionsPublishToSns;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#relay SesMailManagerRuleSet#relay}
  */
  readonly relay?: SesMailManagerRuleSetRulesActionsRelay;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#replace_recipient SesMailManagerRuleSet#replace_recipient}
  */
  readonly replaceRecipient?: SesMailManagerRuleSetRulesActionsReplaceRecipient;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#send SesMailManagerRuleSet#send}
  */
  readonly send?: SesMailManagerRuleSetRulesActionsSend;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#write_to_s3 SesMailManagerRuleSet#write_to_s3}
  */
  readonly writeToS3?: SesMailManagerRuleSetRulesActionsWriteToS3;
}

export function sesMailManagerRuleSetRulesActionsToTerraform(struct?: SesMailManagerRuleSetRulesActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_header: sesMailManagerRuleSetRulesActionsAddHeaderToTerraform(struct!.addHeader),
    archive: sesMailManagerRuleSetRulesActionsArchiveToTerraform(struct!.archive),
    bounce: sesMailManagerRuleSetRulesActionsBounceToTerraform(struct!.bounce),
    deliver_to_mailbox: sesMailManagerRuleSetRulesActionsDeliverToMailboxToTerraform(struct!.deliverToMailbox),
    deliver_to_q_business: sesMailManagerRuleSetRulesActionsDeliverToQBusinessToTerraform(struct!.deliverToQBusiness),
    drop: cdktn.stringToTerraform(struct!.drop),
    invoke_lambda: sesMailManagerRuleSetRulesActionsInvokeLambdaToTerraform(struct!.invokeLambda),
    publish_to_sns: sesMailManagerRuleSetRulesActionsPublishToSnsToTerraform(struct!.publishToSns),
    relay: sesMailManagerRuleSetRulesActionsRelayToTerraform(struct!.relay),
    replace_recipient: sesMailManagerRuleSetRulesActionsReplaceRecipientToTerraform(struct!.replaceRecipient),
    send: sesMailManagerRuleSetRulesActionsSendToTerraform(struct!.send),
    write_to_s3: sesMailManagerRuleSetRulesActionsWriteToS3ToTerraform(struct!.writeToS3),
  }
}


export function sesMailManagerRuleSetRulesActionsToHclTerraform(struct?: SesMailManagerRuleSetRulesActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_header: {
      value: sesMailManagerRuleSetRulesActionsAddHeaderToHclTerraform(struct!.addHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsAddHeader",
    },
    archive: {
      value: sesMailManagerRuleSetRulesActionsArchiveToHclTerraform(struct!.archive),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsArchive",
    },
    bounce: {
      value: sesMailManagerRuleSetRulesActionsBounceToHclTerraform(struct!.bounce),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsBounce",
    },
    deliver_to_mailbox: {
      value: sesMailManagerRuleSetRulesActionsDeliverToMailboxToHclTerraform(struct!.deliverToMailbox),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsDeliverToMailbox",
    },
    deliver_to_q_business: {
      value: sesMailManagerRuleSetRulesActionsDeliverToQBusinessToHclTerraform(struct!.deliverToQBusiness),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsDeliverToQBusiness",
    },
    drop: {
      value: cdktn.stringToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoke_lambda: {
      value: sesMailManagerRuleSetRulesActionsInvokeLambdaToHclTerraform(struct!.invokeLambda),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsInvokeLambda",
    },
    publish_to_sns: {
      value: sesMailManagerRuleSetRulesActionsPublishToSnsToHclTerraform(struct!.publishToSns),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsPublishToSns",
    },
    relay: {
      value: sesMailManagerRuleSetRulesActionsRelayToHclTerraform(struct!.relay),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsRelay",
    },
    replace_recipient: {
      value: sesMailManagerRuleSetRulesActionsReplaceRecipientToHclTerraform(struct!.replaceRecipient),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsReplaceRecipient",
    },
    send: {
      value: sesMailManagerRuleSetRulesActionsSendToHclTerraform(struct!.send),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsSend",
    },
    write_to_s3: {
      value: sesMailManagerRuleSetRulesActionsWriteToS3ToHclTerraform(struct!.writeToS3),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesActionsWriteToS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerRuleSetRulesActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader?.internalValue;
    }
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._bounce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounce = this._bounce?.internalValue;
    }
    if (this._deliverToMailbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverToMailbox = this._deliverToMailbox?.internalValue;
    }
    if (this._deliverToQBusiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverToQBusiness = this._deliverToQBusiness?.internalValue;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._invokeLambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeLambda = this._invokeLambda?.internalValue;
    }
    if (this._publishToSns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishToSns = this._publishToSns?.internalValue;
    }
    if (this._relay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relay = this._relay?.internalValue;
    }
    if (this._replaceRecipient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceRecipient = this._replaceRecipient?.internalValue;
    }
    if (this._send?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send?.internalValue;
    }
    if (this._writeToS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeToS3 = this._writeToS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHeader.internalValue = undefined;
      this._archive.internalValue = undefined;
      this._bounce.internalValue = undefined;
      this._deliverToMailbox.internalValue = undefined;
      this._deliverToQBusiness.internalValue = undefined;
      this._drop = undefined;
      this._invokeLambda.internalValue = undefined;
      this._publishToSns.internalValue = undefined;
      this._relay.internalValue = undefined;
      this._replaceRecipient.internalValue = undefined;
      this._send.internalValue = undefined;
      this._writeToS3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHeader.internalValue = value.addHeader;
      this._archive.internalValue = value.archive;
      this._bounce.internalValue = value.bounce;
      this._deliverToMailbox.internalValue = value.deliverToMailbox;
      this._deliverToQBusiness.internalValue = value.deliverToQBusiness;
      this._drop = value.drop;
      this._invokeLambda.internalValue = value.invokeLambda;
      this._publishToSns.internalValue = value.publishToSns;
      this._relay.internalValue = value.relay;
      this._replaceRecipient.internalValue = value.replaceRecipient;
      this._send.internalValue = value.send;
      this._writeToS3.internalValue = value.writeToS3;
    }
  }

  // add_header - computed: true, optional: true, required: false
  private _addHeader = new SesMailManagerRuleSetRulesActionsAddHeaderOutputReference(this, "add_header");
  public get addHeader() {
    return this._addHeader;
  }
  public putAddHeader(value: SesMailManagerRuleSetRulesActionsAddHeader) {
    this._addHeader.internalValue = value;
  }
  public resetAddHeader() {
    this._addHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader.internalValue;
  }

  // archive - computed: true, optional: true, required: false
  private _archive = new SesMailManagerRuleSetRulesActionsArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: SesMailManagerRuleSetRulesActionsArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // bounce - computed: true, optional: true, required: false
  private _bounce = new SesMailManagerRuleSetRulesActionsBounceOutputReference(this, "bounce");
  public get bounce() {
    return this._bounce;
  }
  public putBounce(value: SesMailManagerRuleSetRulesActionsBounce) {
    this._bounce.internalValue = value;
  }
  public resetBounce() {
    this._bounce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceInput() {
    return this._bounce.internalValue;
  }

  // deliver_to_mailbox - computed: true, optional: true, required: false
  private _deliverToMailbox = new SesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference(this, "deliver_to_mailbox");
  public get deliverToMailbox() {
    return this._deliverToMailbox;
  }
  public putDeliverToMailbox(value: SesMailManagerRuleSetRulesActionsDeliverToMailbox) {
    this._deliverToMailbox.internalValue = value;
  }
  public resetDeliverToMailbox() {
    this._deliverToMailbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToMailboxInput() {
    return this._deliverToMailbox.internalValue;
  }

  // deliver_to_q_business - computed: true, optional: true, required: false
  private _deliverToQBusiness = new SesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference(this, "deliver_to_q_business");
  public get deliverToQBusiness() {
    return this._deliverToQBusiness;
  }
  public putDeliverToQBusiness(value: SesMailManagerRuleSetRulesActionsDeliverToQBusiness) {
    this._deliverToQBusiness.internalValue = value;
  }
  public resetDeliverToQBusiness() {
    this._deliverToQBusiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToQBusinessInput() {
    return this._deliverToQBusiness.internalValue;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // invoke_lambda - computed: true, optional: true, required: false
  private _invokeLambda = new SesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference(this, "invoke_lambda");
  public get invokeLambda() {
    return this._invokeLambda;
  }
  public putInvokeLambda(value: SesMailManagerRuleSetRulesActionsInvokeLambda) {
    this._invokeLambda.internalValue = value;
  }
  public resetInvokeLambda() {
    this._invokeLambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeLambdaInput() {
    return this._invokeLambda.internalValue;
  }

  // publish_to_sns - computed: true, optional: true, required: false
  private _publishToSns = new SesMailManagerRuleSetRulesActionsPublishToSnsOutputReference(this, "publish_to_sns");
  public get publishToSns() {
    return this._publishToSns;
  }
  public putPublishToSns(value: SesMailManagerRuleSetRulesActionsPublishToSns) {
    this._publishToSns.internalValue = value;
  }
  public resetPublishToSns() {
    this._publishToSns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToSnsInput() {
    return this._publishToSns.internalValue;
  }

  // relay - computed: true, optional: true, required: false
  private _relay = new SesMailManagerRuleSetRulesActionsRelayOutputReference(this, "relay");
  public get relay() {
    return this._relay;
  }
  public putRelay(value: SesMailManagerRuleSetRulesActionsRelay) {
    this._relay.internalValue = value;
  }
  public resetRelay() {
    this._relay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay.internalValue;
  }

  // replace_recipient - computed: true, optional: true, required: false
  private _replaceRecipient = new SesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference(this, "replace_recipient");
  public get replaceRecipient() {
    return this._replaceRecipient;
  }
  public putReplaceRecipient(value: SesMailManagerRuleSetRulesActionsReplaceRecipient) {
    this._replaceRecipient.internalValue = value;
  }
  public resetReplaceRecipient() {
    this._replaceRecipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceRecipientInput() {
    return this._replaceRecipient.internalValue;
  }

  // send - computed: true, optional: true, required: false
  private _send = new SesMailManagerRuleSetRulesActionsSendOutputReference(this, "send");
  public get send() {
    return this._send;
  }
  public putSend(value: SesMailManagerRuleSetRulesActionsSend) {
    this._send.internalValue = value;
  }
  public resetSend() {
    this._send.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send.internalValue;
  }

  // write_to_s3 - computed: true, optional: true, required: false
  private _writeToS3 = new SesMailManagerRuleSetRulesActionsWriteToS3OutputReference(this, "write_to_s3");
  public get writeToS3() {
    return this._writeToS3;
  }
  public putWriteToS3(value: SesMailManagerRuleSetRulesActionsWriteToS3) {
    this._writeToS3.internalValue = value;
  }
  public resetWriteToS3() {
    this._writeToS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeToS3Input() {
    return this._writeToS3.internalValue;
  }
}

export class SesMailManagerRuleSetRulesActionsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerRuleSetRulesActions[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerRuleSetRulesActionsOutputReference {
    return new SesMailManagerRuleSetRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analyzer SesMailManagerRuleSet#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#result_field SesMailManagerRuleSet#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#address_lists SesMailManagerRuleSet#address_lists}
  */
  readonly addressLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: true, optional: true, required: false
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analysis SesMailManagerRuleSet#analysis}
  */
  readonly analysis?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#is_in_address_list SesMailManagerRuleSet#is_in_address_list}
  */
  readonly isInAddressList?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct;
}

export function sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    is_in_address_list: sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct!.isInAddressList),
  }
}


export function sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_in_address_list: {
      value: sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct!.isInAddressList),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // is_in_address_list - computed: true, optional: true, required: false
  private _isInAddressList = new SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(this, "is_in_address_list");
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}
export interface SesMailManagerRuleSetRulesConditionsBooleanExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
}

export function sesMailManagerRuleSetRulesConditionsBooleanExpressionToTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function sesMailManagerRuleSetRulesConditionsBooleanExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsBooleanExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsBooleanExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface SesMailManagerRuleSetRulesConditionsDmarcExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesConditionsDmarcExpressionToTerraform(struct?: SesMailManagerRuleSetRulesConditionsDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesConditionsDmarcExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsDmarcExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsDmarcExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesConditionsIpExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesConditionsIpExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesConditionsIpExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesConditionsIpExpressionToTerraform(struct?: SesMailManagerRuleSetRulesConditionsIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesConditionsIpExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesConditionsIpExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesConditionsIpExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsIpExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsIpExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsIpExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesConditionsIpExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesConditionsNumberExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#value SesMailManagerRuleSet#value}
  */
  readonly value?: number;
}

export function sesMailManagerRuleSetRulesConditionsNumberExpressionToTerraform(struct?: SesMailManagerRuleSetRulesConditionsNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sesMailManagerRuleSetRulesConditionsNumberExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsNumberExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsNumberExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analyzer SesMailManagerRuleSet#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#result_field SesMailManagerRuleSet#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analysis SesMailManagerRuleSet#analysis}
  */
  readonly analysis?: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#client_certificate_attribute SesMailManagerRuleSet#client_certificate_attribute}
  */
  readonly clientCertificateAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#mime_header_attribute SesMailManagerRuleSet#mime_header_attribute}
  */
  readonly mimeHeaderAttribute?: string;
}

export function sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
    mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
  }
}


export function sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_attribute: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_header_attribute: {
      value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clientCertificateAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
    }
    if (this._mimeHeaderAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
      this._clientCertificateAttribute = undefined;
      this._mimeHeaderAttribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
      this._clientCertificateAttribute = value.clientCertificateAttribute;
      this._mimeHeaderAttribute = value.mimeHeaderAttribute;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // client_certificate_attribute - computed: true, optional: true, required: false
  private _clientCertificateAttribute?: string; 
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }
  public set clientCertificateAttribute(value: string) {
    this._clientCertificateAttribute = value;
  }
  public resetClientCertificateAttribute() {
    this._clientCertificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAttributeInput() {
    return this._clientCertificateAttribute;
  }

  // mime_header_attribute - computed: true, optional: true, required: false
  private _mimeHeaderAttribute?: string; 
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
  public set mimeHeaderAttribute(value: string) {
    this._mimeHeaderAttribute = value;
  }
  public resetMimeHeaderAttribute() {
    this._mimeHeaderAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeHeaderAttributeInput() {
    return this._mimeHeaderAttribute;
  }
}
export interface SesMailManagerRuleSetRulesConditionsStringExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesConditionsStringExpressionToTerraform(struct?: SesMailManagerRuleSetRulesConditionsStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesConditionsStringExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesConditionsStringExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsStringExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsStringExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsStringExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesConditionsStringExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analyzer SesMailManagerRuleSet#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#result_field SesMailManagerRuleSet#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analysis SesMailManagerRuleSet#analysis}
  */
  readonly analysis?: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesConditionsVerdictExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesConditionsVerdictExpressionToTerraform(struct?: SesMailManagerRuleSetRulesConditionsVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesConditionsVerdictExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesConditionsVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesConditionsVerdictExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditionsVerdictExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#boolean_expression SesMailManagerRuleSet#boolean_expression}
  */
  readonly booleanExpression?: SesMailManagerRuleSetRulesConditionsBooleanExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#dmarc_expression SesMailManagerRuleSet#dmarc_expression}
  */
  readonly dmarcExpression?: SesMailManagerRuleSetRulesConditionsDmarcExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#ip_expression SesMailManagerRuleSet#ip_expression}
  */
  readonly ipExpression?: SesMailManagerRuleSetRulesConditionsIpExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#number_expression SesMailManagerRuleSet#number_expression}
  */
  readonly numberExpression?: SesMailManagerRuleSetRulesConditionsNumberExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#string_expression SesMailManagerRuleSet#string_expression}
  */
  readonly stringExpression?: SesMailManagerRuleSetRulesConditionsStringExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#verdict_expression SesMailManagerRuleSet#verdict_expression}
  */
  readonly verdictExpression?: SesMailManagerRuleSetRulesConditionsVerdictExpression;
}

export function sesMailManagerRuleSetRulesConditionsToTerraform(struct?: SesMailManagerRuleSetRulesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: sesMailManagerRuleSetRulesConditionsBooleanExpressionToTerraform(struct!.booleanExpression),
    dmarc_expression: sesMailManagerRuleSetRulesConditionsDmarcExpressionToTerraform(struct!.dmarcExpression),
    ip_expression: sesMailManagerRuleSetRulesConditionsIpExpressionToTerraform(struct!.ipExpression),
    number_expression: sesMailManagerRuleSetRulesConditionsNumberExpressionToTerraform(struct!.numberExpression),
    string_expression: sesMailManagerRuleSetRulesConditionsStringExpressionToTerraform(struct!.stringExpression),
    verdict_expression: sesMailManagerRuleSetRulesConditionsVerdictExpressionToTerraform(struct!.verdictExpression),
  }
}


export function sesMailManagerRuleSetRulesConditionsToHclTerraform(struct?: SesMailManagerRuleSetRulesConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: sesMailManagerRuleSetRulesConditionsBooleanExpressionToHclTerraform(struct!.booleanExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsBooleanExpression",
    },
    dmarc_expression: {
      value: sesMailManagerRuleSetRulesConditionsDmarcExpressionToHclTerraform(struct!.dmarcExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsDmarcExpression",
    },
    ip_expression: {
      value: sesMailManagerRuleSetRulesConditionsIpExpressionToHclTerraform(struct!.ipExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsIpExpression",
    },
    number_expression: {
      value: sesMailManagerRuleSetRulesConditionsNumberExpressionToHclTerraform(struct!.numberExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsNumberExpression",
    },
    string_expression: {
      value: sesMailManagerRuleSetRulesConditionsStringExpressionToHclTerraform(struct!.stringExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsStringExpression",
    },
    verdict_expression: {
      value: sesMailManagerRuleSetRulesConditionsVerdictExpressionToHclTerraform(struct!.verdictExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesConditionsVerdictExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerRuleSetRulesConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._dmarcExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._numberExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberExpression = this._numberExpression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._verdictExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._dmarcExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._numberExpression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._verdictExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._dmarcExpression.internalValue = value.dmarcExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._numberExpression.internalValue = value.numberExpression;
      this._stringExpression.internalValue = value.stringExpression;
      this._verdictExpression.internalValue = value.verdictExpression;
    }
  }

  // boolean_expression - computed: true, optional: true, required: false
  private _booleanExpression = new SesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference(this, "boolean_expression");
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: SesMailManagerRuleSetRulesConditionsBooleanExpression) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // dmarc_expression - computed: true, optional: true, required: false
  private _dmarcExpression = new SesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference(this, "dmarc_expression");
  public get dmarcExpression() {
    return this._dmarcExpression;
  }
  public putDmarcExpression(value: SesMailManagerRuleSetRulesConditionsDmarcExpression) {
    this._dmarcExpression.internalValue = value;
  }
  public resetDmarcExpression() {
    this._dmarcExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmarcExpressionInput() {
    return this._dmarcExpression.internalValue;
  }

  // ip_expression - computed: true, optional: true, required: false
  private _ipExpression = new SesMailManagerRuleSetRulesConditionsIpExpressionOutputReference(this, "ip_expression");
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: SesMailManagerRuleSetRulesConditionsIpExpression) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // number_expression - computed: true, optional: true, required: false
  private _numberExpression = new SesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference(this, "number_expression");
  public get numberExpression() {
    return this._numberExpression;
  }
  public putNumberExpression(value: SesMailManagerRuleSetRulesConditionsNumberExpression) {
    this._numberExpression.internalValue = value;
  }
  public resetNumberExpression() {
    this._numberExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberExpressionInput() {
    return this._numberExpression.internalValue;
  }

  // string_expression - computed: true, optional: true, required: false
  private _stringExpression = new SesMailManagerRuleSetRulesConditionsStringExpressionOutputReference(this, "string_expression");
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: SesMailManagerRuleSetRulesConditionsStringExpression) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // verdict_expression - computed: true, optional: true, required: false
  private _verdictExpression = new SesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference(this, "verdict_expression");
  public get verdictExpression() {
    return this._verdictExpression;
  }
  public putVerdictExpression(value: SesMailManagerRuleSetRulesConditionsVerdictExpression) {
    this._verdictExpression.internalValue = value;
  }
  public resetVerdictExpression() {
    this._verdictExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictExpressionInput() {
    return this._verdictExpression.internalValue;
  }
}

export class SesMailManagerRuleSetRulesConditionsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerRuleSetRulesConditions[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerRuleSetRulesConditionsOutputReference {
    return new SesMailManagerRuleSetRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analyzer SesMailManagerRuleSet#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#result_field SesMailManagerRuleSet#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#address_lists SesMailManagerRuleSet#address_lists}
  */
  readonly addressLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: true, optional: true, required: false
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analysis SesMailManagerRuleSet#analysis}
  */
  readonly analysis?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#is_in_address_list SesMailManagerRuleSet#is_in_address_list}
  */
  readonly isInAddressList?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct;
}

export function sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    is_in_address_list: sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct!.isInAddressList),
  }
}


export function sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_in_address_list: {
      value: sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct!.isInAddressList),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // is_in_address_list - computed: true, optional: true, required: false
  private _isInAddressList = new SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference(this, "is_in_address_list");
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}
export interface SesMailManagerRuleSetRulesUnlessBooleanExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
}

export function sesMailManagerRuleSetRulesUnlessBooleanExpressionToTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function sesMailManagerRuleSetRulesUnlessBooleanExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessBooleanExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessBooleanExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface SesMailManagerRuleSetRulesUnlessDmarcExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesUnlessDmarcExpressionToTerraform(struct?: SesMailManagerRuleSetRulesUnlessDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesUnlessDmarcExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessDmarcExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessDmarcExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesUnlessIpExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesUnlessIpExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesUnlessIpExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesUnlessIpExpressionToTerraform(struct?: SesMailManagerRuleSetRulesUnlessIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesUnlessIpExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesUnlessIpExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesUnlessIpExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessIpExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessIpExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessIpExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesUnlessIpExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesUnlessNumberExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#value SesMailManagerRuleSet#value}
  */
  readonly value?: number;
}

export function sesMailManagerRuleSetRulesUnlessNumberExpressionToTerraform(struct?: SesMailManagerRuleSetRulesUnlessNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sesMailManagerRuleSetRulesUnlessNumberExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessNumberExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessNumberExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analyzer SesMailManagerRuleSet#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#result_field SesMailManagerRuleSet#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analysis SesMailManagerRuleSet#analysis}
  */
  readonly analysis?: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#client_certificate_attribute SesMailManagerRuleSet#client_certificate_attribute}
  */
  readonly clientCertificateAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#mime_header_attribute SesMailManagerRuleSet#mime_header_attribute}
  */
  readonly mimeHeaderAttribute?: string;
}

export function sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
    mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
  }
}


export function sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_attribute: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_header_attribute: {
      value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clientCertificateAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
    }
    if (this._mimeHeaderAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
      this._clientCertificateAttribute = undefined;
      this._mimeHeaderAttribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
      this._clientCertificateAttribute = value.clientCertificateAttribute;
      this._mimeHeaderAttribute = value.mimeHeaderAttribute;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // client_certificate_attribute - computed: true, optional: true, required: false
  private _clientCertificateAttribute?: string; 
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }
  public set clientCertificateAttribute(value: string) {
    this._clientCertificateAttribute = value;
  }
  public resetClientCertificateAttribute() {
    this._clientCertificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAttributeInput() {
    return this._clientCertificateAttribute;
  }

  // mime_header_attribute - computed: true, optional: true, required: false
  private _mimeHeaderAttribute?: string; 
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
  public set mimeHeaderAttribute(value: string) {
    this._mimeHeaderAttribute = value;
  }
  public resetMimeHeaderAttribute() {
    this._mimeHeaderAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeHeaderAttributeInput() {
    return this._mimeHeaderAttribute;
  }
}
export interface SesMailManagerRuleSetRulesUnlessStringExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesUnlessStringExpressionToTerraform(struct?: SesMailManagerRuleSetRulesUnlessStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesUnlessStringExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesUnlessStringExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessStringExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessStringExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessStringExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesUnlessStringExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analyzer SesMailManagerRuleSet#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#result_field SesMailManagerRuleSet#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#analysis SesMailManagerRuleSet#analysis}
  */
  readonly analysis?: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#attribute SesMailManagerRuleSet#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateToTerraform(struct?: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerRuleSetRulesUnlessVerdictExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#evaluate SesMailManagerRuleSet#evaluate}
  */
  readonly evaluate?: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#operator SesMailManagerRuleSet#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#values SesMailManagerRuleSet#values}
  */
  readonly values?: string[];
}

export function sesMailManagerRuleSetRulesUnlessVerdictExpressionToTerraform(struct?: SesMailManagerRuleSetRulesUnlessVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerRuleSetRulesUnlessVerdictExpressionToHclTerraform(struct?: SesMailManagerRuleSetRulesUnlessVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerRuleSetRulesUnlessVerdictExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnlessVerdictExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface SesMailManagerRuleSetRulesUnless {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#boolean_expression SesMailManagerRuleSet#boolean_expression}
  */
  readonly booleanExpression?: SesMailManagerRuleSetRulesUnlessBooleanExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#dmarc_expression SesMailManagerRuleSet#dmarc_expression}
  */
  readonly dmarcExpression?: SesMailManagerRuleSetRulesUnlessDmarcExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#ip_expression SesMailManagerRuleSet#ip_expression}
  */
  readonly ipExpression?: SesMailManagerRuleSetRulesUnlessIpExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#number_expression SesMailManagerRuleSet#number_expression}
  */
  readonly numberExpression?: SesMailManagerRuleSetRulesUnlessNumberExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#string_expression SesMailManagerRuleSet#string_expression}
  */
  readonly stringExpression?: SesMailManagerRuleSetRulesUnlessStringExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#verdict_expression SesMailManagerRuleSet#verdict_expression}
  */
  readonly verdictExpression?: SesMailManagerRuleSetRulesUnlessVerdictExpression;
}

export function sesMailManagerRuleSetRulesUnlessToTerraform(struct?: SesMailManagerRuleSetRulesUnless | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: sesMailManagerRuleSetRulesUnlessBooleanExpressionToTerraform(struct!.booleanExpression),
    dmarc_expression: sesMailManagerRuleSetRulesUnlessDmarcExpressionToTerraform(struct!.dmarcExpression),
    ip_expression: sesMailManagerRuleSetRulesUnlessIpExpressionToTerraform(struct!.ipExpression),
    number_expression: sesMailManagerRuleSetRulesUnlessNumberExpressionToTerraform(struct!.numberExpression),
    string_expression: sesMailManagerRuleSetRulesUnlessStringExpressionToTerraform(struct!.stringExpression),
    verdict_expression: sesMailManagerRuleSetRulesUnlessVerdictExpressionToTerraform(struct!.verdictExpression),
  }
}


export function sesMailManagerRuleSetRulesUnlessToHclTerraform(struct?: SesMailManagerRuleSetRulesUnless | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: sesMailManagerRuleSetRulesUnlessBooleanExpressionToHclTerraform(struct!.booleanExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessBooleanExpression",
    },
    dmarc_expression: {
      value: sesMailManagerRuleSetRulesUnlessDmarcExpressionToHclTerraform(struct!.dmarcExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessDmarcExpression",
    },
    ip_expression: {
      value: sesMailManagerRuleSetRulesUnlessIpExpressionToHclTerraform(struct!.ipExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessIpExpression",
    },
    number_expression: {
      value: sesMailManagerRuleSetRulesUnlessNumberExpressionToHclTerraform(struct!.numberExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessNumberExpression",
    },
    string_expression: {
      value: sesMailManagerRuleSetRulesUnlessStringExpressionToHclTerraform(struct!.stringExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessStringExpression",
    },
    verdict_expression: {
      value: sesMailManagerRuleSetRulesUnlessVerdictExpressionToHclTerraform(struct!.verdictExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerRuleSetRulesUnlessVerdictExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesUnlessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerRuleSetRulesUnless | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._dmarcExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._numberExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberExpression = this._numberExpression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._verdictExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRulesUnless | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._dmarcExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._numberExpression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._verdictExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._dmarcExpression.internalValue = value.dmarcExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._numberExpression.internalValue = value.numberExpression;
      this._stringExpression.internalValue = value.stringExpression;
      this._verdictExpression.internalValue = value.verdictExpression;
    }
  }

  // boolean_expression - computed: true, optional: true, required: false
  private _booleanExpression = new SesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference(this, "boolean_expression");
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: SesMailManagerRuleSetRulesUnlessBooleanExpression) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // dmarc_expression - computed: true, optional: true, required: false
  private _dmarcExpression = new SesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference(this, "dmarc_expression");
  public get dmarcExpression() {
    return this._dmarcExpression;
  }
  public putDmarcExpression(value: SesMailManagerRuleSetRulesUnlessDmarcExpression) {
    this._dmarcExpression.internalValue = value;
  }
  public resetDmarcExpression() {
    this._dmarcExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmarcExpressionInput() {
    return this._dmarcExpression.internalValue;
  }

  // ip_expression - computed: true, optional: true, required: false
  private _ipExpression = new SesMailManagerRuleSetRulesUnlessIpExpressionOutputReference(this, "ip_expression");
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: SesMailManagerRuleSetRulesUnlessIpExpression) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // number_expression - computed: true, optional: true, required: false
  private _numberExpression = new SesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference(this, "number_expression");
  public get numberExpression() {
    return this._numberExpression;
  }
  public putNumberExpression(value: SesMailManagerRuleSetRulesUnlessNumberExpression) {
    this._numberExpression.internalValue = value;
  }
  public resetNumberExpression() {
    this._numberExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberExpressionInput() {
    return this._numberExpression.internalValue;
  }

  // string_expression - computed: true, optional: true, required: false
  private _stringExpression = new SesMailManagerRuleSetRulesUnlessStringExpressionOutputReference(this, "string_expression");
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: SesMailManagerRuleSetRulesUnlessStringExpression) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // verdict_expression - computed: true, optional: true, required: false
  private _verdictExpression = new SesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference(this, "verdict_expression");
  public get verdictExpression() {
    return this._verdictExpression;
  }
  public putVerdictExpression(value: SesMailManagerRuleSetRulesUnlessVerdictExpression) {
    this._verdictExpression.internalValue = value;
  }
  public resetVerdictExpression() {
    this._verdictExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictExpressionInput() {
    return this._verdictExpression.internalValue;
  }
}

export class SesMailManagerRuleSetRulesUnlessList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerRuleSetRulesUnless[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerRuleSetRulesUnlessOutputReference {
    return new SesMailManagerRuleSetRulesUnlessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMailManagerRuleSetRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#actions SesMailManagerRuleSet#actions}
  */
  readonly actions: SesMailManagerRuleSetRulesActions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#conditions SesMailManagerRuleSet#conditions}
  */
  readonly conditions?: SesMailManagerRuleSetRulesConditions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#name SesMailManagerRuleSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#unless SesMailManagerRuleSet#unless}
  */
  readonly unless?: SesMailManagerRuleSetRulesUnless[] | cdktn.IResolvable;
}

export function sesMailManagerRuleSetRulesToTerraform(struct?: SesMailManagerRuleSetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(sesMailManagerRuleSetRulesActionsToTerraform, false)(struct!.actions),
    conditions: cdktn.listMapper(sesMailManagerRuleSetRulesConditionsToTerraform, false)(struct!.conditions),
    name: cdktn.stringToTerraform(struct!.name),
    unless: cdktn.listMapper(sesMailManagerRuleSetRulesUnlessToTerraform, false)(struct!.unless),
  }
}


export function sesMailManagerRuleSetRulesToHclTerraform(struct?: SesMailManagerRuleSetRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(sesMailManagerRuleSetRulesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "SesMailManagerRuleSetRulesActionsList",
    },
    conditions: {
      value: cdktn.listMapperHcl(sesMailManagerRuleSetRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SesMailManagerRuleSetRulesConditionsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unless: {
      value: cdktn.listMapperHcl(sesMailManagerRuleSetRulesUnlessToHclTerraform, false)(struct!.unless),
      isBlock: true,
      type: "list",
      storageClassType: "SesMailManagerRuleSetRulesUnlessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerRuleSetRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerRuleSetRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unless = this._unless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerRuleSetRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._name = undefined;
      this._unless.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
      this._name = value.name;
      this._unless.internalValue = value.unless;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new SesMailManagerRuleSetRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SesMailManagerRuleSetRulesActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new SesMailManagerRuleSetRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SesMailManagerRuleSetRulesConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // unless - computed: true, optional: true, required: false
  private _unless = new SesMailManagerRuleSetRulesUnlessList(this, "unless", false);
  public get unless() {
    return this._unless;
  }
  public putUnless(value: SesMailManagerRuleSetRulesUnless[] | cdktn.IResolvable) {
    this._unless.internalValue = value;
  }
  public resetUnless() {
    this._unless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlessInput() {
    return this._unless.internalValue;
  }
}

export class SesMailManagerRuleSetRulesList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerRuleSetRules[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerRuleSetRulesOutputReference {
    return new SesMailManagerRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMailManagerRuleSetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#key SesMailManagerRuleSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#value SesMailManagerRuleSet#value}
  */
  readonly value?: string;
}

export function sesMailManagerRuleSetTagsToTerraform(struct?: SesMailManagerRuleSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesMailManagerRuleSetTagsToHclTerraform(struct?: SesMailManagerRuleSetTags | cdktn.IResolvable): any {
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

export class SesMailManagerRuleSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerRuleSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SesMailManagerRuleSetTags | cdktn.IResolvable | undefined) {
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

export class SesMailManagerRuleSetTagsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerRuleSetTags[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerRuleSetTagsOutputReference {
    return new SesMailManagerRuleSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set}
*/
export class SesMailManagerRuleSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_mail_manager_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SesMailManagerRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesMailManagerRuleSet to import
  * @param importFromId The id of the existing SesMailManagerRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesMailManagerRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesMailManagerRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: SesMailManagerRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_mail_manager_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ruleSetName = config.ruleSetName;
    this._rules.internalValue = config.rules;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_set_arn - computed: true, optional: false, required: false
  public get ruleSetArn() {
    return this.getStringAttribute('rule_set_arn');
  }

  // rule_set_id - computed: true, optional: false, required: false
  public get ruleSetId() {
    return this.getStringAttribute('rule_set_id');
  }

  // rule_set_name - computed: true, optional: true, required: false
  private _ruleSetName?: string; 
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  public resetRuleSetName() {
    this._ruleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SesMailManagerRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SesMailManagerRuleSetRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SesMailManagerRuleSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SesMailManagerRuleSetTags[] | cdktn.IResolvable) {
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
      rule_set_name: cdktn.stringToTerraform(this._ruleSetName),
      rules: cdktn.listMapper(sesMailManagerRuleSetRulesToTerraform, false)(this._rules.internalValue),
      tags: cdktn.listMapper(sesMailManagerRuleSetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule_set_name: {
        value: cdktn.stringToHclTerraform(this._ruleSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.listMapperHcl(sesMailManagerRuleSetRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesMailManagerRuleSetRulesList",
      },
      tags: {
        value: cdktn.listMapperHcl(sesMailManagerRuleSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesMailManagerRuleSetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
