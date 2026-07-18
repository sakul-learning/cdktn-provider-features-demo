// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NimblestudioLaunchProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}
  */
  readonly ec2SubnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}
  */
  readonly launchProfileProtocolVersions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}
  */
  readonly streamConfiguration: NimblestudioLaunchProfileStreamConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}
  */
  readonly studioComponentIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}
  */
  readonly studioId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface NimblestudioLaunchProfileStreamConfigurationSessionBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}
  */
  readonly maxBackupsToRetain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}
  */
  readonly mode?: string;
}

export function nimblestudioLaunchProfileStreamConfigurationSessionBackupToTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationSessionBackup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_backups_to_retain: cdktn.numberToTerraform(struct!.maxBackupsToRetain),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function nimblestudioLaunchProfileStreamConfigurationSessionBackupToHclTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationSessionBackup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_backups_to_retain: {
      value: cdktn.numberToHclTerraform(struct!.maxBackupsToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NimblestudioLaunchProfileStreamConfigurationSessionBackup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBackupsToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackupsToRetain = this._maxBackupsToRetain;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NimblestudioLaunchProfileStreamConfigurationSessionBackup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBackupsToRetain = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBackupsToRetain = value.maxBackupsToRetain;
      this._mode = value.mode;
    }
  }

  // max_backups_to_retain - computed: true, optional: true, required: false
  private _maxBackupsToRetain?: number; 
  public get maxBackupsToRetain() {
    return this.getNumberAttribute('max_backups_to_retain');
  }
  public set maxBackupsToRetain(value: number) {
    this._maxBackupsToRetain = value;
  }
  public resetMaxBackupsToRetain() {
    this._maxBackupsToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupsToRetainInput() {
    return this._maxBackupsToRetain;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}
  */
  readonly linux?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}
  */
  readonly windows?: string;
}

export function nimblestudioLaunchProfileStreamConfigurationSessionStorageRootToTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    linux: cdktn.stringToTerraform(struct!.linux),
    windows: cdktn.stringToTerraform(struct!.windows),
  }
}


export function nimblestudioLaunchProfileStreamConfigurationSessionStorageRootToHclTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    linux: {
      value: cdktn.stringToHclTerraform(struct!.linux),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows: {
      value: cdktn.stringToHclTerraform(struct!.windows),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linux !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux;
    }
    if (this._windows !== undefined) {
      hasAnyValues = true;
      internalValueResult.windows = this._windows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linux = undefined;
      this._windows = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linux = value.linux;
      this._windows = value.windows;
    }
  }

  // linux - computed: true, optional: true, required: false
  private _linux?: string; 
  public get linux() {
    return this.getStringAttribute('linux');
  }
  public set linux(value: string) {
    this._linux = value;
  }
  public resetLinux() {
    this._linux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux;
  }

  // windows - computed: true, optional: true, required: false
  private _windows?: string; 
  public get windows() {
    return this.getStringAttribute('windows');
  }
  public set windows(value: string) {
    this._windows = value;
  }
  public resetWindows() {
    this._windows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows;
  }
}
export interface NimblestudioLaunchProfileStreamConfigurationSessionStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}
  */
  readonly mode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}
  */
  readonly root?: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot;
}

export function nimblestudioLaunchProfileStreamConfigurationSessionStorageToTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mode),
    root: nimblestudioLaunchProfileStreamConfigurationSessionStorageRootToTerraform(struct!.root),
  }
}


export function nimblestudioLaunchProfileStreamConfigurationSessionStorageToHclTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    root: {
      value: nimblestudioLaunchProfileStreamConfigurationSessionStorageRootToHclTerraform(struct!.root),
      isBlock: true,
      type: "struct",
      storageClassType: "NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NimblestudioLaunchProfileStreamConfigurationSessionStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._root?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.root = this._root?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NimblestudioLaunchProfileStreamConfigurationSessionStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._root.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._root.internalValue = value.root;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string[]; 
  public get mode() {
    return this.getListAttribute('mode');
  }
  public set mode(value: string[]) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // root - computed: true, optional: true, required: false
  private _root = new NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(this, "root");
  public get root() {
    return this._root;
  }
  public putRoot(value: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot) {
    this._root.internalValue = value;
  }
  public resetRoot() {
    this._root.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInput() {
    return this._root.internalValue;
  }
}
export interface NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}
  */
  readonly throughput?: number;
}

