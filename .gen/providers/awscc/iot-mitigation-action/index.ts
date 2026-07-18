// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotMitigationActionConfig extends cdktn.TerraformMetaArguments {
  /**
  * A unique identifier for the mitigation action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}
  */
  readonly actionName?: string;
  /**
  * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}
  */
  readonly actionParams: IotMitigationActionActionParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}
  */
  readonly roleArn: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}
  */
  readonly tags?: IotMitigationActionTags[] | cdktn.IResolvable;
}
export interface IotMitigationActionActionParamsAddThingsToThingGroupParams {
  /**
  * Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#override_dynamic_groups IotMitigationAction#override_dynamic_groups}
  */
  readonly overrideDynamicGroups?: boolean | cdktn.IResolvable;
  /**
  * The list of groups to which you want to add the things that triggered the mitigation action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#thing_group_names IotMitigationAction#thing_group_names}
  */
  readonly thingGroupNames?: string[];
}

export function iotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct?: IotMitigationActionActionParamsAddThingsToThingGroupParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    override_dynamic_groups: cdktn.booleanToTerraform(struct!.overrideDynamicGroups),
    thing_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.thingGroupNames),
  }
}


export function iotMitigationActionActionParamsAddThingsToThingGroupParamsToHclTerraform(struct?: IotMitigationActionActionParamsAddThingsToThingGroupParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    override_dynamic_groups: {
      value: cdktn.booleanToHclTerraform(struct!.overrideDynamicGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thing_group_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.thingGroupNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParamsAddThingsToThingGroupParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideDynamicGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDynamicGroups = this._overrideDynamicGroups;
    }
    if (this._thingGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingGroupNames = this._thingGroupNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParamsAddThingsToThingGroupParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideDynamicGroups = undefined;
      this._thingGroupNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideDynamicGroups = value.overrideDynamicGroups;
      this._thingGroupNames = value.thingGroupNames;
    }
  }

  // override_dynamic_groups - computed: true, optional: true, required: false
  private _overrideDynamicGroups?: boolean | cdktn.IResolvable; 
  public get overrideDynamicGroups() {
    return this.getBooleanAttribute('override_dynamic_groups');
  }
  public set overrideDynamicGroups(value: boolean | cdktn.IResolvable) {
    this._overrideDynamicGroups = value;
  }
  public resetOverrideDynamicGroups() {
    this._overrideDynamicGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDynamicGroupsInput() {
    return this._overrideDynamicGroups;
  }

  // thing_group_names - computed: true, optional: true, required: false
  private _thingGroupNames?: string[]; 
  public get thingGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('thing_group_names'));
  }
  public set thingGroupNames(value: string[]) {
    this._thingGroupNames = value;
  }
  public resetThingGroupNames() {
    this._thingGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingGroupNamesInput() {
    return this._thingGroupNames;
  }
}
export interface IotMitigationActionActionParamsEnableIoTLoggingParams {
  /**
  *  Specifies which types of information are logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#log_level IotMitigationAction#log_level}
  */
  readonly logLevel?: string;
  /**
  *  The ARN of the IAM role used for logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#role_arn_for_logging IotMitigationAction#role_arn_for_logging}
  */
  readonly roleArnForLogging?: string;
}

export function iotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct?: IotMitigationActionActionParamsEnableIoTLoggingParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_level: cdktn.stringToTerraform(struct!.logLevel),
    role_arn_for_logging: cdktn.stringToTerraform(struct!.roleArnForLogging),
  }
}


export function iotMitigationActionActionParamsEnableIoTLoggingParamsToHclTerraform(struct?: IotMitigationActionActionParamsEnableIoTLoggingParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn_for_logging: {
      value: cdktn.stringToHclTerraform(struct!.roleArnForLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParamsEnableIoTLoggingParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._roleArnForLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArnForLogging = this._roleArnForLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParamsEnableIoTLoggingParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logLevel = undefined;
      this._roleArnForLogging = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logLevel = value.logLevel;
      this._roleArnForLogging = value.roleArnForLogging;
    }
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // role_arn_for_logging - computed: true, optional: true, required: false
  private _roleArnForLogging?: string; 
  public get roleArnForLogging() {
    return this.getStringAttribute('role_arn_for_logging');
  }
  public set roleArnForLogging(value: string) {
    this._roleArnForLogging = value;
  }
  public resetRoleArnForLogging() {
    this._roleArnForLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnForLoggingInput() {
    return this._roleArnForLogging;
  }
}
export interface IotMitigationActionActionParamsPublishFindingToSnsParams {
  /**
  * The ARN of the topic to which you want to publish the findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#topic_arn IotMitigationAction#topic_arn}
  */
  readonly topicArn?: string;
}

export function iotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct?: IotMitigationActionActionParamsPublishFindingToSnsParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function iotMitigationActionActionParamsPublishFindingToSnsParamsToHclTerraform(struct?: IotMitigationActionActionParamsPublishFindingToSnsParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParamsPublishFindingToSnsParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParamsPublishFindingToSnsParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicArn = value.topicArn;
    }
  }

  // topic_arn - computed: true, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}
export interface IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}
  */
  readonly templateName?: string;
}

