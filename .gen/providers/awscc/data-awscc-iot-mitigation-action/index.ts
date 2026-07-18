// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iot_mitigation_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotMitigationActionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iot_mitigation_action#id DataAwsccIotMitigationAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams {
}

export function dataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_dynamic_groups - computed: true, optional: false, required: false
  public get overrideDynamicGroups() {
    return this.getBooleanAttribute('override_dynamic_groups');
  }

  // thing_group_names - computed: true, optional: false, required: false
  public get thingGroupNames() {
    return cdktn.Fn.tolist(this.getListAttribute('thing_group_names'));
  }
}
export interface DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams {
}

export function dataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // role_arn_for_logging - computed: true, optional: false, required: false
  public get roleArnForLogging() {
    return this.getStringAttribute('role_arn_for_logging');
  }
}
export interface DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams {
}

export function dataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}
export interface DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
}

export function dataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}
export interface DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams {
}

export function dataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}
export interface DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams {
}

export function dataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}
export interface DataAwsccIotMitigationActionActionParams {
}

export function dataAwsccIotMitigationActionActionParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionActionParamsToHclTerraform(struct?: DataAwsccIotMitigationActionActionParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionActionParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotMitigationActionActionParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionActionParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_things_to_thing_group_params - computed: true, optional: false, required: false
  private _addThingsToThingGroupParams = new DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(this, "add_things_to_thing_group_params");
  public get addThingsToThingGroupParams() {
    return this._addThingsToThingGroupParams;
  }

  // enable_io_t_logging_params - computed: true, optional: false, required: false
  private _enableIoTLoggingParams = new DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(this, "enable_io_t_logging_params");
  public get enableIoTLoggingParams() {
    return this._enableIoTLoggingParams;
  }

  // publish_finding_to_sns_params - computed: true, optional: false, required: false
  private _publishFindingToSnsParams = new DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(this, "publish_finding_to_sns_params");
  public get publishFindingToSnsParams() {
    return this._publishFindingToSnsParams;
  }

  // replace_default_policy_version_params - computed: true, optional: false, required: false
  private _replaceDefaultPolicyVersionParams = new DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(this, "replace_default_policy_version_params");
  public get replaceDefaultPolicyVersionParams() {
    return this._replaceDefaultPolicyVersionParams;
  }

  // update_ca_certificate_params - computed: true, optional: false, required: false
  private _updateCaCertificateParams = new DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(this, "update_ca_certificate_params");
  public get updateCaCertificateParams() {
    return this._updateCaCertificateParams;
  }

  // update_device_certificate_params - computed: true, optional: false, required: false
  private _updateDeviceCertificateParams = new DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(this, "update_device_certificate_params");
  public get updateDeviceCertificateParams() {
    return this._updateDeviceCertificateParams;
  }
}
export interface DataAwsccIotMitigationActionTags {
}

export function dataAwsccIotMitigationActionTagsToTerraform(struct?: DataAwsccIotMitigationActionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotMitigationActionTagsToHclTerraform(struct?: DataAwsccIotMitigationActionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotMitigationActionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotMitigationActionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotMitigationActionTags | undefined) {
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

export class DataAwsccIotMitigationActionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotMitigationActionTagsOutputReference {
    return new DataAwsccIotMitigationActionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iot_mitigation_action awscc_iot_mitigation_action}
*/
export class DataAwsccIotMitigationAction extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_mitigation_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotMitigationAction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotMitigationAction to import
  * @param importFromId The id of the existing DataAwsccIotMitigationAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotMitigationAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_mitigation_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/iot_mitigation_action awscc_iot_mitigation_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotMitigationActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotMitigationActionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // action_params - computed: true, optional: false, required: false
  private _actionParams = new DataAwsccIotMitigationActionActionParamsOutputReference(this, "action_params");
  public get actionParams() {
    return this._actionParams;
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

  // mitigation_action_arn - computed: true, optional: false, required: false
  public get mitigationActionArn() {
    return this.getStringAttribute('mitigation_action_arn');
  }

  // mitigation_action_id - computed: true, optional: false, required: false
  public get mitigationActionId() {
    return this.getStringAttribute('mitigation_action_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotMitigationActionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
