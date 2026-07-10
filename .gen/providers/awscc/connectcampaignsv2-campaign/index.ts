// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Connectcampaignsv2CampaignConfig extends cdktn.TerraformMetaArguments {
  /**
  * The possible types of channel subtype config parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#channel_subtype_config Connectcampaignsv2Campaign#channel_subtype_config}
  */
  readonly channelSubtypeConfig?: Connectcampaignsv2CampaignChannelSubtypeConfig;
  /**
  * Communication limits config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#communication_limits_override Connectcampaignsv2Campaign#communication_limits_override}
  */
  readonly communicationLimitsOverride?: Connectcampaignsv2CampaignCommunicationLimitsOverride;
  /**
  * Campaign communication time config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#communication_time_config Connectcampaignsv2Campaign#communication_time_config}
  */
  readonly communicationTimeConfig?: Connectcampaignsv2CampaignCommunicationTimeConfig;
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_campaign_flow_arn Connectcampaignsv2Campaign#connect_campaign_flow_arn}
  */
  readonly connectCampaignFlowArn?: string;
  /**
  * Amazon Connect Instance Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_instance_id Connectcampaignsv2Campaign#connect_instance_id}
  */
  readonly connectInstanceId: string;
  /**
  * Entry limits config for a campaign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#entry_limits_config Connectcampaignsv2Campaign#entry_limits_config}
  */
  readonly entryLimitsConfig?: Connectcampaignsv2CampaignEntryLimitsConfig;
  /**
  * Campaign name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#name Connectcampaignsv2Campaign#name}
  */
  readonly name: string;
  /**
  * Campaign schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#schedule Connectcampaignsv2Campaign#schedule}
  */
  readonly schedule?: Connectcampaignsv2CampaignSchedule;
  /**
  * The possible source of the campaign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#source Connectcampaignsv2Campaign#source}
  */
  readonly source?: Connectcampaignsv2CampaignSource;
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#tags Connectcampaignsv2Campaign#tags}
  */
  readonly tags?: Connectcampaignsv2CampaignTags[] | cdktn.IResolvable;
  /**
  * Campaign type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#type Connectcampaignsv2Campaign#type}
  */
  readonly type?: string;
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig {
  /**
  * Email address used for Email messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_source_email_address Connectcampaignsv2Campaign#connect_source_email_address}
  */
  readonly connectSourceEmailAddress?: string;
  /**
  * The name of the source email address display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#source_email_address_display_name Connectcampaignsv2Campaign#source_email_address_display_name}
  */
  readonly sourceEmailAddressDisplayName?: string;
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#wisdom_template_arn Connectcampaignsv2Campaign#wisdom_template_arn}
  */
  readonly wisdomTemplateArn?: string;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connect_source_email_address: cdktn.stringToTerraform(struct!.connectSourceEmailAddress),
    source_email_address_display_name: cdktn.stringToTerraform(struct!.sourceEmailAddressDisplayName),
    wisdom_template_arn: cdktn.stringToTerraform(struct!.wisdomTemplateArn),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connect_source_email_address: {
      value: cdktn.stringToHclTerraform(struct!.connectSourceEmailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_email_address_display_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceEmailAddressDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wisdom_template_arn: {
      value: cdktn.stringToHclTerraform(struct!.wisdomTemplateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectSourceEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectSourceEmailAddress = this._connectSourceEmailAddress;
    }
    if (this._sourceEmailAddressDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEmailAddressDisplayName = this._sourceEmailAddressDisplayName;
    }
    if (this._wisdomTemplateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wisdomTemplateArn = this._wisdomTemplateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectSourceEmailAddress = undefined;
      this._sourceEmailAddressDisplayName = undefined;
      this._wisdomTemplateArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectSourceEmailAddress = value.connectSourceEmailAddress;
      this._sourceEmailAddressDisplayName = value.sourceEmailAddressDisplayName;
      this._wisdomTemplateArn = value.wisdomTemplateArn;
    }
  }

  // connect_source_email_address - computed: true, optional: true, required: false
  private _connectSourceEmailAddress?: string; 
  public get connectSourceEmailAddress() {
    return this.getStringAttribute('connect_source_email_address');
  }
  public set connectSourceEmailAddress(value: string) {
    this._connectSourceEmailAddress = value;
  }
  public resetConnectSourceEmailAddress() {
    this._connectSourceEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSourceEmailAddressInput() {
    return this._connectSourceEmailAddress;
  }

  // source_email_address_display_name - computed: true, optional: true, required: false
  private _sourceEmailAddressDisplayName?: string; 
  public get sourceEmailAddressDisplayName() {
    return this.getStringAttribute('source_email_address_display_name');
  }
  public set sourceEmailAddressDisplayName(value: string) {
    this._sourceEmailAddressDisplayName = value;
  }
  public resetSourceEmailAddressDisplayName() {
    this._sourceEmailAddressDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEmailAddressDisplayNameInput() {
    return this._sourceEmailAddressDisplayName;
  }

  // wisdom_template_arn - computed: true, optional: true, required: false
  private _wisdomTemplateArn?: string; 
  public get wisdomTemplateArn() {
    return this.getStringAttribute('wisdom_template_arn');
  }
  public set wisdomTemplateArn(value: string) {
    this._wisdomTemplateArn = value;
  }
  public resetWisdomTemplateArn() {
    this._wisdomTemplateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wisdomTemplateArnInput() {
    return this._wisdomTemplateArn;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode {
  /**
  * Agentless config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#agentless_config Connectcampaignsv2Campaign#agentless_config}
  */
  readonly agentlessConfig?: string;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentless_config: {
      value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentlessConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentlessConfig = this._agentlessConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentlessConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentlessConfig = value.agentlessConfig;
    }
  }

  // agentless_config - computed: true, optional: true, required: false
  private _agentlessConfig?: string; 
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
  public set agentlessConfig(value: string) {
    this._agentlessConfig = value;
  }
  public resetAgentlessConfig() {
    this._agentlessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessConfigInput() {
    return this._agentlessConfig;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigEmail {
  /**
  * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#capacity Connectcampaignsv2Campaign#capacity}
  */
  readonly capacity?: number;
  /**
  * Default Email outbound config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config Connectcampaignsv2Campaign#default_outbound_config}
  */
  readonly defaultOutboundConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig;
  /**
  * Email Outbound Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#outbound_mode Connectcampaignsv2Campaign#outbound_mode}
  */
  readonly outboundMode?: Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigEmailToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity: cdktn.numberToTerraform(struct!.capacity),
    default_outbound_config: connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigToTerraform(struct!.defaultOutboundConfig),
    outbound_mode: connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeToTerraform(struct!.outboundMode),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigEmailToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity: {
      value: cdktn.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_outbound_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigToHclTerraform(struct!.defaultOutboundConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig",
    },
    outbound_mode: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeToHclTerraform(struct!.outboundMode),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._defaultOutboundConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
    }
    if (this._outboundMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMode = this._outboundMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._defaultOutboundConfig.internalValue = undefined;
      this._outboundMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
      this._outboundMode.internalValue = value.outboundMode;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // default_outbound_config - computed: true, optional: true, required: false
  private _defaultOutboundConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }
  public putDefaultOutboundConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigEmailDefaultOutboundConfig) {
    this._defaultOutboundConfig.internalValue = value;
  }
  public resetDefaultOutboundConfig() {
    this._defaultOutboundConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOutboundConfigInput() {
    return this._defaultOutboundConfig.internalValue;
  }

  // outbound_mode - computed: true, optional: true, required: false
  private _outboundMode = new Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
  public putOutboundMode(value: Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutboundMode) {
    this._outboundMode.internalValue = value;
  }
  public resetOutboundMode() {
    this._outboundMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundModeInput() {
    return this._outboundMode.internalValue;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig {
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_source_phone_number_arn Connectcampaignsv2Campaign#connect_source_phone_number_arn}
  */
  readonly connectSourcePhoneNumberArn?: string;
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#wisdom_template_arn Connectcampaignsv2Campaign#wisdom_template_arn}
  */
  readonly wisdomTemplateArn?: string;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connect_source_phone_number_arn: cdktn.stringToTerraform(struct!.connectSourcePhoneNumberArn),
    wisdom_template_arn: cdktn.stringToTerraform(struct!.wisdomTemplateArn),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connect_source_phone_number_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumberArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wisdom_template_arn: {
      value: cdktn.stringToHclTerraform(struct!.wisdomTemplateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectSourcePhoneNumberArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectSourcePhoneNumberArn = this._connectSourcePhoneNumberArn;
    }
    if (this._wisdomTemplateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wisdomTemplateArn = this._wisdomTemplateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectSourcePhoneNumberArn = undefined;
      this._wisdomTemplateArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectSourcePhoneNumberArn = value.connectSourcePhoneNumberArn;
      this._wisdomTemplateArn = value.wisdomTemplateArn;
    }
  }

  // connect_source_phone_number_arn - computed: true, optional: true, required: false
  private _connectSourcePhoneNumberArn?: string; 
  public get connectSourcePhoneNumberArn() {
    return this.getStringAttribute('connect_source_phone_number_arn');
  }
  public set connectSourcePhoneNumberArn(value: string) {
    this._connectSourcePhoneNumberArn = value;
  }
  public resetConnectSourcePhoneNumberArn() {
    this._connectSourcePhoneNumberArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSourcePhoneNumberArnInput() {
    return this._connectSourcePhoneNumberArn;
  }

  // wisdom_template_arn - computed: true, optional: true, required: false
  private _wisdomTemplateArn?: string; 
  public get wisdomTemplateArn() {
    return this.getStringAttribute('wisdom_template_arn');
  }
  public set wisdomTemplateArn(value: string) {
    this._wisdomTemplateArn = value;
  }
  public resetWisdomTemplateArn() {
    this._wisdomTemplateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wisdomTemplateArnInput() {
    return this._wisdomTemplateArn;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode {
  /**
  * Agentless config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#agentless_config Connectcampaignsv2Campaign#agentless_config}
  */
  readonly agentlessConfig?: string;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentless_config: {
      value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentlessConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentlessConfig = this._agentlessConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentlessConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentlessConfig = value.agentlessConfig;
    }
  }

  // agentless_config - computed: true, optional: true, required: false
  private _agentlessConfig?: string; 
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
  public set agentlessConfig(value: string) {
    this._agentlessConfig = value;
  }
  public resetAgentlessConfig() {
    this._agentlessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessConfigInput() {
    return this._agentlessConfig;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigSms {
  /**
  * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#capacity Connectcampaignsv2Campaign#capacity}
  */
  readonly capacity?: number;
  /**
  * Default SMS outbound config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config Connectcampaignsv2Campaign#default_outbound_config}
  */
  readonly defaultOutboundConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig;
  /**
  * SMS Outbound Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#outbound_mode Connectcampaignsv2Campaign#outbound_mode}
  */
  readonly outboundMode?: Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigSmsToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigSms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity: cdktn.numberToTerraform(struct!.capacity),
    default_outbound_config: connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigToTerraform(struct!.defaultOutboundConfig),
    outbound_mode: connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeToTerraform(struct!.outboundMode),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigSmsToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigSms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity: {
      value: cdktn.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_outbound_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigToHclTerraform(struct!.defaultOutboundConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig",
    },
    outbound_mode: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeToHclTerraform(struct!.outboundMode),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigSms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._defaultOutboundConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
    }
    if (this._outboundMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMode = this._outboundMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigSms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._defaultOutboundConfig.internalValue = undefined;
      this._outboundMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
      this._outboundMode.internalValue = value.outboundMode;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // default_outbound_config - computed: true, optional: true, required: false
  private _defaultOutboundConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }
  public putDefaultOutboundConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigSmsDefaultOutboundConfig) {
    this._defaultOutboundConfig.internalValue = value;
  }
  public resetDefaultOutboundConfig() {
    this._defaultOutboundConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOutboundConfigInput() {
    return this._defaultOutboundConfig.internalValue;
  }

  // outbound_mode - computed: true, optional: true, required: false
  private _outboundMode = new Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
  public putOutboundMode(value: Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutboundMode) {
    this._outboundMode.internalValue = value;
  }
  public resetOutboundMode() {
    this._outboundMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundModeInput() {
    return this._outboundMode.internalValue;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig {
  /**
  * Enables detection of prompts (e.g., beep after after a voicemail greeting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#await_answer_machine_prompt Connectcampaignsv2Campaign#await_answer_machine_prompt}
  */
  readonly awaitAnswerMachinePrompt?: boolean | cdktn.IResolvable;
  /**
  * Flag to decided whether outbound calls should have answering machine detection enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#enable_answer_machine_detection Connectcampaignsv2Campaign#enable_answer_machine_detection}
  */
  readonly enableAnswerMachineDetection?: boolean | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    await_answer_machine_prompt: cdktn.booleanToTerraform(struct!.awaitAnswerMachinePrompt),
    enable_answer_machine_detection: cdktn.booleanToTerraform(struct!.enableAnswerMachineDetection),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    await_answer_machine_prompt: {
      value: cdktn.booleanToHclTerraform(struct!.awaitAnswerMachinePrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_answer_machine_detection: {
      value: cdktn.booleanToHclTerraform(struct!.enableAnswerMachineDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awaitAnswerMachinePrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.awaitAnswerMachinePrompt = this._awaitAnswerMachinePrompt;
    }
    if (this._enableAnswerMachineDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnswerMachineDetection = this._enableAnswerMachineDetection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awaitAnswerMachinePrompt = undefined;
      this._enableAnswerMachineDetection = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awaitAnswerMachinePrompt = value.awaitAnswerMachinePrompt;
      this._enableAnswerMachineDetection = value.enableAnswerMachineDetection;
    }
  }

  // await_answer_machine_prompt - computed: true, optional: true, required: false
  private _awaitAnswerMachinePrompt?: boolean | cdktn.IResolvable; 
  public get awaitAnswerMachinePrompt() {
    return this.getBooleanAttribute('await_answer_machine_prompt');
  }
  public set awaitAnswerMachinePrompt(value: boolean | cdktn.IResolvable) {
    this._awaitAnswerMachinePrompt = value;
  }
  public resetAwaitAnswerMachinePrompt() {
    this._awaitAnswerMachinePrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awaitAnswerMachinePromptInput() {
    return this._awaitAnswerMachinePrompt;
  }

  // enable_answer_machine_detection - computed: true, optional: true, required: false
  private _enableAnswerMachineDetection?: boolean | cdktn.IResolvable; 
  public get enableAnswerMachineDetection() {
    return this.getBooleanAttribute('enable_answer_machine_detection');
  }
  public set enableAnswerMachineDetection(value: boolean | cdktn.IResolvable) {
    this._enableAnswerMachineDetection = value;
  }
  public resetEnableAnswerMachineDetection() {
    this._enableAnswerMachineDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnswerMachineDetectionInput() {
    return this._enableAnswerMachineDetection;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig {
  /**
  * The configuration used for answering machine detection during outbound calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#answer_machine_detection_config Connectcampaignsv2Campaign#answer_machine_detection_config}
  */
  readonly answerMachineDetectionConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig;
  /**
  * The identifier of the contact flow for the outbound call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_contact_flow_id Connectcampaignsv2Campaign#connect_contact_flow_id}
  */
  readonly connectContactFlowId?: string;
  /**
  * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_source_phone_number Connectcampaignsv2Campaign#connect_source_phone_number}
  */
  readonly connectSourcePhoneNumber?: string;
  /**
  * Maximum ring time for outbound calls in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#ring_timeout Connectcampaignsv2Campaign#ring_timeout}
  */
  readonly ringTimeout?: number;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer_machine_detection_config: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigToTerraform(struct!.answerMachineDetectionConfig),
    connect_contact_flow_id: cdktn.stringToTerraform(struct!.connectContactFlowId),
    connect_source_phone_number: cdktn.stringToTerraform(struct!.connectSourcePhoneNumber),
    ring_timeout: cdktn.numberToTerraform(struct!.ringTimeout),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer_machine_detection_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigToHclTerraform(struct!.answerMachineDetectionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig",
    },
    connect_contact_flow_id: {
      value: cdktn.stringToHclTerraform(struct!.connectContactFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_source_phone_number: {
      value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_timeout: {
      value: cdktn.numberToHclTerraform(struct!.ringTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerMachineDetectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerMachineDetectionConfig = this._answerMachineDetectionConfig?.internalValue;
    }
    if (this._connectContactFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectContactFlowId = this._connectContactFlowId;
    }
    if (this._connectSourcePhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectSourcePhoneNumber = this._connectSourcePhoneNumber;
    }
    if (this._ringTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringTimeout = this._ringTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerMachineDetectionConfig.internalValue = undefined;
      this._connectContactFlowId = undefined;
      this._connectSourcePhoneNumber = undefined;
      this._ringTimeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerMachineDetectionConfig.internalValue = value.answerMachineDetectionConfig;
      this._connectContactFlowId = value.connectContactFlowId;
      this._connectSourcePhoneNumber = value.connectSourcePhoneNumber;
      this._ringTimeout = value.ringTimeout;
    }
  }

  // answer_machine_detection_config - computed: true, optional: true, required: false
  private _answerMachineDetectionConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfigOutputReference(this, "answer_machine_detection_config");
  public get answerMachineDetectionConfig() {
    return this._answerMachineDetectionConfig;
  }
  public putAnswerMachineDetectionConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigAnswerMachineDetectionConfig) {
    this._answerMachineDetectionConfig.internalValue = value;
  }
  public resetAnswerMachineDetectionConfig() {
    this._answerMachineDetectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerMachineDetectionConfigInput() {
    return this._answerMachineDetectionConfig.internalValue;
  }

  // connect_contact_flow_id - computed: true, optional: true, required: false
  private _connectContactFlowId?: string; 
  public get connectContactFlowId() {
    return this.getStringAttribute('connect_contact_flow_id');
  }
  public set connectContactFlowId(value: string) {
    this._connectContactFlowId = value;
  }
  public resetConnectContactFlowId() {
    this._connectContactFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectContactFlowIdInput() {
    return this._connectContactFlowId;
  }

  // connect_source_phone_number - computed: true, optional: true, required: false
  private _connectSourcePhoneNumber?: string; 
  public get connectSourcePhoneNumber() {
    return this.getStringAttribute('connect_source_phone_number');
  }
  public set connectSourcePhoneNumber(value: string) {
    this._connectSourcePhoneNumber = value;
  }
  public resetConnectSourcePhoneNumber() {
    this._connectSourcePhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSourcePhoneNumberInput() {
    return this._connectSourcePhoneNumber;
  }

  // ring_timeout - computed: true, optional: true, required: false
  private _ringTimeout?: number; 
  public get ringTimeout() {
    return this.getNumberAttribute('ring_timeout');
  }
  public set ringTimeout(value: number) {
    this._ringTimeout = value;
  }
  public resetRingTimeout() {
    this._ringTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringTimeoutInput() {
    return this._ringTimeout;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig {
  /**
  * The bandwidth allocation of a queue resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#bandwidth_allocation Connectcampaignsv2Campaign#bandwidth_allocation}
  */
  readonly bandwidthAllocation?: number;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bandwidth_allocation: {
      value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthAllocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthAllocation = value.bandwidthAllocation;
    }
  }

  // bandwidth_allocation - computed: true, optional: true, required: false
  private _bandwidthAllocation?: number; 
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }
  public set bandwidthAllocation(value: number) {
    this._bandwidthAllocation = value;
  }
  public resetBandwidthAllocation() {
    this._bandwidthAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAllocationInput() {
    return this._bandwidthAllocation;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig {
  /**
  * Timeout duration for a preview contact in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#duration_in_seconds Connectcampaignsv2Campaign#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_in_seconds: cdktn.numberToTerraform(struct!.durationInSeconds),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.durationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInSeconds = this._durationInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInSeconds = value.durationInSeconds;
    }
  }

  // duration_in_seconds - computed: true, optional: true, required: false
  private _durationInSeconds?: number; 
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
  public set durationInSeconds(value: number) {
    this._durationInSeconds = value;
  }
  public resetDurationInSeconds() {
    this._durationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInSecondsInput() {
    return this._durationInSeconds;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig {
  /**
  * Actions that can be performed by agent during preview phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#agent_actions Connectcampaignsv2Campaign#agent_actions}
  */
  readonly agentActions?: string[];
  /**
  * The bandwidth allocation of a queue resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#bandwidth_allocation Connectcampaignsv2Campaign#bandwidth_allocation}
  */
  readonly bandwidthAllocation?: number;
  /**
  * Timeout Config for preview contacts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#timeout_config Connectcampaignsv2Campaign#timeout_config}
  */
  readonly timeoutConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.agentActions),
    bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
    timeout_config: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigToTerraform(struct!.timeoutConfig),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.agentActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bandwidth_allocation: {
      value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigToHclTerraform(struct!.timeoutConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentActions = this._agentActions;
    }
    if (this._bandwidthAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
    }
    if (this._timeoutConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutConfig = this._timeoutConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentActions = undefined;
      this._bandwidthAllocation = undefined;
      this._timeoutConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentActions = value.agentActions;
      this._bandwidthAllocation = value.bandwidthAllocation;
      this._timeoutConfig.internalValue = value.timeoutConfig;
    }
  }

  // agent_actions - computed: true, optional: true, required: false
  private _agentActions?: string[]; 
  public get agentActions() {
    return this.getListAttribute('agent_actions');
  }
  public set agentActions(value: string[]) {
    this._agentActions = value;
  }
  public resetAgentActions() {
    this._agentActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentActionsInput() {
    return this._agentActions;
  }

  // bandwidth_allocation - computed: true, optional: true, required: false
  private _bandwidthAllocation?: number; 
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }
  public set bandwidthAllocation(value: number) {
    this._bandwidthAllocation = value;
  }
  public resetBandwidthAllocation() {
    this._bandwidthAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAllocationInput() {
    return this._bandwidthAllocation;
  }

  // timeout_config - computed: true, optional: true, required: false
  private _timeoutConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfigOutputReference(this, "timeout_config");
  public get timeoutConfig() {
    return this._timeoutConfig;
  }
  public putTimeoutConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigTimeoutConfig) {
    this._timeoutConfig.internalValue = value;
  }
  public resetTimeoutConfig() {
    this._timeoutConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutConfigInput() {
    return this._timeoutConfig.internalValue;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig {
  /**
  * The bandwidth allocation of a queue resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#bandwidth_allocation Connectcampaignsv2Campaign#bandwidth_allocation}
  */
  readonly bandwidthAllocation?: number;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bandwidth_allocation: {
      value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthAllocation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthAllocation = value.bandwidthAllocation;
    }
  }

  // bandwidth_allocation - computed: true, optional: true, required: false
  private _bandwidthAllocation?: number; 
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }
  public set bandwidthAllocation(value: number) {
    this._bandwidthAllocation = value;
  }
  public resetBandwidthAllocation() {
    this._bandwidthAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAllocationInput() {
    return this._bandwidthAllocation;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode {
  /**
  * Agentless config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#agentless_config Connectcampaignsv2Campaign#agentless_config}
  */
  readonly agentlessConfig?: string;
  /**
  * Predictive config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#predictive_config Connectcampaignsv2Campaign#predictive_config}
  */
  readonly predictiveConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig;
  /**
  * Preview config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#preview_config Connectcampaignsv2Campaign#preview_config}
  */
  readonly previewConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig;
  /**
  * Progressive config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#progressive_config Connectcampaignsv2Campaign#progressive_config}
  */
  readonly progressiveConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
    predictive_config: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigToTerraform(struct!.predictiveConfig),
    preview_config: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigToTerraform(struct!.previewConfig),
    progressive_config: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigToTerraform(struct!.progressiveConfig),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentless_config: {
      value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predictive_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigToHclTerraform(struct!.predictiveConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig",
    },
    preview_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigToHclTerraform(struct!.previewConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig",
    },
    progressive_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigToHclTerraform(struct!.progressiveConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentlessConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentlessConfig = this._agentlessConfig;
    }
    if (this._predictiveConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictiveConfig = this._predictiveConfig?.internalValue;
    }
    if (this._previewConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewConfig = this._previewConfig?.internalValue;
    }
    if (this._progressiveConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressiveConfig = this._progressiveConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentlessConfig = undefined;
      this._predictiveConfig.internalValue = undefined;
      this._previewConfig.internalValue = undefined;
      this._progressiveConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentlessConfig = value.agentlessConfig;
      this._predictiveConfig.internalValue = value.predictiveConfig;
      this._previewConfig.internalValue = value.previewConfig;
      this._progressiveConfig.internalValue = value.progressiveConfig;
    }
  }

  // agentless_config - computed: true, optional: true, required: false
  private _agentlessConfig?: string; 
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
  public set agentlessConfig(value: string) {
    this._agentlessConfig = value;
  }
  public resetAgentlessConfig() {
    this._agentlessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessConfigInput() {
    return this._agentlessConfig;
  }

  // predictive_config - computed: true, optional: true, required: false
  private _predictiveConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfigOutputReference(this, "predictive_config");
  public get predictiveConfig() {
    return this._predictiveConfig;
  }
  public putPredictiveConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePredictiveConfig) {
    this._predictiveConfig.internalValue = value;
  }
  public resetPredictiveConfig() {
    this._predictiveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveConfigInput() {
    return this._predictiveConfig.internalValue;
  }

  // preview_config - computed: true, optional: true, required: false
  private _previewConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfigOutputReference(this, "preview_config");
  public get previewConfig() {
    return this._previewConfig;
  }
  public putPreviewConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModePreviewConfig) {
    this._previewConfig.internalValue = value;
  }
  public resetPreviewConfig() {
    this._previewConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewConfigInput() {
    return this._previewConfig.internalValue;
  }

  // progressive_config - computed: true, optional: true, required: false
  private _progressiveConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfigOutputReference(this, "progressive_config");
  public get progressiveConfig() {
    return this._progressiveConfig;
  }
  public putProgressiveConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeProgressiveConfig) {
    this._progressiveConfig.internalValue = value;
  }
  public resetProgressiveConfig() {
    this._progressiveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressiveConfigInput() {
    return this._progressiveConfig.internalValue;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigTelephony {
  /**
  * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#capacity Connectcampaignsv2Campaign#capacity}
  */
  readonly capacity?: number;
  /**
  * The queue for the call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_queue_id Connectcampaignsv2Campaign#connect_queue_id}
  */
  readonly connectQueueId?: string;
  /**
  * Default Telephone Outbound config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config Connectcampaignsv2Campaign#default_outbound_config}
  */
  readonly defaultOutboundConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig;
  /**
  * Telephony Outbound Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#outbound_mode Connectcampaignsv2Campaign#outbound_mode}
  */
  readonly outboundMode?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephony | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity: cdktn.numberToTerraform(struct!.capacity),
    connect_queue_id: cdktn.stringToTerraform(struct!.connectQueueId),
    default_outbound_config: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigToTerraform(struct!.defaultOutboundConfig),
    outbound_mode: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeToTerraform(struct!.outboundMode),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigTelephonyToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephony | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity: {
      value: cdktn.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_queue_id: {
      value: cdktn.stringToHclTerraform(struct!.connectQueueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_outbound_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigToHclTerraform(struct!.defaultOutboundConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig",
    },
    outbound_mode: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeToHclTerraform(struct!.outboundMode),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigTelephony | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._connectQueueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectQueueId = this._connectQueueId;
    }
    if (this._defaultOutboundConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
    }
    if (this._outboundMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMode = this._outboundMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephony | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._connectQueueId = undefined;
      this._defaultOutboundConfig.internalValue = undefined;
      this._outboundMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._connectQueueId = value.connectQueueId;
      this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
      this._outboundMode.internalValue = value.outboundMode;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // connect_queue_id - computed: true, optional: true, required: false
  private _connectQueueId?: string; 
  public get connectQueueId() {
    return this.getStringAttribute('connect_queue_id');
  }
  public set connectQueueId(value: string) {
    this._connectQueueId = value;
  }
  public resetConnectQueueId() {
    this._connectQueueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectQueueIdInput() {
    return this._connectQueueId;
  }

  // default_outbound_config - computed: true, optional: true, required: false
  private _defaultOutboundConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }
  public putDefaultOutboundConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyDefaultOutboundConfig) {
    this._defaultOutboundConfig.internalValue = value;
  }
  public resetDefaultOutboundConfig() {
    this._defaultOutboundConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOutboundConfigInput() {
    return this._defaultOutboundConfig.internalValue;
  }

  // outbound_mode - computed: true, optional: true, required: false
  private _outboundMode = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
  public putOutboundMode(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutboundMode) {
    this._outboundMode.internalValue = value;
  }
  public resetOutboundMode() {
    this._outboundMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundModeInput() {
    return this._outboundMode.internalValue;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig {
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#connect_source_phone_number_arn Connectcampaignsv2Campaign#connect_source_phone_number_arn}
  */
  readonly connectSourcePhoneNumberArn?: string;
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#wisdom_template_arn Connectcampaignsv2Campaign#wisdom_template_arn}
  */
  readonly wisdomTemplateArn?: string;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connect_source_phone_number_arn: cdktn.stringToTerraform(struct!.connectSourcePhoneNumberArn),
    wisdom_template_arn: cdktn.stringToTerraform(struct!.wisdomTemplateArn),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connect_source_phone_number_arn: {
      value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumberArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wisdom_template_arn: {
      value: cdktn.stringToHclTerraform(struct!.wisdomTemplateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectSourcePhoneNumberArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectSourcePhoneNumberArn = this._connectSourcePhoneNumberArn;
    }
    if (this._wisdomTemplateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.wisdomTemplateArn = this._wisdomTemplateArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectSourcePhoneNumberArn = undefined;
      this._wisdomTemplateArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectSourcePhoneNumberArn = value.connectSourcePhoneNumberArn;
      this._wisdomTemplateArn = value.wisdomTemplateArn;
    }
  }

  // connect_source_phone_number_arn - computed: true, optional: true, required: false
  private _connectSourcePhoneNumberArn?: string; 
  public get connectSourcePhoneNumberArn() {
    return this.getStringAttribute('connect_source_phone_number_arn');
  }
  public set connectSourcePhoneNumberArn(value: string) {
    this._connectSourcePhoneNumberArn = value;
  }
  public resetConnectSourcePhoneNumberArn() {
    this._connectSourcePhoneNumberArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSourcePhoneNumberArnInput() {
    return this._connectSourcePhoneNumberArn;
  }

  // wisdom_template_arn - computed: true, optional: true, required: false
  private _wisdomTemplateArn?: string; 
  public get wisdomTemplateArn() {
    return this.getStringAttribute('wisdom_template_arn');
  }
  public set wisdomTemplateArn(value: string) {
    this._wisdomTemplateArn = value;
  }
  public resetWisdomTemplateArn() {
    this._wisdomTemplateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wisdomTemplateArnInput() {
    return this._wisdomTemplateArn;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode {
  /**
  * Agentless config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#agentless_config Connectcampaignsv2Campaign#agentless_config}
  */
  readonly agentlessConfig?: string;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agentless_config: {
      value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentlessConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentlessConfig = this._agentlessConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentlessConfig = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentlessConfig = value.agentlessConfig;
    }
  }

  // agentless_config - computed: true, optional: true, required: false
  private _agentlessConfig?: string; 
  public get agentlessConfig() {
    return this.getStringAttribute('agentless_config');
  }
  public set agentlessConfig(value: string) {
    this._agentlessConfig = value;
  }
  public resetAgentlessConfig() {
    this._agentlessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessConfigInput() {
    return this._agentlessConfig;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp {
  /**
  * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#capacity Connectcampaignsv2Campaign#capacity}
  */
  readonly capacity?: number;
  /**
  * Default WhatsApp outbound config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config Connectcampaignsv2Campaign#default_outbound_config}
  */
  readonly defaultOutboundConfig?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig;
  /**
  * WhatsApp Outbound Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#outbound_mode Connectcampaignsv2Campaign#outbound_mode}
  */
  readonly outboundMode?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity: cdktn.numberToTerraform(struct!.capacity),
    default_outbound_config: connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigToTerraform(struct!.defaultOutboundConfig),
    outbound_mode: connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeToTerraform(struct!.outboundMode),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity: {
      value: cdktn.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_outbound_config: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigToHclTerraform(struct!.defaultOutboundConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig",
    },
    outbound_mode: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeToHclTerraform(struct!.outboundMode),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._defaultOutboundConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
    }
    if (this._outboundMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMode = this._outboundMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._defaultOutboundConfig.internalValue = undefined;
      this._outboundMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
      this._outboundMode.internalValue = value.outboundMode;
    }
  }

  // capacity - computed: true, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // default_outbound_config - computed: true, optional: true, required: false
  private _defaultOutboundConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfigOutputReference(this, "default_outbound_config");
  public get defaultOutboundConfig() {
    return this._defaultOutboundConfig;
  }
  public putDefaultOutboundConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppDefaultOutboundConfig) {
    this._defaultOutboundConfig.internalValue = value;
  }
  public resetDefaultOutboundConfig() {
    this._defaultOutboundConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOutboundConfigInput() {
    return this._defaultOutboundConfig.internalValue;
  }

  // outbound_mode - computed: true, optional: true, required: false
  private _outboundMode = new Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundModeOutputReference(this, "outbound_mode");
  public get outboundMode() {
    return this._outboundMode;
  }
  public putOutboundMode(value: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutboundMode) {
    this._outboundMode.internalValue = value;
  }
  public resetOutboundMode() {
    this._outboundMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundModeInput() {
    return this._outboundMode.internalValue;
  }
}
export interface Connectcampaignsv2CampaignChannelSubtypeConfig {
  /**
  * Email Channel Subtype config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#email Connectcampaignsv2Campaign#email}
  */
  readonly email?: Connectcampaignsv2CampaignChannelSubtypeConfigEmail;
  /**
  * SMS Channel Subtype config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#sms Connectcampaignsv2Campaign#sms}
  */
  readonly sms?: Connectcampaignsv2CampaignChannelSubtypeConfigSms;
  /**
  * Telephony Channel Subtype config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#telephony Connectcampaignsv2Campaign#telephony}
  */
  readonly telephony?: Connectcampaignsv2CampaignChannelSubtypeConfigTelephony;
  /**
  * WhatsApp Channel Subtype config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#whats_app Connectcampaignsv2Campaign#whats_app}
  */
  readonly whatsApp?: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp;
}

export function connectcampaignsv2CampaignChannelSubtypeConfigToTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: connectcampaignsv2CampaignChannelSubtypeConfigEmailToTerraform(struct!.email),
    sms: connectcampaignsv2CampaignChannelSubtypeConfigSmsToTerraform(struct!.sms),
    telephony: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyToTerraform(struct!.telephony),
    whats_app: connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppToTerraform(struct!.whatsApp),
  }
}


export function connectcampaignsv2CampaignChannelSubtypeConfigToHclTerraform(struct?: Connectcampaignsv2CampaignChannelSubtypeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigEmail",
    },
    sms: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigSmsToHclTerraform(struct!.sms),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigSms",
    },
    telephony: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigTelephonyToHclTerraform(struct!.telephony),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigTelephony",
    },
    whats_app: {
      value: connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppToHclTerraform(struct!.whatsApp),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignChannelSubtypeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignChannelSubtypeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._sms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms?.internalValue;
    }
    if (this._telephony?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephony = this._telephony?.internalValue;
    }
    if (this._whatsApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whatsApp = this._whatsApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignChannelSubtypeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email.internalValue = undefined;
      this._sms.internalValue = undefined;
      this._telephony.internalValue = undefined;
      this._whatsApp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email.internalValue = value.email;
      this._sms.internalValue = value.sms;
      this._telephony.internalValue = value.telephony;
      this._whatsApp.internalValue = value.whatsApp;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email = new Connectcampaignsv2CampaignChannelSubtypeConfigEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: Connectcampaignsv2CampaignChannelSubtypeConfigEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // sms - computed: true, optional: true, required: false
  private _sms = new Connectcampaignsv2CampaignChannelSubtypeConfigSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: Connectcampaignsv2CampaignChannelSubtypeConfigSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // telephony - computed: true, optional: true, required: false
  private _telephony = new Connectcampaignsv2CampaignChannelSubtypeConfigTelephonyOutputReference(this, "telephony");
  public get telephony() {
    return this._telephony;
  }
  public putTelephony(value: Connectcampaignsv2CampaignChannelSubtypeConfigTelephony) {
    this._telephony.internalValue = value;
  }
  public resetTelephony() {
    this._telephony.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyInput() {
    return this._telephony.internalValue;
  }

  // whats_app - computed: true, optional: true, required: false
  private _whatsApp = new Connectcampaignsv2CampaignChannelSubtypeConfigWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
  public putWhatsApp(value: Connectcampaignsv2CampaignChannelSubtypeConfigWhatsApp) {
    this._whatsApp.internalValue = value;
  }
  public resetWhatsApp() {
    this._whatsApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsAppInput() {
    return this._whatsApp.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#frequency Connectcampaignsv2Campaign#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#max_count_per_recipient Connectcampaignsv2Campaign#max_count_per_recipient}
  */
  readonly maxCountPerRecipient?: number;
  /**
  * The communication limit time unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#unit Connectcampaignsv2Campaign#unit}
  */
  readonly unit?: string;
}

export function connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructToTerraform(struct?: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frequency: cdktn.numberToTerraform(struct!.frequency),
    max_count_per_recipient: cdktn.numberToTerraform(struct!.maxCountPerRecipient),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frequency: {
      value: cdktn.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count_per_recipient: {
      value: cdktn.numberToHclTerraform(struct!.maxCountPerRecipient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._maxCountPerRecipient !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCountPerRecipient = this._maxCountPerRecipient;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frequency = undefined;
      this._maxCountPerRecipient = undefined;
      this._unit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frequency = value.frequency;
      this._maxCountPerRecipient = value.maxCountPerRecipient;
      this._unit = value.unit;
    }
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // max_count_per_recipient - computed: true, optional: true, required: false
  private _maxCountPerRecipient?: number; 
  public get maxCountPerRecipient() {
    return this.getNumberAttribute('max_count_per_recipient');
  }
  public set maxCountPerRecipient(value: number) {
    this._maxCountPerRecipient = value;
  }
  public resetMaxCountPerRecipient() {
    this._maxCountPerRecipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountPerRecipientInput() {
    return this._maxCountPerRecipient;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructOutputReference {
    return new Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes {
  /**
  * List of communication limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#communication_limit_list Connectcampaignsv2Campaign#communication_limit_list}
  */
  readonly communicationLimitList?: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesToTerraform(struct?: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    communication_limit_list: cdktn.listMapper(connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructToTerraform, false)(struct!.communicationLimitList),
  }
}


export function connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    communication_limit_list: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructToHclTerraform, false)(struct!.communicationLimitList),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communicationLimitList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.communicationLimitList = this._communicationLimitList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._communicationLimitList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._communicationLimitList.internalValue = value.communicationLimitList;
    }
  }

  // communication_limit_list - computed: true, optional: true, required: false
  private _communicationLimitList = new Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStructList(this, "communication_limit_list", false);
  public get communicationLimitList() {
    return this._communicationLimitList;
  }
  public putCommunicationLimitList(value: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesCommunicationLimitListStruct[] | cdktn.IResolvable) {
    this._communicationLimitList.internalValue = value;
  }
  public resetCommunicationLimitList() {
    this._communicationLimitList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationLimitListInput() {
    return this._communicationLimitList.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationLimitsOverride {
  /**
  * Communication limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#all_channels_subtypes Connectcampaignsv2Campaign#all_channels_subtypes}
  */
  readonly allChannelsSubtypes?: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes;
  /**
  * Enumeration of Instance Limits handling in a Campaign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#instance_limits_handling Connectcampaignsv2Campaign#instance_limits_handling}
  */
  readonly instanceLimitsHandling?: string;
}

export function connectcampaignsv2CampaignCommunicationLimitsOverrideToTerraform(struct?: Connectcampaignsv2CampaignCommunicationLimitsOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_channels_subtypes: connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesToTerraform(struct!.allChannelsSubtypes),
    instance_limits_handling: cdktn.stringToTerraform(struct!.instanceLimitsHandling),
  }
}


export function connectcampaignsv2CampaignCommunicationLimitsOverrideToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationLimitsOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_channels_subtypes: {
      value: connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesToHclTerraform(struct!.allChannelsSubtypes),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes",
    },
    instance_limits_handling: {
      value: cdktn.stringToHclTerraform(struct!.instanceLimitsHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationLimitsOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationLimitsOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allChannelsSubtypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allChannelsSubtypes = this._allChannelsSubtypes?.internalValue;
    }
    if (this._instanceLimitsHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceLimitsHandling = this._instanceLimitsHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationLimitsOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allChannelsSubtypes.internalValue = undefined;
      this._instanceLimitsHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allChannelsSubtypes.internalValue = value.allChannelsSubtypes;
      this._instanceLimitsHandling = value.instanceLimitsHandling;
    }
  }

  // all_channels_subtypes - computed: true, optional: true, required: false
  private _allChannelsSubtypes = new Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypesOutputReference(this, "all_channels_subtypes");
  public get allChannelsSubtypes() {
    return this._allChannelsSubtypes;
  }
  public putAllChannelsSubtypes(value: Connectcampaignsv2CampaignCommunicationLimitsOverrideAllChannelsSubtypes) {
    this._allChannelsSubtypes.internalValue = value;
  }
  public resetAllChannelsSubtypes() {
    this._allChannelsSubtypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allChannelsSubtypesInput() {
    return this._allChannelsSubtypes.internalValue;
  }

  // instance_limits_handling - computed: true, optional: true, required: false
  private _instanceLimitsHandling?: string; 
  public get instanceLimitsHandling() {
    return this.getStringAttribute('instance_limits_handling');
  }
  public set instanceLimitsHandling(value: string) {
    this._instanceLimitsHandling = value;
  }
  public resetInstanceLimitsHandling() {
    this._instanceLimitsHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLimitsHandlingInput() {
    return this._instanceLimitsHandling;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue {
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_time Connectcampaignsv2Campaign#end_time}
  */
  readonly endTime?: string;
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_time Connectcampaignsv2Campaign#start_time}
  */
  readonly startTime?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours {
  /**
  * Day of week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#key Connectcampaignsv2Campaign#key}
  */
  readonly key?: string;
  /**
  * List of time range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#value Connectcampaignsv2Campaign#value}
  */
  readonly value?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueToTerraform, false)(struct!.value),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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
  private _value = new Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours {
  /**
  * Daily Hours map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#daily_hours Connectcampaignsv2Campaign#daily_hours}
  */
  readonly dailyHours?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_hours: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursToTerraform, false)(struct!.dailyHours),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_hours: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursToHclTerraform, false)(struct!.dailyHours),
      isBlock: true,
      type: "set",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyHours = this._dailyHours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = value.dailyHours;
    }
  }

  // daily_hours - computed: true, optional: true, required: false
  private _dailyHours = new Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
  public putDailyHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursDailyHours[] | cdktn.IResolvable) {
    this._dailyHours.internalValue = value;
  }
  public resetDailyHours() {
    this._dailyHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyHoursInput() {
    return this._dailyHours.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct {
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_date Connectcampaignsv2Campaign#end_date}
  */
  readonly endDate?: string;
  /**
  * The name of a restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#name Connectcampaignsv2Campaign#name}
  */
  readonly name?: string;
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_date Connectcampaignsv2Campaign#start_date}
  */
  readonly startDate?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_date: cdktn.stringToTerraform(struct!.endDate),
    name: cdktn.stringToTerraform(struct!.name),
    start_date: cdktn.stringToTerraform(struct!.startDate),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_date: {
      value: cdktn.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktn.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDate = undefined;
      this._name = undefined;
      this._startDate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDate = value.endDate;
      this._name = value.name;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods {
  /**
  * List of restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list Connectcampaignsv2Campaign#restricted_period_list}
  */
  readonly restrictedPeriodList?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    restricted_period_list: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructToTerraform, false)(struct!.restrictedPeriodList),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    restricted_period_list: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructToHclTerraform, false)(struct!.restrictedPeriodList),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedPeriodList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
    }
  }

  // restricted_period_list - computed: true, optional: true, required: false
  private _restrictedPeriodList = new Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
  public putRestrictedPeriodList(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable) {
    this._restrictedPeriodList.internalValue = value;
  }
  public resetRestrictedPeriodList() {
    this._restrictedPeriodList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodListInput() {
    return this._restrictedPeriodList.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigEmail {
  /**
  * Open Hours config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#open_hours Connectcampaignsv2Campaign#open_hours}
  */
  readonly openHours?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours;
  /**
  * Restricted period config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_periods Connectcampaignsv2Campaign#restricted_periods}
  */
  readonly restrictedPeriods?: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigEmailToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    open_hours: connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursToTerraform(struct!.openHours),
    restricted_periods: connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsToTerraform(struct!.restrictedPeriods),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigEmailToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    open_hours: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursToHclTerraform(struct!.openHours),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours",
    },
    restricted_periods: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsToHclTerraform(struct!.restrictedPeriods),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openHours = this._openHours?.internalValue;
    }
    if (this._restrictedPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openHours.internalValue = undefined;
      this._restrictedPeriods.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openHours.internalValue = value.openHours;
      this._restrictedPeriods.internalValue = value.restrictedPeriods;
    }
  }

  // open_hours - computed: true, optional: true, required: false
  private _openHours = new Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }
  public putOpenHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailOpenHours) {
    this._openHours.internalValue = value;
  }
  public resetOpenHours() {
    this._openHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHoursInput() {
    return this._openHours.internalValue;
  }

  // restricted_periods - computed: true, optional: true, required: false
  private _restrictedPeriods = new Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
  public putRestrictedPeriods(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmailRestrictedPeriods) {
    this._restrictedPeriods.internalValue = value;
  }
  public resetRestrictedPeriods() {
    this._restrictedPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodsInput() {
    return this._restrictedPeriods.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig {
  /**
  * Time Zone Id in the IANA format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#default_time_zone Connectcampaignsv2Campaign#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * Local TimeZone Detection method list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#local_time_zone_detection Connectcampaignsv2Campaign#local_time_zone_detection}
  */
  readonly localTimeZoneDetection?: string[];
  /**
  * Local TimeZone Detection scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#local_time_zone_detection_scope Connectcampaignsv2Campaign#local_time_zone_detection_scope}
  */
  readonly localTimeZoneDetectionScope?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_time_zone: cdktn.stringToTerraform(struct!.defaultTimeZone),
    local_time_zone_detection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localTimeZoneDetection),
    local_time_zone_detection_scope: cdktn.stringToTerraform(struct!.localTimeZoneDetectionScope),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_time_zone: {
      value: cdktn.stringToHclTerraform(struct!.defaultTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_time_zone_detection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.localTimeZoneDetection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_time_zone_detection_scope: {
      value: cdktn.stringToHclTerraform(struct!.localTimeZoneDetectionScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimeZone = this._defaultTimeZone;
    }
    if (this._localTimeZoneDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTimeZoneDetection = this._localTimeZoneDetection;
    }
    if (this._localTimeZoneDetectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTimeZoneDetectionScope = this._localTimeZoneDetectionScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultTimeZone = undefined;
      this._localTimeZoneDetection = undefined;
      this._localTimeZoneDetectionScope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultTimeZone = value.defaultTimeZone;
      this._localTimeZoneDetection = value.localTimeZoneDetection;
      this._localTimeZoneDetectionScope = value.localTimeZoneDetectionScope;
    }
  }

  // default_time_zone - computed: true, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
  }

  // local_time_zone_detection - computed: true, optional: true, required: false
  private _localTimeZoneDetection?: string[]; 
  public get localTimeZoneDetection() {
    return this.getListAttribute('local_time_zone_detection');
  }
  public set localTimeZoneDetection(value: string[]) {
    this._localTimeZoneDetection = value;
  }
  public resetLocalTimeZoneDetection() {
    this._localTimeZoneDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeZoneDetectionInput() {
    return this._localTimeZoneDetection;
  }

  // local_time_zone_detection_scope - computed: true, optional: true, required: false
  private _localTimeZoneDetectionScope?: string; 
  public get localTimeZoneDetectionScope() {
    return this.getStringAttribute('local_time_zone_detection_scope');
  }
  public set localTimeZoneDetectionScope(value: string) {
    this._localTimeZoneDetectionScope = value;
  }
  public resetLocalTimeZoneDetectionScope() {
    this._localTimeZoneDetectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeZoneDetectionScopeInput() {
    return this._localTimeZoneDetectionScope;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue {
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_time Connectcampaignsv2Campaign#end_time}
  */
  readonly endTime?: string;
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_time Connectcampaignsv2Campaign#start_time}
  */
  readonly startTime?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours {
  /**
  * Day of week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#key Connectcampaignsv2Campaign#key}
  */
  readonly key?: string;
  /**
  * List of time range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#value Connectcampaignsv2Campaign#value}
  */
  readonly value?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueToTerraform, false)(struct!.value),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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
  private _value = new Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours {
  /**
  * Daily Hours map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#daily_hours Connectcampaignsv2Campaign#daily_hours}
  */
  readonly dailyHours?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_hours: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursToTerraform, false)(struct!.dailyHours),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_hours: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursToHclTerraform, false)(struct!.dailyHours),
      isBlock: true,
      type: "set",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyHours = this._dailyHours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = value.dailyHours;
    }
  }

  // daily_hours - computed: true, optional: true, required: false
  private _dailyHours = new Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
  public putDailyHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursDailyHours[] | cdktn.IResolvable) {
    this._dailyHours.internalValue = value;
  }
  public resetDailyHours() {
    this._dailyHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyHoursInput() {
    return this._dailyHours.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct {
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_date Connectcampaignsv2Campaign#end_date}
  */
  readonly endDate?: string;
  /**
  * The name of a restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#name Connectcampaignsv2Campaign#name}
  */
  readonly name?: string;
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_date Connectcampaignsv2Campaign#start_date}
  */
  readonly startDate?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_date: cdktn.stringToTerraform(struct!.endDate),
    name: cdktn.stringToTerraform(struct!.name),
    start_date: cdktn.stringToTerraform(struct!.startDate),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_date: {
      value: cdktn.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktn.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDate = undefined;
      this._name = undefined;
      this._startDate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDate = value.endDate;
      this._name = value.name;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods {
  /**
  * List of restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list Connectcampaignsv2Campaign#restricted_period_list}
  */
  readonly restrictedPeriodList?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    restricted_period_list: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructToTerraform, false)(struct!.restrictedPeriodList),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    restricted_period_list: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructToHclTerraform, false)(struct!.restrictedPeriodList),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedPeriodList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
    }
  }

  // restricted_period_list - computed: true, optional: true, required: false
  private _restrictedPeriodList = new Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
  public putRestrictedPeriodList(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable) {
    this._restrictedPeriodList.internalValue = value;
  }
  public resetRestrictedPeriodList() {
    this._restrictedPeriodList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodListInput() {
    return this._restrictedPeriodList.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigSms {
  /**
  * Open Hours config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#open_hours Connectcampaignsv2Campaign#open_hours}
  */
  readonly openHours?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours;
  /**
  * Restricted period config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_periods Connectcampaignsv2Campaign#restricted_periods}
  */
  readonly restrictedPeriods?: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigSmsToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    open_hours: connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursToTerraform(struct!.openHours),
    restricted_periods: connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsToTerraform(struct!.restrictedPeriods),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigSmsToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigSms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    open_hours: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursToHclTerraform(struct!.openHours),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours",
    },
    restricted_periods: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsToHclTerraform(struct!.restrictedPeriods),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigSmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigSms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openHours = this._openHours?.internalValue;
    }
    if (this._restrictedPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigSms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openHours.internalValue = undefined;
      this._restrictedPeriods.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openHours.internalValue = value.openHours;
      this._restrictedPeriods.internalValue = value.restrictedPeriods;
    }
  }

  // open_hours - computed: true, optional: true, required: false
  private _openHours = new Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }
  public putOpenHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsOpenHours) {
    this._openHours.internalValue = value;
  }
  public resetOpenHours() {
    this._openHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHoursInput() {
    return this._openHours.internalValue;
  }

  // restricted_periods - computed: true, optional: true, required: false
  private _restrictedPeriods = new Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
  public putRestrictedPeriods(value: Connectcampaignsv2CampaignCommunicationTimeConfigSmsRestrictedPeriods) {
    this._restrictedPeriods.internalValue = value;
  }
  public resetRestrictedPeriods() {
    this._restrictedPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodsInput() {
    return this._restrictedPeriods.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue {
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_time Connectcampaignsv2Campaign#end_time}
  */
  readonly endTime?: string;
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_time Connectcampaignsv2Campaign#start_time}
  */
  readonly startTime?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours {
  /**
  * Day of week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#key Connectcampaignsv2Campaign#key}
  */
  readonly key?: string;
  /**
  * List of time range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#value Connectcampaignsv2Campaign#value}
  */
  readonly value?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueToTerraform, false)(struct!.value),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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
  private _value = new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours {
  /**
  * Daily Hours map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#daily_hours Connectcampaignsv2Campaign#daily_hours}
  */
  readonly dailyHours?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_hours: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursToTerraform, false)(struct!.dailyHours),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_hours: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursToHclTerraform, false)(struct!.dailyHours),
      isBlock: true,
      type: "set",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyHours = this._dailyHours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = value.dailyHours;
    }
  }

  // daily_hours - computed: true, optional: true, required: false
  private _dailyHours = new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
  public putDailyHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursDailyHours[] | cdktn.IResolvable) {
    this._dailyHours.internalValue = value;
  }
  public resetDailyHours() {
    this._dailyHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyHoursInput() {
    return this._dailyHours.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct {
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_date Connectcampaignsv2Campaign#end_date}
  */
  readonly endDate?: string;
  /**
  * The name of a restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#name Connectcampaignsv2Campaign#name}
  */
  readonly name?: string;
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_date Connectcampaignsv2Campaign#start_date}
  */
  readonly startDate?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_date: cdktn.stringToTerraform(struct!.endDate),
    name: cdktn.stringToTerraform(struct!.name),
    start_date: cdktn.stringToTerraform(struct!.startDate),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_date: {
      value: cdktn.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktn.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDate = undefined;
      this._name = undefined;
      this._startDate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDate = value.endDate;
      this._name = value.name;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods {
  /**
  * List of restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list Connectcampaignsv2Campaign#restricted_period_list}
  */
  readonly restrictedPeriodList?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    restricted_period_list: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructToTerraform, false)(struct!.restrictedPeriodList),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    restricted_period_list: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructToHclTerraform, false)(struct!.restrictedPeriodList),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedPeriodList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
    }
  }

  // restricted_period_list - computed: true, optional: true, required: false
  private _restrictedPeriodList = new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
  public putRestrictedPeriodList(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable) {
    this._restrictedPeriodList.internalValue = value;
  }
  public resetRestrictedPeriodList() {
    this._restrictedPeriodList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodListInput() {
    return this._restrictedPeriodList.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigTelephony {
  /**
  * Open Hours config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#open_hours Connectcampaignsv2Campaign#open_hours}
  */
  readonly openHours?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours;
  /**
  * Restricted period config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_periods Connectcampaignsv2Campaign#restricted_periods}
  */
  readonly restrictedPeriods?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephony | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    open_hours: connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursToTerraform(struct!.openHours),
    restricted_periods: connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsToTerraform(struct!.restrictedPeriods),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigTelephonyToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephony | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    open_hours: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursToHclTerraform(struct!.openHours),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours",
    },
    restricted_periods: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsToHclTerraform(struct!.restrictedPeriods),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigTelephony | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openHours = this._openHours?.internalValue;
    }
    if (this._restrictedPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephony | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openHours.internalValue = undefined;
      this._restrictedPeriods.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openHours.internalValue = value.openHours;
      this._restrictedPeriods.internalValue = value.restrictedPeriods;
    }
  }

  // open_hours - computed: true, optional: true, required: false
  private _openHours = new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }
  public putOpenHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOpenHours) {
    this._openHours.internalValue = value;
  }
  public resetOpenHours() {
    this._openHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHoursInput() {
    return this._openHours.internalValue;
  }

  // restricted_periods - computed: true, optional: true, required: false
  private _restrictedPeriods = new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
  public putRestrictedPeriods(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyRestrictedPeriods) {
    this._restrictedPeriods.internalValue = value;
  }
  public resetRestrictedPeriods() {
    this._restrictedPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodsInput() {
    return this._restrictedPeriods.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue {
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_time Connectcampaignsv2Campaign#end_time}
  */
  readonly endTime?: string;
  /**
  * Time in ISO 8601 format, e.g. T23:11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_time Connectcampaignsv2Campaign#start_time}
  */
  readonly startTime?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours {
  /**
  * Day of week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#key Connectcampaignsv2Campaign#key}
  */
  readonly key?: string;
  /**
  * List of time range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#value Connectcampaignsv2Campaign#value}
  */
  readonly value?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueToTerraform, false)(struct!.value),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueToHclTerraform, false)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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
  private _value = new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours {
  /**
  * Daily Hours map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#daily_hours Connectcampaignsv2Campaign#daily_hours}
  */
  readonly dailyHours?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    daily_hours: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursToTerraform, false)(struct!.dailyHours),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    daily_hours: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursToHclTerraform, false)(struct!.dailyHours),
      isBlock: true,
      type: "set",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyHours = this._dailyHours?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dailyHours.internalValue = value.dailyHours;
    }
  }

  // daily_hours - computed: true, optional: true, required: false
  private _dailyHours = new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursList(this, "daily_hours", true);
  public get dailyHours() {
    return this._dailyHours;
  }
  public putDailyHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHours[] | cdktn.IResolvable) {
    this._dailyHours.internalValue = value;
  }
  public resetDailyHours() {
    this._dailyHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyHoursInput() {
    return this._dailyHours.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct {
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_date Connectcampaignsv2Campaign#end_date}
  */
  readonly endDate?: string;
  /**
  * The name of a restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#name Connectcampaignsv2Campaign#name}
  */
  readonly name?: string;
  /**
  * Date in ISO 8601 format, e.g. 2024-01-01
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_date Connectcampaignsv2Campaign#start_date}
  */
  readonly startDate?: string;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_date: cdktn.stringToTerraform(struct!.endDate),
    name: cdktn.stringToTerraform(struct!.name),
    start_date: cdktn.stringToTerraform(struct!.startDate),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_date: {
      value: cdktn.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktn.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endDate = undefined;
      this._name = undefined;
      this._startDate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endDate = value.endDate;
      this._name = value.name;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructOutputReference {
    return new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods {
  /**
  * List of restricted period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list Connectcampaignsv2Campaign#restricted_period_list}
  */
  readonly restrictedPeriodList?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    restricted_period_list: cdktn.listMapper(connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructToTerraform, false)(struct!.restrictedPeriodList),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    restricted_period_list: {
      value: cdktn.listMapperHcl(connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructToHclTerraform, false)(struct!.restrictedPeriodList),
      isBlock: true,
      type: "list",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedPeriodList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
    }
  }

  // restricted_period_list - computed: true, optional: true, required: false
  private _restrictedPeriodList = new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStructList(this, "restricted_period_list", false);
  public get restrictedPeriodList() {
    return this._restrictedPeriodList;
  }
  public putRestrictedPeriodList(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListStruct[] | cdktn.IResolvable) {
    this._restrictedPeriodList.internalValue = value;
  }
  public resetRestrictedPeriodList() {
    this._restrictedPeriodList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodListInput() {
    return this._restrictedPeriodList.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp {
  /**
  * Open Hours config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#open_hours Connectcampaignsv2Campaign#open_hours}
  */
  readonly openHours?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours;
  /**
  * Restricted period config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#restricted_periods Connectcampaignsv2Campaign#restricted_periods}
  */
  readonly restrictedPeriods?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    open_hours: connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursToTerraform(struct!.openHours),
    restricted_periods: connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsToTerraform(struct!.restrictedPeriods),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    open_hours: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursToHclTerraform(struct!.openHours),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours",
    },
    restricted_periods: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsToHclTerraform(struct!.restrictedPeriods),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openHours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openHours = this._openHours?.internalValue;
    }
    if (this._restrictedPeriods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openHours.internalValue = undefined;
      this._restrictedPeriods.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openHours.internalValue = value.openHours;
      this._restrictedPeriods.internalValue = value.restrictedPeriods;
    }
  }

  // open_hours - computed: true, optional: true, required: false
  private _openHours = new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHoursOutputReference(this, "open_hours");
  public get openHours() {
    return this._openHours;
  }
  public putOpenHours(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOpenHours) {
    this._openHours.internalValue = value;
  }
  public resetOpenHours() {
    this._openHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openHoursInput() {
    return this._openHours.internalValue;
  }

  // restricted_periods - computed: true, optional: true, required: false
  private _restrictedPeriods = new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsOutputReference(this, "restricted_periods");
  public get restrictedPeriods() {
    return this._restrictedPeriods;
  }
  public putRestrictedPeriods(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppRestrictedPeriods) {
    this._restrictedPeriods.internalValue = value;
  }
  public resetRestrictedPeriods() {
    this._restrictedPeriods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedPeriodsInput() {
    return this._restrictedPeriods.internalValue;
  }
}
export interface Connectcampaignsv2CampaignCommunicationTimeConfig {
  /**
  * Time window config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#email Connectcampaignsv2Campaign#email}
  */
  readonly email?: Connectcampaignsv2CampaignCommunicationTimeConfigEmail;
  /**
  * Local time zone config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#local_time_zone_config Connectcampaignsv2Campaign#local_time_zone_config}
  */
  readonly localTimeZoneConfig?: Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig;
  /**
  * Time window config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#sms Connectcampaignsv2Campaign#sms}
  */
  readonly sms?: Connectcampaignsv2CampaignCommunicationTimeConfigSms;
  /**
  * Time window config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#telephony Connectcampaignsv2Campaign#telephony}
  */
  readonly telephony?: Connectcampaignsv2CampaignCommunicationTimeConfigTelephony;
  /**
  * Time window config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#whats_app Connectcampaignsv2Campaign#whats_app}
  */
  readonly whatsApp?: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp;
}

export function connectcampaignsv2CampaignCommunicationTimeConfigToTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: connectcampaignsv2CampaignCommunicationTimeConfigEmailToTerraform(struct!.email),
    local_time_zone_config: connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigToTerraform(struct!.localTimeZoneConfig),
    sms: connectcampaignsv2CampaignCommunicationTimeConfigSmsToTerraform(struct!.sms),
    telephony: connectcampaignsv2CampaignCommunicationTimeConfigTelephonyToTerraform(struct!.telephony),
    whats_app: connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppToTerraform(struct!.whatsApp),
  }
}


export function connectcampaignsv2CampaignCommunicationTimeConfigToHclTerraform(struct?: Connectcampaignsv2CampaignCommunicationTimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigEmail",
    },
    local_time_zone_config: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigToHclTerraform(struct!.localTimeZoneConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig",
    },
    sms: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigSmsToHclTerraform(struct!.sms),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigSms",
    },
    telephony: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigTelephonyToHclTerraform(struct!.telephony),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigTelephony",
    },
    whats_app: {
      value: connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppToHclTerraform(struct!.whatsApp),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignCommunicationTimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignCommunicationTimeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._localTimeZoneConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTimeZoneConfig = this._localTimeZoneConfig?.internalValue;
    }
    if (this._sms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms?.internalValue;
    }
    if (this._telephony?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephony = this._telephony?.internalValue;
    }
    if (this._whatsApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whatsApp = this._whatsApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignCommunicationTimeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email.internalValue = undefined;
      this._localTimeZoneConfig.internalValue = undefined;
      this._sms.internalValue = undefined;
      this._telephony.internalValue = undefined;
      this._whatsApp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email.internalValue = value.email;
      this._localTimeZoneConfig.internalValue = value.localTimeZoneConfig;
      this._sms.internalValue = value.sms;
      this._telephony.internalValue = value.telephony;
      this._whatsApp.internalValue = value.whatsApp;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email = new Connectcampaignsv2CampaignCommunicationTimeConfigEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: Connectcampaignsv2CampaignCommunicationTimeConfigEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // local_time_zone_config - computed: true, optional: true, required: false
  private _localTimeZoneConfig = new Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfigOutputReference(this, "local_time_zone_config");
  public get localTimeZoneConfig() {
    return this._localTimeZoneConfig;
  }
  public putLocalTimeZoneConfig(value: Connectcampaignsv2CampaignCommunicationTimeConfigLocalTimeZoneConfig) {
    this._localTimeZoneConfig.internalValue = value;
  }
  public resetLocalTimeZoneConfig() {
    this._localTimeZoneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTimeZoneConfigInput() {
    return this._localTimeZoneConfig.internalValue;
  }

  // sms - computed: true, optional: true, required: false
  private _sms = new Connectcampaignsv2CampaignCommunicationTimeConfigSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: Connectcampaignsv2CampaignCommunicationTimeConfigSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // telephony - computed: true, optional: true, required: false
  private _telephony = new Connectcampaignsv2CampaignCommunicationTimeConfigTelephonyOutputReference(this, "telephony");
  public get telephony() {
    return this._telephony;
  }
  public putTelephony(value: Connectcampaignsv2CampaignCommunicationTimeConfigTelephony) {
    this._telephony.internalValue = value;
  }
  public resetTelephony() {
    this._telephony.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyInput() {
    return this._telephony.internalValue;
  }

  // whats_app - computed: true, optional: true, required: false
  private _whatsApp = new Connectcampaignsv2CampaignCommunicationTimeConfigWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
  public putWhatsApp(value: Connectcampaignsv2CampaignCommunicationTimeConfigWhatsApp) {
    this._whatsApp.internalValue = value;
  }
  public resetWhatsApp() {
    this._whatsApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsAppInput() {
    return this._whatsApp.internalValue;
  }
}
export interface Connectcampaignsv2CampaignEntryLimitsConfig {
  /**
  * Maximum number of entries per participant. 0 indicates unlimited entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#max_entry_count Connectcampaignsv2Campaign#max_entry_count}
  */
  readonly maxEntryCount?: number;
  /**
  * Minimum time interval between entries for the same participant in ISO 8601 duration format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#min_entry_interval Connectcampaignsv2Campaign#min_entry_interval}
  */
  readonly minEntryInterval?: string;
}

export function connectcampaignsv2CampaignEntryLimitsConfigToTerraform(struct?: Connectcampaignsv2CampaignEntryLimitsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_entry_count: cdktn.numberToTerraform(struct!.maxEntryCount),
    min_entry_interval: cdktn.stringToTerraform(struct!.minEntryInterval),
  }
}


export function connectcampaignsv2CampaignEntryLimitsConfigToHclTerraform(struct?: Connectcampaignsv2CampaignEntryLimitsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_entry_count: {
      value: cdktn.numberToHclTerraform(struct!.maxEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_entry_interval: {
      value: cdktn.stringToHclTerraform(struct!.minEntryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignEntryLimitsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignEntryLimitsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntryCount = this._maxEntryCount;
    }
    if (this._minEntryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minEntryInterval = this._minEntryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignEntryLimitsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEntryCount = undefined;
      this._minEntryInterval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEntryCount = value.maxEntryCount;
      this._minEntryInterval = value.minEntryInterval;
    }
  }

  // max_entry_count - computed: true, optional: true, required: false
  private _maxEntryCount?: number; 
  public get maxEntryCount() {
    return this.getNumberAttribute('max_entry_count');
  }
  public set maxEntryCount(value: number) {
    this._maxEntryCount = value;
  }
  public resetMaxEntryCount() {
    this._maxEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntryCountInput() {
    return this._maxEntryCount;
  }

  // min_entry_interval - computed: true, optional: true, required: false
  private _minEntryInterval?: string; 
  public get minEntryInterval() {
    return this.getStringAttribute('min_entry_interval');
  }
  public set minEntryInterval(value: string) {
    this._minEntryInterval = value;
  }
  public resetMinEntryInterval() {
    this._minEntryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minEntryIntervalInput() {
    return this._minEntryInterval;
  }
}
export interface Connectcampaignsv2CampaignSchedule {
  /**
  * Timestamp with no UTC offset or timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#end_time Connectcampaignsv2Campaign#end_time}
  */
  readonly endTime?: string;
  /**
  * Time duration in ISO 8601 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#refresh_frequency Connectcampaignsv2Campaign#refresh_frequency}
  */
  readonly refreshFrequency?: string;
  /**
  * Timestamp with no UTC offset or timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#start_time Connectcampaignsv2Campaign#start_time}
  */
  readonly startTime?: string;
}

export function connectcampaignsv2CampaignScheduleToTerraform(struct?: Connectcampaignsv2CampaignSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_time: cdktn.stringToTerraform(struct!.endTime),
    refresh_frequency: cdktn.stringToTerraform(struct!.refreshFrequency),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function connectcampaignsv2CampaignScheduleToHclTerraform(struct?: Connectcampaignsv2CampaignSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_frequency: {
      value: cdktn.stringToHclTerraform(struct!.refreshFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._refreshFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFrequency = this._refreshFrequency;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._refreshFrequency = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._refreshFrequency = value.refreshFrequency;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // refresh_frequency - computed: true, optional: true, required: false
  private _refreshFrequency?: string; 
  public get refreshFrequency() {
    return this.getStringAttribute('refresh_frequency');
  }
  public set refreshFrequency(value: string) {
    this._refreshFrequency = value;
  }
  public resetRefreshFrequency() {
    this._refreshFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFrequencyInput() {
    return this._refreshFrequency;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface Connectcampaignsv2CampaignSourceEventTrigger {
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#customer_profiles_domain_arn Connectcampaignsv2Campaign#customer_profiles_domain_arn}
  */
  readonly customerProfilesDomainArn?: string;
}

export function connectcampaignsv2CampaignSourceEventTriggerToTerraform(struct?: Connectcampaignsv2CampaignSourceEventTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_profiles_domain_arn: cdktn.stringToTerraform(struct!.customerProfilesDomainArn),
  }
}


export function connectcampaignsv2CampaignSourceEventTriggerToHclTerraform(struct?: Connectcampaignsv2CampaignSourceEventTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_profiles_domain_arn: {
      value: cdktn.stringToHclTerraform(struct!.customerProfilesDomainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignSourceEventTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignSourceEventTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerProfilesDomainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerProfilesDomainArn = this._customerProfilesDomainArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignSourceEventTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerProfilesDomainArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerProfilesDomainArn = value.customerProfilesDomainArn;
    }
  }

  // customer_profiles_domain_arn - computed: true, optional: true, required: false
  private _customerProfilesDomainArn?: string; 
  public get customerProfilesDomainArn() {
    return this.getStringAttribute('customer_profiles_domain_arn');
  }
  public set customerProfilesDomainArn(value: string) {
    this._customerProfilesDomainArn = value;
  }
  public resetCustomerProfilesDomainArn() {
    this._customerProfilesDomainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProfilesDomainArnInput() {
    return this._customerProfilesDomainArn;
  }
}
export interface Connectcampaignsv2CampaignSource {
  /**
  * Arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#customer_profiles_segment_arn Connectcampaignsv2Campaign#customer_profiles_segment_arn}
  */
  readonly customerProfilesSegmentArn?: string;
  /**
  * The event trigger of the campaign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#event_trigger Connectcampaignsv2Campaign#event_trigger}
  */
  readonly eventTrigger?: Connectcampaignsv2CampaignSourceEventTrigger;
}

export function connectcampaignsv2CampaignSourceToTerraform(struct?: Connectcampaignsv2CampaignSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_profiles_segment_arn: cdktn.stringToTerraform(struct!.customerProfilesSegmentArn),
    event_trigger: connectcampaignsv2CampaignSourceEventTriggerToTerraform(struct!.eventTrigger),
  }
}


export function connectcampaignsv2CampaignSourceToHclTerraform(struct?: Connectcampaignsv2CampaignSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_profiles_segment_arn: {
      value: cdktn.stringToHclTerraform(struct!.customerProfilesSegmentArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_trigger: {
      value: connectcampaignsv2CampaignSourceEventTriggerToHclTerraform(struct!.eventTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "Connectcampaignsv2CampaignSourceEventTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Connectcampaignsv2CampaignSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Connectcampaignsv2CampaignSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerProfilesSegmentArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerProfilesSegmentArn = this._customerProfilesSegmentArn;
    }
    if (this._eventTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTrigger = this._eventTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Connectcampaignsv2CampaignSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerProfilesSegmentArn = undefined;
      this._eventTrigger.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerProfilesSegmentArn = value.customerProfilesSegmentArn;
      this._eventTrigger.internalValue = value.eventTrigger;
    }
  }

  // customer_profiles_segment_arn - computed: true, optional: true, required: false
  private _customerProfilesSegmentArn?: string; 
  public get customerProfilesSegmentArn() {
    return this.getStringAttribute('customer_profiles_segment_arn');
  }
  public set customerProfilesSegmentArn(value: string) {
    this._customerProfilesSegmentArn = value;
  }
  public resetCustomerProfilesSegmentArn() {
    this._customerProfilesSegmentArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProfilesSegmentArnInput() {
    return this._customerProfilesSegmentArn;
  }

  // event_trigger - computed: true, optional: true, required: false
  private _eventTrigger = new Connectcampaignsv2CampaignSourceEventTriggerOutputReference(this, "event_trigger");
  public get eventTrigger() {
    return this._eventTrigger;
  }
  public putEventTrigger(value: Connectcampaignsv2CampaignSourceEventTrigger) {
    this._eventTrigger.internalValue = value;
  }
  public resetEventTrigger() {
    this._eventTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger.internalValue;
  }
}
export interface Connectcampaignsv2CampaignTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#key Connectcampaignsv2Campaign#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#value Connectcampaignsv2Campaign#value}
  */
  readonly value?: string;
}

export function connectcampaignsv2CampaignTagsToTerraform(struct?: Connectcampaignsv2CampaignTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectcampaignsv2CampaignTagsToHclTerraform(struct?: Connectcampaignsv2CampaignTags | cdktn.IResolvable): any {
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

export class Connectcampaignsv2CampaignTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Connectcampaignsv2CampaignTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Connectcampaignsv2CampaignTags | cdktn.IResolvable | undefined) {
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

export class Connectcampaignsv2CampaignTagsList extends cdktn.ComplexList {
  public internalValue? : Connectcampaignsv2CampaignTags[] | cdktn.IResolvable

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
  public get(index: number): Connectcampaignsv2CampaignTagsOutputReference {
    return new Connectcampaignsv2CampaignTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign awscc_connectcampaignsv2_campaign}
*/
export class Connectcampaignsv2Campaign extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connectcampaignsv2_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Connectcampaignsv2Campaign resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connectcampaignsv2Campaign to import
  * @param importFromId The id of the existing Connectcampaignsv2Campaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connectcampaignsv2Campaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connectcampaignsv2_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connectcampaignsv2_campaign awscc_connectcampaignsv2_campaign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Connectcampaignsv2CampaignConfig
  */
  public constructor(scope: Construct, id: string, config: Connectcampaignsv2CampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connectcampaignsv2_campaign',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelSubtypeConfig.internalValue = config.channelSubtypeConfig;
    this._communicationLimitsOverride.internalValue = config.communicationLimitsOverride;
    this._communicationTimeConfig.internalValue = config.communicationTimeConfig;
    this._connectCampaignFlowArn = config.connectCampaignFlowArn;
    this._connectInstanceId = config.connectInstanceId;
    this._entryLimitsConfig.internalValue = config.entryLimitsConfig;
    this._name = config.name;
    this._schedule.internalValue = config.schedule;
    this._source.internalValue = config.source;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_subtype_config - computed: true, optional: true, required: false
  private _channelSubtypeConfig = new Connectcampaignsv2CampaignChannelSubtypeConfigOutputReference(this, "channel_subtype_config");
  public get channelSubtypeConfig() {
    return this._channelSubtypeConfig;
  }
  public putChannelSubtypeConfig(value: Connectcampaignsv2CampaignChannelSubtypeConfig) {
    this._channelSubtypeConfig.internalValue = value;
  }
  public resetChannelSubtypeConfig() {
    this._channelSubtypeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelSubtypeConfigInput() {
    return this._channelSubtypeConfig.internalValue;
  }

  // communication_limits_override - computed: true, optional: true, required: false
  private _communicationLimitsOverride = new Connectcampaignsv2CampaignCommunicationLimitsOverrideOutputReference(this, "communication_limits_override");
  public get communicationLimitsOverride() {
    return this._communicationLimitsOverride;
  }
  public putCommunicationLimitsOverride(value: Connectcampaignsv2CampaignCommunicationLimitsOverride) {
    this._communicationLimitsOverride.internalValue = value;
  }
  public resetCommunicationLimitsOverride() {
    this._communicationLimitsOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationLimitsOverrideInput() {
    return this._communicationLimitsOverride.internalValue;
  }

  // communication_time_config - computed: true, optional: true, required: false
  private _communicationTimeConfig = new Connectcampaignsv2CampaignCommunicationTimeConfigOutputReference(this, "communication_time_config");
  public get communicationTimeConfig() {
    return this._communicationTimeConfig;
  }
  public putCommunicationTimeConfig(value: Connectcampaignsv2CampaignCommunicationTimeConfig) {
    this._communicationTimeConfig.internalValue = value;
  }
  public resetCommunicationTimeConfig() {
    this._communicationTimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationTimeConfigInput() {
    return this._communicationTimeConfig.internalValue;
  }

  // connect_campaign_flow_arn - computed: true, optional: true, required: false
  private _connectCampaignFlowArn?: string; 
  public get connectCampaignFlowArn() {
    return this.getStringAttribute('connect_campaign_flow_arn');
  }
  public set connectCampaignFlowArn(value: string) {
    this._connectCampaignFlowArn = value;
  }
  public resetConnectCampaignFlowArn() {
    this._connectCampaignFlowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectCampaignFlowArnInput() {
    return this._connectCampaignFlowArn;
  }

  // connect_instance_id - computed: false, optional: false, required: true
  private _connectInstanceId?: string; 
  public get connectInstanceId() {
    return this.getStringAttribute('connect_instance_id');
  }
  public set connectInstanceId(value: string) {
    this._connectInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInstanceIdInput() {
    return this._connectInstanceId;
  }

  // entry_limits_config - computed: true, optional: true, required: false
  private _entryLimitsConfig = new Connectcampaignsv2CampaignEntryLimitsConfigOutputReference(this, "entry_limits_config");
  public get entryLimitsConfig() {
    return this._entryLimitsConfig;
  }
  public putEntryLimitsConfig(value: Connectcampaignsv2CampaignEntryLimitsConfig) {
    this._entryLimitsConfig.internalValue = value;
  }
  public resetEntryLimitsConfig() {
    this._entryLimitsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryLimitsConfigInput() {
    return this._entryLimitsConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new Connectcampaignsv2CampaignScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: Connectcampaignsv2CampaignSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // source - computed: true, optional: true, required: false
  private _source = new Connectcampaignsv2CampaignSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: Connectcampaignsv2CampaignSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Connectcampaignsv2CampaignTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Connectcampaignsv2CampaignTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_subtype_config: connectcampaignsv2CampaignChannelSubtypeConfigToTerraform(this._channelSubtypeConfig.internalValue),
      communication_limits_override: connectcampaignsv2CampaignCommunicationLimitsOverrideToTerraform(this._communicationLimitsOverride.internalValue),
      communication_time_config: connectcampaignsv2CampaignCommunicationTimeConfigToTerraform(this._communicationTimeConfig.internalValue),
      connect_campaign_flow_arn: cdktn.stringToTerraform(this._connectCampaignFlowArn),
      connect_instance_id: cdktn.stringToTerraform(this._connectInstanceId),
      entry_limits_config: connectcampaignsv2CampaignEntryLimitsConfigToTerraform(this._entryLimitsConfig.internalValue),
      name: cdktn.stringToTerraform(this._name),
      schedule: connectcampaignsv2CampaignScheduleToTerraform(this._schedule.internalValue),
      source: connectcampaignsv2CampaignSourceToTerraform(this._source.internalValue),
      tags: cdktn.listMapper(connectcampaignsv2CampaignTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_subtype_config: {
        value: connectcampaignsv2CampaignChannelSubtypeConfigToHclTerraform(this._channelSubtypeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Connectcampaignsv2CampaignChannelSubtypeConfig",
      },
      communication_limits_override: {
        value: connectcampaignsv2CampaignCommunicationLimitsOverrideToHclTerraform(this._communicationLimitsOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Connectcampaignsv2CampaignCommunicationLimitsOverride",
      },
      communication_time_config: {
        value: connectcampaignsv2CampaignCommunicationTimeConfigToHclTerraform(this._communicationTimeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Connectcampaignsv2CampaignCommunicationTimeConfig",
      },
      connect_campaign_flow_arn: {
        value: cdktn.stringToHclTerraform(this._connectCampaignFlowArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_instance_id: {
        value: cdktn.stringToHclTerraform(this._connectInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_limits_config: {
        value: connectcampaignsv2CampaignEntryLimitsConfigToHclTerraform(this._entryLimitsConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Connectcampaignsv2CampaignEntryLimitsConfig",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: connectcampaignsv2CampaignScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Connectcampaignsv2CampaignSchedule",
      },
      source: {
        value: connectcampaignsv2CampaignSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Connectcampaignsv2CampaignSource",
      },
      tags: {
        value: cdktn.listMapperHcl(connectcampaignsv2CampaignTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Connectcampaignsv2CampaignTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
