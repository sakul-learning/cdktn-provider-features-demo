// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connectcampaignsv2_campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectcampaignsv2CampaignConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connectcampaignsv2_campaign#id DataAwsccConnectcampaignsv2Campaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_source_email_address - computed: true, optional: false, required: false
  public get connectSourceEmailAddress() {
    return this.getStringAttribute('connect_source_email_address');
  }

  // source_email_address_display_name - computed: true, optional: false, required: false
  public get sourceEmailAddressDisplayName() {
    return this.getStringAttribute('source_email_address_display_name');
  }

  // wisdom_template_arn - computed: true, optional: false, required: false
  public get wisdomTemplateArn() {
    return this.getStringAttribute('wisdom_template_arn');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_config - computed: true, optional: false, required: false
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmail {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // default_outbound_config - computed: true, optional: false, required: false
  private _defaultOutboundConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }

  // outbound_mode - computed: true, optional: false, required: false
  private _outboundMode = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_source_phone_number_arn - computed: true, optional: false, required: false
  public get connectSourcePhoneNumberArn() {
    return this.getStringAttribute('connect_source_phone_number_arn');
  }

  // wisdom_template_arn - computed: true, optional: false, required: false
  public get wisdomTemplateArn() {
    return this.getStringAttribute('wisdom_template_arn');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_config - computed: true, optional: false, required: false
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSms {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // default_outbound_config - computed: true, optional: false, required: false
  private _defaultOutboundConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }

  // outbound_mode - computed: true, optional: false, required: false
  private _outboundMode = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // await_answer_machine_prompt - computed: true, optional: false, required: false
  public get awaitAnswerMachinePrompt() {
    return this.getBooleanAttribute('await_answer_machine_prompt');
  }

  // enable_answer_machine_detection - computed: true, optional: false, required: false
  public get enableAnswerMachineDetection() {
    return this.getBooleanAttribute('enable_answer_machine_detection');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // answer_machine_detection_config - computed: true, optional: false, required: false
  private _answerMachineDetectionConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigOutputReference(this, "answer_machine_detection_config");
  public get answerMachineDetectionConfig() {
    return this._answerMachineDetectionConfig;
  }

  // connect_contact_flow_id - computed: true, optional: false, required: false
  public get connectContactFlowId() {
    return this.getStringAttribute('connect_contact_flow_id');
  }

  // connect_source_phone_number - computed: true, optional: false, required: false
  public get connectSourcePhoneNumber() {
    return this.getStringAttribute('connect_source_phone_number');
  }

  // ring_timeout - computed: true, optional: false, required: false
  public get ringTimeout() {
    return this.getNumberAttribute('ring_timeout');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_allocation - computed: true, optional: false, required: false
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_actions - computed: true, optional: false, required: false
  public get agentActions() {
    return this.getListAttribute('agent_actions');
  }

  // bandwidth_allocation - computed: true, optional: false, required: false
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }

  // timeout_config - computed: true, optional: false, required: false
  private _timeoutConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigOutputReference(this, "timeout_config");
  public get timeoutConfig() {
    return this._timeoutConfig;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_allocation - computed: true, optional: false, required: false
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_config - computed: true, optional: false, required: false
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }

  // predictive_config - computed: true, optional: false, required: false
  private _predictiveConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigOutputReference(this, "predictive_config");
  public get predictiveConfig() {
    return this._predictiveConfig;
  }

  // preview_config - computed: true, optional: false, required: false
  private _previewConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigOutputReference(this, "preview_config");
  public get previewConfig() {
    return this._previewConfig;
  }

  // progressive_config - computed: true, optional: false, required: false
  private _progressiveConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigOutputReference(this, "progressive_config");
  public get progressiveConfig() {
    return this._progressiveConfig;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephony {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephony): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephony): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephony | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephony | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // connect_queue_id - computed: true, optional: false, required: false
  public get connectQueueId() {
    return this.getStringAttribute('connect_queue_id');
  }

  // default_outbound_config - computed: true, optional: false, required: false
  private _defaultOutboundConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }

  // outbound_mode - computed: true, optional: false, required: false
  private _outboundMode = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_source_phone_number_arn - computed: true, optional: false, required: false
  public get connectSourcePhoneNumberArn() {
    return this.getStringAttribute('connect_source_phone_number_arn');
  }

  // wisdom_template_arn - computed: true, optional: false, required: false
  public get wisdomTemplateArn() {
    return this.getStringAttribute('wisdom_template_arn');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_config - computed: true, optional: false, required: false
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsApp {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // default_outbound_config - computed: true, optional: false, required: false
  private _defaultOutboundConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }

  // outbound_mode - computed: true, optional: false, required: false
  private _outboundMode = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfig {
}

export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }

  // sms - computed: true, optional: false, required: false
  private _sms = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }

  // telephony - computed: true, optional: false, required: false
  private _telephony = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutputReference(this, "telephony");
  public get telephony() {
    return this._telephony;
  }

  // whats_app - computed: true, optional: false, required: false
  private _whatsApp = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // max_count_per_recipient - computed: true, optional: false, required: false
  public get maxCountPerRecipient() {
    return this.getNumberAttribute('max_count_per_recipient');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // communication_limit_list - computed: true, optional: false, required: false
  private _communicationLimitList = new DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructList(this, "communication_limit_list", false);
  public get communicationLimitList() {
    return this._communicationLimitList;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverride {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_channels_subtypes - computed: true, optional: false, required: false
  private _allChannelsSubtypes = new DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesOutputReference(this, "all_channels_subtypes");
  public get allChannelsSubtypes() {
    return this._allChannelsSubtypes;
  }

  // instance_limits_handling - computed: true, optional: false, required: false
  public get instanceLimitsHandling() {
    return this.getStringAttribute('instance_limits_handling');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours | undefined) {
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
  private _value = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_hours - computed: true, optional: false, required: false
  private _dailyHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restricted_period_list - computed: true, optional: false, required: false
  private _restrictedPeriodList = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmail {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // open_hours - computed: true, optional: false, required: false
  private _openHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }

  // restricted_periods - computed: true, optional: false, required: false
  private _restrictedPeriods = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_time_zone - computed: true, optional: false, required: false
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }

  // local_time_zone_detection - computed: true, optional: false, required: false
  public get localTimeZoneDetection() {
    return this.getListAttribute('local_time_zone_detection');
  }

  // local_time_zone_detection_scope - computed: true, optional: false, required: false
  public get localTimeZoneDetectionScope() {
    return this.getStringAttribute('local_time_zone_detection_scope');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours | undefined) {
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
  private _value = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_hours - computed: true, optional: false, required: false
  private _dailyHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restricted_period_list - computed: true, optional: false, required: false
  private _restrictedPeriodList = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSms {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // open_hours - computed: true, optional: false, required: false
  private _openHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }

  // restricted_periods - computed: true, optional: false, required: false
  private _restrictedPeriods = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours | undefined) {
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
  private _value = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_hours - computed: true, optional: false, required: false
  private _dailyHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restricted_period_list - computed: true, optional: false, required: false
  private _restrictedPeriodList = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephony {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephony): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephony): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephony | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephony | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // open_hours - computed: true, optional: false, required: false
  private _openHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }

  // restricted_periods - computed: true, optional: false, required: false
  private _restrictedPeriods = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours | undefined) {
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
  private _value = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_hours - computed: true, optional: false, required: false
  private _dailyHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restricted_period_list - computed: true, optional: false, required: false
  private _restrictedPeriodList = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsApp {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // open_hours - computed: true, optional: false, required: false
  private _openHours = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }

  // restricted_periods - computed: true, optional: false, required: false
  private _restrictedPeriods = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfig {
}

export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }

  // local_time_zone_config - computed: true, optional: false, required: false
  private _localTimeZoneConfig = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigOutputReference(this, "local_time_zone_config");
  public get localTimeZoneConfig() {
    return this._localTimeZoneConfig;
  }

  // sms - computed: true, optional: false, required: false
  private _sms = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }

  // telephony - computed: true, optional: false, required: false
  private _telephony = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigTelephonyOutputReference(this, "telephony");
  public get telephony() {
    return this._telephony;
  }

  // whats_app - computed: true, optional: false, required: false
  private _whatsApp = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignEntryLimitsConfig {
}

export function dataAwsccConnectcampaignsv2CampaignEntryLimitsConfigToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignEntryLimitsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignEntryLimitsConfigToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignEntryLimitsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignEntryLimitsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignEntryLimitsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignEntryLimitsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_entry_count - computed: true, optional: false, required: false
  public get maxEntryCount() {
    return this.getNumberAttribute('max_entry_count');
  }

  // min_entry_interval - computed: true, optional: false, required: false
  public get minEntryInterval() {
    return this.getStringAttribute('min_entry_interval');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignSchedule {
}

export function dataAwsccConnectcampaignsv2CampaignScheduleToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignScheduleToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // refresh_frequency - computed: true, optional: false, required: false
  public get refreshFrequency() {
    return this.getStringAttribute('refresh_frequency');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignSourceEventTrigger {
}

export function dataAwsccConnectcampaignsv2CampaignSourceEventTriggerToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignSourceEventTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignSourceEventTriggerToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignSourceEventTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignSourceEventTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignSourceEventTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignSourceEventTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_profiles_domain_arn - computed: true, optional: false, required: false
  public get customerProfilesDomainArn() {
    return this.getStringAttribute('customer_profiles_domain_arn');
  }
}
export interface DataAwsccConnectcampaignsv2CampaignSource {
}

export function dataAwsccConnectcampaignsv2CampaignSourceToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignSourceToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_profiles_segment_arn - computed: true, optional: false, required: false
  public get customerProfilesSegmentArn() {
    return this.getStringAttribute('customer_profiles_segment_arn');
  }

  // event_trigger - computed: true, optional: false, required: false
  private _eventTrigger = new DataAwsccConnectcampaignsv2CampaignSourceEventTriggerOutputReference(this, "event_trigger");
  public get eventTrigger() {
    return this._eventTrigger;
  }
}
export interface DataAwsccConnectcampaignsv2CampaignTags {
}

export function dataAwsccConnectcampaignsv2CampaignTagsToTerraform(struct?: DataAwsccConnectcampaignsv2CampaignTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsv2CampaignTagsToHclTerraform(struct?: DataAwsccConnectcampaignsv2CampaignTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsv2CampaignTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsv2CampaignTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsv2CampaignTags | undefined) {
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

export class DataAwsccConnectcampaignsv2CampaignTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsv2CampaignTagsOutputReference {
    return new DataAwsccConnectcampaignsv2CampaignTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connectcampaignsv2_campaign awscc_connectcampaignsv2_campaign}
*/
export class DataAwsccConnectcampaignsv2Campaign extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connectcampaignsv2_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectcampaignsv2Campaign resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectcampaignsv2Campaign to import
  * @param importFromId The id of the existing DataAwsccConnectcampaignsv2Campaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connectcampaignsv2_campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectcampaignsv2Campaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connectcampaignsv2_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connectcampaignsv2_campaign awscc_connectcampaignsv2_campaign} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectcampaignsv2CampaignConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectcampaignsv2CampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connectcampaignsv2_campaign',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_subtype_config - computed: true, optional: false, required: false
  private _channelSubtypeConfig = new DataAwsccConnectcampaignsv2CampaignChannelSubtypeConfigOutputReference(this, "channel_subtype_config");
  public get channelSubtypeConfig() {
    return this._channelSubtypeConfig;
  }

  // communication_limits_override - computed: true, optional: false, required: false
  private _communicationLimitsOverride = new DataAwsccConnectcampaignsv2CampaignCommunicationLimitsOverrideOutputReference(this, "communication_limits_override");
  public get communicationLimitsOverride() {
    return this._communicationLimitsOverride;
  }

  // communication_time_config - computed: true, optional: false, required: false
  private _communicationTimeConfig = new DataAwsccConnectcampaignsv2CampaignCommunicationTimeConfigOutputReference(this, "communication_time_config");
  public get communicationTimeConfig() {
    return this._communicationTimeConfig;
  }

  // connect_campaign_flow_arn - computed: true, optional: false, required: false
  public get connectCampaignFlowArn() {
    return this.getStringAttribute('connect_campaign_flow_arn');
  }

  // connect_instance_id - computed: true, optional: false, required: false
  public get connectInstanceId() {
    return this.getStringAttribute('connect_instance_id');
  }

  // entry_limits_config - computed: true, optional: false, required: false
  private _entryLimitsConfig = new DataAwsccConnectcampaignsv2CampaignEntryLimitsConfigOutputReference(this, "entry_limits_config");
  public get entryLimitsConfig() {
    return this._entryLimitsConfig;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccConnectcampaignsv2CampaignScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccConnectcampaignsv2CampaignSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccConnectcampaignsv2CampaignTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
