// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspacesinstancesVolumeConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Availability Zone in which to create the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#availability_zone WorkspacesinstancesVolume#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Indicates whether the volume should be encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#encrypted WorkspacesinstancesVolume#encrypted}
  */
  readonly encrypted?: boolean | cdktn.IResolvable;
  /**
  * The number of I/O operations per second (IOPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#iops WorkspacesinstancesVolume#iops}
  */
  readonly iops?: number;
  /**
  * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#kms_key_id WorkspacesinstancesVolume#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The size of the volume, in GiBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#size_in_gb WorkspacesinstancesVolume#size_in_gb}
  */
  readonly sizeInGb?: number;
  /**
  * The snapshot from which to create the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#snapshot_id WorkspacesinstancesVolume#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The tags passed to EBS volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#tag_specifications WorkspacesinstancesVolume#tag_specifications}
  */
  readonly tagSpecifications?: WorkspacesinstancesVolumeTagSpecifications[] | cdktn.IResolvable;
  /**
  * The throughput to provision for a volume, with a maximum of 1,000 MiB/s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#throughput WorkspacesinstancesVolume#throughput}
  */
  readonly throughput?: number;
  /**
  * The volume type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#volume_type WorkspacesinstancesVolume#volume_type}
  */
  readonly volumeType?: string;
}
export interface WorkspacesinstancesVolumeTagSpecificationsTags {
  /**
  * The key name of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#key WorkspacesinstancesVolume#key}
  */
  readonly key?: string;
  /**
  * The value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#value WorkspacesinstancesVolume#value}
  */
  readonly value?: string;
}

export function workspacesinstancesVolumeTagSpecificationsTagsToTerraform(struct?: WorkspacesinstancesVolumeTagSpecificationsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspacesinstancesVolumeTagSpecificationsTagsToHclTerraform(struct?: WorkspacesinstancesVolumeTagSpecificationsTags | cdktn.IResolvable): any {
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

export class WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspacesinstancesVolumeTagSpecificationsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspacesinstancesVolumeTagSpecificationsTags | cdktn.IResolvable | undefined) {
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

export class WorkspacesinstancesVolumeTagSpecificationsTagsList extends cdktn.ComplexList {
  public internalValue? : WorkspacesinstancesVolumeTagSpecificationsTags[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference {
    return new WorkspacesinstancesVolumeTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesinstancesVolumeTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#resource_type WorkspacesinstancesVolume#resource_type}
  */
  readonly resourceType?: string;
  /**
  * The tags to apply to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#tags WorkspacesinstancesVolume#tags}
  */
  readonly tags?: WorkspacesinstancesVolumeTagSpecificationsTags[] | cdktn.IResolvable;
}

export function workspacesinstancesVolumeTagSpecificationsToTerraform(struct?: WorkspacesinstancesVolumeTagSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    tags: cdktn.listMapper(workspacesinstancesVolumeTagSpecificationsTagsToTerraform, false)(struct!.tags),
  }
}


export function workspacesinstancesVolumeTagSpecificationsToHclTerraform(struct?: WorkspacesinstancesVolumeTagSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(workspacesinstancesVolumeTagSpecificationsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspacesinstancesVolumeTagSpecificationsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesinstancesVolumeTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspacesinstancesVolumeTagSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesinstancesVolumeTagSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tags.internalValue = value.tags;
    }
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WorkspacesinstancesVolumeTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WorkspacesinstancesVolumeTagSpecificationsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class WorkspacesinstancesVolumeTagSpecificationsList extends cdktn.ComplexList {
  public internalValue? : WorkspacesinstancesVolumeTagSpecifications[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesinstancesVolumeTagSpecificationsOutputReference {
    return new WorkspacesinstancesVolumeTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume awscc_workspacesinstances_volume}
*/
export class WorkspacesinstancesVolume extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspacesinstances_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspacesinstancesVolume resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspacesinstancesVolume to import
  * @param importFromId The id of the existing WorkspacesinstancesVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspacesinstancesVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesinstances_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspacesinstances_volume awscc_workspacesinstances_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesinstancesVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesinstancesVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspacesinstances_volume',
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
    this._availabilityZone = config.availabilityZone;
    this._encrypted = config.encrypted;
    this._iops = config.iops;
    this._kmsKeyId = config.kmsKeyId;
    this._sizeInGb = config.sizeInGb;
    this._snapshotId = config.snapshotId;
    this._tagSpecifications.internalValue = config.tagSpecifications;
    this._throughput = config.throughput;
    this._volumeType = config.volumeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktn.IResolvable;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktn.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // size_in_gb - computed: true, optional: true, required: false
  private _sizeInGb?: number;
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  public resetSizeInGb() {
    this._sizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string;
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // tag_specifications - computed: true, optional: true, required: false
  private _tagSpecifications = new WorkspacesinstancesVolumeTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }
  public putTagSpecifications(value: WorkspacesinstancesVolumeTagSpecifications[] | cdktn.IResolvable) {
    this._tagSpecifications.internalValue = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications.internalValue;
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

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string;
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      encrypted: cdktn.booleanToTerraform(this._encrypted),
      iops: cdktn.numberToTerraform(this._iops),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      size_in_gb: cdktn.numberToTerraform(this._sizeInGb),
      snapshot_id: cdktn.stringToTerraform(this._snapshotId),
      tag_specifications: cdktn.listMapper(workspacesinstancesVolumeTagSpecificationsToTerraform, false)(this._tagSpecifications.internalValue),
      throughput: cdktn.numberToTerraform(this._throughput),
      volume_type: cdktn.stringToTerraform(this._volumeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktn.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iops: {
        value: cdktn.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_gb: {
        value: cdktn.numberToHclTerraform(this._sizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_id: {
        value: cdktn.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_specifications: {
        value: cdktn.listMapperHcl(workspacesinstancesVolumeTagSpecificationsToHclTerraform, false)(this._tagSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesinstancesVolumeTagSpecificationsList",
      },
      throughput: {
        value: cdktn.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_type: {
        value: cdktn.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
