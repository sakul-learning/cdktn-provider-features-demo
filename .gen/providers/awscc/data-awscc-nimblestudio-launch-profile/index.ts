// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_launch_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNimblestudioLaunchProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_launch_profile#id DataAwsccNimblestudioLaunchProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup {
}

export function dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupToHclTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_backups_to_retain - computed: true, optional: false, required: false
  public get maxBackupsToRetain() {
    return this.getNumberAttribute('max_backups_to_retain');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot {
}

export function dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootToHclTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linux - computed: true, optional: false, required: false
  public get linux() {
    return this.getStringAttribute('linux');
  }

  // windows - computed: true, optional: false, required: false
  public get windows() {
    return this.getStringAttribute('windows');
  }
}
export interface DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage {
}

export function dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageToHclTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getListAttribute('mode');
  }

  // root - computed: true, optional: false, required: false
  private _root = new DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(this, "root");
  public get root() {
    return this._root;
  }
}
export interface DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration {
}

export function dataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationToHclTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
}
export interface DataAwsccNimblestudioLaunchProfileStreamConfiguration {
}

export function dataAwsccNimblestudioLaunchProfileStreamConfigurationToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioLaunchProfileStreamConfigurationToHclTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioLaunchProfileStreamConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioLaunchProfileStreamConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_termination_mode - computed: true, optional: false, required: false
  public get automaticTerminationMode() {
    return this.getStringAttribute('automatic_termination_mode');
  }

  // clipboard_mode - computed: true, optional: false, required: false
  public get clipboardMode() {
    return this.getStringAttribute('clipboard_mode');
  }

  // ec_2_instance_types - computed: true, optional: false, required: false
  public get ec2InstanceTypes() {
    return this.getListAttribute('ec_2_instance_types');
  }

  // max_session_length_in_minutes - computed: true, optional: false, required: false
  public get maxSessionLengthInMinutes() {
    return this.getNumberAttribute('max_session_length_in_minutes');
  }

  // max_stopped_session_length_in_minutes - computed: true, optional: false, required: false
  public get maxStoppedSessionLengthInMinutes() {
    return this.getNumberAttribute('max_stopped_session_length_in_minutes');
  }

  // session_backup - computed: true, optional: false, required: false
  private _sessionBackup = new DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(this, "session_backup");
  public get sessionBackup() {
    return this._sessionBackup;
  }

  // session_persistence_mode - computed: true, optional: false, required: false
  public get sessionPersistenceMode() {
    return this.getStringAttribute('session_persistence_mode');
  }

  // session_storage - computed: true, optional: false, required: false
  private _sessionStorage = new DataAwsccNimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(this, "session_storage");
  public get sessionStorage() {
    return this._sessionStorage;
  }

  // streaming_image_ids - computed: true, optional: false, required: false
  public get streamingImageIds() {
    return this.getListAttribute('streaming_image_ids');
  }

  // volume_configuration - computed: true, optional: false, required: false
  private _volumeConfiguration = new DataAwsccNimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(this, "volume_configuration");
  public get volumeConfiguration() {
    return this._volumeConfiguration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}
*/
export class DataAwsccNimblestudioLaunchProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_nimblestudio_launch_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNimblestudioLaunchProfile to import
  * @param importFromId The id of the existing DataAwsccNimblestudioLaunchProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNimblestudioLaunchProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_launch_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioLaunchProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioLaunchProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_launch_profile',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec_2_subnet_ids - computed: true, optional: false, required: false
  public get ec2SubnetIds() {
    return this.getListAttribute('ec_2_subnet_ids');
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

  // launch_profile_id - computed: true, optional: false, required: false
  public get launchProfileId() {
    return this.getStringAttribute('launch_profile_id');
  }

  // launch_profile_protocol_versions - computed: true, optional: false, required: false
  public get launchProfileProtocolVersions() {
    return this.getListAttribute('launch_profile_protocol_versions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stream_configuration - computed: true, optional: false, required: false
  private _streamConfiguration = new DataAwsccNimblestudioLaunchProfileStreamConfigurationOutputReference(this, "stream_configuration");
  public get streamConfiguration() {
    return this._streamConfiguration;
  }

  // studio_component_ids - computed: true, optional: false, required: false
  public get studioComponentIds() {
    return this.getListAttribute('studio_component_ids');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
