// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_cloud_autonomous_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOdbCloudAutonomousVmClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#id DataAwsccOdbCloudAutonomousVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOdbCloudAutonomousVmClusterIamRoles {
}

export function dataAwsccOdbCloudAutonomousVmClusterIamRolesToTerraform(struct?: DataAwsccOdbCloudAutonomousVmClusterIamRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbCloudAutonomousVmClusterIamRolesToHclTerraform(struct?: DataAwsccOdbCloudAutonomousVmClusterIamRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbCloudAutonomousVmClusterIamRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbCloudAutonomousVmClusterIamRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_integration - computed: true, optional: false, required: false
  public get awsIntegration() {
    return this.getStringAttribute('aws_integration');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsccOdbCloudAutonomousVmClusterIamRolesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference {
    return new DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow {
}

export function dataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowToTerraform(struct?: DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowToHclTerraform(struct?: DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }

  // hours_of_day - computed: true, optional: false, required: false
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }

  // lead_time_in_weeks - computed: true, optional: false, required: false
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getListAttribute('months');
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
export interface DataAwsccOdbCloudAutonomousVmClusterTags {
}

export function dataAwsccOdbCloudAutonomousVmClusterTagsToTerraform(struct?: DataAwsccOdbCloudAutonomousVmClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbCloudAutonomousVmClusterTagsToHclTerraform(struct?: DataAwsccOdbCloudAutonomousVmClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbCloudAutonomousVmClusterTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbCloudAutonomousVmClusterTags | undefined) {
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

export class DataAwsccOdbCloudAutonomousVmClusterTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference {
    return new DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}
*/
export class DataAwsccOdbCloudAutonomousVmCluster extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_odb_cloud_autonomous_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOdbCloudAutonomousVmCluster to import
  * @param importFromId The id of the existing DataAwsccOdbCloudAutonomousVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOdbCloudAutonomousVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_cloud_autonomous_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOdbCloudAutonomousVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOdbCloudAutonomousVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_odb_cloud_autonomous_vm_cluster',
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

  // autonomous_data_storage_percentage - computed: true, optional: false, required: false
  public get autonomousDataStoragePercentage() {
    return this.getNumberAttribute('autonomous_data_storage_percentage');
  }

  // autonomous_data_storage_size_in_t_bs - computed: true, optional: false, required: false
  public get autonomousDataStorageSizeInTBs() {
    return this.getNumberAttribute('autonomous_data_storage_size_in_t_bs');
  }

  // available_autonomous_data_storage_size_in_t_bs - computed: true, optional: false, required: false
  public get availableAutonomousDataStorageSizeInTBs() {
    return this.getNumberAttribute('available_autonomous_data_storage_size_in_t_bs');
  }

  // available_container_databases - computed: true, optional: false, required: false
  public get availableContainerDatabases() {
    return this.getNumberAttribute('available_container_databases');
  }

  // available_cpus - computed: true, optional: false, required: false
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // cloud_autonomous_vm_cluster_arn - computed: true, optional: false, required: false
  public get cloudAutonomousVmClusterArn() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_arn');
  }

  // cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }

  // cloud_exadata_infrastructure_id - computed: true, optional: false, required: false
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // cpu_core_count_per_node - computed: true, optional: false, required: false
  public get cpuCoreCountPerNode() {
    return this.getNumberAttribute('cpu_core_count_per_node');
  }

  // cpu_percentage - computed: true, optional: false, required: false
  public get cpuPercentage() {
    return this.getNumberAttribute('cpu_percentage');
  }

  // data_storage_size_in_g_bs - computed: true, optional: false, required: false
  public get dataStorageSizeInGBs() {
    return this.getNumberAttribute('data_storage_size_in_g_bs');
  }

  // data_storage_size_in_t_bs - computed: true, optional: false, required: false
  public get dataStorageSizeInTBs() {
    return this.getNumberAttribute('data_storage_size_in_t_bs');
  }

  // db_node_storage_size_in_g_bs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGBs() {
    return this.getNumberAttribute('db_node_storage_size_in_g_bs');
  }

  // db_servers - computed: true, optional: false, required: false
  public get dbServers() {
    return this.getListAttribute('db_servers');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // exadata_storage_in_t_bs_lowest_scaled_value - computed: true, optional: false, required: false
  public get exadataStorageInTBsLowestScaledValue() {
    return this.getNumberAttribute('exadata_storage_in_t_bs_lowest_scaled_value');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // iam_roles - computed: true, optional: false, required: false
  private _iamRoles = new DataAwsccOdbCloudAutonomousVmClusterIamRolesList(this, "iam_roles", true);
  public get iamRoles() {
    return this._iamRoles;
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

  // is_mtls_enabled_vm_cluster - computed: true, optional: false, required: false
  public get isMtlsEnabledVmCluster() {
    return this.getBooleanAttribute('is_mtls_enabled_vm_cluster');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // max_acds_lowest_scaled_value - computed: true, optional: false, required: false
  public get maxAcdsLowestScaledValue() {
    return this.getNumberAttribute('max_acds_lowest_scaled_value');
  }

  // memory_per_oracle_compute_unit_in_g_bs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitInGBs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_in_g_bs');
  }

  // memory_size_in_g_bs - computed: true, optional: false, required: false
  public get memorySizeInGBs() {
    return this.getNumberAttribute('memory_size_in_g_bs');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // non_provisionable_autonomous_container_databases - computed: true, optional: false, required: false
  public get nonProvisionableAutonomousContainerDatabases() {
    return this.getNumberAttribute('non_provisionable_autonomous_container_databases');
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

  // odb_network_id - computed: true, optional: false, required: false
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }

  // provisionable_autonomous_container_databases - computed: true, optional: false, required: false
  public get provisionableAutonomousContainerDatabases() {
    return this.getNumberAttribute('provisionable_autonomous_container_databases');
  }

  // provisioned_autonomous_container_databases - computed: true, optional: false, required: false
  public get provisionedAutonomousContainerDatabases() {
    return this.getNumberAttribute('provisioned_autonomous_container_databases');
  }

  // provisioned_cpus - computed: true, optional: false, required: false
  public get provisionedCpus() {
    return this.getNumberAttribute('provisioned_cpus');
  }

  // reclaimable_cpus - computed: true, optional: false, required: false
  public get reclaimableCpus() {
    return this.getNumberAttribute('reclaimable_cpus');
  }

  // reserved_cpus - computed: true, optional: false, required: false
  public get reservedCpus() {
    return this.getNumberAttribute('reserved_cpus');
  }

  // scan_listener_port_non_tls - computed: true, optional: false, required: false
  public get scanListenerPortNonTls() {
    return this.getNumberAttribute('scan_listener_port_non_tls');
  }

  // scan_listener_port_tls - computed: true, optional: false, required: false
  public get scanListenerPortTls() {
    return this.getNumberAttribute('scan_listener_port_tls');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccOdbCloudAutonomousVmClusterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // total_container_databases - computed: true, optional: false, required: false
  public get totalContainerDatabases() {
    return this.getNumberAttribute('total_container_databases');
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