export function iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    template_name: cdktn.stringToTerraform(struct!.templateName),
  }
}


export function iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToHclTerraform(struct?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    template_name: {
      value: cdktn.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateName = value.templateName;
    }
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}
export interface IotMitigationActionActionParamsUpdateCaCertificateParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}
  */
  readonly action?: string;
}

export function iotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct?: IotMitigationActionActionParamsUpdateCaCertificateParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function iotMitigationActionActionParamsUpdateCaCertificateParamsToHclTerraform(struct?: IotMitigationActionActionParamsUpdateCaCertificateParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParamsUpdateCaCertificateParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParamsUpdateCaCertificateParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface IotMitigationActionActionParamsUpdateDeviceCertificateParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}
  */
  readonly action?: string;
}

export function iotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct?: IotMitigationActionActionParamsUpdateDeviceCertificateParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
  }
}


export function iotMitigationActionActionParamsUpdateDeviceCertificateParamsToHclTerraform(struct?: IotMitigationActionActionParamsUpdateDeviceCertificateParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParamsUpdateDeviceCertificateParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParamsUpdateDeviceCertificateParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface IotMitigationActionActionParams {
  /**
  * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}
  */
  readonly addThingsToThingGroupParams?: IotMitigationActionActionParamsAddThingsToThingGroupParams;
  /**
  * Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}
  */
  readonly enableIoTLoggingParams?: IotMitigationActionActionParamsEnableIoTLoggingParams;
  /**
  * Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}
  */
  readonly publishFindingToSnsParams?: IotMitigationActionActionParamsPublishFindingToSnsParams;
  /**
  * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}
  */
  readonly replaceDefaultPolicyVersionParams?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;
  /**
  * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}
  */
  readonly updateCaCertificateParams?: IotMitigationActionActionParamsUpdateCaCertificateParams;
  /**
  * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#update_device_certificate_params IotMitigationAction#update_device_certificate_params}
  */
  readonly updateDeviceCertificateParams?: IotMitigationActionActionParamsUpdateDeviceCertificateParams;
}

export function iotMitigationActionActionParamsToTerraform(struct?: IotMitigationActionActionParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_things_to_thing_group_params: iotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct!.addThingsToThingGroupParams),
    enable_io_t_logging_params: iotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct!.enableIoTLoggingParams),
    publish_finding_to_sns_params: iotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct!.publishFindingToSnsParams),
    replace_default_policy_version_params: iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct!.replaceDefaultPolicyVersionParams),
    update_ca_certificate_params: iotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct!.updateCaCertificateParams),
    update_device_certificate_params: iotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct!.updateDeviceCertificateParams),
  }
}


