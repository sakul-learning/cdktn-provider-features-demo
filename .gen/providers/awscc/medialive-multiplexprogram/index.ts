// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MedialiveMultiplexprogramConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the multiplex that the program belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#multiplex_id MedialiveMultiplexprogram#multiplex_id}
  */
  readonly multiplexId?: string;
  /**
  * The settings for this multiplex program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#multiplex_program_settings MedialiveMultiplexprogram#multiplex_program_settings}
  */
  readonly multiplexProgramSettings?: MedialiveMultiplexprogramMultiplexProgramSettings;
  /**
  * The packet identifier map for this multiplex program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#packet_identifiers_map MedialiveMultiplexprogram#packet_identifiers_map}
  */
  readonly packetIdentifiersMap?: MedialiveMultiplexprogramPacketIdentifiersMap;
  /**
  * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#pipeline_details MedialiveMultiplexprogram#pipeline_details}
  */
  readonly pipelineDetails?: MedialiveMultiplexprogramPipelineDetails[] | cdktn.IResolvable;
  /**
  * The settings for this multiplex program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}
  */
  readonly preferredChannelPipeline?: string;
  /**
  * The name of the multiplex program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#program_name MedialiveMultiplexprogram#program_name}
  */
  readonly programName?: string;
}
export interface MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor {
  /**
  * Name of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#provider_name MedialiveMultiplexprogram#provider_name}
  */
  readonly providerName?: string;
  /**
  * Name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#service_name MedialiveMultiplexprogram#service_name}
  */
  readonly serviceName?: string;
}

export function medialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorToTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider_name: cdktn.stringToTerraform(struct!.providerName),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
  }
}


export function medialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorToHclTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    provider_name: {
      value: cdktn.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._providerName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._providerName = value.providerName;
      this._serviceName = value.serviceName;
    }
  }

  // provider_name - computed: true, optional: true, required: false
  private _providerName?: string;
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
  /**
  * Maximum statmux bitrate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#maximum_bitrate MedialiveMultiplexprogram#maximum_bitrate}
  */
  readonly maximumBitrate?: number;
  /**
  * Minimum statmux bitrate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#minimum_bitrate MedialiveMultiplexprogram#minimum_bitrate}
  */
  readonly minimumBitrate?: number;
  /**
  * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#priority MedialiveMultiplexprogram#priority}
  */
  readonly priority?: number;
}

export function medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_bitrate: cdktn.numberToTerraform(struct!.maximumBitrate),
    minimum_bitrate: cdktn.numberToTerraform(struct!.minimumBitrate),
    priority: cdktn.numberToTerraform(struct!.priority),
  }
}


export function medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToHclTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.maximumBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.minimumBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitrate = this._maximumBitrate;
    }
    if (this._minimumBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBitrate = this._minimumBitrate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumBitrate = undefined;
      this._minimumBitrate = undefined;
      this._priority = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumBitrate = value.maximumBitrate;
      this._minimumBitrate = value.minimumBitrate;
      this._priority = value.priority;
    }
  }

  // maximum_bitrate - computed: true, optional: true, required: false
  private _maximumBitrate?: number;
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }
  public set maximumBitrate(value: number) {
    this._maximumBitrate = value;
  }
  public resetMaximumBitrate() {
    this._maximumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitrateInput() {
    return this._maximumBitrate;
  }

  // minimum_bitrate - computed: true, optional: true, required: false
  private _minimumBitrate?: number;
  public get minimumBitrate() {
    return this.getNumberAttribute('minimum_bitrate');
  }
  public set minimumBitrate(value: number) {
    this._minimumBitrate = value;
  }
  public resetMinimumBitrate() {
    this._minimumBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBitrateInput() {
    return this._minimumBitrate;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings {
  /**
  * The constant bitrate configuration for the video encode.
  * When this field is defined, StatmuxSettings must be undefined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#constant_bitrate MedialiveMultiplexprogram#constant_bitrate}
  */
  readonly constantBitrate?: number;
  /**
  * Statmux rate control settings.
  * When this field is defined, ConstantBitrate must be undefined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#statmux_settings MedialiveMultiplexprogram#statmux_settings}
  */
  readonly statmuxSettings?: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings;
}

export function medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsToTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_bitrate: cdktn.numberToTerraform(struct!.constantBitrate),
    statmux_settings: medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct!.statmuxSettings),
  }
}


