// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspaces_workspaces_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWorkspacesWorkspacesPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspaces_workspaces_pool#id DataAwsccWorkspacesWorkspacesPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccWorkspacesWorkspacesPoolApplicationSettings {
}

export function dataAwsccWorkspacesWorkspacesPoolApplicationSettingsToTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolApplicationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesWorkspacesPoolApplicationSettingsToHclTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolApplicationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesWorkspacesPoolApplicationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesWorkspacesPoolApplicationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // settings_group - computed: true, optional: false, required: false
  public get settingsGroup() {
    return this.getStringAttribute('settings_group');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAwsccWorkspacesWorkspacesPoolCapacity {
}

export function dataAwsccWorkspacesWorkspacesPoolCapacityToTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesWorkspacesPoolCapacityToHclTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesWorkspacesPoolCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesWorkspacesPoolCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_user_sessions - computed: true, optional: false, required: false
  public get desiredUserSessions() {
    return this.getNumberAttribute('desired_user_sessions');
  }
}
export interface DataAwsccWorkspacesWorkspacesPoolTags {
}

export function dataAwsccWorkspacesWorkspacesPoolTagsToTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesWorkspacesPoolTagsToHclTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesWorkspacesPoolTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccWorkspacesWorkspacesPoolTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesWorkspacesPoolTags | undefined) {
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

export class DataAwsccWorkspacesWorkspacesPoolTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccWorkspacesWorkspacesPoolTagsOutputReference {
    return new DataAwsccWorkspacesWorkspacesPoolTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccWorkspacesWorkspacesPoolTimeoutSettings {
}

export function dataAwsccWorkspacesWorkspacesPoolTimeoutSettingsToTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolTimeoutSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccWorkspacesWorkspacesPoolTimeoutSettingsToHclTerraform(struct?: DataAwsccWorkspacesWorkspacesPoolTimeoutSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccWorkspacesWorkspacesPoolTimeoutSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccWorkspacesWorkspacesPoolTimeoutSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disconnect_timeout_in_seconds - computed: true, optional: false, required: false
  public get disconnectTimeoutInSeconds() {
    return this.getNumberAttribute('disconnect_timeout_in_seconds');
  }

  // idle_disconnect_timeout_in_seconds - computed: true, optional: false, required: false
  public get idleDisconnectTimeoutInSeconds() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
  }

  // max_user_duration_in_seconds - computed: true, optional: false, required: false
  public get maxUserDurationInSeconds() {
    return this.getNumberAttribute('max_user_duration_in_seconds');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}
*/
export class DataAwsccWorkspacesWorkspacesPool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspaces_workspaces_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWorkspacesWorkspacesPool to import
  * @param importFromId The id of the existing DataAwsccWorkspacesWorkspacesPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWorkspacesWorkspacesPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspaces_workspaces_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWorkspacesWorkspacesPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWorkspacesWorkspacesPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspaces_workspaces_pool',
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

  // application_settings - computed: true, optional: false, required: false
  private _applicationSettings = new DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference(this, "application_settings");
  public get applicationSettings() {
    return this._applicationSettings;
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
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

  // pool_arn - computed: true, optional: false, required: false
  public get poolArn() {
    return this.getStringAttribute('pool_arn');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // pool_name - computed: true, optional: false, required: false
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }

  // running_mode - computed: true, optional: false, required: false
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccWorkspacesWorkspacesPoolTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // timeout_settings - computed: true, optional: false, required: false
  private _timeoutSettings = new DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference(this, "timeout_settings");
  public get timeoutSettings() {
    return this._timeoutSettings;
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
