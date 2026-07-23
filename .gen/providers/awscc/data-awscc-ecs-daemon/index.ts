// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ecs_daemon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcsDaemonConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ecs_daemon#id DataAwsccEcsDaemon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEcsDaemonDeploymentConfigurationAlarms {
}

export function dataAwsccEcsDaemonDeploymentConfigurationAlarmsToTerraform(struct?: DataAwsccEcsDaemonDeploymentConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonDeploymentConfigurationAlarmsToHclTerraform(struct?: DataAwsccEcsDaemonDeploymentConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonDeploymentConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonDeploymentConfigurationAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonDeploymentConfigurationAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_names - computed: true, optional: false, required: false
  public get alarmNames() {
    return this.getListAttribute('alarm_names');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataAwsccEcsDaemonDeploymentConfiguration {
}

export function dataAwsccEcsDaemonDeploymentConfigurationToTerraform(struct?: DataAwsccEcsDaemonDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonDeploymentConfigurationToHclTerraform(struct?: DataAwsccEcsDaemonDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonDeploymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsDaemonDeploymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonDeploymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccEcsDaemonDeploymentConfigurationAlarmsOutputReference(this, "alarms");
  public get alarms() {
    return this._alarms;
  }

  // bake_time_in_minutes - computed: true, optional: false, required: false
  public get bakeTimeInMinutes() {
    return this.getNumberAttribute('bake_time_in_minutes');
  }

  // drain_percent - computed: true, optional: false, required: false
  public get drainPercent() {
    return this.getNumberAttribute('drain_percent');
  }
}
export interface DataAwsccEcsDaemonTags {
}

export function dataAwsccEcsDaemonTagsToTerraform(struct?: DataAwsccEcsDaemonTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsDaemonTagsToHclTerraform(struct?: DataAwsccEcsDaemonTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsDaemonTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsDaemonTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsDaemonTags | undefined) {
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

export class DataAwsccEcsDaemonTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsDaemonTagsOutputReference {
    return new DataAwsccEcsDaemonTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ecs_daemon awscc_ecs_daemon}
*/
export class DataAwsccEcsDaemon extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_daemon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcsDaemon resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcsDaemon to import
  * @param importFromId The id of the existing DataAwsccEcsDaemon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ecs_daemon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcsDaemon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_daemon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ecs_daemon awscc_ecs_daemon} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsDaemonConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsDaemonConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_daemon',
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

  // capacity_provider_arns - computed: true, optional: false, required: false
  public get capacityProviderArns() {
    return this.getListAttribute('capacity_provider_arns');
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // daemon_arn - computed: true, optional: false, required: false
  public get daemonArn() {
    return this.getStringAttribute('daemon_arn');
  }

  // daemon_name - computed: true, optional: false, required: false
  public get daemonName() {
    return this.getStringAttribute('daemon_name');
  }

  // daemon_status - computed: true, optional: false, required: false
  public get daemonStatus() {
    return this.getStringAttribute('daemon_status');
  }

  // daemon_task_definition_arn - computed: true, optional: false, required: false
  public get daemonTaskDefinitionArn() {
    return this.getStringAttribute('daemon_task_definition_arn');
  }

  // deployment_arn - computed: true, optional: false, required: false
  public get deploymentArn() {
    return this.getStringAttribute('deployment_arn');
  }

  // deployment_configuration - computed: true, optional: false, required: false
  private _deploymentConfiguration = new DataAwsccEcsDaemonDeploymentConfigurationOutputReference(this, "deployment_configuration");
  public get deploymentConfiguration() {
    return this._deploymentConfiguration;
  }

  // enable_ecs_managed_tags - computed: true, optional: false, required: false
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
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

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEcsDaemonTagsList(this, "tags", false);
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
