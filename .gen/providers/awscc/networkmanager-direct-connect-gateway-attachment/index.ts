// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerDirectConnectGatewayAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of a core network for the Direct Connect Gateway attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#core_network_id NetworkmanagerDirectConnectGatewayAttachment#core_network_id}
  */
  readonly coreNetworkId: string;
  /**
  * The ARN of the Direct Connect Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDirectConnectGatewayAttachment#direct_connect_gateway_arn}
  */
  readonly directConnectGatewayArn: string;
  /**
  * The Regions where the edges are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#edge_locations NetworkmanagerDirectConnectGatewayAttachment#edge_locations}
  */
  readonly edgeLocations: string[];
  /**
  * The attachment to move from one network function group to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_network_function_group_change NetworkmanagerDirectConnectGatewayAttachment#proposed_network_function_group_change}
  */
  readonly proposedNetworkFunctionGroupChange?: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange;
  /**
  * The attachment to move from one segment to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_segment_change NetworkmanagerDirectConnectGatewayAttachment#proposed_segment_change}
  */
  readonly proposedSegmentChange?: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange;
  /**
  * Routing policy label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#routing_policy_label NetworkmanagerDirectConnectGatewayAttachment#routing_policy_label}
  */
  readonly routingPolicyLabel?: string;
  /**
  * Tags for the attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}
  */
  readonly tags?: NetworkmanagerDirectConnectGatewayAttachmentTags[] | cdktn.IResolvable;
}
export interface NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}
  */
  readonly value?: string;
}

export function networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsToTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsToHclTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable): any {
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

export class NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference {
    return new NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange {
  /**
  * The rule number in the policy document that applies to this change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#attachment_policy_rule_number NetworkmanagerDirectConnectGatewayAttachment#attachment_policy_rule_number}
  */
  readonly attachmentPolicyRuleNumber?: number;
  /**
  * The name of the network function group to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#network_function_group_name NetworkmanagerDirectConnectGatewayAttachment#network_function_group_name}
  */
  readonly networkFunctionGroupName?: string;
  /**
  * The key-value tags that changed for the network function group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}
  */
  readonly tags?: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[] | cdktn.IResolvable;
}

export function networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeToTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
    network_function_group_name: cdktn.stringToTerraform(struct!.networkFunctionGroupName),
    tags: cdktn.listMapper(networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsToTerraform, false)(struct!.tags),
  }
}


