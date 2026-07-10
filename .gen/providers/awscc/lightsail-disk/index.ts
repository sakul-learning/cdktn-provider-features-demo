// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LightsailDiskConfig extends cdktn.TerraformMetaArguments {
  /**
  * An array of objects representing the add-ons to enable for the new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#add_ons LightsailDisk#add_ons}
  */
  readonly addOns?: LightsailDiskAddOns[] | cdktn.IResolvable;
  /**
  * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#availability_zone LightsailDisk#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The names to use for your new Lightsail disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#disk_name LightsailDisk#disk_name}
  */
  readonly diskName: string;
  /**
  * Location of a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#location LightsailDisk#location}
  */
  readonly location?: LightsailDiskLocation;
  /**
  * Size of the Lightsail disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#size_in_gb LightsailDisk#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#tags LightsailDisk#tags}
  */
  readonly tags?: LightsailDiskTags[] | cdktn.IResolvable;
}
export interface LightsailDiskAddOnsAutoSnapshotAddOnRequest {
  /**
  * The daily time when an automatic snapshot will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#snapshot_time_of_day LightsailDisk#snapshot_time_of_day}
  */
  readonly snapshotTimeOfDay?: string;
}

export function lightsailDiskAddOnsAutoSnapshotAddOnRequestToTerraform(struct?: LightsailDiskAddOnsAutoSnapshotAddOnRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    snapshot_time_of_day: cdktn.stringToTerraform(struct!.snapshotTimeOfDay),
  }
}


