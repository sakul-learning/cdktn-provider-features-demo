// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MedialiveMultiplexConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of availability zones for the multiplex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * A list of the multiplex output destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#destinations MedialiveMultiplex#destinations}
  */
  readonly destinations?: MedialiveMultiplexDestinations[] | cdktn.IResolvable;
  /**
  * Configuration for a multiplex event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}
  */
  readonly multiplexSettings: MedialiveMultiplexMultiplexSettings;
  /**
  * Name of multiplex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}
  */
  readonly name: string;
  /**
  * A collection of key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}
  */
  readonly tags?: MedialiveMultiplexTags[] | cdktn.IResolvable;
}
export interface MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings {
  /**
  * The MediaConnect entitlement ARN available as a Flow source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#entitlement_arn MedialiveMultiplex#entitlement_arn}
  */
  readonly entitlementArn?: string;
}

export function medialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsToTerraform(struct?: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entitlement_arn: cdktn.stringToTerraform(struct!.entitlementArn),
  }
}


export function medialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsToHclTerraform(struct?: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entitlement_arn: {
      value: cdktn.stringToHclTerraform(struct!.entitlementArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entitlementArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementArn = this._entitlementArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entitlementArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entitlementArn = value.entitlementArn;
    }
  }

  // entitlement_arn - computed: true, optional: true, required: false
  private _entitlementArn?: string; 
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }
  public set entitlementArn(value: string) {
    this._entitlementArn = value;
  }
  public resetEntitlementArn() {
    this._entitlementArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementArnInput() {
    return this._entitlementArn;
  }
}
export interface MedialiveMultiplexDestinations {
  /**
  * Multiplex MediaConnect output destination settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#multiplex_media_connect_output_destination_settings MedialiveMultiplex#multiplex_media_connect_output_destination_settings}
  */
  readonly multiplexMediaConnectOutputDestinationSettings?: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings;
}

export function medialiveMultiplexDestinationsToTerraform(struct?: MedialiveMultiplexDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    multiplex_media_connect_output_destination_settings: medialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsToTerraform(struct!.multiplexMediaConnectOutputDestinationSettings),
  }
}


