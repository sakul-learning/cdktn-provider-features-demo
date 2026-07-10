// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mwaa_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMwaaEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mwaa_environment#id DataAwsccMwaaEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs {
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsToHclTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs {
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsToHclTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs {
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsToHclTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs {
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsToHclTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs {
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsToHclTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group_arn - computed: true, optional: false, required: false
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccMwaaEnvironmentLoggingConfiguration {
}

export function dataAwsccMwaaEnvironmentLoggingConfigurationToTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentLoggingConfigurationToHclTerraform(struct?: DataAwsccMwaaEnvironmentLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dag_processing_logs - computed: true, optional: false, required: false
  private _dagProcessingLogs = new DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(this, "dag_processing_logs");
  public get dagProcessingLogs() {
    return this._dagProcessingLogs;
  }

  // scheduler_logs - computed: true, optional: false, required: false
  private _schedulerLogs = new DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(this, "scheduler_logs");
  public get schedulerLogs() {
    return this._schedulerLogs;
  }

  // task_logs - computed: true, optional: false, required: false
  private _taskLogs = new DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(this, "task_logs");
  public get taskLogs() {
    return this._taskLogs;
  }

  // webserver_logs - computed: true, optional: false, required: false
  private _webserverLogs = new DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(this, "webserver_logs");
  public get webserverLogs() {
    return this._webserverLogs;
  }

  // worker_logs - computed: true, optional: false, required: false
  private _workerLogs = new DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(this, "worker_logs");
  public get workerLogs() {
    return this._workerLogs;
  }
}
export interface DataAwsccMwaaEnvironmentNetworkConfiguration {
}

export function dataAwsccMwaaEnvironmentNetworkConfigurationToTerraform(struct?: DataAwsccMwaaEnvironmentNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMwaaEnvironmentNetworkConfigurationToHclTerraform(struct?: DataAwsccMwaaEnvironmentNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMwaaEnvironmentNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMwaaEnvironmentNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mwaa_environment awscc_mwaa_environment}
*/
export class DataAwsccMwaaEnvironment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mwaa_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMwaaEnvironment to import
  * @param importFromId The id of the existing DataAwsccMwaaEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mwaa_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMwaaEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mwaa_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/mwaa_environment awscc_mwaa_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMwaaEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMwaaEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mwaa_environment',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_configuration_options - computed: true, optional: false, required: false
  public get airflowConfigurationOptions() {
    return this.getStringAttribute('airflow_configuration_options');
  }

  // airflow_version - computed: true, optional: false, required: false
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // celery_executor_queue - computed: true, optional: false, required: false
  public get celeryExecutorQueue() {
    return this.getStringAttribute('celery_executor_queue');
  }

  // dag_s3_path - computed: true, optional: false, required: false
  public get dagS3Path() {
    return this.getStringAttribute('dag_s3_path');
  }

  // database_vpc_endpoint_service - computed: true, optional: false, required: false
  public get databaseVpcEndpointService() {
    return this.getStringAttribute('database_vpc_endpoint_service');
  }

  // endpoint_management - computed: true, optional: false, required: false
  public get endpointManagement() {
    return this.getStringAttribute('endpoint_management');
  }

  // environment_class - computed: true, optional: false, required: false
  public get environmentClass() {
    return this.getStringAttribute('environment_class');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
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

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }

  // max_webservers - computed: true, optional: false, required: false
  public get maxWebservers() {
    return this.getNumberAttribute('max_webservers');
  }

  // max_workers - computed: true, optional: false, required: false
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }

  // min_webservers - computed: true, optional: false, required: false
  public get minWebservers() {
    return this.getNumberAttribute('min_webservers');
  }

  // min_workers - computed: true, optional: false, required: false
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // plugins_s3_object_version - computed: true, optional: false, required: false
  public get pluginsS3ObjectVersion() {
    return this.getStringAttribute('plugins_s3_object_version');
  }

  // plugins_s3_path - computed: true, optional: false, required: false
  public get pluginsS3Path() {
    return this.getStringAttribute('plugins_s3_path');
  }

  // requirements_s3_object_version - computed: true, optional: false, required: false
  public get requirementsS3ObjectVersion() {
    return this.getStringAttribute('requirements_s3_object_version');
  }

  // requirements_s3_path - computed: true, optional: false, required: false
  public get requirementsS3Path() {
    return this.getStringAttribute('requirements_s3_path');
  }

  // schedulers - computed: true, optional: false, required: false
  public get schedulers() {
    return this.getNumberAttribute('schedulers');
  }

  // source_bucket_arn - computed: true, optional: false, required: false
  public get sourceBucketArn() {
    return this.getStringAttribute('source_bucket_arn');
  }

  // startup_script_s3_object_version - computed: true, optional: false, required: false
  public get startupScriptS3ObjectVersion() {
    return this.getStringAttribute('startup_script_s3_object_version');
  }

  // startup_script_s3_path - computed: true, optional: false, required: false
  public get startupScriptS3Path() {
    return this.getStringAttribute('startup_script_s3_path');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // webserver_access_mode - computed: true, optional: false, required: false
  public get webserverAccessMode() {
    return this.getStringAttribute('webserver_access_mode');
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // webserver_vpc_endpoint_service - computed: true, optional: false, required: false
  public get webserverVpcEndpointService() {
    return this.getStringAttribute('webserver_vpc_endpoint_service');
  }

  // weekly_maintenance_window_start - computed: true, optional: false, required: false
  public get weeklyMaintenanceWindowStart() {
    return this.getStringAttribute('weekly_maintenance_window_start');
  }

  // worker_replacement_strategy - computed: true, optional: false, required: false
  public get workerReplacementStrategy() {
    return this.getStringAttribute('worker_replacement_strategy');
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
