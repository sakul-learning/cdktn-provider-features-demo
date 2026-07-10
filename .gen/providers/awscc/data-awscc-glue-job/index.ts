// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/glue_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlueJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/glue_job#id DataAwsccGlueJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlueJobCommand {
}

export function dataAwsccGlueJobCommandToTerraform(struct?: DataAwsccGlueJobCommand): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueJobCommandToHclTerraform(struct?: DataAwsccGlueJobCommand): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueJobCommandOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueJobCommand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueJobCommand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // python_version - computed: true, optional: false, required: false
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // script_location - computed: true, optional: false, required: false
  public get scriptLocation() {
    return this.getStringAttribute('script_location');
  }
}
export interface DataAwsccGlueJobConnections {
}

export function dataAwsccGlueJobConnectionsToTerraform(struct?: DataAwsccGlueJobConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueJobConnectionsToHclTerraform(struct?: DataAwsccGlueJobConnections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueJobConnectionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueJobConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueJobConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  public get connections() {
    return this.getListAttribute('connections');
  }
}
export interface DataAwsccGlueJobExecutionProperty {
}

export function dataAwsccGlueJobExecutionPropertyToTerraform(struct?: DataAwsccGlueJobExecutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueJobExecutionPropertyToHclTerraform(struct?: DataAwsccGlueJobExecutionProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueJobExecutionPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueJobExecutionProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueJobExecutionProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_concurrent_runs - computed: true, optional: false, required: false
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
}
export interface DataAwsccGlueJobNotificationProperty {
}

export function dataAwsccGlueJobNotificationPropertyToTerraform(struct?: DataAwsccGlueJobNotificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueJobNotificationPropertyToHclTerraform(struct?: DataAwsccGlueJobNotificationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueJobNotificationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueJobNotificationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueJobNotificationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notify_delay_after - computed: true, optional: false, required: false
  public get notifyDelayAfter() {
    return this.getNumberAttribute('notify_delay_after');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/glue_job awscc_glue_job}
*/
export class DataAwsccGlueJob extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlueJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlueJob to import
  * @param importFromId The id of the existing DataAwsccGlueJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/glue_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlueJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/glue_job awscc_glue_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueJobConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_job',
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

  // allocated_capacity - computed: true, optional: false, required: false
  public get allocatedCapacity() {
    return this.getNumberAttribute('allocated_capacity');
  }

  // command - computed: true, optional: false, required: false
  private _command = new DataAwsccGlueJobCommandOutputReference(this, "command");
  public get command() {
    return this._command;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataAwsccGlueJobConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }

  // default_arguments - computed: true, optional: false, required: false
  public get defaultArguments() {
    return this.getStringAttribute('default_arguments');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_class - computed: true, optional: false, required: false
  public get executionClass() {
    return this.getStringAttribute('execution_class');
  }

  // execution_property - computed: true, optional: false, required: false
  private _executionProperty = new DataAwsccGlueJobExecutionPropertyOutputReference(this, "execution_property");
  public get executionProperty() {
    return this._executionProperty;
  }

  // glue_version - computed: true, optional: false, required: false
  public get glueVersion() {
    return this.getStringAttribute('glue_version');
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

  // job_mode - computed: true, optional: false, required: false
  public get jobMode() {
    return this.getStringAttribute('job_mode');
  }

  // job_run_queuing_enabled - computed: true, optional: false, required: false
  public get jobRunQueuingEnabled() {
    return this.getBooleanAttribute('job_run_queuing_enabled');
  }

  // log_uri - computed: true, optional: false, required: false
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }

  // maintenance_window - computed: true, optional: false, required: false
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_overridable_arguments - computed: true, optional: false, required: false
  public get nonOverridableArguments() {
    return this.getStringAttribute('non_overridable_arguments');
  }

  // notification_property - computed: true, optional: false, required: false
  private _notificationProperty = new DataAwsccGlueJobNotificationPropertyOutputReference(this, "notification_property");
  public get notificationProperty() {
    return this._notificationProperty;
  }

  // number_of_workers - computed: true, optional: false, required: false
  public get numberOfWorkers() {
    return this.getNumberAttribute('number_of_workers');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // security_configuration - computed: true, optional: false, required: false
  public get securityConfiguration() {
    return this.getStringAttribute('security_configuration');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // worker_type - computed: true, optional: false, required: false
  public get workerType() {
    return this.getStringAttribute('worker_type');
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
