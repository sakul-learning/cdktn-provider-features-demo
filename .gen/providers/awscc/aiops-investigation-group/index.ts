// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AiopsInvestigationGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * An array of key-value pairs of notification channels to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#chatbot_notification_channels AiopsInvestigationGroup#chatbot_notification_channels}
  */
  readonly chatbotNotificationChannels?: AiopsInvestigationGroupChatbotNotificationChannels[] | cdktn.IResolvable;
  /**
  * An array of cross account configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#cross_account_configurations AiopsInvestigationGroup#cross_account_configurations}
  */
  readonly crossAccountConfigurations?: AiopsInvestigationGroupCrossAccountConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#encryption_config AiopsInvestigationGroup#encryption_config}
  */
  readonly encryptionConfig?: AiopsInvestigationGroupEncryptionConfig;
  /**
  * Investigation Group policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#investigation_group_policy AiopsInvestigationGroup#investigation_group_policy}
  */
  readonly investigationGroupPolicy?: string;
  /**
  * Flag to enable cloud trail history
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#is_cloud_trail_event_history_enabled AiopsInvestigationGroup#is_cloud_trail_event_history_enabled}
  */
  readonly isCloudTrailEventHistoryEnabled?: boolean | cdktn.IResolvable;
  /**
  * User friendly name for resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#name AiopsInvestigationGroup#name}
  */
  readonly name: string;
  /**
  * The number of days to retain the investigation group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#retention_in_days AiopsInvestigationGroup#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * The Investigation Role's ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#role_arn AiopsInvestigationGroup#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#tag_key_boundaries AiopsInvestigationGroup#tag_key_boundaries}
  */
  readonly tagKeyBoundaries?: string[];
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#tags AiopsInvestigationGroup#tags}
  */
  readonly tags?: AiopsInvestigationGroupTags[] | cdktn.IResolvable;
}
export interface AiopsInvestigationGroupChatbotNotificationChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#chat_configuration_arns AiopsInvestigationGroup#chat_configuration_arns}
  */
  readonly chatConfigurationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#sns_topic_arn AiopsInvestigationGroup#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}

export function aiopsInvestigationGroupChatbotNotificationChannelsToTerraform(struct?: AiopsInvestigationGroupChatbotNotificationChannels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chat_configuration_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.chatConfigurationArns),
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function aiopsInvestigationGroupChatbotNotificationChannelsToHclTerraform(struct?: AiopsInvestigationGroupChatbotNotificationChannels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chat_configuration_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.chatConfigurationArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sns_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiopsInvestigationGroupChatbotNotificationChannelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiopsInvestigationGroupChatbotNotificationChannels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatConfigurationArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatConfigurationArns = this._chatConfigurationArns;
    }
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiopsInvestigationGroupChatbotNotificationChannels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatConfigurationArns = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatConfigurationArns = value.chatConfigurationArns;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // chat_configuration_arns - computed: true, optional: true, required: false
  private _chatConfigurationArns?: string[]; 
  public get chatConfigurationArns() {
    return cdktn.Fn.tolist(this.getListAttribute('chat_configuration_arns'));
  }
  public set chatConfigurationArns(value: string[]) {
    this._chatConfigurationArns = value;
  }
  public resetChatConfigurationArns() {
    this._chatConfigurationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatConfigurationArnsInput() {
    return this._chatConfigurationArns;
  }

  // sns_topic_arn - computed: true, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class AiopsInvestigationGroupChatbotNotificationChannelsList extends cdktn.ComplexList {
  public internalValue? : AiopsInvestigationGroupChatbotNotificationChannels[] | cdktn.IResolvable

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
  public get(index: number): AiopsInvestigationGroupChatbotNotificationChannelsOutputReference {
    return new AiopsInvestigationGroupChatbotNotificationChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiopsInvestigationGroupCrossAccountConfigurations {
  /**
  * The Investigation Role's ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#source_role_arn AiopsInvestigationGroup#source_role_arn}
  */
  readonly sourceRoleArn?: string;
}

export function aiopsInvestigationGroupCrossAccountConfigurationsToTerraform(struct?: AiopsInvestigationGroupCrossAccountConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_role_arn: cdktn.stringToTerraform(struct!.sourceRoleArn),
  }
}


export function aiopsInvestigationGroupCrossAccountConfigurationsToHclTerraform(struct?: AiopsInvestigationGroupCrossAccountConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiopsInvestigationGroupCrossAccountConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiopsInvestigationGroupCrossAccountConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRoleArn = this._sourceRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiopsInvestigationGroupCrossAccountConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceRoleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceRoleArn = value.sourceRoleArn;
    }
  }

  // source_role_arn - computed: true, optional: true, required: false
  private _sourceRoleArn?: string; 
  public get sourceRoleArn() {
    return this.getStringAttribute('source_role_arn');
  }
  public set sourceRoleArn(value: string) {
    this._sourceRoleArn = value;
  }
  public resetSourceRoleArn() {
    this._sourceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoleArnInput() {
    return this._sourceRoleArn;
  }
}

