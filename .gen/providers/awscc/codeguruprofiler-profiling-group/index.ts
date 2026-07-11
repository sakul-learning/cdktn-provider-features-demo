// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CodeguruprofilerProfilingGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The agent permissions attached to this profiling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}
  */
  readonly agentPermissions?: CodeguruprofilerProfilingGroupAgentPermissions;
  /**
  * Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}
  */
  readonly anomalyDetectionNotificationConfiguration?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] | cdktn.IResolvable;
  /**
  * The compute platform of the profiling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * The name of the profiling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}
  */
  readonly profilingGroupName: string;
  /**
  * The tags associated with a profiling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}
  */
  readonly tags?: CodeguruprofilerProfilingGroupTags[] | cdktn.IResolvable;
}
export interface CodeguruprofilerProfilingGroupAgentPermissions {
  /**
  * The principals for the agent permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#principals CodeguruprofilerProfilingGroup#principals}
  */
  readonly principals?: string[];
}

export function codeguruprofilerProfilingGroupAgentPermissionsToTerraform(struct?: CodeguruprofilerProfilingGroupAgentPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.principals),
  }
}


export function codeguruprofilerProfilingGroupAgentPermissionsToHclTerraform(struct?: CodeguruprofilerProfilingGroupAgentPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeguruprofilerProfilingGroupAgentPermissionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodeguruprofilerProfilingGroupAgentPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeguruprofilerProfilingGroupAgentPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
    }
  }

  // principals - computed: true, optional: true, required: false
  private _principals?: string[];
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}
export interface CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration {
  /**
  * Unique identifier for each Channel in the notification configuration of a Profiling Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#channel_id CodeguruprofilerProfilingGroup#channel_id}
  */
  readonly channelId?: string;
  /**
  * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#channel_uri CodeguruprofilerProfilingGroup#channel_uri}
  */
  readonly channelUri?: string;
}

export function codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform(struct?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_id: cdktn.stringToTerraform(struct!.channelId),
    channel_uri: cdktn.stringToTerraform(struct!.channelUri),
  }
}


export function codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToHclTerraform(struct?: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_id: {
      value: cdktn.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_uri: {
      value: cdktn.stringToHclTerraform(struct!.channelUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._channelUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelUri = this._channelUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._channelUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._channelUri = value.channelUri;
    }
  }

  // channel_id - computed: true, optional: true, required: false
  private _channelId?: string;
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_uri - computed: true, optional: true, required: false
  private _channelUri?: string;
  public get channelUri() {
    return this.getStringAttribute('channel_uri');
  }
  public set channelUri(value: string) {
    this._channelUri = value;
  }
  public resetChannelUri() {
    this._channelUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelUriInput() {
    return this._channelUri;
  }
}

export class CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList extends cdktn.ComplexList {
  public internalValue? : CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] | cdktn.IResolvable

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
  public get(index: number): CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference {
    return new CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodeguruprofilerProfilingGroupTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#key CodeguruprofilerProfilingGroup#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#value CodeguruprofilerProfilingGroup#value}
  */
  readonly value?: string;
}

export function codeguruprofilerProfilingGroupTagsToTerraform(struct?: CodeguruprofilerProfilingGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function codeguruprofilerProfilingGroupTagsToHclTerraform(struct?: CodeguruprofilerProfilingGroupTags | cdktn.IResolvable): any {
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

export class CodeguruprofilerProfilingGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CodeguruprofilerProfilingGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CodeguruprofilerProfilingGroupTags | cdktn.IResolvable | undefined) {
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

export class CodeguruprofilerProfilingGroupTagsList extends cdktn.ComplexList {
  public internalValue? : CodeguruprofilerProfilingGroupTags[] | cdktn.IResolvable

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
  public get(index: number): CodeguruprofilerProfilingGroupTagsOutputReference {
    return new CodeguruprofilerProfilingGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}
*/
export class CodeguruprofilerProfilingGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codeguruprofiler_profiling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import
  * @param importFromId The id of the existing CodeguruprofilerProfilingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codeguruprofiler_profiling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodeguruprofilerProfilingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CodeguruprofilerProfilingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codeguruprofiler_profiling_group',
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
    this._agentPermissions.internalValue = config.agentPermissions;
    this._anomalyDetectionNotificationConfiguration.internalValue = config.anomalyDetectionNotificationConfiguration;
    this._computePlatform = config.computePlatform;
    this._profilingGroupName = config.profilingGroupName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_permissions - computed: true, optional: true, required: false
  private _agentPermissions = new CodeguruprofilerProfilingGroupAgentPermissionsOutputReference(this, "agent_permissions");
  public get agentPermissions() {
    return this._agentPermissions;
  }
  public putAgentPermissions(value: CodeguruprofilerProfilingGroupAgentPermissions) {
    this._agentPermissions.internalValue = value;
  }
  public resetAgentPermissions() {
    this._agentPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPermissionsInput() {
    return this._agentPermissions.internalValue;
  }

  // anomaly_detection_notification_configuration - computed: true, optional: true, required: false
  private _anomalyDetectionNotificationConfiguration = new CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(this, "anomaly_detection_notification_configuration", false);
  public get anomalyDetectionNotificationConfiguration() {
    return this._anomalyDetectionNotificationConfiguration;
  }
  public putAnomalyDetectionNotificationConfiguration(value: CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] | cdktn.IResolvable) {
    this._anomalyDetectionNotificationConfiguration.internalValue = value;
  }
  public resetAnomalyDetectionNotificationConfiguration() {
    this._anomalyDetectionNotificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionNotificationConfigurationInput() {
    return this._anomalyDetectionNotificationConfiguration.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_platform - computed: true, optional: true, required: false
  private _computePlatform?: string;
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profiling_group_name - computed: false, optional: false, required: true
  private _profilingGroupName?: string;
  public get profilingGroupName() {
    return this.getStringAttribute('profiling_group_name');
  }
  public set profilingGroupName(value: string) {
    this._profilingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingGroupNameInput() {
    return this._profilingGroupName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CodeguruprofilerProfilingGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CodeguruprofilerProfilingGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_permissions: codeguruprofilerProfilingGroupAgentPermissionsToTerraform(this._agentPermissions.internalValue),
      anomaly_detection_notification_configuration: cdktn.listMapper(codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToTerraform, false)(this._anomalyDetectionNotificationConfiguration.internalValue),
      compute_platform: cdktn.stringToTerraform(this._computePlatform),
      profiling_group_name: cdktn.stringToTerraform(this._profilingGroupName),
      tags: cdktn.listMapper(codeguruprofilerProfilingGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_permissions: {
        value: codeguruprofilerProfilingGroupAgentPermissionsToHclTerraform(this._agentPermissions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodeguruprofilerProfilingGroupAgentPermissions",
      },
      anomaly_detection_notification_configuration: {
        value: cdktn.listMapperHcl(codeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationToHclTerraform, false)(this._anomalyDetectionNotificationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList",
      },
      compute_platform: {
        value: cdktn.stringToHclTerraform(this._computePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profiling_group_name: {
        value: cdktn.stringToHclTerraform(this._profilingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(codeguruprofilerProfilingGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodeguruprofilerProfilingGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
