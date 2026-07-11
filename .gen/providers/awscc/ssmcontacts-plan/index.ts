// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmcontactsPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}
  */
  readonly contactId?: string;
  /**
  * Rotation Ids to associate with Oncall Contact for engagement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}
  */
  readonly rotationIds?: string[];
  /**
  * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}
  */
  readonly stages?: SsmcontactsPlanStages[] | cdktn.IResolvable;
}
export interface SsmcontactsPlanStagesTargetsChannelTargetInfo {
  /**
  * The Amazon Resource Name (ARN) of the contact channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#channel_id SsmcontactsPlan#channel_id}
  */
  readonly channelId?: string;
  /**
  * The number of minutes to wait to retry sending engagement in the case the engagement initially fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}
  */
  readonly retryIntervalInMinutes?: number;
}

export function ssmcontactsPlanStagesTargetsChannelTargetInfoToTerraform(struct?: SsmcontactsPlanStagesTargetsChannelTargetInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_id: cdktn.stringToTerraform(struct!.channelId),
    retry_interval_in_minutes: cdktn.numberToTerraform(struct!.retryIntervalInMinutes),
  }
}


export function ssmcontactsPlanStagesTargetsChannelTargetInfoToHclTerraform(struct?: SsmcontactsPlanStagesTargetsChannelTargetInfo | cdktn.IResolvable): any {
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
    retry_interval_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryIntervalInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmcontactsPlanStagesTargetsChannelTargetInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._retryIntervalInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalInMinutes = this._retryIntervalInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsPlanStagesTargetsChannelTargetInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._retryIntervalInMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._retryIntervalInMinutes = value.retryIntervalInMinutes;
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

  // retry_interval_in_minutes - computed: true, optional: true, required: false
  private _retryIntervalInMinutes?: number;
  public get retryIntervalInMinutes() {
    return this.getNumberAttribute('retry_interval_in_minutes');
  }
  public set retryIntervalInMinutes(value: number) {
    this._retryIntervalInMinutes = value;
  }
  public resetRetryIntervalInMinutes() {
    this._retryIntervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInMinutesInput() {
    return this._retryIntervalInMinutes;
  }
}
export interface SsmcontactsPlanStagesTargetsContactTargetInfo {
  /**
  * The Amazon Resource Name (ARN) of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}
  */
  readonly contactId?: string;
  /**
  * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}
  */
  readonly isEssential?: boolean | cdktn.IResolvable;
}

export function ssmcontactsPlanStagesTargetsContactTargetInfoToTerraform(struct?: SsmcontactsPlanStagesTargetsContactTargetInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contact_id: cdktn.stringToTerraform(struct!.contactId),
    is_essential: cdktn.booleanToTerraform(struct!.isEssential),
  }
}


