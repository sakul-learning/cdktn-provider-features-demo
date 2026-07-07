// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediatailor_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediatailorChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediatailor_channel#id DataAwsccMediatailorChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediatailorChannelFillerSlate {
}

export function dataAwsccMediatailorChannelFillerSlateToTerraform(struct?: DataAwsccMediatailorChannelFillerSlate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelFillerSlateToHclTerraform(struct?: DataAwsccMediatailorChannelFillerSlate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelFillerSlateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorChannelFillerSlate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelFillerSlate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_location_name - computed: true, optional: false, required: false
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }

  // vod_source_name - computed: true, optional: false, required: false
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
}
export interface DataAwsccMediatailorChannelLogConfiguration {
}

export function dataAwsccMediatailorChannelLogConfigurationToTerraform(struct?: DataAwsccMediatailorChannelLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelLogConfigurationToHclTerraform(struct?: DataAwsccMediatailorChannelLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorChannelLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_types - computed: true, optional: false, required: false
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
}
export interface DataAwsccMediatailorChannelOutputsDashPlaylistSettings {
}

export function dataAwsccMediatailorChannelOutputsDashPlaylistSettingsToTerraform(struct?: DataAwsccMediatailorChannelOutputsDashPlaylistSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelOutputsDashPlaylistSettingsToHclTerraform(struct?: DataAwsccMediatailorChannelOutputsDashPlaylistSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelOutputsDashPlaylistSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorChannelOutputsDashPlaylistSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelOutputsDashPlaylistSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // min_buffer_time_seconds - computed: true, optional: false, required: false
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }

  // min_update_period_seconds - computed: true, optional: false, required: false
  public get minUpdatePeriodSeconds() {
    return this.getNumberAttribute('min_update_period_seconds');
  }

  // suggested_presentation_delay_seconds - computed: true, optional: false, required: false
  public get suggestedPresentationDelaySeconds() {
    return this.getNumberAttribute('suggested_presentation_delay_seconds');
  }
}
export interface DataAwsccMediatailorChannelOutputsHlsPlaylistSettings {
}

export function dataAwsccMediatailorChannelOutputsHlsPlaylistSettingsToTerraform(struct?: DataAwsccMediatailorChannelOutputsHlsPlaylistSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelOutputsHlsPlaylistSettingsToHclTerraform(struct?: DataAwsccMediatailorChannelOutputsHlsPlaylistSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelOutputsHlsPlaylistSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorChannelOutputsHlsPlaylistSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelOutputsHlsPlaylistSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_markup_type - computed: true, optional: false, required: false
  public get adMarkupType() {
    return this.getListAttribute('ad_markup_type');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }
}
export interface DataAwsccMediatailorChannelOutputs {
}

export function dataAwsccMediatailorChannelOutputsToTerraform(struct?: DataAwsccMediatailorChannelOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelOutputsToHclTerraform(struct?: DataAwsccMediatailorChannelOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorChannelOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dash_playlist_settings - computed: true, optional: false, required: false
  private _dashPlaylistSettings = new DataAwsccMediatailorChannelOutputsDashPlaylistSettingsOutputReference(this, "dash_playlist_settings");
  public get dashPlaylistSettings() {
    return this._dashPlaylistSettings;
  }

  // hls_playlist_settings - computed: true, optional: false, required: false
  private _hlsPlaylistSettings = new DataAwsccMediatailorChannelOutputsHlsPlaylistSettingsOutputReference(this, "hls_playlist_settings");
  public get hlsPlaylistSettings() {
    return this._hlsPlaylistSettings;
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // source_group - computed: true, optional: false, required: false
  public get sourceGroup() {
    return this.getStringAttribute('source_group');
  }
}

export class DataAwsccMediatailorChannelOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorChannelOutputsOutputReference {
    return new DataAwsccMediatailorChannelOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorChannelTags {
}

export function dataAwsccMediatailorChannelTagsToTerraform(struct?: DataAwsccMediatailorChannelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelTagsToHclTerraform(struct?: DataAwsccMediatailorChannelTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediatailorChannelTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelTags | undefined) {
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

export class DataAwsccMediatailorChannelTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediatailorChannelTagsOutputReference {
    return new DataAwsccMediatailorChannelTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediatailorChannelTimeShiftConfiguration {
}

export function dataAwsccMediatailorChannelTimeShiftConfigurationToTerraform(struct?: DataAwsccMediatailorChannelTimeShiftConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediatailorChannelTimeShiftConfigurationToHclTerraform(struct?: DataAwsccMediatailorChannelTimeShiftConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediatailorChannelTimeShiftConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediatailorChannelTimeShiftConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediatailorChannelTimeShiftConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_time_delay_seconds - computed: true, optional: false, required: false
  public get maxTimeDelaySeconds() {
    return this.getNumberAttribute('max_time_delay_seconds');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediatailor_channel awscc_mediatailor_channel}
*/
export class DataAwsccMediatailorChannel extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediatailor_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediatailorChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediatailorChannel to import
  * @param importFromId The id of the existing DataAwsccMediatailorChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediatailor_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediatailorChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mediatailor_channel awscc_mediatailor_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediatailorChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediatailorChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediatailor_channel',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // filler_slate - computed: true, optional: false, required: false
  private _fillerSlate = new DataAwsccMediatailorChannelFillerSlateOutputReference(this, "filler_slate");
  public get fillerSlate() {
    return this._fillerSlate;
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

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccMediatailorChannelLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsccMediatailorChannelOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // playback_mode - computed: true, optional: false, required: false
  public get playbackMode() {
    return this.getStringAttribute('playback_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediatailorChannelTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // time_shift_configuration - computed: true, optional: false, required: false
  private _timeShiftConfiguration = new DataAwsccMediatailorChannelTimeShiftConfigurationOutputReference(this, "time_shift_configuration");
  public get timeShiftConfiguration() {
    return this._timeShiftConfiguration;
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