export function iotMitigationActionActionParamsToHclTerraform(struct?: IotMitigationActionActionParams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_things_to_thing_group_params: {
      value: iotMitigationActionActionParamsAddThingsToThingGroupParamsToHclTerraform(struct!.addThingsToThingGroupParams),
      isBlock: true,
      type: "struct",
      storageClassType: "IotMitigationActionActionParamsAddThingsToThingGroupParams",
    },
    enable_io_t_logging_params: {
      value: iotMitigationActionActionParamsEnableIoTLoggingParamsToHclTerraform(struct!.enableIoTLoggingParams),
      isBlock: true,
      type: "struct",
      storageClassType: "IotMitigationActionActionParamsEnableIoTLoggingParams",
    },
    publish_finding_to_sns_params: {
      value: iotMitigationActionActionParamsPublishFindingToSnsParamsToHclTerraform(struct!.publishFindingToSnsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "IotMitigationActionActionParamsPublishFindingToSnsParams",
    },
    replace_default_policy_version_params: {
      value: iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToHclTerraform(struct!.replaceDefaultPolicyVersionParams),
      isBlock: true,
      type: "struct",
      storageClassType: "IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams",
    },
    update_ca_certificate_params: {
      value: iotMitigationActionActionParamsUpdateCaCertificateParamsToHclTerraform(struct!.updateCaCertificateParams),
      isBlock: true,
      type: "struct",
      storageClassType: "IotMitigationActionActionParamsUpdateCaCertificateParams",
    },
    update_device_certificate_params: {
      value: iotMitigationActionActionParamsUpdateDeviceCertificateParamsToHclTerraform(struct!.updateDeviceCertificateParams),
      isBlock: true,
      type: "struct",
      storageClassType: "IotMitigationActionActionParamsUpdateDeviceCertificateParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotMitigationActionActionParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotMitigationActionActionParams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addThingsToThingGroupParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addThingsToThingGroupParams = this._addThingsToThingGroupParams?.internalValue;
    }
    if (this._enableIoTLoggingParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIoTLoggingParams = this._enableIoTLoggingParams?.internalValue;
    }
    if (this._publishFindingToSnsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishFindingToSnsParams = this._publishFindingToSnsParams?.internalValue;
    }
    if (this._replaceDefaultPolicyVersionParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceDefaultPolicyVersionParams = this._replaceDefaultPolicyVersionParams?.internalValue;
    }
    if (this._updateCaCertificateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCaCertificateParams = this._updateCaCertificateParams?.internalValue;
    }
    if (this._updateDeviceCertificateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDeviceCertificateParams = this._updateDeviceCertificateParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotMitigationActionActionParams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addThingsToThingGroupParams.internalValue = undefined;
      this._enableIoTLoggingParams.internalValue = undefined;
      this._publishFindingToSnsParams.internalValue = undefined;
      this._replaceDefaultPolicyVersionParams.internalValue = undefined;
      this._updateCaCertificateParams.internalValue = undefined;
      this._updateDeviceCertificateParams.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addThingsToThingGroupParams.internalValue = value.addThingsToThingGroupParams;
      this._enableIoTLoggingParams.internalValue = value.enableIoTLoggingParams;
      this._publishFindingToSnsParams.internalValue = value.publishFindingToSnsParams;
      this._replaceDefaultPolicyVersionParams.internalValue = value.replaceDefaultPolicyVersionParams;
      this._updateCaCertificateParams.internalValue = value.updateCaCertificateParams;
      this._updateDeviceCertificateParams.internalValue = value.updateDeviceCertificateParams;
    }
  }

  // add_things_to_thing_group_params - computed: true, optional: true, required: false
  private _addThingsToThingGroupParams = new IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(this, "add_things_to_thing_group_params");
  public get addThingsToThingGroupParams() {
    return this._addThingsToThingGroupParams;
  }
  public putAddThingsToThingGroupParams(value: IotMitigationActionActionParamsAddThingsToThingGroupParams) {
    this._addThingsToThingGroupParams.internalValue = value;
  }
  public resetAddThingsToThingGroupParams() {
    this._addThingsToThingGroupParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addThingsToThingGroupParamsInput() {
    return this._addThingsToThingGroupParams.internalValue;
  }

  // enable_io_t_logging_params - computed: true, optional: true, required: false
  private _enableIoTLoggingParams = new IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(this, "enable_io_t_logging_params");
  public get enableIoTLoggingParams() {
    return this._enableIoTLoggingParams;
  }
  public putEnableIoTLoggingParams(value: IotMitigationActionActionParamsEnableIoTLoggingParams) {
    this._enableIoTLoggingParams.internalValue = value;
  }
  public resetEnableIoTLoggingParams() {
    this._enableIoTLoggingParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIoTLoggingParamsInput() {
    return this._enableIoTLoggingParams.internalValue;
  }

  // publish_finding_to_sns_params - computed: true, optional: true, required: false
  private _publishFindingToSnsParams = new IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(this, "publish_finding_to_sns_params");
  public get publishFindingToSnsParams() {
    return this._publishFindingToSnsParams;
  }
  public putPublishFindingToSnsParams(value: IotMitigationActionActionParamsPublishFindingToSnsParams) {
    this._publishFindingToSnsParams.internalValue = value;
  }
  public resetPublishFindingToSnsParams() {
    this._publishFindingToSnsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishFindingToSnsParamsInput() {
    return this._publishFindingToSnsParams.internalValue;
  }

  // replace_default_policy_version_params - computed: true, optional: true, required: false
  private _replaceDefaultPolicyVersionParams = new IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(this, "replace_default_policy_version_params");
  public get replaceDefaultPolicyVersionParams() {
    return this._replaceDefaultPolicyVersionParams;
  }
  public putReplaceDefaultPolicyVersionParams(value: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams) {
    this._replaceDefaultPolicyVersionParams.internalValue = value;
  }
  public resetReplaceDefaultPolicyVersionParams() {
    this._replaceDefaultPolicyVersionParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceDefaultPolicyVersionParamsInput() {
    return this._replaceDefaultPolicyVersionParams.internalValue;
  }

  // update_ca_certificate_params - computed: true, optional: true, required: false
  private _updateCaCertificateParams = new IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(this, "update_ca_certificate_params");
  public get updateCaCertificateParams() {
    return this._updateCaCertificateParams;
  }
  public putUpdateCaCertificateParams(value: IotMitigationActionActionParamsUpdateCaCertificateParams) {
    this._updateCaCertificateParams.internalValue = value;
  }
  public resetUpdateCaCertificateParams() {
    this._updateCaCertificateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCaCertificateParamsInput() {
    return this._updateCaCertificateParams.internalValue;
  }

  // update_device_certificate_params - computed: true, optional: true, required: false
  private _updateDeviceCertificateParams = new IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(this, "update_device_certificate_params");
  public get updateDeviceCertificateParams() {
    return this._updateDeviceCertificateParams;
  }
  public putUpdateDeviceCertificateParams(value: IotMitigationActionActionParamsUpdateDeviceCertificateParams) {
    this._updateDeviceCertificateParams.internalValue = value;
  }
  public resetUpdateDeviceCertificateParams() {
    this._updateDeviceCertificateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDeviceCertificateParamsInput() {
    return this._updateDeviceCertificateParams.internalValue;
  }
}
export interface IotMitigationActionTags {
  /**
  * The tag's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#key IotMitigationAction#key}
  */
  readonly key?: string;
  /**
  * The tag's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#value IotMitigationAction#value}
  */
  readonly value?: string;
}

export function iotMitigationActionTagsToTerraform(struct?: IotMitigationActionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotMitigationActionTagsToHclTerraform(struct?: IotMitigationActionTags | cdktn.IResolvable): any {
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

export class IotMitigationActionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotMitigationActionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotMitigationActionTags | cdktn.IResolvable | undefined) {
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

export class IotMitigationActionTagsList extends cdktn.ComplexList {
  public internalValue? : IotMitigationActionTags[] | cdktn.IResolvable

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
  public get(index: number): IotMitigationActionTagsOutputReference {
    return new IotMitigationActionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action awscc_iot_mitigation_action}
*/
export class IotMitigationAction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_mitigation_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotMitigationAction to import
  * @param importFromId The id of the existing IotMitigationAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotMitigationAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_mitigation_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_mitigation_action awscc_iot_mitigation_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotMitigationActionConfig
  */
  public constructor(scope: Construct, id: string, config: IotMitigationActionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_mitigation_action',
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
    this._actionName = config.actionName;
    this._actionParams.internalValue = config.actionParams;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // action_params - computed: false, optional: false, required: true
  private _actionParams = new IotMitigationActionActionParamsOutputReference(this, "action_params");
  public get actionParams() {
    return this._actionParams;
  }
  public putActionParams(value: IotMitigationActionActionParams) {
    this._actionParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParamsInput() {
    return this._actionParams.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mitigation_action_arn - computed: true, optional: false, required: false
  public get mitigationActionArn() {
    return this.getStringAttribute('mitigation_action_arn');
  }

  // mitigation_action_id - computed: true, optional: false, required: false
  public get mitigationActionId() {
    return this.getStringAttribute('mitigation_action_id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotMitigationActionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotMitigationActionTags[] | cdktn.IResolvable) {
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
      action_name: cdktn.stringToTerraform(this._actionName),
      action_params: iotMitigationActionActionParamsToTerraform(this._actionParams.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(iotMitigationActionTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_name: {
        value: cdktn.stringToHclTerraform(this._actionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_params: {
        value: iotMitigationActionActionParamsToHclTerraform(this._actionParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotMitigationActionActionParams",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotMitigationActionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotMitigationActionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
