// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rds_db_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRdsDbClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rds_db_cluster#id DataAwsccRdsDbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRdsDbClusterAssociatedRoles {
}

export function dataAwsccRdsDbClusterAssociatedRolesToTerraform(struct?: DataAwsccRdsDbClusterAssociatedRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterAssociatedRolesToHclTerraform(struct?: DataAwsccRdsDbClusterAssociatedRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterAssociatedRolesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbClusterAssociatedRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterAssociatedRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_name - computed: true, optional: false, required: false
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class DataAwsccRdsDbClusterAssociatedRolesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbClusterAssociatedRolesOutputReference {
    return new DataAwsccRdsDbClusterAssociatedRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRdsDbClusterEndpoint {
}

export function dataAwsccRdsDbClusterEndpointToTerraform(struct?: DataAwsccRdsDbClusterEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterEndpointToHclTerraform(struct?: DataAwsccRdsDbClusterEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbClusterEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterEndpoint | undefined) {
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
export interface DataAwsccRdsDbClusterMasterUserSecret {
}

export function dataAwsccRdsDbClusterMasterUserSecretToTerraform(struct?: DataAwsccRdsDbClusterMasterUserSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterMasterUserSecretToHclTerraform(struct?: DataAwsccRdsDbClusterMasterUserSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterMasterUserSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbClusterMasterUserSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterMasterUserSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccRdsDbClusterReadEndpoint {
}

export function dataAwsccRdsDbClusterReadEndpointToTerraform(struct?: DataAwsccRdsDbClusterReadEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterReadEndpointToHclTerraform(struct?: DataAwsccRdsDbClusterReadEndpoint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterReadEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbClusterReadEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterReadEndpoint | undefined) {
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
}
export interface DataAwsccRdsDbClusterScalingConfiguration {
}

export function dataAwsccRdsDbClusterScalingConfigurationToTerraform(struct?: DataAwsccRdsDbClusterScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterScalingConfigurationToHclTerraform(struct?: DataAwsccRdsDbClusterScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbClusterScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_pause - computed: true, optional: false, required: false
  public get autoPause() {
    return this.getBooleanAttribute('auto_pause');
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seconds_before_timeout - computed: true, optional: false, required: false
  public get secondsBeforeTimeout() {
    return this.getNumberAttribute('seconds_before_timeout');
  }

  // seconds_until_auto_pause - computed: true, optional: false, required: false
  public get secondsUntilAutoPause() {
    return this.getNumberAttribute('seconds_until_auto_pause');
  }

  // timeout_action - computed: true, optional: false, required: false
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
}
export interface DataAwsccRdsDbClusterServerlessV2ScalingConfiguration {
}

export function dataAwsccRdsDbClusterServerlessV2ScalingConfigurationToTerraform(struct?: DataAwsccRdsDbClusterServerlessV2ScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterServerlessV2ScalingConfigurationToHclTerraform(struct?: DataAwsccRdsDbClusterServerlessV2ScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterServerlessV2ScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRdsDbClusterServerlessV2ScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterServerlessV2ScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seconds_until_auto_pause - computed: true, optional: false, required: false
  public get secondsUntilAutoPause() {
    return this.getNumberAttribute('seconds_until_auto_pause');
  }
}
export interface DataAwsccRdsDbClusterTags {
}

export function dataAwsccRdsDbClusterTagsToTerraform(struct?: DataAwsccRdsDbClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRdsDbClusterTagsToHclTerraform(struct?: DataAwsccRdsDbClusterTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRdsDbClusterTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRdsDbClusterTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRdsDbClusterTags | undefined) {
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

export class DataAwsccRdsDbClusterTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRdsDbClusterTagsOutputReference {
    return new DataAwsccRdsDbClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rds_db_cluster awscc_rds_db_cluster}
*/
export class DataAwsccRdsDbCluster extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rds_db_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRdsDbCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRdsDbCluster to import
  * @param importFromId The id of the existing DataAwsccRdsDbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rds_db_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRdsDbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rds_db_cluster awscc_rds_db_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRdsDbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRdsDbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_cluster',
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

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // associated_roles - computed: true, optional: false, required: false
  private _associatedRoles = new DataAwsccRdsDbClusterAssociatedRolesList(this, "associated_roles", false);
  public get associatedRoles() {
    return this._associatedRoles;
  }

  // auto_minor_version_upgrade - computed: true, optional: false, required: false
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // backtrack_window - computed: true, optional: false, required: false
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }

  // backup_retention_period - computed: true, optional: false, required: false
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }

  // cluster_scalability_type - computed: true, optional: false, required: false
  public get clusterScalabilityType() {
    return this.getStringAttribute('cluster_scalability_type');
  }

  // copy_tags_to_snapshot - computed: true, optional: false, required: false
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }

  // database_insights_mode - computed: true, optional: false, required: false
  public get databaseInsightsMode() {
    return this.getStringAttribute('database_insights_mode');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // db_cluster_arn - computed: true, optional: false, required: false
  public get dbClusterArn() {
    return this.getStringAttribute('db_cluster_arn');
  }

  // db_cluster_identifier - computed: true, optional: false, required: false
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }

  // db_cluster_instance_class - computed: true, optional: false, required: false
  public get dbClusterInstanceClass() {
    return this.getStringAttribute('db_cluster_instance_class');
  }

  // db_cluster_parameter_group_name - computed: true, optional: false, required: false
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }

  // db_cluster_resource_id - computed: true, optional: false, required: false
  public get dbClusterResourceId() {
    return this.getStringAttribute('db_cluster_resource_id');
  }

  // db_instance_parameter_group_name - computed: true, optional: false, required: false
  public get dbInstanceParameterGroupName() {
    return this.getStringAttribute('db_instance_parameter_group_name');
  }

  // db_subnet_group_name - computed: true, optional: false, required: false
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }

  // db_system_id - computed: true, optional: false, required: false
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // delete_automated_backups - computed: true, optional: false, required: false
  public get deleteAutomatedBackups() {
    return this.getBooleanAttribute('delete_automated_backups');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_iam_role_name - computed: true, optional: false, required: false
  public get domainIamRoleName() {
    return this.getStringAttribute('domain_iam_role_name');
  }

  // enable_cloudwatch_logs_exports - computed: true, optional: false, required: false
  public get enableCloudwatchLogsExports() {
    return this.getListAttribute('enable_cloudwatch_logs_exports');
  }

  // enable_global_write_forwarding - computed: true, optional: false, required: false
  public get enableGlobalWriteForwarding() {
    return this.getBooleanAttribute('enable_global_write_forwarding');
  }

  // enable_http_endpoint - computed: true, optional: false, required: false
  public get enableHttpEndpoint() {
    return this.getBooleanAttribute('enable_http_endpoint');
  }

  // enable_iam_database_authentication - computed: true, optional: false, required: false
  public get enableIamDatabaseAuthentication() {
    return this.getBooleanAttribute('enable_iam_database_authentication');
  }

  // enable_local_write_forwarding - computed: true, optional: false, required: false
  public get enableLocalWriteForwarding() {
    return this.getBooleanAttribute('enable_local_write_forwarding');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new DataAwsccRdsDbClusterEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_lifecycle_support - computed: true, optional: false, required: false
  public get engineLifecycleSupport() {
    return this.getStringAttribute('engine_lifecycle_support');
  }

  // engine_mode - computed: true, optional: false, required: false
  public get engineMode() {
    return this.getStringAttribute('engine_mode');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // global_cluster_identifier - computed: true, optional: false, required: false
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
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

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // manage_master_user_password - computed: true, optional: false, required: false
  public get manageMasterUserPassword() {
    return this.getBooleanAttribute('manage_master_user_password');
  }

  // master_user_authentication_type - computed: true, optional: false, required: false
  public get masterUserAuthenticationType() {
    return this.getStringAttribute('master_user_authentication_type');
  }

  // master_user_password - computed: true, optional: false, required: false
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }

  // master_user_secret - computed: true, optional: false, required: false
  private _masterUserSecret = new DataAwsccRdsDbClusterMasterUserSecretOutputReference(this, "master_user_secret");
  public get masterUserSecret() {
    return this._masterUserSecret;
  }

  // master_username - computed: true, optional: false, required: false
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }

  // monitoring_interval - computed: true, optional: false, required: false
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }

  // monitoring_role_arn - computed: true, optional: false, required: false
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // performance_insights_enabled - computed: true, optional: false, required: false
  public get performanceInsightsEnabled() {
    return this.getBooleanAttribute('performance_insights_enabled');
  }

  // performance_insights_kms_key_id - computed: true, optional: false, required: false
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }

  // performance_insights_retention_period - computed: true, optional: false, required: false
  public get performanceInsightsRetentionPeriod() {
    return this.getNumberAttribute('performance_insights_retention_period');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preferred_backup_window - computed: true, optional: false, required: false
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }

  // preferred_maintenance_window - computed: true, optional: false, required: false
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // read_endpoint - computed: true, optional: false, required: false
  private _readEndpoint = new DataAwsccRdsDbClusterReadEndpointOutputReference(this, "read_endpoint");
  public get readEndpoint() {
    return this._readEndpoint;
  }

  // replication_source_identifier - computed: true, optional: false, required: false
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }

  // restore_to_time - computed: true, optional: false, required: false
  public get restoreToTime() {
    return this.getStringAttribute('restore_to_time');
  }

  // restore_type - computed: true, optional: false, required: false
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }

  // scaling_configuration - computed: true, optional: false, required: false
  private _scalingConfiguration = new DataAwsccRdsDbClusterScalingConfigurationOutputReference(this, "scaling_configuration");
  public get scalingConfiguration() {
    return this._scalingConfiguration;
  }

  // serverless_v2_scaling_configuration - computed: true, optional: false, required: false
  private _serverlessV2ScalingConfiguration = new DataAwsccRdsDbClusterServerlessV2ScalingConfigurationOutputReference(this, "serverless_v2_scaling_configuration");
  public get serverlessV2ScalingConfiguration() {
    return this._serverlessV2ScalingConfiguration;
  }

  // snapshot_identifier - computed: true, optional: false, required: false
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }

  // source_db_cluster_identifier - computed: true, optional: false, required: false
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }

  // source_db_cluster_resource_id - computed: true, optional: false, required: false
  public get sourceDbClusterResourceId() {
    return this.getStringAttribute('source_db_cluster_resource_id');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // storage_encrypted - computed: true, optional: false, required: false
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // storage_encryption_type - computed: true, optional: false, required: false
  public get storageEncryptionType() {
    return this.getStringAttribute('storage_encryption_type');
  }

  // storage_throughput - computed: true, optional: false, required: false
  public get storageThroughput() {
    return this.getNumberAttribute('storage_throughput');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRdsDbClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // use_latest_restorable_time - computed: true, optional: false, required: false
  public get useLatestRestorableTime() {
    return this.getBooleanAttribute('use_latest_restorable_time');
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