export function lightsailDiskAddOnsAutoSnapshotAddOnRequestToHclTerraform(struct?: LightsailDiskAddOnsAutoSnapshotAddOnRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    snapshot_time_of_day: {
      value: cdktn.stringToHclTerraform(struct!.snapshotTimeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LightsailDiskAddOnsAutoSnapshotAddOnRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotTimeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotTimeOfDay = this._snapshotTimeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDiskAddOnsAutoSnapshotAddOnRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snapshotTimeOfDay = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snapshotTimeOfDay = value.snapshotTimeOfDay;
    }
  }

  // snapshot_time_of_day - computed: true, optional: true, required: false
  private _snapshotTimeOfDay?: string; 
  public get snapshotTimeOfDay() {
    return this.getStringAttribute('snapshot_time_of_day');
  }
  public set snapshotTimeOfDay(value: string) {
    this._snapshotTimeOfDay = value;
  }
  public resetSnapshotTimeOfDay() {
    this._snapshotTimeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTimeOfDayInput() {
    return this._snapshotTimeOfDay;
  }
}
export interface LightsailDiskAddOns {
  /**
  * The add-on type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#add_on_type LightsailDisk#add_on_type}
  */
  readonly addOnType?: string;
  /**
  * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#auto_snapshot_add_on_request LightsailDisk#auto_snapshot_add_on_request}
  */
  readonly autoSnapshotAddOnRequest?: LightsailDiskAddOnsAutoSnapshotAddOnRequest;
  /**
  * Status of the Addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#status LightsailDisk#status}
  */
  readonly status?: string;
}

export function lightsailDiskAddOnsToTerraform(struct?: LightsailDiskAddOns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_on_type: cdktn.stringToTerraform(struct!.addOnType),
    auto_snapshot_add_on_request: lightsailDiskAddOnsAutoSnapshotAddOnRequestToTerraform(struct!.autoSnapshotAddOnRequest),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function lightsailDiskAddOnsToHclTerraform(struct?: LightsailDiskAddOns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_on_type: {
      value: cdktn.stringToHclTerraform(struct!.addOnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_snapshot_add_on_request: {
      value: lightsailDiskAddOnsAutoSnapshotAddOnRequestToHclTerraform(struct!.autoSnapshotAddOnRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "LightsailDiskAddOnsAutoSnapshotAddOnRequest",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LightsailDiskAddOnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LightsailDiskAddOns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addOnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOnType = this._addOnType;
    }
    if (this._autoSnapshotAddOnRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotAddOnRequest = this._autoSnapshotAddOnRequest?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDiskAddOns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addOnType = undefined;
      this._autoSnapshotAddOnRequest.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addOnType = value.addOnType;
      this._autoSnapshotAddOnRequest.internalValue = value.autoSnapshotAddOnRequest;
      this._status = value.status;
    }
  }

  // add_on_type - computed: true, optional: true, required: false
  private _addOnType?: string; 
  public get addOnType() {
    return this.getStringAttribute('add_on_type');
  }
  public set addOnType(value: string) {
    this._addOnType = value;
  }
  public resetAddOnType() {
    this._addOnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnTypeInput() {
    return this._addOnType;
  }

  // auto_snapshot_add_on_request - computed: true, optional: true, required: false
  private _autoSnapshotAddOnRequest = new LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference(this, "auto_snapshot_add_on_request");
  public get autoSnapshotAddOnRequest() {
    return this._autoSnapshotAddOnRequest;
  }
  public putAutoSnapshotAddOnRequest(value: LightsailDiskAddOnsAutoSnapshotAddOnRequest) {
    this._autoSnapshotAddOnRequest.internalValue = value;
  }
  public resetAutoSnapshotAddOnRequest() {
    this._autoSnapshotAddOnRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotAddOnRequestInput() {
    return this._autoSnapshotAddOnRequest.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class LightsailDiskAddOnsList extends cdktn.ComplexList {
  public internalValue? : LightsailDiskAddOns[] | cdktn.IResolvable

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
  public get(index: number): LightsailDiskAddOnsOutputReference {
    return new LightsailDiskAddOnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LightsailDiskLocation {
}

export function lightsailDiskLocationToTerraform(struct?: LightsailDiskLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function lightsailDiskLocationToHclTerraform(struct?: LightsailDiskLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class LightsailDiskLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LightsailDiskLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDiskLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export interface LightsailDiskTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#key LightsailDisk#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#value LightsailDisk#value}
  */
  readonly value?: string;
}

export function lightsailDiskTagsToTerraform(struct?: LightsailDiskTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lightsailDiskTagsToHclTerraform(struct?: LightsailDiskTags | cdktn.IResolvable): any {
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

export class LightsailDiskTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LightsailDiskTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LightsailDiskTags | cdktn.IResolvable | undefined) {
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

export class LightsailDiskTagsList extends cdktn.ComplexList {
  public internalValue? : LightsailDiskTags[] | cdktn.IResolvable

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
  public get(index: number): LightsailDiskTagsOutputReference {
    return new LightsailDiskTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk awscc_lightsail_disk}
*/
export class LightsailDisk extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LightsailDisk resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LightsailDisk to import
  * @param importFromId The id of the existing LightsailDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LightsailDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/lightsail_disk awscc_lightsail_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailDiskConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_disk',
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
    this._addOns.internalValue = config.addOns;
    this._availabilityZone = config.availabilityZone;
    this._diskName = config.diskName;
    this._location.internalValue = config.location;
    this._sizeInGb = config.sizeInGb;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_ons - computed: true, optional: true, required: false
  private _addOns = new LightsailDiskAddOnsList(this, "add_ons", false);
  public get addOns() {
    return this._addOns;
  }
  public putAddOns(value: LightsailDiskAddOns[] | cdktn.IResolvable) {
    this._addOns.internalValue = value;
  }
  public resetAddOns() {
    this._addOns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnsInput() {
    return this._addOns.internalValue;
  }

  // attached_to - computed: true, optional: false, required: false
  public get attachedTo() {
    return this.getStringAttribute('attached_to');
  }

  // attachment_state - computed: true, optional: false, required: false
  public get attachmentState() {
    return this.getStringAttribute('attachment_state');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // disk_arn - computed: true, optional: false, required: false
  public get diskArn() {
    return this.getStringAttribute('disk_arn');
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // is_attached - computed: true, optional: false, required: false
  public get isAttached() {
    return this.getBooleanAttribute('is_attached');
  }

  // location - computed: true, optional: true, required: false
  private _location = new LightsailDiskLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: LightsailDiskLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // support_code - computed: true, optional: false, required: false
  public get supportCode() {
    return this.getStringAttribute('support_code');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new LightsailDiskTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LightsailDiskTags[] | cdktn.IResolvable) {
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
      add_ons: cdktn.listMapper(lightsailDiskAddOnsToTerraform, false)(this._addOns.internalValue),
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      disk_name: cdktn.stringToTerraform(this._diskName),
      location: lightsailDiskLocationToTerraform(this._location.internalValue),
      size_in_gb: cdktn.numberToTerraform(this._sizeInGb),
      tags: cdktn.listMapper(lightsailDiskTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_ons: {
        value: cdktn.listMapperHcl(lightsailDiskAddOnsToHclTerraform, false)(this._addOns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LightsailDiskAddOnsList",
      },
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_name: {
        value: cdktn.stringToHclTerraform(this._diskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: lightsailDiskLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LightsailDiskLocation",
      },
      size_in_gb: {
        value: cdktn.numberToHclTerraform(this._sizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.listMapperHcl(lightsailDiskTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LightsailDiskTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
