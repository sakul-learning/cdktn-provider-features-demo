// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectUserConfig extends cdktn.TerraformMetaArguments {
  /**
  * After Contact Work configurations of a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#after_contact_work_configs ConnectUser#after_contact_work_configs}
  */
  readonly afterContactWorkConfigs?: ConnectUserAfterContactWorkConfigs[] | cdktn.IResolvable;
  /**
  * Auto-accept configurations of a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#auto_accept_configs ConnectUser#auto_accept_configs}
  */
  readonly autoAcceptConfigs?: ConnectUserAutoAcceptConfigs[] | cdktn.IResolvable;
  /**
  * The identifier of the user account in the directory used for identity management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}
  */
  readonly directoryUserId?: string;
  /**
  * The identifier of the hierarchy group for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#hierarchy_group_arn ConnectUser#hierarchy_group_arn}
  */
  readonly hierarchyGroupArn?: string;
  /**
  * The information about the identity of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}
  */
  readonly identityInfo?: ConnectUserIdentityInfo;
  /**
  * The identifier of the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#instance_arn ConnectUser#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#password ConnectUser#password}
  */
  readonly password?: string;
  /**
  * Persistent Connection configurations of a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#persistent_connection_configs ConnectUser#persistent_connection_configs}
  */
  readonly persistentConnectionConfigs?: ConnectUserPersistentConnectionConfigs[] | cdktn.IResolvable;
  /**
  * The phone settings for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}
  */
  readonly phoneConfig?: ConnectUserPhoneConfig;
  /**
  * Phone Number configurations of a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#phone_number_configs ConnectUser#phone_number_configs}
  */
  readonly phoneNumberConfigs?: ConnectUserPhoneNumberConfigs[] | cdktn.IResolvable;
  /**
  * The identifier of the routing profile for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#routing_profile_arn ConnectUser#routing_profile_arn}
  */
  readonly routingProfileArn: string;
  /**
  * One or more security profile arns for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#security_profile_arns ConnectUser#security_profile_arns}
  */
  readonly securityProfileArns: string[];
  /**
  * One or more tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#tags ConnectUser#tags}
  */
  readonly tags?: ConnectUserTags[] | cdktn.IResolvable;
  /**
  * One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#user_proficiencies ConnectUser#user_proficiencies}
  */
  readonly userProficiencies?: ConnectUserUserProficiencies[] | cdktn.IResolvable;
  /**
  * The user name for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#username ConnectUser#username}
  */
  readonly username: string;
  /**
  * Voice Enhancement configurations of a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#voice_enhancement_configs ConnectUser#voice_enhancement_configs}
  */
  readonly voiceEnhancementConfigs?: ConnectUserVoiceEnhancementConfigs[] | cdktn.IResolvable;
}
export interface ConnectUserAfterContactWorkConfigsAfterContactWorkConfig {
  /**
  * The After Call Work (ACW) timeout setting, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}
  */
  readonly afterContactWorkTimeLimit?: number;
}

export function connectUserAfterContactWorkConfigsAfterContactWorkConfigToTerraform(struct?: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    after_contact_work_time_limit: cdktn.numberToTerraform(struct!.afterContactWorkTimeLimit),
  }
}


export function connectUserAfterContactWorkConfigsAfterContactWorkConfigToHclTerraform(struct?: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    after_contact_work_time_limit: {
      value: cdktn.numberToHclTerraform(struct!.afterContactWorkTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectUserAfterContactWorkConfigsAfterContactWorkConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterContactWorkTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterContactWorkTimeLimit = this._afterContactWorkTimeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterContactWorkTimeLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterContactWorkTimeLimit = value.afterContactWorkTimeLimit;
    }
  }

  // after_contact_work_time_limit - computed: true, optional: true, required: false
  private _afterContactWorkTimeLimit?: number;
  public get afterContactWorkTimeLimit() {
    return this.getNumberAttribute('after_contact_work_time_limit');
  }
  public set afterContactWorkTimeLimit(value: number) {
    this._afterContactWorkTimeLimit = value;
  }
  public resetAfterContactWorkTimeLimit() {
    this._afterContactWorkTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterContactWorkTimeLimitInput() {
    return this._afterContactWorkTimeLimit;
  }
}
export interface ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig {
  /**
  * The After Call Work (ACW) timeout setting, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}
  */
  readonly afterContactWorkTimeLimit?: number;
}

export function connectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigToTerraform(struct?: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    after_contact_work_time_limit: cdktn.numberToTerraform(struct!.afterContactWorkTimeLimit),
  }
}


