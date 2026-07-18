// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/medialive_multiplexprogram
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMedialiveMultiplexprogramConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/medialive_multiplexprogram#id DataAwsccMedialiveMultiplexprogram#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor {
}

export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorToTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorToHclTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}
export interface DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
}

export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToHclTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_bitrate - computed: true, optional: false, required: false
  public get maximumBitrate() {
    return this.getNumberAttribute('maximum_bitrate');
  }

  // minimum_bitrate - computed: true, optional: false, required: false
  public get minimumBitrate() {
    return this.getNumberAttribute('minimum_bitrate');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}
export interface DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings {
}

export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsToTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsToHclTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_bitrate - computed: true, optional: false, required: false
  public get constantBitrate() {
    return this.getNumberAttribute('constant_bitrate');
  }

  // statmux_settings - computed: true, optional: false, required: false
  private _statmuxSettings = new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(this, "statmux_settings");
  public get statmuxSettings() {
    return this._statmuxSettings;
  }
}
export interface DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings {
}

export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsToTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsToHclTerraform(struct?: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexprogramMultiplexProgramSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preferred_channel_pipeline - computed: true, optional: false, required: false
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }

  // program_number - computed: true, optional: false, required: false
  public get programNumber() {
    return this.getNumberAttribute('program_number');
  }

  // service_descriptor - computed: true, optional: false, required: false
  private _serviceDescriptor = new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsServiceDescriptorOutputReference(this, "service_descriptor");
  public get serviceDescriptor() {
    return this._serviceDescriptor;
  }

  // video_settings - computed: true, optional: false, required: false
  private _videoSettings = new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsVideoSettingsOutputReference(this, "video_settings");
  public get videoSettings() {
    return this._videoSettings;
  }
}
export interface DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap {
}

export function dataAwsccMedialiveMultiplexprogramPacketIdentifiersMapToTerraform(struct?: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexprogramPacketIdentifiersMapToHclTerraform(struct?: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexprogramPacketIdentifiersMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_pids - computed: true, optional: false, required: false
  public get audioPids() {
    return this.getNumberListAttribute('audio_pids');
  }

  // dvb_sub_pids - computed: true, optional: false, required: false
  public get dvbSubPids() {
    return this.getNumberListAttribute('dvb_sub_pids');
  }

  // dvb_teletext_pid - computed: true, optional: false, required: false
  public get dvbTeletextPid() {
    return this.getNumberAttribute('dvb_teletext_pid');
  }

  // etv_platform_pid - computed: true, optional: false, required: false
  public get etvPlatformPid() {
    return this.getNumberAttribute('etv_platform_pid');
  }

  // etv_signal_pid - computed: true, optional: false, required: false
  public get etvSignalPid() {
    return this.getNumberAttribute('etv_signal_pid');
  }

  // klv_data_pids - computed: true, optional: false, required: false
  public get klvDataPids() {
    return this.getNumberListAttribute('klv_data_pids');
  }

  // pcr_pid - computed: true, optional: false, required: false
  public get pcrPid() {
    return this.getNumberAttribute('pcr_pid');
  }

  // pmt_pid - computed: true, optional: false, required: false
  public get pmtPid() {
    return this.getNumberAttribute('pmt_pid');
  }

  // private_metadata_pid - computed: true, optional: false, required: false
  public get privateMetadataPid() {
    return this.getNumberAttribute('private_metadata_pid');
  }

  // scte_27_pids - computed: true, optional: false, required: false
  public get scte27Pids() {
    return this.getNumberListAttribute('scte_27_pids');
  }

  // scte_35_pid - computed: true, optional: false, required: false
  public get scte35Pid() {
    return this.getNumberAttribute('scte_35_pid');
  }

  // timed_metadata_pid - computed: true, optional: false, required: false
  public get timedMetadataPid() {
    return this.getNumberAttribute('timed_metadata_pid');
  }

  // video_pid - computed: true, optional: false, required: false
  public get videoPid() {
    return this.getNumberAttribute('video_pid');
  }
}
export interface DataAwsccMedialiveMultiplexprogramPipelineDetails {
}

export function dataAwsccMedialiveMultiplexprogramPipelineDetailsToTerraform(struct?: DataAwsccMedialiveMultiplexprogramPipelineDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexprogramPipelineDetailsToHclTerraform(struct?: DataAwsccMedialiveMultiplexprogramPipelineDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveMultiplexprogramPipelineDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexprogramPipelineDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_channel_pipeline - computed: true, optional: false, required: false
  public get activeChannelPipeline() {
    return this.getStringAttribute('active_channel_pipeline');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
}

export class DataAwsccMedialiveMultiplexprogramPipelineDetailsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference {
    return new DataAwsccMedialiveMultiplexprogramPipelineDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/medialive_multiplexprogram awscc_medialive_multiplexprogram}
*/
export class DataAwsccMedialiveMultiplexprogram extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_multiplexprogram";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMedialiveMultiplexprogram resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMedialiveMultiplexprogram to import
  * @param importFromId The id of the existing DataAwsccMedialiveMultiplexprogram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/medialive_multiplexprogram#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMedialiveMultiplexprogram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_multiplexprogram", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/medialive_multiplexprogram awscc_medialive_multiplexprogram} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMedialiveMultiplexprogramConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMedialiveMultiplexprogramConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_multiplexprogram',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
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

  // multiplex_id - computed: true, optional: false, required: false
  public get multiplexId() {
    return this.getStringAttribute('multiplex_id');
  }

  // multiplex_program_settings - computed: true, optional: false, required: false
  private _multiplexProgramSettings = new DataAwsccMedialiveMultiplexprogramMultiplexProgramSettingsOutputReference(this, "multiplex_program_settings");
  public get multiplexProgramSettings() {
    return this._multiplexProgramSettings;
  }

  // packet_identifiers_map - computed: true, optional: false, required: false
  private _packetIdentifiersMap = new DataAwsccMedialiveMultiplexprogramPacketIdentifiersMapOutputReference(this, "packet_identifiers_map");
  public get packetIdentifiersMap() {
    return this._packetIdentifiersMap;
  }

  // pipeline_details - computed: true, optional: false, required: false
  private _pipelineDetails = new DataAwsccMedialiveMultiplexprogramPipelineDetailsList(this, "pipeline_details", false);
  public get pipelineDetails() {
    return this._pipelineDetails;
  }

  // preferred_channel_pipeline - computed: true, optional: false, required: false
  public get preferredChannelPipeline() {
    return this.getStringAttribute('preferred_channel_pipeline');
  }

  // program_name - computed: true, optional: false, required: false
  public get programName() {
    return this.getStringAttribute('program_name');
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
