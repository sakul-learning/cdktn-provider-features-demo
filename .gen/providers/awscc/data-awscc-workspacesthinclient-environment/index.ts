// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/workspacesthinclient_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWorkspacesthinclientEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/workspacesthinclient_environment#id DataAwsccWorkspacesthinclientEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags {
}

export function dataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsToTerraform(struct?: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsToHclTerraform(struct?: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTags | undefined) {
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

export class DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference {
    return new DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow {
}

export function dataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowToTerraform(struct?: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowToHclTerraform(struct?: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_time_of - computed: true, optional: false, required: false
  public get applyTimeOf() {
    return this.getStringAttribute('apply_time_of');
  }

  // days_of_the_week - computed: true, optional: false, required: false
  public get daysOfTheWeek() {
    return cdktn.Fn.tolist(this.getListAttribute('days_of_the_week'));
  }

  // end_time_hour - computed: true, optional: false, required: false
  public get endTimeHour() {
    return this.getNumberAttribute('end_time_hour');
  }

  // end_time_minute - computed: true, optional: false, required: false
  public get endTimeMinute() {
    return this.getNumberAttribute('end_time_minute');
  }

  // start_time_hour - computed: true, optional: false, required: false
  public get startTimeHour() {
    return this.getNumberAttribute('start_time_hour');
  }

  // start_time_minute - computed: true, optional: false, required: false
  public get startTimeMinute() {
    return this.getNumberAttribute('start_time_minute');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccWorkspacesthinclientEnvironmentTags {
}

export function dataAwsccWorkspacesthinclientEnvironmentTagsToTerraform(struct?: DataAwsccWorkspacesthinclientEnvironmentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesthinclientEnvironmentTagsToHclTerraform(struct?: DataAwsccWorkspacesthinclientEnvironmentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesthinclientEnvironmentTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesthinclientEnvironmentTags | undefined) {
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

export class DataAwsccWorkspacesthinclientEnvironmentTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference {
    return new DataAwsccWorkspacesthinclientEnvironmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/workspacesthinclient_environment awscc_workspacesthinclient_environment}
*/
export class DataAwsccWorkspacesthinclientEnvironment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspacesthinclient_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWorkspacesthinclientEnvironment to import
  * @param importFromId The id of the existing DataAwsccWorkspacesthinclientEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWorkspacesthinclientEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesthinclient_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/workspacesthinclient_environment awscc_workspacesthinclient_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWorkspacesthinclientEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWorkspacesthinclientEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspacesthinclient_environment',
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

  // activation_code - computed: true, optional: false, required: false
  public get activationCode() {
    return this.getStringAttribute('activation_code');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // desired_software_set_id - computed: true, optional: false, required: false
  public get desiredSoftwareSetId() {
    return this.getStringAttribute('desired_software_set_id');
  }

  // desktop_arn - computed: true, optional: false, required: false
  public get desktopArn() {
    return this.getStringAttribute('desktop_arn');
  }

  // desktop_endpoint - computed: true, optional: false, required: false
  public get desktopEndpoint() {
    return this.getStringAttribute('desktop_endpoint');
  }

  // desktop_type - computed: true, optional: false, required: false
  public get desktopType() {
    return this.getStringAttribute('desktop_type');
  }

  // device_creation_tags - computed: true, optional: false, required: false
  private _deviceCreationTags = new DataAwsccWorkspacesthinclientEnvironmentDeviceCreationTagsList(this, "device_creation_tags", true);
  public get deviceCreationTags() {
    return this._deviceCreationTags;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataAwsccWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pending_software_set_id - computed: true, optional: false, required: false
  public get pendingSoftwareSetId() {
    return this.getStringAttribute('pending_software_set_id');
  }

  // pending_software_set_version - computed: true, optional: false, required: false
  public get pendingSoftwareSetVersion() {
    return this.getStringAttribute('pending_software_set_version');
  }

  // registered_devices_count - computed: true, optional: false, required: false
  public get registeredDevicesCount() {
    return this.getNumberAttribute('registered_devices_count');
  }

  // software_set_compliance_status - computed: true, optional: false, required: false
  public get softwareSetComplianceStatus() {
    return this.getStringAttribute('software_set_compliance_status');
  }

  // software_set_update_mode - computed: true, optional: false, required: false
  public get softwareSetUpdateMode() {
    return this.getStringAttribute('software_set_update_mode');
  }

  // software_set_update_schedule - computed: true, optional: false, required: false
  public get softwareSetUpdateSchedule() {
    return this.getStringAttribute('software_set_update_schedule');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWorkspacesthinclientEnvironmentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
