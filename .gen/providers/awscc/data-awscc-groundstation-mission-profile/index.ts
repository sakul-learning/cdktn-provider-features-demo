// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_mission_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGroundstationMissionProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_mission_profile#id DataAwsccGroundstationMissionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGroundstationMissionProfileDataflowEdges {
}

export function dataAwsccGroundstationMissionProfileDataflowEdgesToTerraform(struct?: DataAwsccGroundstationMissionProfileDataflowEdges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationMissionProfileDataflowEdgesToHclTerraform(struct?: DataAwsccGroundstationMissionProfileDataflowEdges): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGroundstationMissionProfileDataflowEdges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationMissionProfileDataflowEdges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataAwsccGroundstationMissionProfileDataflowEdgesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference {
    return new DataAwsccGroundstationMissionProfileDataflowEdgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGroundstationMissionProfileStreamsKmsKey {
}

export function dataAwsccGroundstationMissionProfileStreamsKmsKeyToTerraform(struct?: DataAwsccGroundstationMissionProfileStreamsKmsKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationMissionProfileStreamsKmsKeyToHclTerraform(struct?: DataAwsccGroundstationMissionProfileStreamsKmsKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGroundstationMissionProfileStreamsKmsKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationMissionProfileStreamsKmsKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_alias_arn - computed: true, optional: false, required: false
  public get kmsAliasArn() {
    return this.getStringAttribute('kms_alias_arn');
  }

  // kms_alias_name - computed: true, optional: false, required: false
  public get kmsAliasName() {
    return this.getStringAttribute('kms_alias_name');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccGroundstationMissionProfileTags {
}

export function dataAwsccGroundstationMissionProfileTagsToTerraform(struct?: DataAwsccGroundstationMissionProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGroundstationMissionProfileTagsToHclTerraform(struct?: DataAwsccGroundstationMissionProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGroundstationMissionProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGroundstationMissionProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGroundstationMissionProfileTags | undefined) {
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

export class DataAwsccGroundstationMissionProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGroundstationMissionProfileTagsOutputReference {
    return new DataAwsccGroundstationMissionProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_mission_profile awscc_groundstation_mission_profile}
*/
export class DataAwsccGroundstationMissionProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_mission_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGroundstationMissionProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGroundstationMissionProfile to import
  * @param importFromId The id of the existing DataAwsccGroundstationMissionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGroundstationMissionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_mission_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/groundstation_mission_profile awscc_groundstation_mission_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGroundstationMissionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGroundstationMissionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_mission_profile',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_post_pass_duration_seconds - computed: true, optional: false, required: false
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }

  // contact_pre_pass_duration_seconds - computed: true, optional: false, required: false
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }

  // dataflow_edges - computed: true, optional: false, required: false
  private _dataflowEdges = new DataAwsccGroundstationMissionProfileDataflowEdgesList(this, "dataflow_edges", false);
  public get dataflowEdges() {
    return this._dataflowEdges;
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

  // minimum_viable_contact_duration_seconds - computed: true, optional: false, required: false
  public get minimumViableContactDurationSeconds() {
    return this.getNumberAttribute('minimum_viable_contact_duration_seconds');
  }

  // mission_profile_id - computed: true, optional: false, required: false
  public get missionProfileId() {
    return this.getStringAttribute('mission_profile_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // streams_kms_key - computed: true, optional: false, required: false
  private _streamsKmsKey = new DataAwsccGroundstationMissionProfileStreamsKmsKeyOutputReference(this, "streams_kms_key");
  public get streamsKmsKey() {
    return this._streamsKmsKey;
  }

  // streams_kms_role - computed: true, optional: false, required: false
  public get streamsKmsRole() {
    return this.getStringAttribute('streams_kms_role');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccGroundstationMissionProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // telemetry_sink_config_arn - computed: true, optional: false, required: false
  public get telemetrySinkConfigArn() {
    return this.getStringAttribute('telemetry_sink_config_arn');
  }

  // tracking_config_arn - computed: true, optional: false, required: false
  public get trackingConfigArn() {
    return this.getStringAttribute('tracking_config_arn');
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
