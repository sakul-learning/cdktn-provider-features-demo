// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connectcampaigns_campaign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectcampaignsCampaignConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connectcampaigns_campaign#id DataAwsccConnectcampaignsCampaign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig {
}

export function dataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigToTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dialing_capacity - computed: true, optional: false, required: false
  public get dialingCapacity() {
    return this.getNumberAttribute('dialing_capacity');
  }
}
export interface DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig {
}

export function dataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigToTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_allocation - computed: true, optional: false, required: false
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }

  // dialing_capacity - computed: true, optional: false, required: false
  public get dialingCapacity() {
    return this.getNumberAttribute('dialing_capacity');
  }
}
export interface DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig {
}

export function dataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigToTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_allocation - computed: true, optional: false, required: false
  public get bandwidthAllocation() {
    return this.getNumberAttribute('bandwidth_allocation');
  }

  // dialing_capacity - computed: true, optional: false, required: false
  public get dialingCapacity() {
    return this.getNumberAttribute('dialing_capacity');
  }
}
export interface DataAwsccConnectcampaignsCampaignDialerConfig {
}

export function dataAwsccConnectcampaignsCampaignDialerConfigToTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignDialerConfigToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignDialerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignDialerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsCampaignDialerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignDialerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_dialer_config - computed: true, optional: false, required: false
  private _agentlessDialerConfig = new DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference(this, "agentless_dialer_config");
  public get agentlessDialerConfig() {
    return this._agentlessDialerConfig;
  }

  // predictive_dialer_config - computed: true, optional: false, required: false
  private _predictiveDialerConfig = new DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference(this, "predictive_dialer_config");
  public get predictiveDialerConfig() {
    return this._predictiveDialerConfig;
  }

  // progressive_dialer_config - computed: true, optional: false, required: false
  private _progressiveDialerConfig = new DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference(this, "progressive_dialer_config");
  public get progressiveDialerConfig() {
    return this._progressiveDialerConfig;
  }
}
export interface DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig {
}

export function dataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigToTerraform(struct?: DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // await_answer_machine_prompt - computed: true, optional: false, required: false
  public get awaitAnswerMachinePrompt() {
    return this.getBooleanAttribute('await_answer_machine_prompt');
  }

  // enable_answer_machine_detection - computed: true, optional: false, required: false
  public get enableAnswerMachineDetection() {
    return this.getBooleanAttribute('enable_answer_machine_detection');
  }
}
export interface DataAwsccConnectcampaignsCampaignOutboundCallConfig {
}

export function dataAwsccConnectcampaignsCampaignOutboundCallConfigToTerraform(struct?: DataAwsccConnectcampaignsCampaignOutboundCallConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignOutboundCallConfigToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignOutboundCallConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectcampaignsCampaignOutboundCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignOutboundCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // answer_machine_detection_config - computed: true, optional: false, required: false
  private _answerMachineDetectionConfig = new DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference(this, "answer_machine_detection_config");
  public get answerMachineDetectionConfig() {
    return this._answerMachineDetectionConfig;
  }

  // connect_contact_flow_arn - computed: true, optional: false, required: false
  public get connectContactFlowArn() {
    return this.getStringAttribute('connect_contact_flow_arn');
  }

  // connect_queue_arn - computed: true, optional: false, required: false
  public get connectQueueArn() {
    return this.getStringAttribute('connect_queue_arn');
  }

  // connect_source_phone_number - computed: true, optional: false, required: false
  public get connectSourcePhoneNumber() {
    return this.getStringAttribute('connect_source_phone_number');
  }
}
export interface DataAwsccConnectcampaignsCampaignTags {
}

export function dataAwsccConnectcampaignsCampaignTagsToTerraform(struct?: DataAwsccConnectcampaignsCampaignTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectcampaignsCampaignTagsToHclTerraform(struct?: DataAwsccConnectcampaignsCampaignTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectcampaignsCampaignTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectcampaignsCampaignTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectcampaignsCampaignTags | undefined) {
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

export class DataAwsccConnectcampaignsCampaignTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectcampaignsCampaignTagsOutputReference {
    return new DataAwsccConnectcampaignsCampaignTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connectcampaigns_campaign awscc_connectcampaigns_campaign}
*/
export class DataAwsccConnectcampaignsCampaign extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connectcampaigns_campaign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectcampaignsCampaign to import
  * @param importFromId The id of the existing DataAwsccConnectcampaignsCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectcampaignsCampaign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connectcampaigns_campaign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connectcampaigns_campaign awscc_connectcampaigns_campaign} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectcampaignsCampaignConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectcampaignsCampaignConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connectcampaigns_campaign',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connect_instance_arn - computed: true, optional: false, required: false
  public get connectInstanceArn() {
    return this.getStringAttribute('connect_instance_arn');
  }

  // dialer_config - computed: true, optional: false, required: false
  private _dialerConfig = new DataAwsccConnectcampaignsCampaignDialerConfigOutputReference(this, "dialer_config");
  public get dialerConfig() {
    return this._dialerConfig;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outbound_call_config - computed: true, optional: false, required: false
  private _outboundCallConfig = new DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference(this, "outbound_call_config");
  public get outboundCallConfig() {
    return this._outboundCallConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccConnectcampaignsCampaignTagsList(this, "tags", true);
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