export function medialiveMultiplexDestinationsToHclTerraform(struct?: MedialiveMultiplexDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    multiplex_media_connect_output_destination_settings: {
      value: medialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsToHclTerraform(struct!.multiplexMediaConnectOutputDestinationSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplexMediaConnectOutputDestinationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplexMediaConnectOutputDestinationSettings = this._multiplexMediaConnectOutputDestinationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiplexMediaConnectOutputDestinationSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiplexMediaConnectOutputDestinationSettings.internalValue = value.multiplexMediaConnectOutputDestinationSettings;
    }
  }

  // multiplex_media_connect_output_destination_settings - computed: true, optional: true, required: false
  private _multiplexMediaConnectOutputDestinationSettings = new MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference(this, "multiplex_media_connect_output_destination_settings");
  public get multiplexMediaConnectOutputDestinationSettings() {
    return this._multiplexMediaConnectOutputDestinationSettings;
  }
  public putMultiplexMediaConnectOutputDestinationSettings(value: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings) {
    this._multiplexMediaConnectOutputDestinationSettings.internalValue = value;
  }
  public resetMultiplexMediaConnectOutputDestinationSettings() {
    this._multiplexMediaConnectOutputDestinationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexMediaConnectOutputDestinationSettingsInput() {
    return this._multiplexMediaConnectOutputDestinationSettings.internalValue;
  }
}

export class MedialiveMultiplexDestinationsList extends cdktn.ComplexList {
  public internalValue? : MedialiveMultiplexDestinations[] | cdktn.IResolvable

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
  public get(index: number): MedialiveMultiplexDestinationsOutputReference {
    return new MedialiveMultiplexDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MedialiveMultiplexMultiplexSettings {
  /**
  * Maximum video buffer delay in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}
  */
  readonly maximumVideoBufferDelayMilliseconds?: number;
  /**
  * Transport stream bit rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}
  */
  readonly transportStreamBitrate: number;
  /**
  * Transport stream ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}
  */
  readonly transportStreamId: number;
  /**
  * Transport stream reserved bit rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}
  */
  readonly transportStreamReservedBitrate?: number;
}

export function medialiveMultiplexMultiplexSettingsToTerraform(struct?: MedialiveMultiplexMultiplexSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_video_buffer_delay_milliseconds: cdktn.numberToTerraform(struct!.maximumVideoBufferDelayMilliseconds),
    transport_stream_bitrate: cdktn.numberToTerraform(struct!.transportStreamBitrate),
    transport_stream_id: cdktn.numberToTerraform(struct!.transportStreamId),
    transport_stream_reserved_bitrate: cdktn.numberToTerraform(struct!.transportStreamReservedBitrate),
  }
}


export function medialiveMultiplexMultiplexSettingsToHclTerraform(struct?: MedialiveMultiplexMultiplexSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_video_buffer_delay_milliseconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumVideoBufferDelayMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_stream_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.transportStreamBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_stream_id: {
      value: cdktn.numberToHclTerraform(struct!.transportStreamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_stream_reserved_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.transportStreamReservedBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MedialiveMultiplexMultiplexSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MedialiveMultiplexMultiplexSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumVideoBufferDelayMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumVideoBufferDelayMilliseconds = this._maximumVideoBufferDelayMilliseconds;
    }
    if (this._transportStreamBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamBitrate = this._transportStreamBitrate;
    }
    if (this._transportStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamId = this._transportStreamId;
    }
    if (this._transportStreamReservedBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportStreamReservedBitrate = this._transportStreamReservedBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MedialiveMultiplexMultiplexSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumVideoBufferDelayMilliseconds = undefined;
      this._transportStreamBitrate = undefined;
      this._transportStreamId = undefined;
      this._transportStreamReservedBitrate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumVideoBufferDelayMilliseconds = value.maximumVideoBufferDelayMilliseconds;
      this._transportStreamBitrate = value.transportStreamBitrate;
      this._transportStreamId = value.transportStreamId;
      this._transportStreamReservedBitrate = value.transportStreamReservedBitrate;
    }
  }

  // maximum_video_buffer_delay_milliseconds - computed: true, optional: true, required: false
  private _maximumVideoBufferDelayMilliseconds?: number; 
  public get maximumVideoBufferDelayMilliseconds() {
    return this.getNumberAttribute('maximum_video_buffer_delay_milliseconds');
  }
  public set maximumVideoBufferDelayMilliseconds(value: number) {
    this._maximumVideoBufferDelayMilliseconds = value;
  }
  public resetMaximumVideoBufferDelayMilliseconds() {
    this._maximumVideoBufferDelayMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumVideoBufferDelayMillisecondsInput() {
    return this._maximumVideoBufferDelayMilliseconds;
  }

  // transport_stream_bitrate - computed: false, optional: false, required: true
  private _transportStreamBitrate?: number; 
  public get transportStreamBitrate() {
    return this.getNumberAttribute('transport_stream_bitrate');
  }
  public set transportStreamBitrate(value: number) {
    this._transportStreamBitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamBitrateInput() {
    return this._transportStreamBitrate;
  }

  // transport_stream_id - computed: false, optional: false, required: true
  private _transportStreamId?: number; 
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }
  public set transportStreamId(value: number) {
    this._transportStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamIdInput() {
    return this._transportStreamId;
  }

  // transport_stream_reserved_bitrate - computed: true, optional: true, required: false
  private _transportStreamReservedBitrate?: number; 
  public get transportStreamReservedBitrate() {
    return this.getNumberAttribute('transport_stream_reserved_bitrate');
  }
  public set transportStreamReservedBitrate(value: number) {
    this._transportStreamReservedBitrate = value;
  }
  public resetTransportStreamReservedBitrate() {
    this._transportStreamReservedBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportStreamReservedBitrateInput() {
    return this._transportStreamReservedBitrate;
  }
}
export interface MedialiveMultiplexTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}
  */
  readonly value?: string;
}

export function medialiveMultiplexTagsToTerraform(struct?: MedialiveMultiplexTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function medialiveMultiplexTagsToHclTerraform(struct?: MedialiveMultiplexTags | cdktn.IResolvable): any {
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

export class MedialiveMultiplexTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MedialiveMultiplexTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MedialiveMultiplexTags | cdktn.IResolvable | undefined) {
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

export class MedialiveMultiplexTagsList extends cdktn.ComplexList {
  public internalValue? : MedialiveMultiplexTags[] | cdktn.IResolvable

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
  public get(index: number): MedialiveMultiplexTagsOutputReference {
    return new MedialiveMultiplexTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex awscc_medialive_multiplex}
*/
export class MedialiveMultiplex extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_multiplex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MedialiveMultiplex to import
  * @param importFromId The id of the existing MedialiveMultiplex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MedialiveMultiplex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_multiplex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/medialive_multiplex awscc_medialive_multiplex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MedialiveMultiplexConfig
  */
  public constructor(scope: Construct, id: string, config: MedialiveMultiplexConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_multiplex',
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
    this._availabilityZones = config.availabilityZones;
    this._destinations.internalValue = config.destinations;
    this._multiplexSettings.internalValue = config.multiplexSettings;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new MedialiveMultiplexDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MedialiveMultiplexDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiplex_id - computed: true, optional: false, required: false
  public get multiplexId() {
    return this.getStringAttribute('multiplex_id');
  }

  // multiplex_settings - computed: false, optional: false, required: true
  private _multiplexSettings = new MedialiveMultiplexMultiplexSettingsOutputReference(this, "multiplex_settings");
  public get multiplexSettings() {
    return this._multiplexSettings;
  }
  public putMultiplexSettings(value: MedialiveMultiplexMultiplexSettings) {
    this._multiplexSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplexSettingsInput() {
    return this._multiplexSettings.internalValue;
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

  // pipelines_running_count - computed: true, optional: false, required: false
  public get pipelinesRunningCount() {
    return this.getNumberAttribute('pipelines_running_count');
  }

  // program_count - computed: true, optional: false, required: false
  public get programCount() {
    return this.getNumberAttribute('program_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MedialiveMultiplexTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MedialiveMultiplexTags[] | cdktn.IResolvable) {
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
      availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
      destinations: cdktn.listMapper(medialiveMultiplexDestinationsToTerraform, false)(this._destinations.internalValue),
      multiplex_settings: medialiveMultiplexMultiplexSettingsToTerraform(this._multiplexSettings.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(medialiveMultiplexTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destinations: {
        value: cdktn.listMapperHcl(medialiveMultiplexDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveMultiplexDestinationsList",
      },
      multiplex_settings: {
        value: medialiveMultiplexMultiplexSettingsToHclTerraform(this._multiplexSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MedialiveMultiplexMultiplexSettings",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(medialiveMultiplexTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MedialiveMultiplexTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