export function connectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigToHclTerraform(struct?: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    after_contact_work_time_limit: {
      value: cdktn.numberToHclTerraform(struct!.afterContactWorkTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterContactWorkTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterContactWorkTimeLimit = this._afterContactWorkTimeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterContactWorkTimeLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterContactWorkTimeLimit = value.afterContactWorkTimeLimit;
    }
  }

  // after_contact_work_time_limit - computed: true, optional: true, required: false
  private _afterContactWorkTimeLimit?: number;
  public get afterContactWorkTimeLimit() {
    return this.getNumberAttribute('after_contact_work_time_limit');
  }
  public set afterContactWorkTimeLimit(value: number) {
    this._afterContactWorkTimeLimit = value;
  }
  public resetAfterContactWorkTimeLimit() {
    this._afterContactWorkTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterContactWorkTimeLimitInput() {
    return this._afterContactWorkTimeLimit;
  }
}
export interface ConnectUserAfterContactWorkConfigs {
  /**
  * After Contact Work configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#after_contact_work_config ConnectUser#after_contact_work_config}
  */
  readonly afterContactWorkConfig?: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig;
  /**
  * After Contact Work configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#agent_first_callback_after_contact_work_config ConnectUser#agent_first_callback_after_contact_work_config}
  */
  readonly agentFirstCallbackAfterContactWorkConfig?: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig;
  /**
  * The channels that agents can handle in the Contact Control Panel (CCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#channel ConnectUser#channel}
  */
  readonly channel?: string;
}

export function connectUserAfterContactWorkConfigsToTerraform(struct?: ConnectUserAfterContactWorkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    after_contact_work_config: connectUserAfterContactWorkConfigsAfterContactWorkConfigToTerraform(struct!.afterContactWorkConfig),
    agent_first_callback_after_contact_work_config: connectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigToTerraform(struct!.agentFirstCallbackAfterContactWorkConfig),
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function connectUserAfterContactWorkConfigsToHclTerraform(struct?: ConnectUserAfterContactWorkConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    after_contact_work_config: {
      value: connectUserAfterContactWorkConfigsAfterContactWorkConfigToHclTerraform(struct!.afterContactWorkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectUserAfterContactWorkConfigsAfterContactWorkConfig",
    },
    agent_first_callback_after_contact_work_config: {
      value: connectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigToHclTerraform(struct!.agentFirstCallbackAfterContactWorkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig",
    },
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserAfterContactWorkConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserAfterContactWorkConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterContactWorkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterContactWorkConfig = this._afterContactWorkConfig?.internalValue;
    }
    if (this._agentFirstCallbackAfterContactWorkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFirstCallbackAfterContactWorkConfig = this._agentFirstCallbackAfterContactWorkConfig?.internalValue;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserAfterContactWorkConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterContactWorkConfig.internalValue = undefined;
      this._agentFirstCallbackAfterContactWorkConfig.internalValue = undefined;
      this._channel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterContactWorkConfig.internalValue = value.afterContactWorkConfig;
      this._agentFirstCallbackAfterContactWorkConfig.internalValue = value.agentFirstCallbackAfterContactWorkConfig;
      this._channel = value.channel;
    }
  }

  // after_contact_work_config - computed: true, optional: true, required: false
  private _afterContactWorkConfig = new ConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(this, "after_contact_work_config");
  public get afterContactWorkConfig() {
    return this._afterContactWorkConfig;
  }
  public putAfterContactWorkConfig(value: ConnectUserAfterContactWorkConfigsAfterContactWorkConfig) {
    this._afterContactWorkConfig.internalValue = value;
  }
  public resetAfterContactWorkConfig() {
    this._afterContactWorkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterContactWorkConfigInput() {
    return this._afterContactWorkConfig.internalValue;
  }

  // agent_first_callback_after_contact_work_config - computed: true, optional: true, required: false
  private _agentFirstCallbackAfterContactWorkConfig = new ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(this, "agent_first_callback_after_contact_work_config");
  public get agentFirstCallbackAfterContactWorkConfig() {
    return this._agentFirstCallbackAfterContactWorkConfig;
  }
  public putAgentFirstCallbackAfterContactWorkConfig(value: ConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig) {
    this._agentFirstCallbackAfterContactWorkConfig.internalValue = value;
  }
  public resetAgentFirstCallbackAfterContactWorkConfig() {
    this._agentFirstCallbackAfterContactWorkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFirstCallbackAfterContactWorkConfigInput() {
    return this._agentFirstCallbackAfterContactWorkConfig.internalValue;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string;
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}

export class ConnectUserAfterContactWorkConfigsList extends cdktn.ComplexList {
  public internalValue? : ConnectUserAfterContactWorkConfigs[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserAfterContactWorkConfigsOutputReference {
    return new ConnectUserAfterContactWorkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectUserAutoAcceptConfigs {
  /**
  * The agent first callback auto accept setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#agent_first_callback_auto_accept ConnectUser#agent_first_callback_auto_accept}
  */
  readonly agentFirstCallbackAutoAccept?: boolean | cdktn.IResolvable;
  /**
  * The Auto accept setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}
  */
  readonly autoAccept?: boolean | cdktn.IResolvable;
  /**
  * The channels that agents can handle in the Contact Control Panel (CCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#channel ConnectUser#channel}
  */
  readonly channel?: string;
}

export function connectUserAutoAcceptConfigsToTerraform(struct?: ConnectUserAutoAcceptConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_first_callback_auto_accept: cdktn.booleanToTerraform(struct!.agentFirstCallbackAutoAccept),
    auto_accept: cdktn.booleanToTerraform(struct!.autoAccept),
    channel: cdktn.stringToTerraform(struct!.channel),
  }
}


export function connectUserAutoAcceptConfigsToHclTerraform(struct?: ConnectUserAutoAcceptConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_first_callback_auto_accept: {
      value: cdktn.booleanToHclTerraform(struct!.agentFirstCallbackAutoAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_accept: {
      value: cdktn.booleanToHclTerraform(struct!.autoAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserAutoAcceptConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserAutoAcceptConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentFirstCallbackAutoAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFirstCallbackAutoAccept = this._agentFirstCallbackAutoAccept;
    }
    if (this._autoAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAccept = this._autoAccept;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserAutoAcceptConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentFirstCallbackAutoAccept = undefined;
      this._autoAccept = undefined;
      this._channel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentFirstCallbackAutoAccept = value.agentFirstCallbackAutoAccept;
      this._autoAccept = value.autoAccept;
      this._channel = value.channel;
    }
  }

  // agent_first_callback_auto_accept - computed: true, optional: true, required: false
  private _agentFirstCallbackAutoAccept?: boolean | cdktn.IResolvable;
  public get agentFirstCallbackAutoAccept() {
    return this.getBooleanAttribute('agent_first_callback_auto_accept');
  }
  public set agentFirstCallbackAutoAccept(value: boolean | cdktn.IResolvable) {
    this._agentFirstCallbackAutoAccept = value;
  }
  public resetAgentFirstCallbackAutoAccept() {
    this._agentFirstCallbackAutoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFirstCallbackAutoAcceptInput() {
    return this._agentFirstCallbackAutoAccept;
  }

  // auto_accept - computed: true, optional: true, required: false
  private _autoAccept?: boolean | cdktn.IResolvable;
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktn.IResolvable) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string;
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}

export class ConnectUserAutoAcceptConfigsList extends cdktn.ComplexList {
  public internalValue? : ConnectUserAutoAcceptConfigs[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserAutoAcceptConfigsOutputReference {
    return new ConnectUserAutoAcceptConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectUserIdentityInfo {
  /**
  * The email address. If you are using SAML for identity management and include this parameter, an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#email ConnectUser#email}
  */
  readonly email?: string;
  /**
  * The first name. This is required if you are using Amazon Connect or SAML for identity management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#first_name ConnectUser#first_name}
  */
  readonly firstName?: string;
  /**
  * The last name. This is required if you are using Amazon Connect or SAML for identity management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#last_name ConnectUser#last_name}
  */
  readonly lastName?: string;
  /**
  * The mobile phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#mobile ConnectUser#mobile}
  */
  readonly mobile?: string;
  /**
  * The secondary email address. If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#secondary_email ConnectUser#secondary_email}
  */
  readonly secondaryEmail?: string;
}

export function connectUserIdentityInfoToTerraform(struct?: ConnectUserIdentityInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
    first_name: cdktn.stringToTerraform(struct!.firstName),
    last_name: cdktn.stringToTerraform(struct!.lastName),
    mobile: cdktn.stringToTerraform(struct!.mobile),
    secondary_email: cdktn.stringToTerraform(struct!.secondaryEmail),
  }
}


export function connectUserIdentityInfoToHclTerraform(struct?: ConnectUserIdentityInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktn.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktn.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile: {
      value: cdktn.stringToHclTerraform(struct!.mobile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_email: {
      value: cdktn.stringToHclTerraform(struct!.secondaryEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserIdentityInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectUserIdentityInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._mobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile;
    }
    if (this._secondaryEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEmail = this._secondaryEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserIdentityInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._mobile = undefined;
      this._secondaryEmail = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._mobile = value.mobile;
      this._secondaryEmail = value.secondaryEmail;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string;
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string;
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string;
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // mobile - computed: true, optional: true, required: false
  private _mobile?: string;
  public get mobile() {
    return this.getStringAttribute('mobile');
  }
  public set mobile(value: string) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // secondary_email - computed: true, optional: true, required: false
  private _secondaryEmail?: string;
  public get secondaryEmail() {
    return this.getStringAttribute('secondary_email');
  }
  public set secondaryEmail(value: string) {
    this._secondaryEmail = value;
  }
  public resetSecondaryEmail() {
    this._secondaryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEmailInput() {
    return this._secondaryEmail;
  }
}
export interface ConnectUserPersistentConnectionConfigs {
  /**
  * The channels that agents can handle in the Contact Control Panel (CCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#channel ConnectUser#channel}
  */
  readonly channel?: string;
  /**
  * The Persistent Connection setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}
  */
  readonly persistentConnection?: boolean | cdktn.IResolvable;
}

export function connectUserPersistentConnectionConfigsToTerraform(struct?: ConnectUserPersistentConnectionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
    persistent_connection: cdktn.booleanToTerraform(struct!.persistentConnection),
  }
}


export function connectUserPersistentConnectionConfigsToHclTerraform(struct?: ConnectUserPersistentConnectionConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_connection: {
      value: cdktn.booleanToHclTerraform(struct!.persistentConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserPersistentConnectionConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserPersistentConnectionConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._persistentConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentConnection = this._persistentConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserPersistentConnectionConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._persistentConnection = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._persistentConnection = value.persistentConnection;
    }
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string;
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // persistent_connection - computed: true, optional: true, required: false
  private _persistentConnection?: boolean | cdktn.IResolvable;
  public get persistentConnection() {
    return this.getBooleanAttribute('persistent_connection');
  }
  public set persistentConnection(value: boolean | cdktn.IResolvable) {
    this._persistentConnection = value;
  }
  public resetPersistentConnection() {
    this._persistentConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentConnectionInput() {
    return this._persistentConnection;
  }
}

export class ConnectUserPersistentConnectionConfigsList extends cdktn.ComplexList {
  public internalValue? : ConnectUserPersistentConnectionConfigs[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserPersistentConnectionConfigsOutputReference {
    return new ConnectUserPersistentConnectionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectUserPhoneConfig {
  /**
  * The After Call Work (ACW) timeout setting, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}
  */
  readonly afterContactWorkTimeLimit?: number;
  /**
  * The Auto accept setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}
  */
  readonly autoAccept?: boolean | cdktn.IResolvable;
  /**
  * The phone number for the user's desk phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}
  */
  readonly deskPhoneNumber?: string;
  /**
  * The Persistent Connection setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#persistent_connection ConnectUser#persistent_connection}
  */
  readonly persistentConnection?: boolean | cdktn.IResolvable;
  /**
  * The phone type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}
  */
  readonly phoneType?: string;
}

export function connectUserPhoneConfigToTerraform(struct?: ConnectUserPhoneConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    after_contact_work_time_limit: cdktn.numberToTerraform(struct!.afterContactWorkTimeLimit),
    auto_accept: cdktn.booleanToTerraform(struct!.autoAccept),
    desk_phone_number: cdktn.stringToTerraform(struct!.deskPhoneNumber),
    persistent_connection: cdktn.booleanToTerraform(struct!.persistentConnection),
    phone_type: cdktn.stringToTerraform(struct!.phoneType),
  }
}


export function connectUserPhoneConfigToHclTerraform(struct?: ConnectUserPhoneConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    after_contact_work_time_limit: {
      value: cdktn.numberToHclTerraform(struct!.afterContactWorkTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_accept: {
      value: cdktn.booleanToHclTerraform(struct!.autoAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    desk_phone_number: {
      value: cdktn.stringToHclTerraform(struct!.deskPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_connection: {
      value: cdktn.booleanToHclTerraform(struct!.persistentConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    phone_type: {
      value: cdktn.stringToHclTerraform(struct!.phoneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserPhoneConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectUserPhoneConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterContactWorkTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterContactWorkTimeLimit = this._afterContactWorkTimeLimit;
    }
    if (this._autoAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAccept = this._autoAccept;
    }
    if (this._deskPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.deskPhoneNumber = this._deskPhoneNumber;
    }
    if (this._persistentConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentConnection = this._persistentConnection;
    }
    if (this._phoneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneType = this._phoneType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserPhoneConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterContactWorkTimeLimit = undefined;
      this._autoAccept = undefined;
      this._deskPhoneNumber = undefined;
      this._persistentConnection = undefined;
      this._phoneType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterContactWorkTimeLimit = value.afterContactWorkTimeLimit;
      this._autoAccept = value.autoAccept;
      this._deskPhoneNumber = value.deskPhoneNumber;
      this._persistentConnection = value.persistentConnection;
      this._phoneType = value.phoneType;
    }
  }

  // after_contact_work_time_limit - computed: true, optional: true, required: false
  private _afterContactWorkTimeLimit?: number;
  public get afterContactWorkTimeLimit() {
    return this.getNumberAttribute('after_contact_work_time_limit');
  }
  public set afterContactWorkTimeLimit(value: number) {
    this._afterContactWorkTimeLimit = value;
  }
  public resetAfterContactWorkTimeLimit() {
    this._afterContactWorkTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterContactWorkTimeLimitInput() {
    return this._afterContactWorkTimeLimit;
  }

  // auto_accept - computed: true, optional: true, required: false
  private _autoAccept?: boolean | cdktn.IResolvable;
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktn.IResolvable) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept;
  }

  // desk_phone_number - computed: true, optional: true, required: false
  private _deskPhoneNumber?: string;
  public get deskPhoneNumber() {
    return this.getStringAttribute('desk_phone_number');
  }
  public set deskPhoneNumber(value: string) {
    this._deskPhoneNumber = value;
  }
  public resetDeskPhoneNumber() {
    this._deskPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deskPhoneNumberInput() {
    return this._deskPhoneNumber;
  }

  // persistent_connection - computed: true, optional: true, required: false
  private _persistentConnection?: boolean | cdktn.IResolvable;
  public get persistentConnection() {
    return this.getBooleanAttribute('persistent_connection');
  }
  public set persistentConnection(value: boolean | cdktn.IResolvable) {
    this._persistentConnection = value;
  }
  public resetPersistentConnection() {
    this._persistentConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentConnectionInput() {
    return this._persistentConnection;
  }

  // phone_type - computed: true, optional: true, required: false
  private _phoneType?: string;
  public get phoneType() {
    return this.getStringAttribute('phone_type');
  }
  public set phoneType(value: string) {
    this._phoneType = value;
  }
  public resetPhoneType() {
    this._phoneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneTypeInput() {
    return this._phoneType;
  }
}
export interface ConnectUserPhoneNumberConfigs {
  /**
  * The channels that agents can handle in the Contact Control Panel (CCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#channel ConnectUser#channel}
  */
  readonly channel?: string;
  /**
  * The phone number for the user's desk phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#phone_number ConnectUser#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * The phone type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}
  */
  readonly phoneType?: string;
}

export function connectUserPhoneNumberConfigsToTerraform(struct?: ConnectUserPhoneNumberConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
    phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    phone_type: cdktn.stringToTerraform(struct!.phoneType),
  }
}


export function connectUserPhoneNumberConfigsToHclTerraform(struct?: ConnectUserPhoneNumberConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktn.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_type: {
      value: cdktn.stringToHclTerraform(struct!.phoneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserPhoneNumberConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserPhoneNumberConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._phoneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneType = this._phoneType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserPhoneNumberConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._phoneNumber = undefined;
      this._phoneType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._phoneNumber = value.phoneNumber;
      this._phoneType = value.phoneType;
    }
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string;
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string;
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // phone_type - computed: true, optional: true, required: false
  private _phoneType?: string;
  public get phoneType() {
    return this.getStringAttribute('phone_type');
  }
  public set phoneType(value: string) {
    this._phoneType = value;
  }
  public resetPhoneType() {
    this._phoneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneTypeInput() {
    return this._phoneType;
  }
}

export class ConnectUserPhoneNumberConfigsList extends cdktn.ComplexList {
  public internalValue? : ConnectUserPhoneNumberConfigs[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserPhoneNumberConfigsOutputReference {
    return new ConnectUserPhoneNumberConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectUserTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#key ConnectUser#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#value ConnectUser#value}
  */
  readonly value?: string;
}

export function connectUserTagsToTerraform(struct?: ConnectUserTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectUserTagsToHclTerraform(struct?: ConnectUserTags | cdktn.IResolvable): any {
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

export class ConnectUserTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectUserTags | cdktn.IResolvable | undefined) {
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

export class ConnectUserTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectUserTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserTagsOutputReference {
    return new ConnectUserTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectUserUserProficiencies {
  /**
  * The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#attribute_name ConnectUser#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#attribute_value ConnectUser#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * The level of the proficiency. The valid values are 1, 2, 3, 4 and 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#level ConnectUser#level}
  */
  readonly level?: number;
}

export function connectUserUserProficienciesToTerraform(struct?: ConnectUserUserProficiencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    attribute_value: cdktn.stringToTerraform(struct!.attributeValue),
    level: cdktn.numberToTerraform(struct!.level),
  }
}


export function connectUserUserProficienciesToHclTerraform(struct?: ConnectUserUserProficiencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktn.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktn.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserUserProficienciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserUserProficiencies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserUserProficiencies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._level = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._level = value.level;
    }
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string;
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: true, optional: true, required: false
  private _attributeValue?: string;
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // level - computed: true, optional: true, required: false
  private _level?: number;
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class ConnectUserUserProficienciesList extends cdktn.ComplexList {
  public internalValue? : ConnectUserUserProficiencies[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserUserProficienciesOutputReference {
    return new ConnectUserUserProficienciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectUserVoiceEnhancementConfigs {
  /**
  * The channels that agents can handle in the Contact Control Panel (CCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#channel ConnectUser#channel}
  */
  readonly channel?: string;
  /**
  * The Voice Enhancement Mode setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#voice_enhancement_mode ConnectUser#voice_enhancement_mode}
  */
  readonly voiceEnhancementMode?: string;
}

export function connectUserVoiceEnhancementConfigsToTerraform(struct?: ConnectUserVoiceEnhancementConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
    voice_enhancement_mode: cdktn.stringToTerraform(struct!.voiceEnhancementMode),
  }
}


export function connectUserVoiceEnhancementConfigsToHclTerraform(struct?: ConnectUserVoiceEnhancementConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voice_enhancement_mode: {
      value: cdktn.stringToHclTerraform(struct!.voiceEnhancementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectUserVoiceEnhancementConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectUserVoiceEnhancementConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._voiceEnhancementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceEnhancementMode = this._voiceEnhancementMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserVoiceEnhancementConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._voiceEnhancementMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._voiceEnhancementMode = value.voiceEnhancementMode;
    }
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string;
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // voice_enhancement_mode - computed: true, optional: true, required: false
  private _voiceEnhancementMode?: string;
  public get voiceEnhancementMode() {
    return this.getStringAttribute('voice_enhancement_mode');
  }
  public set voiceEnhancementMode(value: string) {
    this._voiceEnhancementMode = value;
  }
  public resetVoiceEnhancementMode() {
    this._voiceEnhancementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceEnhancementModeInput() {
    return this._voiceEnhancementMode;
  }
}

export class ConnectUserVoiceEnhancementConfigsList extends cdktn.ComplexList {
  public internalValue? : ConnectUserVoiceEnhancementConfigs[] | cdktn.IResolvable

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
  public get(index: number): ConnectUserVoiceEnhancementConfigsOutputReference {
    return new ConnectUserVoiceEnhancementConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user awscc_connect_user}
*/
export class ConnectUser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectUser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectUser to import
  * @param importFromId The id of the existing ConnectUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/connect_user awscc_connect_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectUserConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectUserConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_user',
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
    this._afterContactWorkConfigs.internalValue = config.afterContactWorkConfigs;
    this._autoAcceptConfigs.internalValue = config.autoAcceptConfigs;
    this._directoryUserId = config.directoryUserId;
    this._hierarchyGroupArn = config.hierarchyGroupArn;
    this._identityInfo.internalValue = config.identityInfo;
    this._instanceArn = config.instanceArn;
    this._password = config.password;
    this._persistentConnectionConfigs.internalValue = config.persistentConnectionConfigs;
    this._phoneConfig.internalValue = config.phoneConfig;
    this._phoneNumberConfigs.internalValue = config.phoneNumberConfigs;
    this._routingProfileArn = config.routingProfileArn;
    this._securityProfileArns = config.securityProfileArns;
    this._tags.internalValue = config.tags;
    this._userProficiencies.internalValue = config.userProficiencies;
    this._username = config.username;
    this._voiceEnhancementConfigs.internalValue = config.voiceEnhancementConfigs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after_contact_work_configs - computed: true, optional: true, required: false
  private _afterContactWorkConfigs = new ConnectUserAfterContactWorkConfigsList(this, "after_contact_work_configs", false);
  public get afterContactWorkConfigs() {
    return this._afterContactWorkConfigs;
  }
  public putAfterContactWorkConfigs(value: ConnectUserAfterContactWorkConfigs[] | cdktn.IResolvable) {
    this._afterContactWorkConfigs.internalValue = value;
  }
  public resetAfterContactWorkConfigs() {
    this._afterContactWorkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterContactWorkConfigsInput() {
    return this._afterContactWorkConfigs.internalValue;
  }

  // auto_accept_configs - computed: true, optional: true, required: false
  private _autoAcceptConfigs = new ConnectUserAutoAcceptConfigsList(this, "auto_accept_configs", false);
  public get autoAcceptConfigs() {
    return this._autoAcceptConfigs;
  }
  public putAutoAcceptConfigs(value: ConnectUserAutoAcceptConfigs[] | cdktn.IResolvable) {
    this._autoAcceptConfigs.internalValue = value;
  }
  public resetAutoAcceptConfigs() {
    this._autoAcceptConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptConfigsInput() {
    return this._autoAcceptConfigs.internalValue;
  }

  // directory_user_id - computed: true, optional: true, required: false
  private _directoryUserId?: string;
  public get directoryUserId() {
    return this.getStringAttribute('directory_user_id');
  }
  public set directoryUserId(value: string) {
    this._directoryUserId = value;
  }
  public resetDirectoryUserId() {
    this._directoryUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryUserIdInput() {
    return this._directoryUserId;
  }

  // hierarchy_group_arn - computed: true, optional: true, required: false
  private _hierarchyGroupArn?: string;
  public get hierarchyGroupArn() {
    return this.getStringAttribute('hierarchy_group_arn');
  }
  public set hierarchyGroupArn(value: string) {
    this._hierarchyGroupArn = value;
  }
  public resetHierarchyGroupArn() {
    this._hierarchyGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyGroupArnInput() {
    return this._hierarchyGroupArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_info - computed: true, optional: true, required: false
  private _identityInfo = new ConnectUserIdentityInfoOutputReference(this, "identity_info");
  public get identityInfo() {
    return this._identityInfo;
  }
  public putIdentityInfo(value: ConnectUserIdentityInfo) {
    this._identityInfo.internalValue = value;
  }
  public resetIdentityInfo() {
    this._identityInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInfoInput() {
    return this._identityInfo.internalValue;
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string;
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // persistent_connection_configs - computed: true, optional: true, required: false
  private _persistentConnectionConfigs = new ConnectUserPersistentConnectionConfigsList(this, "persistent_connection_configs", false);
  public get persistentConnectionConfigs() {
    return this._persistentConnectionConfigs;
  }
  public putPersistentConnectionConfigs(value: ConnectUserPersistentConnectionConfigs[] | cdktn.IResolvable) {
    this._persistentConnectionConfigs.internalValue = value;
  }
  public resetPersistentConnectionConfigs() {
    this._persistentConnectionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentConnectionConfigsInput() {
    return this._persistentConnectionConfigs.internalValue;
  }

  // phone_config - computed: true, optional: true, required: false
  private _phoneConfig = new ConnectUserPhoneConfigOutputReference(this, "phone_config");
  public get phoneConfig() {
    return this._phoneConfig;
  }
  public putPhoneConfig(value: ConnectUserPhoneConfig) {
    this._phoneConfig.internalValue = value;
  }
  public resetPhoneConfig() {
    this._phoneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneConfigInput() {
    return this._phoneConfig.internalValue;
  }

  // phone_number_configs - computed: true, optional: true, required: false
  private _phoneNumberConfigs = new ConnectUserPhoneNumberConfigsList(this, "phone_number_configs", false);
  public get phoneNumberConfigs() {
    return this._phoneNumberConfigs;
  }
  public putPhoneNumberConfigs(value: ConnectUserPhoneNumberConfigs[] | cdktn.IResolvable) {
    this._phoneNumberConfigs.internalValue = value;
  }
  public resetPhoneNumberConfigs() {
    this._phoneNumberConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberConfigsInput() {
    return this._phoneNumberConfigs.internalValue;
  }

  // routing_profile_arn - computed: false, optional: false, required: true
  private _routingProfileArn?: string;
  public get routingProfileArn() {
    return this.getStringAttribute('routing_profile_arn');
  }
  public set routingProfileArn(value: string) {
    this._routingProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingProfileArnInput() {
    return this._routingProfileArn;
  }

  // security_profile_arns - computed: false, optional: false, required: true
  private _securityProfileArns?: string[];
  public get securityProfileArns() {
    return cdktn.Fn.tolist(this.getListAttribute('security_profile_arns'));
  }
  public set securityProfileArns(value: string[]) {
    this._securityProfileArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileArnsInput() {
    return this._securityProfileArns;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectUserTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectUserTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_arn - computed: true, optional: false, required: false
  public get userArn() {
    return this.getStringAttribute('user_arn');
  }

  // user_proficiencies - computed: true, optional: true, required: false
  private _userProficiencies = new ConnectUserUserProficienciesList(this, "user_proficiencies", false);
  public get userProficiencies() {
    return this._userProficiencies;
  }
  public putUserProficiencies(value: ConnectUserUserProficiencies[] | cdktn.IResolvable) {
    this._userProficiencies.internalValue = value;
  }
  public resetUserProficiencies() {
    this._userProficiencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProficienciesInput() {
    return this._userProficiencies.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // voice_enhancement_configs - computed: true, optional: true, required: false
  private _voiceEnhancementConfigs = new ConnectUserVoiceEnhancementConfigsList(this, "voice_enhancement_configs", false);
  public get voiceEnhancementConfigs() {
    return this._voiceEnhancementConfigs;
  }
  public putVoiceEnhancementConfigs(value: ConnectUserVoiceEnhancementConfigs[] | cdktn.IResolvable) {
    this._voiceEnhancementConfigs.internalValue = value;
  }
  public resetVoiceEnhancementConfigs() {
    this._voiceEnhancementConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceEnhancementConfigsInput() {
    return this._voiceEnhancementConfigs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after_contact_work_configs: cdktn.listMapper(connectUserAfterContactWorkConfigsToTerraform, false)(this._afterContactWorkConfigs.internalValue),
      auto_accept_configs: cdktn.listMapper(connectUserAutoAcceptConfigsToTerraform, false)(this._autoAcceptConfigs.internalValue),
      directory_user_id: cdktn.stringToTerraform(this._directoryUserId),
      hierarchy_group_arn: cdktn.stringToTerraform(this._hierarchyGroupArn),
      identity_info: connectUserIdentityInfoToTerraform(this._identityInfo.internalValue),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      password: cdktn.stringToTerraform(this._password),
      persistent_connection_configs: cdktn.listMapper(connectUserPersistentConnectionConfigsToTerraform, false)(this._persistentConnectionConfigs.internalValue),
      phone_config: connectUserPhoneConfigToTerraform(this._phoneConfig.internalValue),
      phone_number_configs: cdktn.listMapper(connectUserPhoneNumberConfigsToTerraform, false)(this._phoneNumberConfigs.internalValue),
      routing_profile_arn: cdktn.stringToTerraform(this._routingProfileArn),
      security_profile_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityProfileArns),
      tags: cdktn.listMapper(connectUserTagsToTerraform, false)(this._tags.internalValue),
      user_proficiencies: cdktn.listMapper(connectUserUserProficienciesToTerraform, false)(this._userProficiencies.internalValue),
      username: cdktn.stringToTerraform(this._username),
      voice_enhancement_configs: cdktn.listMapper(connectUserVoiceEnhancementConfigsToTerraform, false)(this._voiceEnhancementConfigs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after_contact_work_configs: {
        value: cdktn.listMapperHcl(connectUserAfterContactWorkConfigsToHclTerraform, false)(this._afterContactWorkConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectUserAfterContactWorkConfigsList",
      },
      auto_accept_configs: {
        value: cdktn.listMapperHcl(connectUserAutoAcceptConfigsToHclTerraform, false)(this._autoAcceptConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectUserAutoAcceptConfigsList",
      },
      directory_user_id: {
        value: cdktn.stringToHclTerraform(this._directoryUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hierarchy_group_arn: {
        value: cdktn.stringToHclTerraform(this._hierarchyGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_info: {
        value: connectUserIdentityInfoToHclTerraform(this._identityInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectUserIdentityInfo",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_connection_configs: {
        value: cdktn.listMapperHcl(connectUserPersistentConnectionConfigsToHclTerraform, false)(this._persistentConnectionConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectUserPersistentConnectionConfigsList",
      },
      phone_config: {
        value: connectUserPhoneConfigToHclTerraform(this._phoneConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectUserPhoneConfig",
      },
      phone_number_configs: {
        value: cdktn.listMapperHcl(connectUserPhoneNumberConfigsToHclTerraform, false)(this._phoneNumberConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectUserPhoneNumberConfigsList",
      },
      routing_profile_arn: {
        value: cdktn.stringToHclTerraform(this._routingProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityProfileArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(connectUserTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectUserTagsList",
      },
      user_proficiencies: {
        value: cdktn.listMapperHcl(connectUserUserProficienciesToHclTerraform, false)(this._userProficiencies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectUserUserProficienciesList",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_enhancement_configs: {
        value: cdktn.listMapperHcl(connectUserVoiceEnhancementConfigsToHclTerraform, false)(this._voiceEnhancementConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectUserVoiceEnhancementConfigsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
