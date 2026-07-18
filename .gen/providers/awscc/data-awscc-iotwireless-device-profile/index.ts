// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_device_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotwirelessDeviceProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_device_profile#id DataAwsccIotwirelessDeviceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotwirelessDeviceProfileLoRaWan {
}

export function dataAwsccIotwirelessDeviceProfileLoRaWanToTerraform(struct?: DataAwsccIotwirelessDeviceProfileLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessDeviceProfileLoRaWanToHclTerraform(struct?: DataAwsccIotwirelessDeviceProfileLoRaWan): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessDeviceProfileLoRaWan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessDeviceProfileLoRaWan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class_b_timeout - computed: true, optional: false, required: false
  public get classBTimeout() {
    return this.getNumberAttribute('class_b_timeout');
  }

  // class_c_timeout - computed: true, optional: false, required: false
  public get classCTimeout() {
    return this.getNumberAttribute('class_c_timeout');
  }

  // factory_preset_freqs_list - computed: true, optional: false, required: false
  public get factoryPresetFreqsList() {
    return this.getNumberListAttribute('factory_preset_freqs_list');
  }

  // mac_version - computed: true, optional: false, required: false
  public get macVersion() {
    return this.getStringAttribute('mac_version');
  }

  // max_duty_cycle - computed: true, optional: false, required: false
  public get maxDutyCycle() {
    return this.getNumberAttribute('max_duty_cycle');
  }

  // max_eirp - computed: true, optional: false, required: false
  public get maxEirp() {
    return this.getNumberAttribute('max_eirp');
  }

  // ping_slot_dr - computed: true, optional: false, required: false
  public get pingSlotDr() {
    return this.getNumberAttribute('ping_slot_dr');
  }

  // ping_slot_freq - computed: true, optional: false, required: false
  public get pingSlotFreq() {
    return this.getNumberAttribute('ping_slot_freq');
  }

  // ping_slot_period - computed: true, optional: false, required: false
  public get pingSlotPeriod() {
    return this.getNumberAttribute('ping_slot_period');
  }

  // reg_params_revision - computed: true, optional: false, required: false
  public get regParamsRevision() {
    return this.getStringAttribute('reg_params_revision');
  }

  // rf_region - computed: true, optional: false, required: false
  public get rfRegion() {
    return this.getStringAttribute('rf_region');
  }

  // rx_data_rate_2 - computed: true, optional: false, required: false
  public get rxDataRate2() {
    return this.getNumberAttribute('rx_data_rate_2');
  }

  // rx_delay_1 - computed: true, optional: false, required: false
  public get rxDelay1() {
    return this.getNumberAttribute('rx_delay_1');
  }

  // rx_dr_offset_1 - computed: true, optional: false, required: false
  public get rxDrOffset1() {
    return this.getNumberAttribute('rx_dr_offset_1');
  }

  // rx_freq_2 - computed: true, optional: false, required: false
  public get rxFreq2() {
    return this.getNumberAttribute('rx_freq_2');
  }

  // supports_32_bit_f_cnt - computed: true, optional: false, required: false
  public get supports32BitFCnt() {
    return this.getBooleanAttribute('supports_32_bit_f_cnt');
  }

  // supports_class_b - computed: true, optional: false, required: false
  public get supportsClassB() {
    return this.getBooleanAttribute('supports_class_b');
  }

  // supports_class_c - computed: true, optional: false, required: false
  public get supportsClassC() {
    return this.getBooleanAttribute('supports_class_c');
  }

  // supports_join - computed: true, optional: false, required: false
  public get supportsJoin() {
    return this.getBooleanAttribute('supports_join');
  }
}
export interface DataAwsccIotwirelessDeviceProfileTags {
}

export function dataAwsccIotwirelessDeviceProfileTagsToTerraform(struct?: DataAwsccIotwirelessDeviceProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessDeviceProfileTagsToHclTerraform(struct?: DataAwsccIotwirelessDeviceProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessDeviceProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotwirelessDeviceProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessDeviceProfileTags | undefined) {
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

export class DataAwsccIotwirelessDeviceProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessDeviceProfileTagsOutputReference {
    return new DataAwsccIotwirelessDeviceProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_device_profile awscc_iotwireless_device_profile}
*/
export class DataAwsccIotwirelessDeviceProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_device_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotwirelessDeviceProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotwirelessDeviceProfile to import
  * @param importFromId The id of the existing DataAwsccIotwirelessDeviceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotwirelessDeviceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_device_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_device_profile awscc_iotwireless_device_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessDeviceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessDeviceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_device_profile',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // device_profile_id - computed: true, optional: false, required: false
  public get deviceProfileId() {
    return this.getStringAttribute('device_profile_id');
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

  // lo_ra_wan - computed: true, optional: false, required: false
  private _loRaWan = new DataAwsccIotwirelessDeviceProfileLoRaWanOutputReference(this, "lo_ra_wan");
  public get loRaWan() {
    return this._loRaWan;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotwirelessDeviceProfileTagsList(this, "tags", true);
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
