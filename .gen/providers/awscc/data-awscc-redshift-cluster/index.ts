// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/redshift_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRedshiftClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/redshift_cluster#id DataAwsccRedshiftCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRedshiftClusterEndpoint {
}

export function dataAwsccRedshiftClusterEndpointToTerraform(struct?: DataAwsccRedshiftClusterEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftClusterEndpointToHclTerraform(struct?: DataAwsccRedshiftClusterEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftClusterEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftClusterEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftClusterEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export interface DataAwsccRedshiftClusterLoggingProperties {
}

export function dataAwsccRedshiftClusterLoggingPropertiesToTerraform(struct?: DataAwsccRedshiftClusterLoggingProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftClusterLoggingPropertiesToHclTerraform(struct?: DataAwsccRedshiftClusterLoggingProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftClusterLoggingPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftClusterLoggingProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftClusterLoggingProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // log_destination_type - computed: true, optional: false, required: false
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }

  // log_exports - computed: true, optional: false, required: false
  public get logExports() {
    return this.getListAttribute('log_exports');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}
export interface DataAwsccRedshiftClusterTags {
}

export function dataAwsccRedshiftClusterTagsToTerraform(struct?: DataAwsccRedshiftClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftClusterTagsToHclTerraform(struct?: DataAwsccRedshiftClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftClusterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftClusterTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftClusterTags | undefined) {
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

export class DataAwsccRedshiftClusterTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftClusterTagsOutputReference {
    return new DataAwsccRedshiftClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/redshift_cluster awscc_redshift_cluster}
*/
export class DataAwsccRedshiftCluster extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_redshift_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRedshiftCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRedshiftCluster to import
  * @param importFromId The id of the existing DataAwsccRedshiftCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/redshift_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRedshiftCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/redshift_cluster awscc_redshift_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRedshiftClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRedshiftClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_redshift_cluster',
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

  // allow_version_upgrade - computed: true, optional: false, required: false
  public get allowVersionUpgrade() {
    return this.getBooleanAttribute('allow_version_upgrade');
  }

  // aqua_configuration_status - computed: true, optional: false, required: false
  public get aquaConfigurationStatus() {
    return this.getStringAttribute('aqua_configuration_status');
  }

  // automated_snapshot_retention_period - computed: true, optional: false, required: false
  public get automatedSnapshotRetentionPeriod() {
    return this.getNumberAttribute('automated_snapshot_retention_period');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_relocation - computed: true, optional: false, required: false
  public get availabilityZoneRelocation() {
    return this.getBooleanAttribute('availability_zone_relocation');
  }

  // availability_zone_relocation_status - computed: true, optional: false, required: false
  public get availabilityZoneRelocationStatus() {
    return this.getStringAttribute('availability_zone_relocation_status');
  }

  // classic - computed: true, optional: false, required: false
  public get classic() {
    return this.getBooleanAttribute('classic');
  }

  // cluster_identifier - computed: true, optional: false, required: false
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }

  // cluster_namespace_arn - computed: true, optional: false, required: false
  public get clusterNamespaceArn() {
    return this.getStringAttribute('cluster_namespace_arn');
  }

  // cluster_parameter_group_name - computed: true, optional: false, required: false
  public get clusterParameterGroupName() {
    return this.getStringAttribute('cluster_parameter_group_name');
  }

  // cluster_security_groups - computed: true, optional: false, required: false
  public get clusterSecurityGroups() {
    return this.getListAttribute('cluster_security_groups');
  }

  // cluster_subnet_group_name - computed: true, optional: false, required: false
  public get clusterSubnetGroupName() {
    return this.getStringAttribute('cluster_subnet_group_name');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // defer_maintenance - computed: true, optional: false, required: false
  public get deferMaintenance() {
    return this.getBooleanAttribute('defer_maintenance');
  }

  // defer_maintenance_duration - computed: true, optional: false, required: false
  public get deferMaintenanceDuration() {
    return this.getNumberAttribute('defer_maintenance_duration');
  }

  // defer_maintenance_end_time - computed: true, optional: false, required: false
  public get deferMaintenanceEndTime() {
    return this.getStringAttribute('defer_maintenance_end_time');
  }

  // defer_maintenance_identifier - computed: true, optional: false, required: false
  public get deferMaintenanceIdentifier() {
    return this.getStringAttribute('defer_maintenance_identifier');
  }

  // defer_maintenance_start_time - computed: true, optional: false, required: false
  public get deferMaintenanceStartTime() {
    return this.getStringAttribute('defer_maintenance_start_time');
  }

  // destination_region - computed: true, optional: false, required: false
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }

  // elastic_ip - computed: true, optional: false, required: false
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataAwsccRedshiftClusterEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // enhanced_vpc_routing - computed: true, optional: false, required: false
  public get enhancedVpcRouting() {
    return this.getBooleanAttribute('enhanced_vpc_routing');
  }

  // hsm_client_certificate_identifier - computed: true, optional: false, required: false
  public get hsmClientCertificateIdentifier() {
    return this.getStringAttribute('hsm_client_certificate_identifier');
  }

  // hsm_configuration_identifier - computed: true, optional: false, required: false
  public get hsmConfigurationIdentifier() {
    return this.getStringAttribute('hsm_configuration_identifier');
  }

  // iam_roles - computed: true, optional: false, required: false
  public get iamRoles() {
    return this.getListAttribute('iam_roles');
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // logging_properties - computed: true, optional: false, required: false
  private _loggingProperties = new DataAwsccRedshiftClusterLoggingPropertiesOutputReference(this, "logging_properties");
  public get loggingProperties() {
    return this._loggingProperties;
  }

  // maintenance_track_name - computed: true, optional: false, required: false
  public get maintenanceTrackName() {
    return this.getStringAttribute('maintenance_track_name');
  }

  // manage_master_password - computed: true, optional: false, required: false
  public get manageMasterPassword() {
    return this.getBooleanAttribute('manage_master_password');
  }

  // manual_snapshot_retention_period - computed: true, optional: false, required: false
  public get manualSnapshotRetentionPeriod() {
    return this.getNumberAttribute('manual_snapshot_retention_period');
  }

  // master_password_secret_arn - computed: true, optional: false, required: false
  public get masterPasswordSecretArn() {
    return this.getStringAttribute('master_password_secret_arn');
  }

  // master_password_secret_kms_key_id - computed: true, optional: false, required: false
  public get masterPasswordSecretKmsKeyId() {
    return this.getStringAttribute('master_password_secret_kms_key_id');
  }

  // master_user_password - computed: true, optional: false, required: false
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }

  // master_username - computed: true, optional: false, required: false
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // multi_az - computed: true, optional: false, required: false
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }

  // namespace_resource_policy - computed: true, optional: false, required: false
  public get namespaceResourcePolicy() {
    return this.getStringAttribute('namespace_resource_policy');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // owner_account - computed: true, optional: false, required: false
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // resource_action - computed: true, optional: false, required: false
  public get resourceAction() {
    return this.getStringAttribute('resource_action');
  }

  // revision_target - computed: true, optional: false, required: false
  public get revisionTarget() {
    return this.getStringAttribute('revision_target');
  }

  // rotate_encryption_key - computed: true, optional: false, required: false
  public get rotateEncryptionKey() {
    return this.getBooleanAttribute('rotate_encryption_key');
  }

  // snapshot_cluster_identifier - computed: true, optional: false, required: false
  public get snapshotClusterIdentifier() {
    return this.getStringAttribute('snapshot_cluster_identifier');
  }

  // snapshot_copy_grant_name - computed: true, optional: false, required: false
  public get snapshotCopyGrantName() {
    return this.getStringAttribute('snapshot_copy_grant_name');
  }

  // snapshot_copy_manual - computed: true, optional: false, required: false
  public get snapshotCopyManual() {
    return this.getBooleanAttribute('snapshot_copy_manual');
  }

  // snapshot_copy_retention_period - computed: true, optional: false, required: false
  public get snapshotCopyRetentionPeriod() {
    return this.getNumberAttribute('snapshot_copy_retention_period');
  }

  // snapshot_identifier - computed: true, optional: false, required: false
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRedshiftClusterTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
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
