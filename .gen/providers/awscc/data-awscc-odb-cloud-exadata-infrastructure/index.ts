// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_cloud_exadata_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOdbCloudExadataInfrastructureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_cloud_exadata_infrastructure#id DataAwsccOdbCloudExadataInfrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci {
}

export function dataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciToTerraform(struct?: DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciToHclTerraform(struct?: DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}

export class DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference {
    return new DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow {
}

export function dataAwsccOdbCloudExadataInfrastructureMaintenanceWindowToTerraform(struct?: DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbCloudExadataInfrastructureMaintenanceWindowToHclTerraform(struct?: DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_action_timeout_in_mins - computed: true, optional: false, required: false
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }

  // hours_of_day - computed: true, optional: false, required: false
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }

  // is_custom_action_timeout_enabled - computed: true, optional: false, required: false
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }

  // lead_time_in_weeks - computed: true, optional: false, required: false
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getListAttribute('months');
  }

  // patching_mode - computed: true, optional: false, required: false
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // weeks_of_month - computed: true, optional: false, required: false
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
}
export interface DataAwsccOdbCloudExadataInfrastructureTags {
}

export function dataAwsccOdbCloudExadataInfrastructureTagsToTerraform(struct?: DataAwsccOdbCloudExadataInfrastructureTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbCloudExadataInfrastructureTagsToHclTerraform(struct?: DataAwsccOdbCloudExadataInfrastructureTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbCloudExadataInfrastructureTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbCloudExadataInfrastructureTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbCloudExadataInfrastructureTags | undefined) {
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

export class DataAwsccOdbCloudExadataInfrastructureTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbCloudExadataInfrastructureTagsOutputReference {
    return new DataAwsccOdbCloudExadataInfrastructureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}
*/
export class DataAwsccOdbCloudExadataInfrastructure extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_odb_cloud_exadata_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOdbCloudExadataInfrastructure to import
  * @param importFromId The id of the existing DataAwsccOdbCloudExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOdbCloudExadataInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_cloud_exadata_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOdbCloudExadataInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOdbCloudExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_odb_cloud_exadata_infrastructure',
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

  // activated_storage_count - computed: true, optional: false, required: false
  public get activatedStorageCount() {
    return this.getNumberAttribute('activated_storage_count');
  }

  // additional_storage_count - computed: true, optional: false, required: false
  public get additionalStorageCount() {
    return this.getNumberAttribute('additional_storage_count');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // available_storage_size_in_g_bs - computed: true, optional: false, required: false
  public get availableStorageSizeInGBs() {
    return this.getNumberAttribute('available_storage_size_in_g_bs');
  }

  // cloud_exadata_infrastructure_arn - computed: true, optional: false, required: false
  public get cloudExadataInfrastructureArn() {
    return this.getStringAttribute('cloud_exadata_infrastructure_arn');
  }

  // cloud_exadata_infrastructure_id - computed: true, optional: false, required: false
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // customer_contacts_to_send_to_oci - computed: true, optional: false, required: false
  private _customerContactsToSendToOci = new DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList(this, "customer_contacts_to_send_to_oci", false);
  public get customerContactsToSendToOci() {
    return this._customerContactsToSendToOci;
  }

  // data_storage_size_in_t_bs - computed: true, optional: false, required: false
  public get dataStorageSizeInTBs() {
    return this.getNumberAttribute('data_storage_size_in_t_bs');
  }

  // database_server_type - computed: true, optional: false, required: false
  public get databaseServerType() {
    return this.getStringAttribute('database_server_type');
  }

  // db_node_storage_size_in_g_bs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGBs() {
    return this.getNumberAttribute('db_node_storage_size_in_g_bs');
  }

  // db_server_ids - computed: true, optional: false, required: false
  public get dbServerIds() {
    return this.getListAttribute('db_server_ids');
  }

  // db_server_version - computed: true, optional: false, required: false
  public get dbServerVersion() {
    return this.getStringAttribute('db_server_version');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // max_cpu_count - computed: true, optional: false, required: false
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // max_data_storage_in_t_bs - computed: true, optional: false, required: false
  public get maxDataStorageInTBs() {
    return this.getNumberAttribute('max_data_storage_in_t_bs');
  }

  // max_db_node_storage_size_in_g_bs - computed: true, optional: false, required: false
  public get maxDbNodeStorageSizeInGBs() {
    return this.getNumberAttribute('max_db_node_storage_size_in_g_bs');
  }

  // max_memory_in_g_bs - computed: true, optional: false, required: false
  public get maxMemoryInGBs() {
    return this.getNumberAttribute('max_memory_in_g_bs');
  }

  // memory_size_in_g_bs - computed: true, optional: false, required: false
  public get memorySizeInGBs() {
    return this.getNumberAttribute('memory_size_in_g_bs');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // storage_count - computed: true, optional: false, required: false
  public get storageCount() {
    return this.getNumberAttribute('storage_count');
  }

  // storage_server_type - computed: true, optional: false, required: false
  public get storageServerType() {
    return this.getStringAttribute('storage_server_type');
  }

  // storage_server_version - computed: true, optional: false, required: false
  public get storageServerVersion() {
    return this.getStringAttribute('storage_server_version');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccOdbCloudExadataInfrastructureTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // total_storage_size_in_g_bs - computed: true, optional: false, required: false
  public get totalStorageSizeInGBs() {
    return this.getNumberAttribute('total_storage_size_in_g_bs');
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
