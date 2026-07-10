// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_multiplex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMedialiveMultiplexConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_multiplex#id DataAwsccMedialiveMultiplex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings {
}

export function dataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsToTerraform(struct?: DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsToHclTerraform(struct?: DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entitlement_arn - computed: true, optional: false, required: false
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }
}
export interface DataAwsccMedialiveMultiplexDestinations {
}

export function dataAwsccMedialiveMultiplexDestinationsToTerraform(struct?: DataAwsccMedialiveMultiplexDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexDestinationsToHclTerraform(struct?: DataAwsccMedialiveMultiplexDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveMultiplexDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multiplex_media_connect_output_destination_settings - computed: true, optional: false, required: false
  private _multiplexMediaConnectOutputDestinationSettings = new DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference(this, "multiplex_media_connect_output_destination_settings");
  public get multiplexMediaConnectOutputDestinationSettings() {
    return this._multiplexMediaConnectOutputDestinationSettings;
  }
}

export class DataAwsccMedialiveMultiplexDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveMultiplexDestinationsOutputReference {
    return new DataAwsccMedialiveMultiplexDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveMultiplexMultiplexSettings {
}

export function dataAwsccMedialiveMultiplexMultiplexSettingsToTerraform(struct?: DataAwsccMedialiveMultiplexMultiplexSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexMultiplexSettingsToHclTerraform(struct?: DataAwsccMedialiveMultiplexMultiplexSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveMultiplexMultiplexSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexMultiplexSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_video_buffer_delay_milliseconds - computed: true, optional: false, required: false
  public get maximumVideoBufferDelayMilliseconds() {
    return this.getNumberAttribute('maximum_video_buffer_delay_milliseconds');
  }

  // transport_stream_bitrate - computed: true, optional: false, required: false
  public get transportStreamBitrate() {
    return this.getNumberAttribute('transport_stream_bitrate');
  }

  // transport_stream_id - computed: true, optional: false, required: false
  public get transportStreamId() {
    return this.getNumberAttribute('transport_stream_id');
  }

  // transport_stream_reserved_bitrate - computed: true, optional: false, required: false
  public get transportStreamReservedBitrate() {
    return this.getNumberAttribute('transport_stream_reserved_bitrate');
  }
}
export interface DataAwsccMedialiveMultiplexTags {
}

export function dataAwsccMedialiveMultiplexTagsToTerraform(struct?: DataAwsccMedialiveMultiplexTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveMultiplexTagsToHclTerraform(struct?: DataAwsccMedialiveMultiplexTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveMultiplexTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveMultiplexTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveMultiplexTags | undefined) {
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

export class DataAwsccMedialiveMultiplexTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveMultiplexTagsOutputReference {
    return new DataAwsccMedialiveMultiplexTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_multiplex awscc_medialive_multiplex}
*/
export class DataAwsccMedialiveMultiplex extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_multiplex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMedialiveMultiplex resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMedialiveMultiplex to import
  * @param importFromId The id of the existing DataAwsccMedialiveMultiplex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_multiplex#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMedialiveMultiplex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_multiplex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/medialive_multiplex awscc_medialive_multiplex} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMedialiveMultiplexConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMedialiveMultiplexConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_multiplex',
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

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccMedialiveMultiplexDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
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

  // multiplex_settings - computed: true, optional: false, required: false
  private _multiplexSettings = new DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference(this, "multiplex_settings");
  public get multiplexSettings() {
    return this._multiplexSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMedialiveMultiplexTagsList(this, "tags", false);
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
