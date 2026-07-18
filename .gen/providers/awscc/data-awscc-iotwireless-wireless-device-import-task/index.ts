// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_wireless_device_import_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotwirelessWirelessDeviceImportTaskConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_wireless_device_import_task#id DataAwsccIotwirelessWirelessDeviceImportTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk {
}

export function dataAwsccIotwirelessWirelessDeviceImportTaskSidewalkToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceImportTaskSidewalkToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_creation_file - computed: true, optional: false, required: false
  public get deviceCreationFile() {
    return this.getStringAttribute('device_creation_file');
  }

  // device_creation_file_list - computed: true, optional: false, required: false
  public get deviceCreationFileList() {
    return this.getListAttribute('device_creation_file_list');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // sidewalk_manufacturing_sn - computed: true, optional: false, required: false
  public get sidewalkManufacturingSn() {
    return this.getStringAttribute('sidewalk_manufacturing_sn');
  }
}
export interface DataAwsccIotwirelessWirelessDeviceImportTaskTags {
}

export function dataAwsccIotwirelessWirelessDeviceImportTaskTagsToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceImportTaskTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessWirelessDeviceImportTaskTagsToHclTerraform(struct?: DataAwsccIotwirelessWirelessDeviceImportTaskTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotwirelessWirelessDeviceImportTaskTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessWirelessDeviceImportTaskTags | undefined) {
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

export class DataAwsccIotwirelessWirelessDeviceImportTaskTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference {
    return new DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}
*/
export class DataAwsccIotwirelessWirelessDeviceImportTask extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_wireless_device_import_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotwirelessWirelessDeviceImportTask to import
  * @param importFromId The id of the existing DataAwsccIotwirelessWirelessDeviceImportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotwirelessWirelessDeviceImportTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_wireless_device_import_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessWirelessDeviceImportTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessDeviceImportTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_wireless_device_import_task',
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

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // destination_name - computed: true, optional: false, required: false
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }

  // failed_imported_devices_count - computed: true, optional: false, required: false
  public get failedImportedDevicesCount() {
    return this.getNumberAttribute('failed_imported_devices_count');
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

  // initialized_imported_devices_count - computed: true, optional: false, required: false
  public get initializedImportedDevicesCount() {
    return this.getNumberAttribute('initialized_imported_devices_count');
  }

  // onboarded_imported_devices_count - computed: true, optional: false, required: false
  public get onboardedImportedDevicesCount() {
    return this.getNumberAttribute('onboarded_imported_devices_count');
  }

  // pending_imported_devices_count - computed: true, optional: false, required: false
  public get pendingImportedDevicesCount() {
    return this.getNumberAttribute('pending_imported_devices_count');
  }

  // sidewalk - computed: true, optional: false, required: false
  private _sidewalk = new DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference(this, "sidewalk");
  public get sidewalk() {
    return this._sidewalk;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotwirelessWirelessDeviceImportTaskTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // wireless_device_import_task_id - computed: true, optional: false, required: false
  public get wirelessDeviceImportTaskId() {
    return this.getStringAttribute('wireless_device_import_task_id');
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
