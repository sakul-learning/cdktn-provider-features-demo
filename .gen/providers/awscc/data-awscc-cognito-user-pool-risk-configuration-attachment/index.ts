// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment#id DataAwsccCognitoUserPoolRiskConfigurationAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_action - computed: true, optional: false, required: false
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_action - computed: true, optional: false, required: false
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_action - computed: true, optional: false, required: false
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high_action - computed: true, optional: false, required: false
  private _highAction = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference(this, "high_action");
  public get highAction() {
    return this._highAction;
  }

  // low_action - computed: true, optional: false, required: false
  private _lowAction = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference(this, "low_action");
  public get lowAction() {
    return this._lowAction;
  }

  // medium_action - computed: true, optional: false, required: false
  private _mediumAction = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(this, "medium_action");
  public get mediumAction() {
    return this._mediumAction;
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // html_body - computed: true, optional: false, required: false
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // text_body - computed: true, optional: false, required: false
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // html_body - computed: true, optional: false, required: false
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // text_body - computed: true, optional: false, required: false
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // html_body - computed: true, optional: false, required: false
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // text_body - computed: true, optional: false, required: false
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_email - computed: true, optional: false, required: false
  private _blockEmail = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(this, "block_email");
  public get blockEmail() {
    return this._blockEmail;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // mfa_email - computed: true, optional: false, required: false
  private _mfaEmail = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(this, "mfa_email");
  public get mfaEmail() {
    return this._mfaEmail;
  }

  // no_action_email - computed: true, optional: false, required: false
  private _noActionEmail = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(this, "no_action_email");
  public get noActionEmail() {
    return this._noActionEmail;
  }

  // reply_to - computed: true, optional: false, required: false
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // notify_configuration - computed: true, optional: false, required: false
  private _notifyConfiguration = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(this, "notify_configuration");
  public get notifyConfiguration() {
    return this._notifyConfiguration;
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_action - computed: true, optional: false, required: false
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // event_filter - computed: true, optional: false, required: false
  public get eventFilter() {
    return this.getListAttribute('event_filter');
  }
}
export interface DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration {
}

export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocked_ip_range_list - computed: true, optional: false, required: false
  public get blockedIpRangeList() {
    return this.getListAttribute('blocked_ip_range_list');
  }

  // skipped_ip_range_list - computed: true, optional: false, required: false
  public get skippedIpRangeList() {
    return this.getListAttribute('skipped_ip_range_list');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment}
*/
export class DataAwsccCognitoUserPoolRiskConfigurationAttachment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_risk_configuration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoUserPoolRiskConfigurationAttachment to import
  * @param importFromId The id of the existing DataAwsccCognitoUserPoolRiskConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoUserPoolRiskConfigurationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_risk_configuration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_risk_configuration_attachment',
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

  // account_takeover_risk_configuration - computed: true, optional: false, required: false
  private _accountTakeoverRiskConfiguration = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference(this, "account_takeover_risk_configuration");
  public get accountTakeoverRiskConfiguration() {
    return this._accountTakeoverRiskConfiguration;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // compromised_credentials_risk_configuration - computed: true, optional: false, required: false
  private _compromisedCredentialsRiskConfiguration = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference(this, "compromised_credentials_risk_configuration");
  public get compromisedCredentialsRiskConfiguration() {
    return this._compromisedCredentialsRiskConfiguration;
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

  // risk_exception_configuration - computed: true, optional: false, required: false
  private _riskExceptionConfiguration = new DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference(this, "risk_exception_configuration");
  public get riskExceptionConfiguration() {
    return this._riskExceptionConfiguration;
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
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