export function medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsToHclTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.constantBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statmux_settings: {
      value: medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToHclTerraform(struct!.statmuxSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantBitrate = this._constantBitrate;
    }
    if (this._statmuxSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statmuxSettings = this._statmuxSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantBitrate = undefined;
      this._statmuxSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantBitrate = value.constantBitrate;
      this._statmuxSettings.internalValue = value.statmuxSettings;
    }
  }

  // constant_bitrate - computed: true, optional: true, required: false
  private _constantBitrate?: number;
  public get constantBitrate() {
    return this.getNumberAttribute('constant_bitrate');
  }
  public set constantBitrate(value: number) {
    this._constantBitrate = value;
  }
  public resetConstantBitrate() {
    this._constantBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantBitrateInput() {
    return this._constantBitrate;
  }

  // statmux_settings - computed: true, optional: true, required: false
  private _statmuxSettings = new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(this, "statmux_settings");
  public get statmuxSettings() {
    return this._statmuxSettings;
  }
  public putStatmuxSettings(value: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings) {
    this._statmuxSettings.internalValue = value;
  }
  public resetStatmuxSettings() {
    this._statmuxSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statmuxSettingsInput() {
    return this._statmuxSettings.internalValue;
  }
}
export interface MedialiveMultiplexprogramMultiplexProgramSettings {
  /**
  * Indicates which pipeline is preferred by the multiplex for program ingest.
  * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
  * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
  * it will not switch back to the other pipeline based on it recovering to a healthy state,
  * it will only switch if the active pipeline becomes unhealthy.
  *
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#preferred_channel_pipeline MedialiveMultiplexprogram#preferred_channel_pipeline}
  */
  readonly preferredChannelPipeline?: string;
  /**
  * Unique program number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#program_number MedialiveMultiplexprogram#program_number}
  */
  readonly programNumber?: number;
  /**
  * Transport stream service descriptor configuration for the Multiplex program.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#service_descriptor MedialiveMultiplexprogram#service_descriptor}
  */
  readonly serviceDescriptor?: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor;
  /**
  * Program video settings configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#video_settings MedialiveMultiplexprogram#video_settings}
  */
  readonly videoSettings?: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings;
}

export function medialiveMultiplexprogramMultiplexProgramSettingsToTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preferred_channel_pipeline: cdktn.stringToTerraform(struct!.preferredChannelPipeline),
    program_number: cdktn.numberToTerraform(struct!.programNumber),
    service_descriptor: medialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorToTerraform(struct!.serviceDescriptor),
    video_settings: medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsToTerraform(struct!.videoSettings),
  }
}