export function networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeToHclTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attachment_policy_rule_number: {
      value: cdktn.numberToHclTerraform(struct!.attachmentPolicyRuleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_function_group_name: {
      value: cdktn.stringToHclTerraform(struct!.networkFunctionGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentPolicyRuleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentPolicyRuleNumber = this._attachmentPolicyRuleNumber;
    }
    if (this._networkFunctionGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionGroupName = this._networkFunctionGroupName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentPolicyRuleNumber = undefined;
      this._networkFunctionGroupName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentPolicyRuleNumber = value.attachmentPolicyRuleNumber;
      this._networkFunctionGroupName = value.networkFunctionGroupName;
      this._tags.internalValue = value.tags;
    }
  }

  // attachment_policy_rule_number - computed: true, optional: true, required: false
  private _attachmentPolicyRuleNumber?: number;
  public get attachmentPolicyRuleNumber() {
    return this.getNumberAttribute('attachment_policy_rule_number');
  }
  public set attachmentPolicyRuleNumber(value: number) {
    this._attachmentPolicyRuleNumber = value;
  }
  public resetAttachmentPolicyRuleNumber() {
    this._attachmentPolicyRuleNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPolicyRuleNumberInput() {
    return this._attachmentPolicyRuleNumber;
  }

  // network_function_group_name - computed: true, optional: true, required: false
  private _networkFunctionGroupName?: string;
  public get networkFunctionGroupName() {
    return this.getStringAttribute('network_function_group_name');
  }
  public set networkFunctionGroupName(value: string) {
    this._networkFunctionGroupName = value;
  }
  public resetNetworkFunctionGroupName() {
    this._networkFunctionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupNameInput() {
    return this._networkFunctionGroupName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}
  */
  readonly value?: string;
}

export function networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsToTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsToHclTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags | cdktn.IResolvable): any {
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

export class NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference {
    return new NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange {
  /**
  * The rule number in the policy document that applies to this change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#attachment_policy_rule_number NetworkmanagerDirectConnectGatewayAttachment#attachment_policy_rule_number}
  */
  readonly attachmentPolicyRuleNumber?: number;
  /**
  * The name of the segment to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#segment_name NetworkmanagerDirectConnectGatewayAttachment#segment_name}
  */
  readonly segmentName?: string;
  /**
  * The key-value tags that changed for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}
  */
  readonly tags?: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[] | cdktn.IResolvable;
}

export function networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeToTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
    segment_name: cdktn.stringToTerraform(struct!.segmentName),
    tags: cdktn.listMapper(networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsToTerraform, false)(struct!.tags),
  }
}


export function networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeToHclTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attachment_policy_rule_number: {
      value: cdktn.numberToHclTerraform(struct!.attachmentPolicyRuleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_name: {
      value: cdktn.stringToHclTerraform(struct!.segmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentPolicyRuleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentPolicyRuleNumber = this._attachmentPolicyRuleNumber;
    }
    if (this._segmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentName = this._segmentName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentPolicyRuleNumber = undefined;
      this._segmentName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentPolicyRuleNumber = value.attachmentPolicyRuleNumber;
      this._segmentName = value.segmentName;
      this._tags.internalValue = value.tags;
    }
  }

  // attachment_policy_rule_number - computed: true, optional: true, required: false
  private _attachmentPolicyRuleNumber?: number;
  public get attachmentPolicyRuleNumber() {
    return this.getNumberAttribute('attachment_policy_rule_number');
  }
  public set attachmentPolicyRuleNumber(value: number) {
    this._attachmentPolicyRuleNumber = value;
  }
  public resetAttachmentPolicyRuleNumber() {
    this._attachmentPolicyRuleNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPolicyRuleNumberInput() {
    return this._attachmentPolicyRuleNumber;
  }

  // segment_name - computed: true, optional: true, required: false
  private _segmentName?: string;
  public get segmentName() {
    return this.getStringAttribute('segment_name');
  }
  public set segmentName(value: string) {
    this._segmentName = value;
  }
  public resetSegmentName() {
    this._segmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNameInput() {
    return this._segmentName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface NetworkmanagerDirectConnectGatewayAttachmentTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}
  */
  readonly value?: string;
}

export function networkmanagerDirectConnectGatewayAttachmentTagsToTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerDirectConnectGatewayAttachmentTagsToHclTerraform(struct?: NetworkmanagerDirectConnectGatewayAttachmentTags | cdktn.IResolvable): any {
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

export class NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerDirectConnectGatewayAttachmentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerDirectConnectGatewayAttachmentTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerDirectConnectGatewayAttachmentTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerDirectConnectGatewayAttachmentTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference {
    return new NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment awscc_networkmanager_direct_connect_gateway_attachment}
*/
export class NetworkmanagerDirectConnectGatewayAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_direct_connect_gateway_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerDirectConnectGatewayAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerDirectConnectGatewayAttachment to import
  * @param importFromId The id of the existing NetworkmanagerDirectConnectGatewayAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerDirectConnectGatewayAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_direct_connect_gateway_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_direct_connect_gateway_attachment awscc_networkmanager_direct_connect_gateway_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerDirectConnectGatewayAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerDirectConnectGatewayAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_direct_connect_gateway_attachment',
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
    this._coreNetworkId = config.coreNetworkId;
    this._directConnectGatewayArn = config.directConnectGatewayArn;
    this._edgeLocations = config.edgeLocations;
    this._proposedNetworkFunctionGroupChange.internalValue = config.proposedNetworkFunctionGroupChange;
    this._proposedSegmentChange.internalValue = config.proposedSegmentChange;
    this._routingPolicyLabel = config.routingPolicyLabel;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // attachment_policy_rule_number - computed: true, optional: false, required: false
  public get attachmentPolicyRuleNumber() {
    return this.getNumberAttribute('attachment_policy_rule_number');
  }

  // attachment_type - computed: true, optional: false, required: false
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }

  // core_network_arn - computed: true, optional: false, required: false
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }

  // core_network_id - computed: false, optional: false, required: true
  private _coreNetworkId?: string;
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }
  public set coreNetworkId(value: string) {
    this._coreNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkIdInput() {
    return this._coreNetworkId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // direct_connect_gateway_arn - computed: false, optional: false, required: true
  private _directConnectGatewayArn?: string;
  public get directConnectGatewayArn() {
    return this.getStringAttribute('direct_connect_gateway_arn');
  }
  public set directConnectGatewayArn(value: string) {
    this._directConnectGatewayArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectGatewayArnInput() {
    return this._directConnectGatewayArn;
  }

  // edge_locations - computed: false, optional: false, required: true
  private _edgeLocations?: string[];
  public get edgeLocations() {
    return this.getListAttribute('edge_locations');
  }
  public set edgeLocations(value: string[]) {
    this._edgeLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_errors - computed: true, optional: false, required: false
  public get lastModificationErrors() {
    return this.getListAttribute('last_modification_errors');
  }

  // network_function_group_name - computed: true, optional: false, required: false
  public get networkFunctionGroupName() {
    return this.getStringAttribute('network_function_group_name');
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // proposed_network_function_group_change - computed: true, optional: true, required: false
  private _proposedNetworkFunctionGroupChange = new NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference(this, "proposed_network_function_group_change");
  public get proposedNetworkFunctionGroupChange() {
    return this._proposedNetworkFunctionGroupChange;
  }
  public putProposedNetworkFunctionGroupChange(value: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange) {
    this._proposedNetworkFunctionGroupChange.internalValue = value;
  }
  public resetProposedNetworkFunctionGroupChange() {
    this._proposedNetworkFunctionGroupChange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposedNetworkFunctionGroupChangeInput() {
    return this._proposedNetworkFunctionGroupChange.internalValue;
  }

  // proposed_segment_change - computed: true, optional: true, required: false
  private _proposedSegmentChange = new NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference(this, "proposed_segment_change");
  public get proposedSegmentChange() {
    return this._proposedSegmentChange;
  }
  public putProposedSegmentChange(value: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange) {
    this._proposedSegmentChange.internalValue = value;
  }
  public resetProposedSegmentChange() {
    this._proposedSegmentChange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposedSegmentChangeInput() {
    return this._proposedSegmentChange.internalValue;
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // routing_policy_label - computed: true, optional: true, required: false
  private _routingPolicyLabel?: string;
  public get routingPolicyLabel() {
    return this.getStringAttribute('routing_policy_label');
  }
  public set routingPolicyLabel(value: string) {
    this._routingPolicyLabel = value;
  }
  public resetRoutingPolicyLabel() {
    this._routingPolicyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyLabelInput() {
    return this._routingPolicyLabel;
  }

  // segment_name - computed: true, optional: false, required: false
  public get segmentName() {
    return this.getStringAttribute('segment_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NetworkmanagerDirectConnectGatewayAttachmentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerDirectConnectGatewayAttachmentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
      direct_connect_gateway_arn: cdktn.stringToTerraform(this._directConnectGatewayArn),
      edge_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._edgeLocations),
      proposed_network_function_group_change: networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeToTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
      proposed_segment_change: networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeToTerraform(this._proposedSegmentChange.internalValue),
      routing_policy_label: cdktn.stringToTerraform(this._routingPolicyLabel),
      tags: cdktn.listMapper(networkmanagerDirectConnectGatewayAttachmentTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      core_network_id: {
        value: cdktn.stringToHclTerraform(this._coreNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_connect_gateway_arn: {
        value: cdktn.stringToHclTerraform(this._directConnectGatewayArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._edgeLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      proposed_network_function_group_change: {
        value: networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeToHclTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange",
      },
      proposed_segment_change: {
        value: networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeToHclTerraform(this._proposedSegmentChange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange",
      },
      routing_policy_label: {
        value: cdktn.stringToHclTerraform(this._routingPolicyLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(networkmanagerDirectConnectGatewayAttachmentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkmanagerDirectConnectGatewayAttachmentTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
