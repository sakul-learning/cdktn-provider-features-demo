// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotwirelessMulticastGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Wireless device to associate. Only for update request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#associate_wireless_device IotwirelessMulticastGroup#associate_wireless_device}
  */
  readonly associateWirelessDevice?: string;
  /**
  * Multicast group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#description IotwirelessMulticastGroup#description}
  */
  readonly description?: string;
  /**
  * Wireless device to disassociate. Only for update request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#disassociate_wireless_device IotwirelessMulticastGroup#disassociate_wireless_device}
  */
  readonly disassociateWirelessDevice?: string;
  /**
  * Multicast group LoRaWAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#lo_ra_wan IotwirelessMulticastGroup#lo_ra_wan}
  */
  readonly loRaWan: IotwirelessMulticastGroupLoRaWan;
  /**
  * Name of Multicast group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#name IotwirelessMulticastGroup#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the Multicast group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#tags IotwirelessMulticastGroup#tags}
  */
  readonly tags?: IotwirelessMulticastGroupTags[] | cdktn.IResolvable;
}
export interface IotwirelessMulticastGroupLoRaWan {
  /**
  * Multicast group LoRaWAN DL Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#dl_class IotwirelessMulticastGroup#dl_class}
  */
  readonly dlClass: string;
  /**
  * Multicast group LoRaWAN RF region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#rf_region IotwirelessMulticastGroup#rf_region}
  */
  readonly rfRegion: string;
}

export function iotwirelessMulticastGroupLoRaWanToTerraform(struct?: IotwirelessMulticastGroupLoRaWan | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dl_class: cdktn.stringToTerraform(struct!.dlClass),
    rf_region: cdktn.stringToTerraform(struct!.rfRegion),
  }
}


export function iotwirelessMulticastGroupLoRaWanToHclTerraform(struct?: IotwirelessMulticastGroupLoRaWan | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dl_class: {
      value: cdktn.stringToHclTerraform(struct!.dlClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rf_region: {
      value: cdktn.stringToHclTerraform(struct!.rfRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotwirelessMulticastGroupLoRaWanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotwirelessMulticastGroupLoRaWan | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dlClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlClass = this._dlClass;
    }
    if (this._rfRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfRegion = this._rfRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotwirelessMulticastGroupLoRaWan | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dlClass = undefined;
      this._rfRegion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dlClass = value.dlClass;
      this._rfRegion = value.rfRegion;
    }
  }

  // dl_class - computed: false, optional: false, required: true
  private _dlClass?: string; 
  public get dlClass() {
    return this.getStringAttribute('dl_class');
  }
  public set dlClass(value: string) {
    this._dlClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dlClassInput() {
    return this._dlClass;
  }

  // number_of_devices_in_group - computed: true, optional: false, required: false
  public get numberOfDevicesInGroup() {
    return this.getNumberAttribute('number_of_devices_in_group');
  }

  // number_of_devices_requested - computed: true, optional: false, required: false
  public get numberOfDevicesRequested() {
    return this.getNumberAttribute('number_of_devices_requested');
  }

  // rf_region - computed: false, optional: false, required: true
  private _rfRegion?: string; 
  public get rfRegion() {
    return this.getStringAttribute('rf_region');
  }
  public set rfRegion(value: string) {
    this._rfRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rfRegionInput() {
    return this._rfRegion;
  }
}
export interface IotwirelessMulticastGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#key IotwirelessMulticastGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#value IotwirelessMulticastGroup#value}
  */
  readonly value?: string;
}

export function iotwirelessMulticastGroupTagsToTerraform(struct?: IotwirelessMulticastGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotwirelessMulticastGroupTagsToHclTerraform(struct?: IotwirelessMulticastGroupTags | cdktn.IResolvable): any {
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

export class IotwirelessMulticastGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotwirelessMulticastGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotwirelessMulticastGroupTags | cdktn.IResolvable | undefined) {
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

export class IotwirelessMulticastGroupTagsList extends cdktn.ComplexList {
  public internalValue? : IotwirelessMulticastGroupTags[] | cdktn.IResolvable

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
  public get(index: number): IotwirelessMulticastGroupTagsOutputReference {
    return new IotwirelessMulticastGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group awscc_iotwireless_multicast_group}
*/
export class IotwirelessMulticastGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_multicast_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotwirelessMulticastGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotwirelessMulticastGroup to import
  * @param importFromId The id of the existing IotwirelessMulticastGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotwirelessMulticastGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_multicast_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotwireless_multicast_group awscc_iotwireless_multicast_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessMulticastGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IotwirelessMulticastGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_multicast_group',
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
    this._associateWirelessDevice = config.associateWirelessDevice;
    this._description = config.description;
    this._disassociateWirelessDevice = config.disassociateWirelessDevice;
    this._loRaWan.internalValue = config.loRaWan;
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

  // associate_wireless_device - computed: true, optional: true, required: false
  private _associateWirelessDevice?: string; 
  public get associateWirelessDevice() {
    return this.getStringAttribute('associate_wireless_device');
  }
  public set associateWirelessDevice(value: string) {
    this._associateWirelessDevice = value;
  }
  public resetAssociateWirelessDevice() {
    this._associateWirelessDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateWirelessDeviceInput() {
    return this._associateWirelessDevice;
  }

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

  // disassociate_wireless_device - computed: true, optional: true, required: false
  private _disassociateWirelessDevice?: string; 
  public get disassociateWirelessDevice() {
    return this.getStringAttribute('disassociate_wireless_device');
  }
  public set disassociateWirelessDevice(value: string) {
    this._disassociateWirelessDevice = value;
  }
  public resetDisassociateWirelessDevice() {
    this._disassociateWirelessDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disassociateWirelessDeviceInput() {
    return this._disassociateWirelessDevice;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lo_ra_wan - computed: false, optional: false, required: true
  private _loRaWan = new IotwirelessMulticastGroupLoRaWanOutputReference(this, "lo_ra_wan");
  public get loRaWan() {
    return this._loRaWan;
  }
  public putLoRaWan(value: IotwirelessMulticastGroupLoRaWan) {
    this._loRaWan.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loRaWanInput() {
    return this._loRaWan.internalValue;
  }

  // multicast_group_id - computed: true, optional: false, required: false
  public get multicastGroupId() {
    return this.getStringAttribute('multicast_group_id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotwirelessMulticastGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotwirelessMulticastGroupTags[] | cdktn.IResolvable) {
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
      associate_wireless_device: cdktn.stringToTerraform(this._associateWirelessDevice),
      description: cdktn.stringToTerraform(this._description),
      disassociate_wireless_device: cdktn.stringToTerraform(this._disassociateWirelessDevice),
      lo_ra_wan: iotwirelessMulticastGroupLoRaWanToTerraform(this._loRaWan.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(iotwirelessMulticastGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associate_wireless_device: {
        value: cdktn.stringToHclTerraform(this._associateWirelessDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disassociate_wireless_device: {
        value: cdktn.stringToHclTerraform(this._disassociateWirelessDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lo_ra_wan: {
        value: iotwirelessMulticastGroupLoRaWanToHclTerraform(this._loRaWan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotwirelessMulticastGroupLoRaWan",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotwirelessMulticastGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotwirelessMulticastGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