export function nimblestudioLaunchProfileStreamConfigurationVolumeConfigurationToTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    size: cdktn.numberToTerraform(struct!.size),
    throughput: cdktn.numberToTerraform(struct!.throughput),
  }
}


export function nimblestudioLaunchProfileStreamConfigurationVolumeConfigurationToHclTerraform(struct?: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._throughput = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._throughput = value.throughput;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }
}
export interface NimblestudioLaunchProfileStreamConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}
  */
  readonly automaticTerminationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}
  */
  readonly clipboardMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}
  */
  readonly ec2InstanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}
  */
  readonly maxSessionLengthInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}
  */
  readonly maxStoppedSessionLengthInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}
  */
  readonly sessionBackup?: NimblestudioLaunchProfileStreamConfigurationSessionBackup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}
  */
  readonly sessionPersistenceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}
  */
  readonly sessionStorage?: NimblestudioLaunchProfileStreamConfigurationSessionStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}
  */
  readonly streamingImageIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}
  */
  readonly volumeConfiguration?: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration;
}

export function nimblestudioLaunchProfileStreamConfigurationToTerraform(struct?: NimblestudioLaunchProfileStreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automatic_termination_mode: cdktn.stringToTerraform(struct!.automaticTerminationMode),
    clipboard_mode: cdktn.stringToTerraform(struct!.clipboardMode),
    ec_2_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ec2InstanceTypes),
    max_session_length_in_minutes: cdktn.numberToTerraform(struct!.maxSessionLengthInMinutes),
    max_stopped_session_length_in_minutes: cdktn.numberToTerraform(struct!.maxStoppedSessionLengthInMinutes),
    session_backup: nimblestudioLaunchProfileStreamConfigurationSessionBackupToTerraform(struct!.sessionBackup),
    session_persistence_mode: cdktn.stringToTerraform(struct!.sessionPersistenceMode),
    session_storage: nimblestudioLaunchProfileStreamConfigurationSessionStorageToTerraform(struct!.sessionStorage),
    streaming_image_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.streamingImageIds),
    volume_configuration: nimblestudioLaunchProfileStreamConfigurationVolumeConfigurationToTerraform(struct!.volumeConfiguration),
  }
}


