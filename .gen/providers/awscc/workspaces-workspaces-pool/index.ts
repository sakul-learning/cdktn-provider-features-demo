// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspacesWorkspacesPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}
  */
  readonly applicationSettings?: WorkspacesWorkspacesPoolApplicationSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}
  */
  readonly capacity: WorkspacesWorkspacesPoolCapacity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}
  */
  readonly poolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}
  */
  readonly runningMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}
  */
  readonly tags?: WorkspacesWorkspacesPoolTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}
  */
  readonly timeoutSettings?: WorkspacesWorkspacesPoolTimeoutSettings;
}
export interface WorkspacesWorkspacesPoolApplicationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}
  */
  readonly settingsGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}
  */
  readonly status?: string;
}

export function workspacesWorkspacesPoolApplicationSettingsToTerraform(struct?: WorkspacesWorkspacesPoolApplicationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    settings_group: cdktn.stringToTerraform(struct!.settingsGroup),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function workspacesWorkspacesPoolApplicationSettingsToHclTerraform(struct?: WorkspacesWorkspacesPoolApplicationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    settings_group: {
      value: cdktn.stringToHclTerraform(struct!.settingsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspacesPoolApplicationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspacesWorkspacesPoolApplicationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settingsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsGroup = this._settingsGroup;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspacesPoolApplicationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settingsGroup = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settingsGroup = value.settingsGroup;
      this._status = value.status;
    }
  }

  // settings_group - computed: true, optional: true, required: false
  private _settingsGroup?: string;
  public get settingsGroup() {
    return this.getStringAttribute('settings_group');
  }
  public set settingsGroup(value: string) {
    this._settingsGroup = value;
  }
  public resetSettingsGroup() {
    this._settingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsGroupInput() {
    return this._settingsGroup;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface WorkspacesWorkspacesPoolCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}
  */
  readonly desiredUserSessions: number;
}

export function workspacesWorkspacesPoolCapacityToTerraform(struct?: WorkspacesWorkspacesPoolCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    desired_user_sessions: cdktn.numberToTerraform(struct!.desiredUserSessions),
  }
}


export function workspacesWorkspacesPoolCapacityToHclTerraform(struct?: WorkspacesWorkspacesPoolCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    desired_user_sessions: {
      value: cdktn.numberToHclTerraform(struct!.desiredUserSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspacesPoolCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspacesWorkspacesPoolCapacity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredUserSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredUserSessions = this._desiredUserSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspacesPoolCapacity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredUserSessions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredUserSessions = value.desiredUserSessions;
    }
  }

  // desired_user_sessions - computed: false, optional: false, required: true
  private _desiredUserSessions?: number;
  public get desiredUserSessions() {
    return this.getNumberAttribute('desired_user_sessions');
  }
  public set desiredUserSessions(value: number) {
    this._desiredUserSessions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredUserSessionsInput() {
    return this._desiredUserSessions;
  }
}
export interface WorkspacesWorkspacesPoolTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}
  */
  readonly value?: string;
}

export function workspacesWorkspacesPoolTagsToTerraform(struct?: WorkspacesWorkspacesPoolTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function workspacesWorkspacesPoolTagsToHclTerraform(struct?: WorkspacesWorkspacesPoolTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspacesPoolTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspacesWorkspacesPoolTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspacesPoolTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class WorkspacesWorkspacesPoolTagsList extends cdktn.ComplexList {
  public internalValue? : WorkspacesWorkspacesPoolTags[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesWorkspacesPoolTagsOutputReference {
    return new WorkspacesWorkspacesPoolTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesWorkspacesPoolTimeoutSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}
  */
  readonly disconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}
  */
  readonly idleDisconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}
  */
  readonly maxUserDurationInSeconds?: number;
}

export function workspacesWorkspacesPoolTimeoutSettingsToTerraform(struct?: WorkspacesWorkspacesPoolTimeoutSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disconnect_timeout_in_seconds: cdktn.numberToTerraform(struct!.disconnectTimeoutInSeconds),
    idle_disconnect_timeout_in_seconds: cdktn.numberToTerraform(struct!.idleDisconnectTimeoutInSeconds),
    max_user_duration_in_seconds: cdktn.numberToTerraform(struct!.maxUserDurationInSeconds),
  }
}