export class AiopsInvestigationGroupCrossAccountConfigurationsList extends cdktn.ComplexList {
  public internalValue? : AiopsInvestigationGroupCrossAccountConfigurations[] | cdktn.IResolvable

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
  public get(index: number): AiopsInvestigationGroupCrossAccountConfigurationsOutputReference {
    return new AiopsInvestigationGroupCrossAccountConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiopsInvestigationGroupEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#encryption_configuration_type AiopsInvestigationGroup#encryption_configuration_type}
  */
  readonly encryptionConfigurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#kms_key_id AiopsInvestigationGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function aiopsInvestigationGroupEncryptionConfigToTerraform(struct?: AiopsInvestigationGroupEncryptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_configuration_type: cdktn.stringToTerraform(struct!.encryptionConfigurationType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function aiopsInvestigationGroupEncryptionConfigToHclTerraform(struct?: AiopsInvestigationGroupEncryptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_configuration_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionConfigurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiopsInvestigationGroupEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiopsInvestigationGroupEncryptionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionConfigurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfigurationType = this._encryptionConfigurationType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiopsInvestigationGroupEncryptionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionConfigurationType = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionConfigurationType = value.encryptionConfigurationType;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // encryption_configuration_type - computed: true, optional: true, required: false
  private _encryptionConfigurationType?: string; 
  public get encryptionConfigurationType() {
    return this.getStringAttribute('encryption_configuration_type');
  }
  public set encryptionConfigurationType(value: string) {
    this._encryptionConfigurationType = value;
  }
  public resetEncryptionConfigurationType() {
    this._encryptionConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationTypeInput() {
    return this._encryptionConfigurationType;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface AiopsInvestigationGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#key AiopsInvestigationGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#value AiopsInvestigationGroup#value}
  */
  readonly value?: string;
}

export function aiopsInvestigationGroupTagsToTerraform(struct?: AiopsInvestigationGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function aiopsInvestigationGroupTagsToHclTerraform(struct?: AiopsInvestigationGroupTags | cdktn.IResolvable): any {
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

export class AiopsInvestigationGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AiopsInvestigationGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AiopsInvestigationGroupTags | cdktn.IResolvable | undefined) {
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

export class AiopsInvestigationGroupTagsList extends cdktn.ComplexList {
  public internalValue? : AiopsInvestigationGroupTags[] | cdktn.IResolvable

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
  public get(index: number): AiopsInvestigationGroupTagsOutputReference {
    return new AiopsInvestigationGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group}
*/
export class AiopsInvestigationGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_aiops_investigation_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AiopsInvestigationGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiopsInvestigationGroup to import
  * @param importFromId The id of the existing AiopsInvestigationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiopsInvestigationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aiops_investigation_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/aiops_investigation_group awscc_aiops_investigation_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiopsInvestigationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AiopsInvestigationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_aiops_investigation_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chatbotNotificationChannels.internalValue = config.chatbotNotificationChannels;
    this._crossAccountConfigurations.internalValue = config.crossAccountConfigurations;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._investigationGroupPolicy = config.investigationGroupPolicy;
    this._isCloudTrailEventHistoryEnabled = config.isCloudTrailEventHistoryEnabled;
    this._name = config.name;
    this._retentionInDays = config.retentionInDays;
    this._roleArn = config.roleArn;
    this._tagKeyBoundaries = config.tagKeyBoundaries;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chatbot_notification_channels - computed: true, optional: true, required: false
  private _chatbotNotificationChannels = new AiopsInvestigationGroupChatbotNotificationChannelsList(this, "chatbot_notification_channels", true);
  public get chatbotNotificationChannels() {
    return this._chatbotNotificationChannels;
  }
  public putChatbotNotificationChannels(value: AiopsInvestigationGroupChatbotNotificationChannels[] | cdktn.IResolvable) {
    this._chatbotNotificationChannels.internalValue = value;
  }
  public resetChatbotNotificationChannels() {
    this._chatbotNotificationChannels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotNotificationChannelsInput() {
    return this._chatbotNotificationChannels.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // cross_account_configurations - computed: true, optional: true, required: false
  private _crossAccountConfigurations = new AiopsInvestigationGroupCrossAccountConfigurationsList(this, "cross_account_configurations", true);
  public get crossAccountConfigurations() {
    return this._crossAccountConfigurations;
  }
  public putCrossAccountConfigurations(value: AiopsInvestigationGroupCrossAccountConfigurations[] | cdktn.IResolvable) {
    this._crossAccountConfigurations.internalValue = value;
  }
  public resetCrossAccountConfigurations() {
    this._crossAccountConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountConfigurationsInput() {
    return this._crossAccountConfigurations.internalValue;
  }

  // encryption_config - computed: true, optional: true, required: false
  private _encryptionConfig = new AiopsInvestigationGroupEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: AiopsInvestigationGroupEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // investigation_group_policy - computed: true, optional: true, required: false
  private _investigationGroupPolicy?: string; 
  public get investigationGroupPolicy() {
    return this.getStringAttribute('investigation_group_policy');
  }
  public set investigationGroupPolicy(value: string) {
    this._investigationGroupPolicy = value;
  }
  public resetInvestigationGroupPolicy() {
    this._investigationGroupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get investigationGroupPolicyInput() {
    return this._investigationGroupPolicy;
  }

  // is_cloud_trail_event_history_enabled - computed: true, optional: true, required: false
  private _isCloudTrailEventHistoryEnabled?: boolean | cdktn.IResolvable; 
  public get isCloudTrailEventHistoryEnabled() {
    return this.getBooleanAttribute('is_cloud_trail_event_history_enabled');
  }
  public set isCloudTrailEventHistoryEnabled(value: boolean | cdktn.IResolvable) {
    this._isCloudTrailEventHistoryEnabled = value;
  }
  public resetIsCloudTrailEventHistoryEnabled() {
    this._isCloudTrailEventHistoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCloudTrailEventHistoryEnabledInput() {
    return this._isCloudTrailEventHistoryEnabled;
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tag_key_boundaries - computed: true, optional: true, required: false
  private _tagKeyBoundaries?: string[]; 
  public get tagKeyBoundaries() {
    return cdktn.Fn.tolist(this.getListAttribute('tag_key_boundaries'));
  }
  public set tagKeyBoundaries(value: string[]) {
    this._tagKeyBoundaries = value;
  }
  public resetTagKeyBoundaries() {
    this._tagKeyBoundaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyBoundariesInput() {
    return this._tagKeyBoundaries;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AiopsInvestigationGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AiopsInvestigationGroupTags[] | cdktn.IResolvable) {
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
      chatbot_notification_channels: cdktn.listMapper(aiopsInvestigationGroupChatbotNotificationChannelsToTerraform, false)(this._chatbotNotificationChannels.internalValue),
      cross_account_configurations: cdktn.listMapper(aiopsInvestigationGroupCrossAccountConfigurationsToTerraform, false)(this._crossAccountConfigurations.internalValue),
      encryption_config: aiopsInvestigationGroupEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      investigation_group_policy: cdktn.stringToTerraform(this._investigationGroupPolicy),
      is_cloud_trail_event_history_enabled: cdktn.booleanToTerraform(this._isCloudTrailEventHistoryEnabled),
      name: cdktn.stringToTerraform(this._name),
      retention_in_days: cdktn.numberToTerraform(this._retentionInDays),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tag_key_boundaries: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tagKeyBoundaries),
      tags: cdktn.listMapper(aiopsInvestigationGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chatbot_notification_channels: {
        value: cdktn.listMapperHcl(aiopsInvestigationGroupChatbotNotificationChannelsToHclTerraform, false)(this._chatbotNotificationChannels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AiopsInvestigationGroupChatbotNotificationChannelsList",
      },
      cross_account_configurations: {
        value: cdktn.listMapperHcl(aiopsInvestigationGroupCrossAccountConfigurationsToHclTerraform, false)(this._crossAccountConfigurations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AiopsInvestigationGroupCrossAccountConfigurationsList",
      },
      encryption_config: {
        value: aiopsInvestigationGroupEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiopsInvestigationGroupEncryptionConfig",
      },
      investigation_group_policy: {
        value: cdktn.stringToHclTerraform(this._investigationGroupPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cloud_trail_event_history_enabled: {
        value: cdktn.booleanToHclTerraform(this._isCloudTrailEventHistoryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_in_days: {
        value: cdktn.numberToHclTerraform(this._retentionInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key_boundaries: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tagKeyBoundaries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(aiopsInvestigationGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AiopsInvestigationGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