export function nimblestudioLaunchProfileStreamConfigurationToHclTerraform(struct?: NimblestudioLaunchProfileStreamConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automatic_termination_mode: {
      value: cdktn.stringToHclTerraform(struct!.automaticTerminationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clipboard_mode: {
      value: cdktn.stringToHclTerraform(struct!.clipboardMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec_2_instance_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ec2InstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_session_length_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxSessionLengthInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stopped_session_length_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxStoppedSessionLengthInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_backup: {
      value: nimblestudioLaunchProfileStreamConfigurationSessionBackupToHclTerraform(struct!.sessionBackup),
      isBlock: true,
      type: "struct",
      storageClassType: "NimblestudioLaunchProfileStreamConfigurationSessionBackup",
    },
    session_persistence_mode: {
      value: cdktn.stringToHclTerraform(struct!.sessionPersistenceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_storage: {
      value: nimblestudioLaunchProfileStreamConfigurationSessionStorageToHclTerraform(struct!.sessionStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "NimblestudioLaunchProfileStreamConfigurationSessionStorage",
    },
    streaming_image_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.streamingImageIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_configuration: {
      value: nimblestudioLaunchProfileStreamConfigurationVolumeConfigurationToHclTerraform(struct!.volumeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NimblestudioLaunchProfileStreamConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NimblestudioLaunchProfileStreamConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticTerminationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticTerminationMode = this._automaticTerminationMode;
    }
    if (this._clipboardMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboardMode = this._clipboardMode;
    }
    if (this._ec2InstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceTypes = this._ec2InstanceTypes;
    }
    if (this._maxSessionLengthInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionLengthInMinutes = this._maxSessionLengthInMinutes;
    }
    if (this._maxStoppedSessionLengthInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStoppedSessionLengthInMinutes = this._maxStoppedSessionLengthInMinutes;
    }
    if (this._sessionBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionBackup = this._sessionBackup?.internalValue;
    }
    if (this._sessionPersistenceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistenceMode = this._sessionPersistenceMode;
    }
    if (this._sessionStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStorage = this._sessionStorage?.internalValue;
    }
    if (this._streamingImageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingImageIds = this._streamingImageIds;
    }
    if (this._volumeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeConfiguration = this._volumeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NimblestudioLaunchProfileStreamConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticTerminationMode = undefined;
      this._clipboardMode = undefined;
      this._ec2InstanceTypes = undefined;
      this._maxSessionLengthInMinutes = undefined;
      this._maxStoppedSessionLengthInMinutes = undefined;
      this._sessionBackup.internalValue = undefined;
      this._sessionPersistenceMode = undefined;
      this._sessionStorage.internalValue = undefined;
      this._streamingImageIds = undefined;
      this._volumeConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticTerminationMode = value.automaticTerminationMode;
      this._clipboardMode = value.clipboardMode;
      this._ec2InstanceTypes = value.ec2InstanceTypes;
      this._maxSessionLengthInMinutes = value.maxSessionLengthInMinutes;
      this._maxStoppedSessionLengthInMinutes = value.maxStoppedSessionLengthInMinutes;
      this._sessionBackup.internalValue = value.sessionBackup;
      this._sessionPersistenceMode = value.sessionPersistenceMode;
      this._sessionStorage.internalValue = value.sessionStorage;
      this._streamingImageIds = value.streamingImageIds;
      this._volumeConfiguration.internalValue = value.volumeConfiguration;
    }
  }

  // automatic_termination_mode - computed: true, optional: true, required: false
  private _automaticTerminationMode?: string; 
  public get automaticTerminationMode() {
    return this.getStringAttribute('automatic_termination_mode');
  }
  public set automaticTerminationMode(value: string) {
    this._automaticTerminationMode = value;
  }
  public resetAutomaticTerminationMode() {
    this._automaticTerminationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTerminationModeInput() {
    return this._automaticTerminationMode;
  }

  // clipboard_mode - computed: false, optional: false, required: true
  private _clipboardMode?: string; 
  public get clipboardMode() {
    return this.getStringAttribute('clipboard_mode');
  }
  public set clipboardMode(value: string) {
    this._clipboardMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardModeInput() {
    return this._clipboardMode;
  }

  // ec_2_instance_types - computed: false, optional: false, required: true
  private _ec2InstanceTypes?: string[]; 
  public get ec2InstanceTypes() {
    return this.getListAttribute('ec_2_instance_types');
  }
  public set ec2InstanceTypes(value: string[]) {
    this._ec2InstanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceTypesInput() {
    return this._ec2InstanceTypes;
  }

  // max_session_length_in_minutes - computed: true, optional: true, required: false
  private _maxSessionLengthInMinutes?: number; 
  public get maxSessionLengthInMinutes() {
    return this.getNumberAttribute('max_session_length_in_minutes');
  }
  public set maxSessionLengthInMinutes(value: number) {
    this._maxSessionLengthInMinutes = value;
  }
  public resetMaxSessionLengthInMinutes() {
    this._maxSessionLengthInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionLengthInMinutesInput() {
    return this._maxSessionLengthInMinutes;
  }

  // max_stopped_session_length_in_minutes - computed: true, optional: true, required: false
  private _maxStoppedSessionLengthInMinutes?: number; 
  public get maxStoppedSessionLengthInMinutes() {
    return this.getNumberAttribute('max_stopped_session_length_in_minutes');
  }
  public set maxStoppedSessionLengthInMinutes(value: number) {
    this._maxStoppedSessionLengthInMinutes = value;
  }
  public resetMaxStoppedSessionLengthInMinutes() {
    this._maxStoppedSessionLengthInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStoppedSessionLengthInMinutesInput() {
    return this._maxStoppedSessionLengthInMinutes;
  }

  // session_backup - computed: true, optional: true, required: false
  private _sessionBackup = new NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(this, "session_backup");
  public get sessionBackup() {
    return this._sessionBackup;
  }
  public putSessionBackup(value: NimblestudioLaunchProfileStreamConfigurationSessionBackup) {
    this._sessionBackup.internalValue = value;
  }
  public resetSessionBackup() {
    this._sessionBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionBackupInput() {
    return this._sessionBackup.internalValue;
  }

  // session_persistence_mode - computed: true, optional: true, required: false
  private _sessionPersistenceMode?: string; 
  public get sessionPersistenceMode() {
    return this.getStringAttribute('session_persistence_mode');
  }
  public set sessionPersistenceMode(value: string) {
    this._sessionPersistenceMode = value;
  }
  public resetSessionPersistenceMode() {
    this._sessionPersistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceModeInput() {
    return this._sessionPersistenceMode;
  }

  // session_storage - computed: true, optional: true, required: false
  private _sessionStorage = new NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(this, "session_storage");
  public get sessionStorage() {
    return this._sessionStorage;
  }
  public putSessionStorage(value: NimblestudioLaunchProfileStreamConfigurationSessionStorage) {
    this._sessionStorage.internalValue = value;
  }
  public resetSessionStorage() {
    this._sessionStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStorageInput() {
    return this._sessionStorage.internalValue;
  }

  // streaming_image_ids - computed: false, optional: false, required: true
  private _streamingImageIds?: string[]; 
  public get streamingImageIds() {
    return this.getListAttribute('streaming_image_ids');
  }
  public set streamingImageIds(value: string[]) {
    this._streamingImageIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingImageIdsInput() {
    return this._streamingImageIds;
  }

  // volume_configuration - computed: true, optional: true, required: false
  private _volumeConfiguration = new NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(this, "volume_configuration");
  public get volumeConfiguration() {
    return this._volumeConfiguration;
  }
  public putVolumeConfiguration(value: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration) {
    this._volumeConfiguration.internalValue = value;
  }
  public resetVolumeConfiguration() {
    this._volumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeConfigurationInput() {
    return this._volumeConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}
*/
export class NimblestudioLaunchProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_nimblestudio_launch_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NimblestudioLaunchProfile to import
  * @param importFromId The id of the existing NimblestudioLaunchProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NimblestudioLaunchProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_launch_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NimblestudioLaunchProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NimblestudioLaunchProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_launch_profile',
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
    this._description = config.description;
    this._ec2SubnetIds = config.ec2SubnetIds;
    this._launchProfileProtocolVersions = config.launchProfileProtocolVersions;
    this._name = config.name;
    this._streamConfiguration.internalValue = config.streamConfiguration;
    this._studioComponentIds = config.studioComponentIds;
    this._studioId = config.studioId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ec_2_subnet_ids - computed: false, optional: false, required: true
  private _ec2SubnetIds?: string[]; 
  public get ec2SubnetIds() {
    return this.getListAttribute('ec_2_subnet_ids');
  }
  public set ec2SubnetIds(value: string[]) {
    this._ec2SubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SubnetIdsInput() {
    return this._ec2SubnetIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_profile_id - computed: true, optional: false, required: false
  public get launchProfileId() {
    return this.getStringAttribute('launch_profile_id');
  }

  // launch_profile_protocol_versions - computed: false, optional: false, required: true
  private _launchProfileProtocolVersions?: string[]; 
  public get launchProfileProtocolVersions() {
    return this.getListAttribute('launch_profile_protocol_versions');
  }
  public set launchProfileProtocolVersions(value: string[]) {
    this._launchProfileProtocolVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchProfileProtocolVersionsInput() {
    return this._launchProfileProtocolVersions;
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

  // stream_configuration - computed: false, optional: false, required: true
  private _streamConfiguration = new NimblestudioLaunchProfileStreamConfigurationOutputReference(this, "stream_configuration");
  public get streamConfiguration() {
    return this._streamConfiguration;
  }
  public putStreamConfiguration(value: NimblestudioLaunchProfileStreamConfiguration) {
    this._streamConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigurationInput() {
    return this._streamConfiguration.internalValue;
  }

  // studio_component_ids - computed: false, optional: false, required: true
  private _studioComponentIds?: string[]; 
  public get studioComponentIds() {
    return this.getListAttribute('studio_component_ids');
  }
  public set studioComponentIds(value: string[]) {
    this._studioComponentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioComponentIdsInput() {
    return this._studioComponentIds;
  }

  // studio_id - computed: false, optional: false, required: true
  private _studioId?: string; 
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      ec_2_subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ec2SubnetIds),
      launch_profile_protocol_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._launchProfileProtocolVersions),
      name: cdktn.stringToTerraform(this._name),
      stream_configuration: nimblestudioLaunchProfileStreamConfigurationToTerraform(this._streamConfiguration.internalValue),
      studio_component_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._studioComponentIds),
      studio_id: cdktn.stringToTerraform(this._studioId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec_2_subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ec2SubnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      launch_profile_protocol_versions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._launchProfileProtocolVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_configuration: {
        value: nimblestudioLaunchProfileStreamConfigurationToHclTerraform(this._streamConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NimblestudioLaunchProfileStreamConfiguration",
      },
      studio_component_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._studioComponentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      studio_id: {
        value: cdktn.stringToHclTerraform(this._studioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
