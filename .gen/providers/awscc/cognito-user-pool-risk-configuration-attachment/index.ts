// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CognitoUserPoolRiskConfigurationAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#account_takeover_risk_configuration CognitoUserPoolRiskConfigurationAttachment#account_takeover_risk_configuration}
  */
  readonly accountTakeoverRiskConfiguration?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#client_id CognitoUserPoolRiskConfigurationAttachment#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#compromised_credentials_risk_configuration CognitoUserPoolRiskConfigurationAttachment#compromised_credentials_risk_configuration}
  */
  readonly compromisedCredentialsRiskConfiguration?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#risk_exception_configuration CognitoUserPoolRiskConfigurationAttachment#risk_exception_configuration}
  */
  readonly riskExceptionConfiguration?: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#user_pool_id CognitoUserPoolRiskConfigurationAttachment#user_pool_id}
  */
  readonly userPoolId: string;
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}
  */
  readonly notify?: boolean | cdktn.IResolvable;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    notify: cdktn.booleanToTerraform(struct!.notify),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktn.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: true, optional: true, required: false
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: true, optional: true, required: false
  private _notify?: boolean | cdktn.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktn.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}
  */
  readonly notify?: boolean | cdktn.IResolvable;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    notify: cdktn.booleanToTerraform(struct!.notify),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktn.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: true, optional: true, required: false
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: true, optional: true, required: false
  private _notify?: boolean | cdktn.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktn.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}
  */
  readonly eventAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify CognitoUserPoolRiskConfigurationAttachment#notify}
  */
  readonly notify?: boolean | cdktn.IResolvable;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
    notify: cdktn.booleanToTerraform(struct!.notify),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify: {
      value: cdktn.booleanToHclTerraform(struct!.notify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    if (this._notify !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventAction = undefined;
      this._notify = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventAction = value.eventAction;
      this._notify = value.notify;
    }
  }

  // event_action - computed: true, optional: true, required: false
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }

  // notify - computed: true, optional: true, required: false
  private _notify?: boolean | cdktn.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktn.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#high_action CognitoUserPoolRiskConfigurationAttachment#high_action}
  */
  readonly highAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#low_action CognitoUserPoolRiskConfigurationAttachment#low_action}
  */
  readonly lowAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#medium_action CognitoUserPoolRiskConfigurationAttachment#medium_action}
  */
  readonly mediumAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    high_action: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionToTerraform(struct!.highAction),
    low_action: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionToTerraform(struct!.lowAction),
    medium_action: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionToTerraform(struct!.mediumAction),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    high_action: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionToHclTerraform(struct!.highAction),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction",
    },
    low_action: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionToHclTerraform(struct!.lowAction),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction",
    },
    medium_action: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionToHclTerraform(struct!.mediumAction),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAction = this._highAction?.internalValue;
    }
    if (this._lowAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowAction = this._lowAction?.internalValue;
    }
    if (this._mediumAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumAction = this._mediumAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highAction.internalValue = undefined;
      this._lowAction.internalValue = undefined;
      this._mediumAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highAction.internalValue = value.highAction;
      this._lowAction.internalValue = value.lowAction;
      this._mediumAction.internalValue = value.mediumAction;
    }
  }

  // high_action - computed: true, optional: true, required: false
  private _highAction = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference(this, "high_action");
  public get highAction() {
    return this._highAction;
  }
  public putHighAction(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction) {
    this._highAction.internalValue = value;
  }
  public resetHighAction() {
    this._highAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highActionInput() {
    return this._highAction.internalValue;
  }

  // low_action - computed: true, optional: true, required: false
  private _lowAction = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference(this, "low_action");
  public get lowAction() {
    return this._lowAction;
  }
  public putLowAction(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction) {
    this._lowAction.internalValue = value;
  }
  public resetLowAction() {
    this._lowAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowActionInput() {
    return this._lowAction.internalValue;
  }

  // medium_action - computed: true, optional: true, required: false
  private _mediumAction = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(this, "medium_action");
  public get mediumAction() {
    return this._mediumAction;
  }
  public putMediumAction(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction) {
    this._mediumAction.internalValue = value;
  }
  public resetMediumAction() {
    this._mediumAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumActionInput() {
    return this._mediumAction.internalValue;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}
  */
  readonly htmlBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}
  */
  readonly textBody?: string;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    html_body: cdktn.stringToTerraform(struct!.htmlBody),
    subject: cdktn.stringToTerraform(struct!.subject),
    text_body: cdktn.stringToTerraform(struct!.textBody),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    html_body: {
      value: cdktn.stringToHclTerraform(struct!.htmlBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_body: {
      value: cdktn.stringToHclTerraform(struct!.textBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: true, optional: true, required: false
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  public resetHtmlBody() {
    this._htmlBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: true, optional: true, required: false
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  public resetTextBody() {
    this._textBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}
  */
  readonly htmlBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}
  */
  readonly textBody?: string;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    html_body: cdktn.stringToTerraform(struct!.htmlBody),
    subject: cdktn.stringToTerraform(struct!.subject),
    text_body: cdktn.stringToTerraform(struct!.textBody),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    html_body: {
      value: cdktn.stringToHclTerraform(struct!.htmlBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_body: {
      value: cdktn.stringToHclTerraform(struct!.textBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: true, optional: true, required: false
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  public resetHtmlBody() {
    this._htmlBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: true, optional: true, required: false
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  public resetTextBody() {
    this._textBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#html_body CognitoUserPoolRiskConfigurationAttachment#html_body}
  */
  readonly htmlBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#subject CognitoUserPoolRiskConfigurationAttachment#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#text_body CognitoUserPoolRiskConfigurationAttachment#text_body}
  */
  readonly textBody?: string;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    html_body: cdktn.stringToTerraform(struct!.htmlBody),
    subject: cdktn.stringToTerraform(struct!.subject),
    text_body: cdktn.stringToTerraform(struct!.textBody),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    html_body: {
      value: cdktn.stringToHclTerraform(struct!.htmlBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_body: {
      value: cdktn.stringToHclTerraform(struct!.textBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._htmlBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.htmlBody = this._htmlBody;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._textBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.textBody = this._textBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._htmlBody = undefined;
      this._subject = undefined;
      this._textBody = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._htmlBody = value.htmlBody;
      this._subject = value.subject;
      this._textBody = value.textBody;
    }
  }

  // html_body - computed: true, optional: true, required: false
  private _htmlBody?: string; 
  public get htmlBody() {
    return this.getStringAttribute('html_body');
  }
  public set htmlBody(value: string) {
    this._htmlBody = value;
  }
  public resetHtmlBody() {
    this._htmlBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlBodyInput() {
    return this._htmlBody;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // text_body - computed: true, optional: true, required: false
  private _textBody?: string; 
  public get textBody() {
    return this.getStringAttribute('text_body');
  }
  public set textBody(value: string) {
    this._textBody = value;
  }
  public resetTextBody() {
    this._textBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textBodyInput() {
    return this._textBody;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#block_email CognitoUserPoolRiskConfigurationAttachment#block_email}
  */
  readonly blockEmail?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#from CognitoUserPoolRiskConfigurationAttachment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#mfa_email CognitoUserPoolRiskConfigurationAttachment#mfa_email}
  */
  readonly mfaEmail?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#no_action_email CognitoUserPoolRiskConfigurationAttachment#no_action_email}
  */
  readonly noActionEmail?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#reply_to CognitoUserPoolRiskConfigurationAttachment#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#source_arn CognitoUserPoolRiskConfigurationAttachment#source_arn}
  */
  readonly sourceArn?: string;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    block_email: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToTerraform(struct!.blockEmail),
    from: cdktn.stringToTerraform(struct!.from),
    mfa_email: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToTerraform(struct!.mfaEmail),
    no_action_email: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToTerraform(struct!.noActionEmail),
    reply_to: cdktn.stringToTerraform(struct!.replyTo),
    source_arn: cdktn.stringToTerraform(struct!.sourceArn),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    block_email: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailToHclTerraform(struct!.blockEmail),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail",
    },
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfa_email: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailToHclTerraform(struct!.mfaEmail),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail",
    },
    no_action_email: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailToHclTerraform(struct!.noActionEmail),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail",
    },
    reply_to: {
      value: cdktn.stringToHclTerraform(struct!.replyTo),
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

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockEmail = this._blockEmail?.internalValue;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._mfaEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEmail = this._mfaEmail?.internalValue;
    }
    if (this._noActionEmail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noActionEmail = this._noActionEmail?.internalValue;
    }
    if (this._replyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyTo = this._replyTo;
    }
    if (this._sourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceArn = this._sourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockEmail.internalValue = undefined;
      this._from = undefined;
      this._mfaEmail.internalValue = undefined;
      this._noActionEmail.internalValue = undefined;
      this._replyTo = undefined;
      this._sourceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockEmail.internalValue = value.blockEmail;
      this._from = value.from;
      this._mfaEmail.internalValue = value.mfaEmail;
      this._noActionEmail.internalValue = value.noActionEmail;
      this._replyTo = value.replyTo;
      this._sourceArn = value.sourceArn;
    }
  }

  // block_email - computed: true, optional: true, required: false
  private _blockEmail = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(this, "block_email");
  public get blockEmail() {
    return this._blockEmail;
  }
  public putBlockEmail(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail) {
    this._blockEmail.internalValue = value;
  }
  public resetBlockEmail() {
    this._blockEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockEmailInput() {
    return this._blockEmail.internalValue;
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

  // mfa_email - computed: true, optional: true, required: false
  private _mfaEmail = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(this, "mfa_email");
  public get mfaEmail() {
    return this._mfaEmail;
  }
  public putMfaEmail(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail) {
    this._mfaEmail.internalValue = value;
  }
  public resetMfaEmail() {
    this._mfaEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEmailInput() {
    return this._mfaEmail.internalValue;
  }

  // no_action_email - computed: true, optional: true, required: false
  private _noActionEmail = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(this, "no_action_email");
  public get noActionEmail() {
    return this._noActionEmail;
  }
  public putNoActionEmail(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail) {
    this._noActionEmail.internalValue = value;
  }
  public resetNoActionEmail() {
    this._noActionEmail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noActionEmailInput() {
    return this._noActionEmail.internalValue;
  }

  // reply_to - computed: true, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
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
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}
  */
  readonly actions?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#notify_configuration CognitoUserPoolRiskConfigurationAttachment#notify_configuration}
  */
  readonly notifyConfiguration?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration;
}

export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsToTerraform(struct!.actions),
    notify_configuration: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationToTerraform(struct!.notifyConfiguration),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions",
    },
    notify_configuration: {
      value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationToHclTerraform(struct!.notifyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._notifyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyConfiguration = this._notifyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._notifyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._notifyConfiguration.internalValue = value.notifyConfiguration;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // notify_configuration - computed: true, optional: true, required: false
  private _notifyConfiguration = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(this, "notify_configuration");
  public get notifyConfiguration() {
    return this._notifyConfiguration;
  }
  public putNotifyConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration) {
    this._notifyConfiguration.internalValue = value;
  }
  public resetNotifyConfiguration() {
    this._notifyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyConfigurationInput() {
    return this._notifyConfiguration.internalValue;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_action CognitoUserPoolRiskConfigurationAttachment#event_action}
  */
  readonly eventAction?: string;
}

export function cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event_action: cdktn.stringToTerraform(struct!.eventAction),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event_action: {
      value: cdktn.stringToHclTerraform(struct!.eventAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventAction = this._eventAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventAction = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventAction = value.eventAction;
    }
  }

  // event_action - computed: true, optional: true, required: false
  private _eventAction?: string; 
  public get eventAction() {
    return this.getStringAttribute('event_action');
  }
  public set eventAction(value: string) {
    this._eventAction = value;
  }
  public resetEventAction() {
    this._eventAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventActionInput() {
    return this._eventAction;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#actions CognitoUserPoolRiskConfigurationAttachment#actions}
  */
  readonly actions?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#event_filter CognitoUserPoolRiskConfigurationAttachment#event_filter}
  */
  readonly eventFilter?: string[];
}

export function cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsToTerraform(struct!.actions),
    event_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventFilter),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "struct",
      storageClassType: "CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions",
    },
    event_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._eventFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFilter = this._eventFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._eventFilter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._eventFilter = value.eventFilter;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // event_filter - computed: true, optional: true, required: false
  private _eventFilter?: string[]; 
  public get eventFilter() {
    return this.getListAttribute('event_filter');
  }
  public set eventFilter(value: string[]) {
    this._eventFilter = value;
  }
  public resetEventFilter() {
    this._eventFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter;
  }
}
export interface CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#blocked_ip_range_list CognitoUserPoolRiskConfigurationAttachment#blocked_ip_range_list}
  */
  readonly blockedIpRangeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#skipped_ip_range_list CognitoUserPoolRiskConfigurationAttachment#skipped_ip_range_list}
  */
  readonly skippedIpRangeList?: string[];
}

export function cognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationToTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blocked_ip_range_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedIpRangeList),
    skipped_ip_range_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.skippedIpRangeList),
  }
}


export function cognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationToHclTerraform(struct?: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blocked_ip_range_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedIpRangeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skipped_ip_range_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.skippedIpRangeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedIpRangeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedIpRangeList = this._blockedIpRangeList;
    }
    if (this._skippedIpRangeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.skippedIpRangeList = this._skippedIpRangeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockedIpRangeList = undefined;
      this._skippedIpRangeList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockedIpRangeList = value.blockedIpRangeList;
      this._skippedIpRangeList = value.skippedIpRangeList;
    }
  }

  // blocked_ip_range_list - computed: true, optional: true, required: false
  private _blockedIpRangeList?: string[]; 
  public get blockedIpRangeList() {
    return this.getListAttribute('blocked_ip_range_list');
  }
  public set blockedIpRangeList(value: string[]) {
    this._blockedIpRangeList = value;
  }
  public resetBlockedIpRangeList() {
    this._blockedIpRangeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedIpRangeListInput() {
    return this._blockedIpRangeList;
  }

  // skipped_ip_range_list - computed: true, optional: true, required: false
  private _skippedIpRangeList?: string[]; 
  public get skippedIpRangeList() {
    return this.getListAttribute('skipped_ip_range_list');
  }
  public set skippedIpRangeList(value: string[]) {
    this._skippedIpRangeList = value;
  }
  public resetSkippedIpRangeList() {
    this._skippedIpRangeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skippedIpRangeListInput() {
    return this._skippedIpRangeList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment}
*/
export class CognitoUserPoolRiskConfigurationAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_risk_configuration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoUserPoolRiskConfigurationAttachment to import
  * @param importFromId The id of the existing CognitoUserPoolRiskConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoUserPoolRiskConfigurationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_risk_configuration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolRiskConfigurationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolRiskConfigurationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_risk_configuration_attachment',
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
    this._accountTakeoverRiskConfiguration.internalValue = config.accountTakeoverRiskConfiguration;
    this._clientId = config.clientId;
    this._compromisedCredentialsRiskConfiguration.internalValue = config.compromisedCredentialsRiskConfiguration;
    this._riskExceptionConfiguration.internalValue = config.riskExceptionConfiguration;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_takeover_risk_configuration - computed: true, optional: true, required: false
  private _accountTakeoverRiskConfiguration = new CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference(this, "account_takeover_risk_configuration");
  public get accountTakeoverRiskConfiguration() {
    return this._accountTakeoverRiskConfiguration;
  }
  public putAccountTakeoverRiskConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration) {
    this._accountTakeoverRiskConfiguration.internalValue = value;
  }
  public resetAccountTakeoverRiskConfiguration() {
    this._accountTakeoverRiskConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTakeoverRiskConfigurationInput() {
    return this._accountTakeoverRiskConfiguration.internalValue;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // compromised_credentials_risk_configuration - computed: true, optional: true, required: false
  private _compromisedCredentialsRiskConfiguration = new CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference(this, "compromised_credentials_risk_configuration");
  public get compromisedCredentialsRiskConfiguration() {
    return this._compromisedCredentialsRiskConfiguration;
  }
  public putCompromisedCredentialsRiskConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration) {
    this._compromisedCredentialsRiskConfiguration.internalValue = value;
  }
  public resetCompromisedCredentialsRiskConfiguration() {
    this._compromisedCredentialsRiskConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compromisedCredentialsRiskConfigurationInput() {
    return this._compromisedCredentialsRiskConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // risk_exception_configuration - computed: true, optional: true, required: false
  private _riskExceptionConfiguration = new CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference(this, "risk_exception_configuration");
  public get riskExceptionConfiguration() {
    return this._riskExceptionConfiguration;
  }
  public putRiskExceptionConfiguration(value: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration) {
    this._riskExceptionConfiguration.internalValue = value;
  }
  public resetRiskExceptionConfiguration() {
    this._riskExceptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskExceptionConfigurationInput() {
    return this._riskExceptionConfiguration.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_takeover_risk_configuration: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationToTerraform(this._accountTakeoverRiskConfiguration.internalValue),
      client_id: cdktn.stringToTerraform(this._clientId),
      compromised_credentials_risk_configuration: cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationToTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
      risk_exception_configuration: cognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationToTerraform(this._riskExceptionConfiguration.internalValue),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_takeover_risk_configuration: {
        value: cognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationToHclTerraform(this._accountTakeoverRiskConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration",
      },
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compromised_credentials_risk_configuration: {
        value: cognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationToHclTerraform(this._compromisedCredentialsRiskConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration",
      },
      risk_exception_configuration: {
        value: cognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationToHclTerraform(this._riskExceptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