export function medialiveMultiplexprogramMultiplexProgramSettingsToHclTerraform(struct?: MedialiveMultiplexprogramMultiplexProgramSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preferred_channel_pipeline: {
      value: cdktn.stringToHclTerraform(struct!.preferredChannelPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    program_number: {
      value: cdktn.numberToHclTerraform(struct!.programNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_descriptor: {
      value: medialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorToHclTerraform(struct!.serviceDescriptor),
      isBlock: true,
      type: "struct",
      storageClassType: "MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor",
    },
    video_settings: {
      value: medialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsToHclTerraform(struct!.videoSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexprogramMultiplexProgramSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredChannelPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredChannelPipeline = this._preferredChannelPipeline;
    }
    if (this._programNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.programNumber = this._programNumber;
    }
    if (this._serviceDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDescriptor = this._serviceDescriptor?.internalValue;
    }
    if (this._videoSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoSettings = this._videoSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexprogramMultiplexProgramSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredChannelPipeline = undefined;
      this._programNumber = undefined;
      this._serviceDescriptor.internalValue = undefined;
      this._videoSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredChannelPipeline = value.preferredChannelPipeline;
      this._programNumber = value.programNumber;
      this._serviceDescriptor.internalValue = value.serviceDescriptor;
      this._videoSettings.internalValue = value.videoSettings;
    }
  }

  // preferred_channel_pipeline - computed: true, optional: true, required: false
  private _preferredChannelPipeline?: string;
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }
  public set preferredChannelPipeline(value: string) {
    this._preferredChannelPipeline = value;
  }
  public resetPreferredChannelPipeline() {
    this._preferredChannelPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChannelPipelineInput() {
    return this._preferredChannelPipeline;
  }

  // program_number - computed: true, optional: true, required: false
  private _programNumber?: number;
  public get programNumber() {
    return this.getNumberAttribute('program_number');
  }
  public set programNumber(value: number) {
    this._programNumber = value;
  }
  public resetProgramNumber() {
    this._programNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNumberInput() {
    return this._programNumber;
  }

  // service_descriptor - computed: true, optional: true, required: false
  private _serviceDescriptor = new MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(this, "service_descriptor");
  public get serviceDescriptor() {
    return this._serviceDescriptor;
  }
  public putServiceDescriptor(value: MedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor) {
    this._serviceDescriptor.internalValue = value;
  }
  public resetServiceDescriptor() {
    this._serviceDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptorInput() {
    return this._serviceDescriptor.internalValue;
  }

  // video_settings - computed: true, optional: true, required: false
  private _videoSettings = new MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(this, "video_settings");
  public get videoSettings() {
    return this._videoSettings;
  }
  public putVideoSettings(value: MedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings) {
    this._videoSettings.internalValue = value;
  }
  public resetVideoSettings() {
    this._videoSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSettingsInput() {
    return this._videoSettings.internalValue;
  }
}
export interface MedialiveMultiplexprogramPacketIdentifiersMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#audio_pids MedialiveMultiplexprogram#audio_pids}
  */
  readonly audioPids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#dvb_sub_pids MedialiveMultiplexprogram#dvb_sub_pids}
  */
  readonly dvbSubPids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#dvb_teletext_pid MedialiveMultiplexprogram#dvb_teletext_pid}
  */
  readonly dvbTeletextPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#etv_platform_pid MedialiveMultiplexprogram#etv_platform_pid}
  */
  readonly etvPlatformPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#etv_signal_pid MedialiveMultiplexprogram#etv_signal_pid}
  */
  readonly etvSignalPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#klv_data_pids MedialiveMultiplexprogram#klv_data_pids}
  */
  readonly klvDataPids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#pcr_pid MedialiveMultiplexprogram#pcr_pid}
  */
  readonly pcrPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#pmt_pid MedialiveMultiplexprogram#pmt_pid}
  */
  readonly pmtPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#private_metadata_pid MedialiveMultiplexprogram#private_metadata_pid}
  */
  readonly privateMetadataPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#scte_27_pids MedialiveMultiplexprogram#scte_27_pids}
  */
  readonly scte27Pids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#scte_35_pid MedialiveMultiplexprogram#scte_35_pid}
  */
  readonly scte35Pid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#timed_metadata_pid MedialiveMultiplexprogram#timed_metadata_pid}
  */
  readonly timedMetadataPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#video_pid MedialiveMultiplexprogram#video_pid}
  */
  readonly videoPid?: number;
}

export function medialiveMultiplexprogramPacketIdentifiersMapToTerraform(struct?: MedialiveMultiplexprogramPacketIdentifiersMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_pids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.audioPids),
    dvb_sub_pids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.dvbSubPids),
    dvb_teletext_pid: cdktn.numberToTerraform(struct!.dvbTeletextPid),
    etv_platform_pid: cdktn.numberToTerraform(struct!.etvPlatformPid),
    etv_signal_pid: cdktn.numberToTerraform(struct!.etvSignalPid),
    klv_data_pids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.klvDataPids),
    pcr_pid: cdktn.numberToTerraform(struct!.pcrPid),
    pmt_pid: cdktn.numberToTerraform(struct!.pmtPid),
    private_metadata_pid: cdktn.numberToTerraform(struct!.privateMetadataPid),
    scte_27_pids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.scte27Pids),
    scte_35_pid: cdktn.numberToTerraform(struct!.scte35Pid),
    timed_metadata_pid: cdktn.numberToTerraform(struct!.timedMetadataPid),
    video_pid: cdktn.numberToTerraform(struct!.videoPid),
  }
}


export function medialiveMultiplexprogramPacketIdentifiersMapToHclTerraform(struct?: MedialiveMultiplexprogramPacketIdentifiersMap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_pids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.audioPids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    dvb_sub_pids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.dvbSubPids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    dvb_teletext_pid: {
      value: cdktn.numberToHclTerraform(struct!.dvbTeletextPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    etv_platform_pid: {
      value: cdktn.numberToHclTerraform(struct!.etvPlatformPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    etv_signal_pid: {
      value: cdktn.numberToHclTerraform(struct!.etvSignalPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    klv_data_pids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.klvDataPids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pcr_pid: {
      value: cdktn.numberToHclTerraform(struct!.pcrPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pmt_pid: {
      value: cdktn.numberToHclTerraform(struct!.pmtPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_metadata_pid: {
      value: cdktn.numberToHclTerraform(struct!.privateMetadataPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scte_27_pids: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.scte27Pids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    scte_35_pid: {
      value: cdktn.numberToHclTerraform(struct!.scte35Pid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timed_metadata_pid: {
      value: cdktn.numberToHclTerraform(struct!.timedMetadataPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    video_pid: {
      value: cdktn.numberToHclTerraform(struct!.videoPid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexprogramPacketIdentifiersMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexprogramPacketIdentifiersMap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioPids = this._audioPids;
    }
    if (this._dvbSubPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbSubPids = this._dvbSubPids;
    }
    if (this._dvbTeletextPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvbTeletextPid = this._dvbTeletextPid;
    }
    if (this._etvPlatformPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etvPlatformPid = this._etvPlatformPid;
    }
    if (this._etvSignalPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.etvSignalPid = this._etvSignalPid;
    }
    if (this._klvDataPids !== undefined) {
      hasAnyValues = true;
      internalValueResult.klvDataPids = this._klvDataPids;
    }
    if (this._pcrPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcrPid = this._pcrPid;
    }
    if (this._pmtPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmtPid = this._pmtPid;
    }
    if (this._privateMetadataPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateMetadataPid = this._privateMetadataPid;
    }
    if (this._scte27Pids !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte27Pids = this._scte27Pids;
    }
    if (this._scte35Pid !== undefined) {
      hasAnyValues = true;
      internalValueResult.scte35Pid = this._scte35Pid;
    }
    if (this._timedMetadataPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.timedMetadataPid = this._timedMetadataPid;
    }
    if (this._videoPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoPid = this._videoPid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexprogramPacketIdentifiersMap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioPids = undefined;
      this._dvbSubPids = undefined;
      this._dvbTeletextPid = undefined;
      this._etvPlatformPid = undefined;
      this._etvSignalPid = undefined;
      this._klvDataPids = undefined;
      this._pcrPid = undefined;
      this._pmtPid = undefined;
      this._privateMetadataPid = undefined;
      this._scte27Pids = undefined;
      this._scte35Pid = undefined;
      this._timedMetadataPid = undefined;
      this._videoPid = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioPids = value.audioPids;
      this._dvbSubPids = value.dvbSubPids;
      this._dvbTeletextPid = value.dvbTeletextPid;
      this._etvPlatformPid = value.etvPlatformPid;
      this._etvSignalPid = value.etvSignalPid;
      this._klvDataPids = value.klvDataPids;
      this._pcrPid = value.pcrPid;
      this._pmtPid = value.pmtPid;
      this._privateMetadataPid = value.privateMetadataPid;
      this._scte27Pids = value.scte27Pids;
      this._scte35Pid = value.scte35Pid;
      this._timedMetadataPid = value.timedMetadataPid;
      this._videoPid = value.videoPid;
    }
  }

  // audio_pids - computed: true, optional: true, required: false
  private _audioPids?: number[];
  public get audioPids() {
    return this.getNumberListAttribute('audio_pids');
  }
  public set audioPids(value: number[]) {
    this._audioPids = value;
  }
  public resetAudioPids() {
    this._audioPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioPidsInput() {
    return this._audioPids;
  }

  // dvb_sub_pids - computed: true, optional: true, required: false
  private _dvbSubPids?: number[];
  public get dvbSubPids() {
    return this.getNumberListAttribute('dvb_sub_pids');
  }
  public set dvbSubPids(value: number[]) {
    this._dvbSubPids = value;
  }
  public resetDvbSubPids() {
    this._dvbSubPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbSubPidsInput() {
    return this._dvbSubPids;
  }

  // dvb_teletext_pid - computed: true, optional: true, required: false
  private _dvbTeletextPid?: number;
  public get dvbTeletextPid() {
    return this.getNumberAttribute('dvb_teletext_pid');
  }
  public set dvbTeletextPid(value: number) {
    this._dvbTeletextPid = value;
  }
  public resetDvbTeletextPid() {
    this._dvbTeletextPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvbTeletextPidInput() {
    return this._dvbTeletextPid;
  }

  // etv_platform_pid - computed: true, optional: true, required: false
  private _etvPlatformPid?: number;
  public get etvPlatformPid() {
    return this.getNumberAttribute('etv_platform_pid');
  }
  public set etvPlatformPid(value: number) {
    this._etvPlatformPid = value;
  }
  public resetEtvPlatformPid() {
    this._etvPlatformPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etvPlatformPidInput() {
    return this._etvPlatformPid;
  }

  // etv_signal_pid - computed: true, optional: true, required: false
  private _etvSignalPid?: number;
  public get etvSignalPid() {
    return this.getNumberAttribute('etv_signal_pid');
  }
  public set etvSignalPid(value: number) {
    this._etvSignalPid = value;
  }
  public resetEtvSignalPid() {
    this._etvSignalPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etvSignalPidInput() {
    return this._etvSignalPid;
  }

  // klv_data_pids - computed: true, optional: true, required: false
  private _klvDataPids?: number[];
  public get klvDataPids() {
    return this.getNumberListAttribute('klv_data_pids');
  }
  public set klvDataPids(value: number[]) {
    this._klvDataPids = value;
  }
  public resetKlvDataPids() {
    this._klvDataPids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get klvDataPidsInput() {
    return this._klvDataPids;
  }

  // pcr_pid - computed: true, optional: true, required: false
  private _pcrPid?: number;
  public get pcrPid() {
    return this.getNumberAttribute('pcr_pid');
  }
  public set pcrPid(value: number) {
    this._pcrPid = value;
  }
  public resetPcrPid() {
    this._pcrPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcrPidInput() {
    return this._pcrPid;
  }

  // pmt_pid - computed: true, optional: true, required: false
  private _pmtPid?: number;
  public get pmtPid() {
    return this.getNumberAttribute('pmt_pid');
  }
  public set pmtPid(value: number) {
    this._pmtPid = value;
  }
  public resetPmtPid() {
    this._pmtPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtPidInput() {
    return this._pmtPid;
  }

  // private_metadata_pid - computed: true, optional: true, required: false
  private _privateMetadataPid?: number;
  public get privateMetadataPid() {
    return this.getNumberAttribute('private_metadata_pid');
  }
  public set privateMetadataPid(value: number) {
    this._privateMetadataPid = value;
  }
  public resetPrivateMetadataPid() {
    this._privateMetadataPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateMetadataPidInput() {
    return this._privateMetadataPid;
  }

  // scte_27_pids - computed: true, optional: true, required: false
  private _scte27Pids?: number[];
  public get scte27Pids() {
    return this.getNumberListAttribute('scte_27_pids');
  }
  public set scte27Pids(value: number[]) {
    this._scte27Pids = value;
  }
  public resetScte27Pids() {
    this._scte27Pids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte27PidsInput() {
    return this._scte27Pids;
  }

  // scte_35_pid - computed: true, optional: true, required: false
  private _scte35Pid?: number;
  public get scte35Pid() {
    return this.getNumberAttribute('scte_35_pid');
  }
  public set scte35Pid(value: number) {
    this._scte35Pid = value;
  }
  public resetScte35Pid() {
    this._scte35Pid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scte35PidInput() {
    return this._scte35Pid;
  }

  // timed_metadata_pid - computed: true, optional: true, required: false
  private _timedMetadataPid?: number;
  public get timedMetadataPid() {
    return this.getNumberAttribute('timed_metadata_pid');
  }
  public set timedMetadataPid(value: number) {
    this._timedMetadataPid = value;
  }
  public resetTimedMetadataPid() {
    this._timedMetadataPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedMetadataPidInput() {
    return this._timedMetadataPid;
  }

  // video_pid - computed: true, optional: true, required: false
  private _videoPid?: number;
  public get videoPid() {
    return this.getNumberAttribute('video_pid');
  }
  public set videoPid(value: number) {
    this._videoPid = value;
  }
  public resetVideoPid() {
    this._videoPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoPidInput() {
    return this._videoPid;
  }
}
export interface MedialiveMultiplexprogramPipelineDetails {
  /**
  * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#active_channel_pipeline MedialiveMultiplexprogram#active_channel_pipeline}
  */
  readonly activeChannelPipeline?: string;
  /**
  * Identifies a specific pipeline in the multiplex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#pipeline_id MedialiveMultiplexprogram#pipeline_id}
  */
  readonly pipelineId?: string;
}

export function medialiveMultiplexprogramPipelineDetailsToTerraform(struct?: MedialiveMultiplexprogramPipelineDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    active_channel_pipeline: cdktn.stringToTerraform(struct!.activeChannelPipeline),
    pipeline_id: cdktn.stringToTerraform(struct!.pipelineId),
  }
}


export function medialiveMultiplexprogramPipelineDetailsToHclTerraform(struct?: MedialiveMultiplexprogramPipelineDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    active_channel_pipeline: {
      value: cdktn.stringToHclTerraform(struct!.activeChannelPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexprogramPipelineDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexprogramPipelineDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeChannelPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeChannelPipeline = this._activeChannelPipeline;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexprogramPipelineDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeChannelPipeline = undefined;
      this._pipelineId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeChannelPipeline = value.activeChannelPipeline;
      this._pipelineId = value.pipelineId;
    }
  }

  // active_channel_pipeline - computed: true, optional: true, required: false
  private _activeChannelPipeline?: string;
  public get activeChannelPipeline() {
    return this.getStringAttribute('active_channel_pipeline');
  }
  public set activeChannelPipeline(value: string) {
    this._activeChannelPipeline = value;
  }
  public resetActiveChannelPipeline() {
    this._activeChannelPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeChannelPipelineInput() {
    return this._activeChannelPipeline;
  }

  // pipeline_id - computed: true, optional: true, required: false
  private _pipelineId?: string;
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }
}

export class MedialiveMultiplexprogramPipelineDetailsList extends cdktn.ComplexList {
  public internalValue? : MedialiveMultiplexprogramPipelineDetails[] | cdktn.IResolvable

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
  public get(index: number): MedialiveMultiplexprogramPipelineDetailsOutputReference {
    return new MedialiveMultiplexprogramPipelineDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram awscc_medialive_multiplexprogram}
*/
export class MedialiveMultiplexprogram extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_multiplexprogram";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MedialiveMultiplexprogram to import
  * @param importFromId The id of the existing MedialiveMultiplexprogram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MedialiveMultiplexprogram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_multiplexprogram", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/medialive_multiplexprogram awscc_medialive_multiplexprogram} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveMultiplexprogramConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MedialiveMultiplexprogramConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_multiplexprogram',
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
    this._multiplexId = config.multiplexId;
    this._multiplexProgramSettings.internalValue = config.multiplexProgramSettings;
    this._packetIdentifiersMap.internalValue = config.packetIdentifiersMap;
    this._pipelineDetails.internalValue = config.pipelineDetails;
    this._preferredChannelPipeline = config.preferredChannelPipeline;
    this._programName = config.programName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiplex_id - computed: true, optional: true, required: false
  private _multiplexId?: string;
  public get multiplexId() {
    return this.getStringAttribute('multiplex_id');
  }
  public set multiplexId(value: string) {
    this._multiplexId = value;
  }
  public resetMultiplexId() {
    this._multiplexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexIdInput() {
    return this._multiplexId;
  }

  // multiplex_program_settings - computed: true, optional: true, required: false
  private _multiplexProgramSettings = new MedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(this, "multiplex_program_settings");
  public get multiplexProgramSettings() {
    return this._multiplexProgramSettings;
  }
  public putMultiplexProgramSettings(value: MedialiveMultiplexprogramMultiplexProgramSettings) {
    this._multiplexProgramSettings.internalValue = value;
  }
  public resetMultiplexProgramSettings() {
    this._multiplexProgramSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexProgramSettingsInput() {
    return this._multiplexProgramSettings.internalValue;
  }

  // packet_identifiers_map - computed: true, optional: true, required: false
  private _packetIdentifiersMap = new MedialiveMultiplexprogramPacketIdentifiersMapOutputReference(this, "packet_identifiers_map");
  public get packetIdentifiersMap() {
    return this._packetIdentifiersMap;
  }
  public putPacketIdentifiersMap(value: MedialiveMultiplexprogramPacketIdentifiersMap) {
    this._packetIdentifiersMap.internalValue = value;
  }
  public resetPacketIdentifiersMap() {
    this._packetIdentifiersMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetIdentifiersMapInput() {
    return this._packetIdentifiersMap.internalValue;
  }

  // pipeline_details - computed: true, optional: true, required: false
  private _pipelineDetails = new MedialiveMultiplexprogramPipelineDetailsList(this, "pipeline_details", false);
  public get pipelineDetails() {
    return this._pipelineDetails;
  }
  public putPipelineDetails(value: MedialiveMultiplexprogramPipelineDetails[] | cdktn.IResolvable) {
    this._pipelineDetails.internalValue = value;
  }
  public resetPipelineDetails() {
    this._pipelineDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDetailsInput() {
    return this._pipelineDetails.internalValue;
  }

  // preferred_channel_pipeline - computed: true, optional: true, required: false
  private _preferredChannelPipeline?: string;
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }
  public set preferredChannelPipeline(value: string) {
    this._preferredChannelPipeline = value;
  }
  public resetPreferredChannelPipeline() {
    this._preferredChannelPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChannelPipelineInput() {
    return this._preferredChannelPipeline;
  }

  // program_name - computed: true, optional: true, required: false
  private _programName?: string;
  public get programName() {
    return this.getStringAttribute('program_name');
  }
  public set programName(value: string) {
    this._programName = value;
  }
  public resetProgramName() {
    this._programName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programNameInput() {
    return this._programName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      multiplex_id: cdktn.stringToTerraform(this._multiplexId),
      multiplex_program_settings: medialiveMultiplexprogramMultiplexProgramSettingsToTerraform(this._multiplexProgramSettings.internalValue),
      packet_identifiers_map: medialiveMultiplexprogramPacketIdentifiersMapToTerraform(this._packetIdentifiersMap.internalValue),
      pipeline_details: cdktn.listMapper(medialiveMultiplexprogramPipelineDetailsToTerraform, false)(this._pipelineDetails.internalValue),
      preferred_channel_pipeline: cdktn.stringToTerraform(this._preferredChannelPipeline),
      program_name: cdktn.stringToTerraform(this._programName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      multiplex_id: {
        value: cdktn.stringToHclTerraform(this._multiplexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiplex_program_settings: {
        value: medialiveMultiplexprogramMultiplexProgramSettingsToHclTerraform(this._multiplexProgramSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MedialiveMultiplexprogramMultiplexProgramSettings",
      },
      packet_identifiers_map: {
        value: medialiveMultiplexprogramPacketIdentifiersMapToHclTerraform(this._packetIdentifiersMap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MedialiveMultiplexprogramPacketIdentifiersMap",
      },
      pipeline_details: {
        value: cdktn.listMapperHcl(medialiveMultiplexprogramPipelineDetailsToHclTerraform, false)(this._pipelineDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveMultiplexprogramPipelineDetailsList",
      },
      preferred_channel_pipeline: {
        value: cdktn.stringToHclTerraform(this._preferredChannelPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_name: {
        value: cdktn.stringToHclTerraform(this._programName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
