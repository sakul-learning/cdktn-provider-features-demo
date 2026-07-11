// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ses_mail_manager_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSesMailManagerRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ses_mail_manager_rule_set#id DataAwsccSesMailManagerRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsAddHeader {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsAddHeaderToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsAddHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsAddHeaderToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsAddHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsAddHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsAddHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsArchive {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsArchiveToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsArchive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsArchiveToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsArchive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // target_archive - computed: true, optional: false, required: false
  public get targetArchive() {
    return this.getStringAttribute('target_archive');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsBounce {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsBounceToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsBounce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsBounceToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsBounce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsBounce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsBounce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // diagnostic_message - computed: true, optional: false, required: false
  public get diagnosticMessage() {
    return this.getStringAttribute('diagnostic_message');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // sender - computed: true, optional: false, required: false
  public get sender() {
    return this.getStringAttribute('sender');
  }

  // smtp_reply_code - computed: true, optional: false, required: false
  public get smtpReplyCode() {
    return this.getStringAttribute('smtp_reply_code');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // mailbox_arn - computed: true, optional: false, required: false
  public get mailboxArn() {
    return this.getStringAttribute('mailbox_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // invocation_type - computed: true, optional: false, required: false
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }

  // retry_time_minutes - computed: true, optional: false, required: false
  public get retryTimeMinutes() {
    return this.getNumberAttribute('retry_time_minutes');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // payload_type - computed: true, optional: false, required: false
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsRelay {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsRelayToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsRelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsRelayToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsRelay): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsRelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsRelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // mail_from - computed: true, optional: false, required: false
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }

  // relay - computed: true, optional: false, required: false
  public get relay() {
    return this.getStringAttribute('relay');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replace_with - computed: true, optional: false, required: false
  public get replaceWith() {
    return this.getListAttribute('replace_with');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsSend {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsSendToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsSend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsSendToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsSend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsSend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsSend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsWriteToS3ToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsWriteToS3ToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_failure_policy - computed: true, optional: false, required: false
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_prefix - computed: true, optional: false, required: false
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }

  // s3_sse_kms_key_id - computed: true, optional: false, required: false
  public get s3SseKmsKeyId() {
    return this.getStringAttribute('s3_sse_kms_key_id');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesActions {
}

export function dataAwsccSesMailManagerRuleSetRulesActionsToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesActionsToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_header - computed: true, optional: false, required: false
  private _addHeader = new DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference(this, "add_header");
  public get addHeader() {
    return this._addHeader;
  }

  // archive - computed: true, optional: false, required: false
  private _archive = new DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }

  // bounce - computed: true, optional: false, required: false
  private _bounce = new DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference(this, "bounce");
  public get bounce() {
    return this._bounce;
  }

  // deliver_to_mailbox - computed: true, optional: false, required: false
  private _deliverToMailbox = new DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference(this, "deliver_to_mailbox");
  public get deliverToMailbox() {
    return this._deliverToMailbox;
  }

  // deliver_to_q_business - computed: true, optional: false, required: false
  private _deliverToQBusiness = new DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference(this, "deliver_to_q_business");
  public get deliverToQBusiness() {
    return this._deliverToQBusiness;
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getStringAttribute('drop');
  }

  // invoke_lambda - computed: true, optional: false, required: false
  private _invokeLambda = new DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference(this, "invoke_lambda");
  public get invokeLambda() {
    return this._invokeLambda;
  }

  // publish_to_sns - computed: true, optional: false, required: false
  private _publishToSns = new DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference(this, "publish_to_sns");
  public get publishToSns() {
    return this._publishToSns;
  }

  // relay - computed: true, optional: false, required: false
  private _relay = new DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference(this, "relay");
  public get relay() {
    return this._relay;
  }

  // replace_recipient - computed: true, optional: false, required: false
  private _replaceRecipient = new DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference(this, "replace_recipient");
  public get replaceRecipient() {
    return this._replaceRecipient;
  }

  // send - computed: true, optional: false, required: false
  private _send = new DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference(this, "send");
  public get send() {
    return this._send;
  }

  // write_to_s3 - computed: true, optional: false, required: false
  private _writeToS3 = new DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference(this, "write_to_s3");
  public get writeToS3() {
    return this._writeToS3;
  }
}

export class DataAwsccSesMailManagerRuleSetRulesActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerRuleSetRulesActionsOutputReference {
    return new DataAwsccSesMailManagerRuleSetRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_lists - computed: true, optional: false, required: false
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // is_in_address_list - computed: true, optional: false, required: false
  private _isInAddressList = new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(this, "is_in_address_list");
  public get isInAddressList() {
    return this._isInAddressList;
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // client_certificate_attribute - computed: true, optional: false, required: false
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }

  // mime_header_attribute - computed: true, optional: false, required: false
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesConditions {
}

export function dataAwsccSesMailManagerRuleSetRulesConditionsToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesConditionsToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_expression - computed: true, optional: false, required: false
  private _booleanExpression = new DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference(this, "boolean_expression");
  public get booleanExpression() {
    return this._booleanExpression;
  }

  // dmarc_expression - computed: true, optional: false, required: false
  private _dmarcExpression = new DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference(this, "dmarc_expression");
  public get dmarcExpression() {
    return this._dmarcExpression;
  }

  // ip_expression - computed: true, optional: false, required: false
  private _ipExpression = new DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference(this, "ip_expression");
  public get ipExpression() {
    return this._ipExpression;
  }

  // number_expression - computed: true, optional: false, required: false
  private _numberExpression = new DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference(this, "number_expression");
  public get numberExpression() {
    return this._numberExpression;
  }

  // string_expression - computed: true, optional: false, required: false
  private _stringExpression = new DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference(this, "string_expression");
  public get stringExpression() {
    return this._stringExpression;
  }

  // verdict_expression - computed: true, optional: false, required: false
  private _verdictExpression = new DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference(this, "verdict_expression");
  public get verdictExpression() {
    return this._verdictExpression;
  }
}

export class DataAwsccSesMailManagerRuleSetRulesConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference {
    return new DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_lists - computed: true, optional: false, required: false
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // is_in_address_list - computed: true, optional: false, required: false
  private _isInAddressList = new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference(this, "is_in_address_list");
  public get isInAddressList() {
    return this._isInAddressList;
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // client_certificate_attribute - computed: true, optional: false, required: false
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }

  // mime_header_attribute - computed: true, optional: false, required: false
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerRuleSetRulesUnless {
}

export function dataAwsccSesMailManagerRuleSetRulesUnlessToTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnless): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesUnlessToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRulesUnless): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerRuleSetRulesUnless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRulesUnless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_expression - computed: true, optional: false, required: false
  private _booleanExpression = new DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference(this, "boolean_expression");
  public get booleanExpression() {
    return this._booleanExpression;
  }

  // dmarc_expression - computed: true, optional: false, required: false
  private _dmarcExpression = new DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference(this, "dmarc_expression");
  public get dmarcExpression() {
    return this._dmarcExpression;
  }

  // ip_expression - computed: true, optional: false, required: false
  private _ipExpression = new DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference(this, "ip_expression");
  public get ipExpression() {
    return this._ipExpression;
  }

  // number_expression - computed: true, optional: false, required: false
  private _numberExpression = new DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference(this, "number_expression");
  public get numberExpression() {
    return this._numberExpression;
  }

  // string_expression - computed: true, optional: false, required: false
  private _stringExpression = new DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference(this, "string_expression");
  public get stringExpression() {
    return this._stringExpression;
  }

  // verdict_expression - computed: true, optional: false, required: false
  private _verdictExpression = new DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference(this, "verdict_expression");
  public get verdictExpression() {
    return this._verdictExpression;
  }
}

export class DataAwsccSesMailManagerRuleSetRulesUnlessList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference {
    return new DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesMailManagerRuleSetRules {
}

export function dataAwsccSesMailManagerRuleSetRulesToTerraform(struct?: DataAwsccSesMailManagerRuleSetRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetRulesToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerRuleSetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccSesMailManagerRuleSetRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccSesMailManagerRuleSetRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unless - computed: true, optional: false, required: false
  private _unless = new DataAwsccSesMailManagerRuleSetRulesUnlessList(this, "unless", false);
  public get unless() {
    return this._unless;
  }
}

export class DataAwsccSesMailManagerRuleSetRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerRuleSetRulesOutputReference {
    return new DataAwsccSesMailManagerRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesMailManagerRuleSetTags {
}

export function dataAwsccSesMailManagerRuleSetTagsToTerraform(struct?: DataAwsccSesMailManagerRuleSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerRuleSetTagsToHclTerraform(struct?: DataAwsccSesMailManagerRuleSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerRuleSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerRuleSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerRuleSetTags | undefined) {
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

export class DataAwsccSesMailManagerRuleSetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerRuleSetTagsOutputReference {
    return new DataAwsccSesMailManagerRuleSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set}
*/
export class DataAwsccSesMailManagerRuleSet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_mail_manager_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSesMailManagerRuleSet to import
  * @param importFromId The id of the existing DataAwsccSesMailManagerRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ses_mail_manager_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSesMailManagerRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSesMailManagerRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSesMailManagerRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_mail_manager_rule_set',
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

  // rule_set_arn - computed: true, optional: false, required: false
  public get ruleSetArn() {
    return this.getStringAttribute('rule_set_arn');
  }

  // rule_set_id - computed: true, optional: false, required: false
  public get ruleSetId() {
    return this.getStringAttribute('rule_set_id');
  }

  // rule_set_name - computed: true, optional: false, required: false
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccSesMailManagerRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSesMailManagerRuleSetTagsList(this, "tags", false);
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
