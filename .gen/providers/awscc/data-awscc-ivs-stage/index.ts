// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ivs_stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIvsStageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ivs_stage#id DataAwsccIvsStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration {
}

export function dataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationToTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationToHclTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_segment_duration_seconds - computed: true, optional: false, required: false
  public get targetSegmentDurationSeconds() {
    return this.getNumberAttribute('target_segment_duration_seconds');
  }
}
export interface DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration {
}

export function dataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationToTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationToHclTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // participant_recording_hls_configuration - computed: true, optional: false, required: false
  private _participantRecordingHlsConfiguration = new DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference(this, "participant_recording_hls_configuration");
  public get participantRecordingHlsConfiguration() {
    return this._participantRecordingHlsConfiguration;
  }
}
export interface DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration {
}

export function dataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationToTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationToHclTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recording_mode - computed: true, optional: false, required: false
  public get recordingMode() {
    return this.getStringAttribute('recording_mode');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return cdktn.Fn.tolist(this.getListAttribute('storage'));
  }

  // target_interval_seconds - computed: true, optional: false, required: false
  public get targetIntervalSeconds() {
    return this.getNumberAttribute('target_interval_seconds');
  }
}
export interface DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration {
}

export function dataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationToTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationToHclTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // participant_thumbnail_configuration - computed: true, optional: false, required: false
  private _participantThumbnailConfiguration = new DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference(this, "participant_thumbnail_configuration");
  public get participantThumbnailConfiguration() {
    return this._participantThumbnailConfiguration;
  }
}
export interface DataAwsccIvsStageAutoParticipantRecordingConfiguration {
}

export function dataAwsccIvsStageAutoParticipantRecordingConfigurationToTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIvsStageAutoParticipantRecordingConfigurationToHclTerraform(struct?: DataAwsccIvsStageAutoParticipantRecordingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIvsStageAutoParticipantRecordingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIvsStageAutoParticipantRecordingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hls_configuration - computed: true, optional: false, required: false
  private _hlsConfiguration = new DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference(this, "hls_configuration");
  public get hlsConfiguration() {
    return this._hlsConfiguration;
  }

  // media_types - computed: true, optional: false, required: false
  public get mediaTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('media_types'));
  }

  // recording_reconnect_window_seconds - computed: true, optional: false, required: false
  public get recordingReconnectWindowSeconds() {
    return this.getNumberAttribute('recording_reconnect_window_seconds');
  }

  // storage_configuration_arn - computed: true, optional: false, required: false
  public get storageConfigurationArn() {
    return this.getStringAttribute('storage_configuration_arn');
  }

  // thumbnail_configuration - computed: true, optional: false, required: false
  private _thumbnailConfiguration = new DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference(this, "thumbnail_configuration");
  public get thumbnailConfiguration() {
    return this._thumbnailConfiguration;
  }
}
export interface DataAwsccIvsStageTags {
}

export function dataAwsccIvsStageTagsToTerraform(struct?: DataAwsccIvsStageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIvsStageTagsToHclTerraform(struct?: DataAwsccIvsStageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIvsStageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIvsStageTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIvsStageTags | undefined) {
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

export class DataAwsccIvsStageTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIvsStageTagsOutputReference {
    return new DataAwsccIvsStageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ivs_stage awscc_ivs_stage}
*/
export class DataAwsccIvsStage extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ivs_stage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIvsStage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIvsStage to import
  * @param importFromId The id of the existing DataAwsccIvsStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ivs_stage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIvsStage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_stage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ivs_stage awscc_ivs_stage} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIvsStageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIvsStageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_stage',
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

  // active_session_id - computed: true, optional: false, required: false
  public get activeSessionId() {
    return this.getStringAttribute('active_session_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_participant_recording_configuration - computed: true, optional: false, required: false
  private _autoParticipantRecordingConfiguration = new DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference(this, "auto_participant_recording_configuration");
  public get autoParticipantRecordingConfiguration() {
    return this._autoParticipantRecordingConfiguration;
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIvsStageTagsList(this, "tags", true);
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