export function ssmcontactsPlanStagesTargetsContactTargetInfoToHclTerraform(struct?: SsmcontactsPlanStagesTargetsContactTargetInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contact_id: {
      value: cdktn.stringToHclTerraform(struct!.contactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_essential: {
      value: cdktn.booleanToHclTerraform(struct!.isEssential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmcontactsPlanStagesTargetsContactTargetInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactId = this._contactId;
    }
    if (this._isEssential !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEssential = this._isEssential;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsPlanStagesTargetsContactTargetInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactId = undefined;
      this._isEssential = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactId = value.contactId;
      this._isEssential = value.isEssential;
    }
  }

  // contact_id - computed: true, optional: true, required: false
  private _contactId?: string;
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  public resetContactId() {
    this._contactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // is_essential - computed: true, optional: true, required: false
  private _isEssential?: boolean | cdktn.IResolvable;
  public get isEssential() {
    return this.getBooleanAttribute('is_essential');
  }
  public set isEssential(value: boolean | cdktn.IResolvable) {
    this._isEssential = value;
  }
  public resetIsEssential() {
    this._isEssential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEssentialInput() {
    return this._isEssential;
  }
}
export interface SsmcontactsPlanStagesTargets {
  /**
  * Information about the contact channel that SSM Incident Manager uses to engage the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}
  */
  readonly channelTargetInfo?: SsmcontactsPlanStagesTargetsChannelTargetInfo;
  /**
  * The contact that SSM Incident Manager is engaging during an incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}
  */
  readonly contactTargetInfo?: SsmcontactsPlanStagesTargetsContactTargetInfo;
}

export function ssmcontactsPlanStagesTargetsToTerraform(struct?: SsmcontactsPlanStagesTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_target_info: ssmcontactsPlanStagesTargetsChannelTargetInfoToTerraform(struct!.channelTargetInfo),
    contact_target_info: ssmcontactsPlanStagesTargetsContactTargetInfoToTerraform(struct!.contactTargetInfo),
  }
}


export function ssmcontactsPlanStagesTargetsToHclTerraform(struct?: SsmcontactsPlanStagesTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_target_info: {
      value: ssmcontactsPlanStagesTargetsChannelTargetInfoToHclTerraform(struct!.channelTargetInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmcontactsPlanStagesTargetsChannelTargetInfo",
    },
    contact_target_info: {
      value: ssmcontactsPlanStagesTargetsContactTargetInfoToHclTerraform(struct!.contactTargetInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmcontactsPlanStagesTargetsContactTargetInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsPlanStagesTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmcontactsPlanStagesTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelTargetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTargetInfo = this._channelTargetInfo?.internalValue;
    }
    if (this._contactTargetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactTargetInfo = this._contactTargetInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsPlanStagesTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelTargetInfo.internalValue = undefined;
      this._contactTargetInfo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelTargetInfo.internalValue = value.channelTargetInfo;
      this._contactTargetInfo.internalValue = value.contactTargetInfo;
    }
  }

  // channel_target_info - computed: true, optional: true, required: false
  private _channelTargetInfo = new SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference(this, "channel_target_info");
  public get channelTargetInfo() {
    return this._channelTargetInfo;
  }
  public putChannelTargetInfo(value: SsmcontactsPlanStagesTargetsChannelTargetInfo) {
    this._channelTargetInfo.internalValue = value;
  }
  public resetChannelTargetInfo() {
    this._channelTargetInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTargetInfoInput() {
    return this._channelTargetInfo.internalValue;
  }

  // contact_target_info - computed: true, optional: true, required: false
  private _contactTargetInfo = new SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference(this, "contact_target_info");
  public get contactTargetInfo() {
    return this._contactTargetInfo;
  }
  public putContactTargetInfo(value: SsmcontactsPlanStagesTargetsContactTargetInfo) {
    this._contactTargetInfo.internalValue = value;
  }
  public resetContactTargetInfo() {
    this._contactTargetInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTargetInfoInput() {
    return this._contactTargetInfo.internalValue;
  }
}

export class SsmcontactsPlanStagesTargetsList extends cdktn.ComplexList {
  public internalValue? : SsmcontactsPlanStagesTargets[] | cdktn.IResolvable

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
  public get(index: number): SsmcontactsPlanStagesTargetsOutputReference {
    return new SsmcontactsPlanStagesTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsPlanStages {
  /**
  * The time to wait until beginning the next stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}
  */
  readonly durationInMinutes?: number;
  /**
  * The contacts or contact methods that the escalation plan or engagement plan is engaging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#targets SsmcontactsPlan#targets}
  */
  readonly targets?: SsmcontactsPlanStagesTargets[] | cdktn.IResolvable;
}

export function ssmcontactsPlanStagesToTerraform(struct?: SsmcontactsPlanStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_in_minutes: cdktn.numberToTerraform(struct!.durationInMinutes),
    targets: cdktn.listMapper(ssmcontactsPlanStagesTargetsToTerraform, false)(struct!.targets),
  }
}


export function ssmcontactsPlanStagesToHclTerraform(struct?: SsmcontactsPlanStages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.durationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktn.listMapperHcl(ssmcontactsPlanStagesTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsPlanStagesTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsPlanStagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmcontactsPlanStages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationInMinutes = this._durationInMinutes;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsPlanStages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationInMinutes = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationInMinutes = value.durationInMinutes;
      this._targets.internalValue = value.targets;
    }
  }

  // duration_in_minutes - computed: true, optional: true, required: false
  private _durationInMinutes?: number;
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }
  public set durationInMinutes(value: number) {
    this._durationInMinutes = value;
  }
  public resetDurationInMinutes() {
    this._durationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMinutesInput() {
    return this._durationInMinutes;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new SsmcontactsPlanStagesTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmcontactsPlanStagesTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class SsmcontactsPlanStagesList extends cdktn.ComplexList {
  public internalValue? : SsmcontactsPlanStages[] | cdktn.IResolvable

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
  public get(index: number): SsmcontactsPlanStagesOutputReference {
    return new SsmcontactsPlanStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan awscc_ssmcontacts_plan}
*/
export class SsmcontactsPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssmcontacts_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmcontactsPlan to import
  * @param importFromId The id of the existing SsmcontactsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmcontactsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmcontacts_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ssmcontacts_plan awscc_ssmcontacts_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmcontactsPlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SsmcontactsPlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmcontacts_plan',
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
    this._contactId = config.contactId;
    this._rotationIds = config.rotationIds;
    this._stages.internalValue = config.stages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_id - computed: true, optional: true, required: false
  private _contactId?: string;
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  public resetContactId() {
    this._contactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rotation_ids - computed: true, optional: true, required: false
  private _rotationIds?: string[];
  public get rotationIds() {
    return this.getListAttribute('rotation_ids');
  }
  public set rotationIds(value: string[]) {
    this._rotationIds = value;
  }
  public resetRotationIds() {
    this._rotationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIdsInput() {
    return this._rotationIds;
  }

  // stages - computed: true, optional: true, required: false
  private _stages = new SsmcontactsPlanStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: SsmcontactsPlanStages[] | cdktn.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_id: cdktn.stringToTerraform(this._contactId),
      rotation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._rotationIds),
      stages: cdktn.listMapper(ssmcontactsPlanStagesToTerraform, false)(this._stages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_id: {
        value: cdktn.stringToHclTerraform(this._contactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._rotationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      stages: {
        value: cdktn.listMapperHcl(ssmcontactsPlanStagesToHclTerraform, false)(this._stages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmcontactsPlanStagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