export function workspacesWorkspacesPoolTimeoutSettingsToHclTerraform(struct?: WorkspacesWorkspacesPoolTimeoutSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disconnect_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.disconnectTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_disconnect_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.idleDisconnectTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_user_duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxUserDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspacesPoolTimeoutSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspacesWorkspacesPoolTimeoutSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disconnectTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectTimeoutInSeconds = this._disconnectTimeoutInSeconds;
    }
    if (this._idleDisconnectTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDisconnectTimeoutInSeconds = this._idleDisconnectTimeoutInSeconds;
    }
    if (this._maxUserDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserDurationInSeconds = this._maxUserDurationInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspacesPoolTimeoutSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disconnectTimeoutInSeconds = undefined;
      this._idleDisconnectTimeoutInSeconds = undefined;
      this._maxUserDurationInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disconnectTimeoutInSeconds = value.disconnectTimeoutInSeconds;
      this._idleDisconnectTimeoutInSeconds = value.idleDisconnectTimeoutInSeconds;
      this._maxUserDurationInSeconds = value.maxUserDurationInSeconds;
    }
  }

  // disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _disconnectTimeoutInSeconds?: number;
  public get disconnectTimeoutInSeconds() {
    return this.getNumberAttribute('disconnect_timeout_in_seconds');
  }
  public set disconnectTimeoutInSeconds(value: number) {
    this._disconnectTimeoutInSeconds = value;
  }
  public resetDisconnectTimeoutInSeconds() {
    this._disconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInSecondsInput() {
    return this._disconnectTimeoutInSeconds;
  }

  // idle_disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _idleDisconnectTimeoutInSeconds?: number;
  public get idleDisconnectTimeoutInSeconds() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
  }
  public set idleDisconnectTimeoutInSeconds(value: number) {
    this._idleDisconnectTimeoutInSeconds = value;
  }
  public resetIdleDisconnectTimeoutInSeconds() {
    this._idleDisconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDisconnectTimeoutInSecondsInput() {
    return this._idleDisconnectTimeoutInSeconds;
  }

  // max_user_duration_in_seconds - computed: true, optional: true, required: false
  private _maxUserDurationInSeconds?: number;
  public get maxUserDurationInSeconds() {
    return this.getNumberAttribute('max_user_duration_in_seconds');
  }
  public set maxUserDurationInSeconds(value: number) {
    this._maxUserDurationInSeconds = value;
  }
  public resetMaxUserDurationInSeconds() {
    this._maxUserDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserDurationInSecondsInput() {
    return this._maxUserDurationInSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}
*/
export class WorkspacesWorkspacesPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspaces_workspaces_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspacesWorkspacesPool to import
  * @param importFromId The id of the existing WorkspacesWorkspacesPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspacesWorkspacesPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspaces_workspaces_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesWorkspacesPoolConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesWorkspacesPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspaces_workspaces_pool',
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
    this._applicationSettings.internalValue = config.applicationSettings;
    this._bundleId = config.bundleId;
    this._capacity.internalValue = config.capacity;
    this._description = config.description;
    this._directoryId = config.directoryId;
    this._poolName = config.poolName;
    this._runningMode = config.runningMode;
    this._tags.internalValue = config.tags;
    this._timeoutSettings.internalValue = config.timeoutSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_settings - computed: true, optional: true, required: false
  private _applicationSettings = new WorkspacesWorkspacesPoolApplicationSettingsOutputReference(this, "application_settings");
  public get applicationSettings() {
    return this._applicationSettings;
  }
  public putApplicationSettings(value: WorkspacesWorkspacesPoolApplicationSettings) {
    this._applicationSettings.internalValue = value;
  }
  public resetApplicationSettings() {
    this._applicationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSettingsInput() {
    return this._applicationSettings.internalValue;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string;
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity = new WorkspacesWorkspacesPoolCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: WorkspacesWorkspacesPoolCapacity) {
    this._capacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string;
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pool_arn - computed: true, optional: false, required: false
  public get poolArn() {
    return this.getStringAttribute('pool_arn');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string;
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // running_mode - computed: true, optional: true, required: false
  private _runningMode?: string;
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }
  public set runningMode(value: string) {
    this._runningMode = value;
  }
  public resetRunningMode() {
    this._runningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeInput() {
    return this._runningMode;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WorkspacesWorkspacesPoolTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WorkspacesWorkspacesPoolTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeout_settings - computed: true, optional: true, required: false
  private _timeoutSettings = new WorkspacesWorkspacesPoolTimeoutSettingsOutputReference(this, "timeout_settings");
  public get timeoutSettings() {
    return this._timeoutSettings;
  }
  public putTimeoutSettings(value: WorkspacesWorkspacesPoolTimeoutSettings) {
    this._timeoutSettings.internalValue = value;
  }
  public resetTimeoutSettings() {
    this._timeoutSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSettingsInput() {
    return this._timeoutSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_settings: workspacesWorkspacesPoolApplicationSettingsToTerraform(this._applicationSettings.internalValue),
      bundle_id: cdktn.stringToTerraform(this._bundleId),
      capacity: workspacesWorkspacesPoolCapacityToTerraform(this._capacity.internalValue),
      description: cdktn.stringToTerraform(this._description),
      directory_id: cdktn.stringToTerraform(this._directoryId),
      pool_name: cdktn.stringToTerraform(this._poolName),
      running_mode: cdktn.stringToTerraform(this._runningMode),
      tags: cdktn.listMapper(workspacesWorkspacesPoolTagsToTerraform, false)(this._tags.internalValue),
      timeout_settings: workspacesWorkspacesPoolTimeoutSettingsToTerraform(this._timeoutSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_settings: {
        value: workspacesWorkspacesPoolApplicationSettingsToHclTerraform(this._applicationSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspacesWorkspacesPoolApplicationSettings",
      },
      bundle_id: {
        value: cdktn.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: workspacesWorkspacesPoolCapacityToHclTerraform(this._capacity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspacesWorkspacesPoolCapacity",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktn.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_name: {
        value: cdktn.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      running_mode: {
        value: cdktn.stringToHclTerraform(this._runningMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(workspacesWorkspacesPoolTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesWorkspacesPoolTagsList",
      },
      timeout_settings: {
        value: workspacesWorkspacesPoolTimeoutSettingsToHclTerraform(this._timeoutSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspacesWorkspacesPoolTimeoutSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
