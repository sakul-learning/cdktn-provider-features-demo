// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkmanagerConnectAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * ID of the CoreNetwork that the attachment will be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}
  */
  readonly coreNetworkId: string;
  /**
  * Edge location of the attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}
  */
  readonly edgeLocation: string;
  /**
  * The name of the network function group attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}
  */
  readonly networkFunctionGroupName?: string;
  /**
  * Protocol options for connect attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}
  */
  readonly options: NetworkmanagerConnectAttachmentOptions;
  /**
  * The attachment to move from one network function group to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#proposed_network_function_group_change NetworkmanagerConnectAttachment#proposed_network_function_group_change}
  */
  readonly proposedNetworkFunctionGroupChange?: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange;
  /**
  * The attachment to move from one segment to another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#proposed_segment_change NetworkmanagerConnectAttachment#proposed_segment_change}
  */
  readonly proposedSegmentChange?: NetworkmanagerConnectAttachmentProposedSegmentChange;
  /**
  * Routing policy label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}
  */
  readonly routingPolicyLabel?: string;
  /**
  * Tags for the attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}
  */
  readonly tags?: NetworkmanagerConnectAttachmentTags[] | cdktn.IResolvable;
  /**
  * Id of transport attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}
  */
  readonly transportAttachmentId: string;
}
export interface NetworkmanagerConnectAttachmentOptions {
  /**
  * Tunnel protocol for connect attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}
  */
  readonly protocol?: string;
}

export function networkmanagerConnectAttachmentOptionsToTerraform(struct?: NetworkmanagerConnectAttachmentOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function networkmanagerConnectAttachmentOptionsToHclTerraform(struct?: NetworkmanagerConnectAttachmentOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkmanagerConnectAttachmentOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkmanagerConnectAttachmentOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkmanagerConnectAttachmentOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
    }
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}
  */
  readonly value?: string;
}

export function networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsToTerraform(struct?: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsToHclTerraform(struct?: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable): any {
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

export class NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference {
    return new NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange {
  /**
  * The rule number in the policy document that applies to this change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}
  */
  readonly attachmentPolicyRuleNumber?: number;
  /**
  * The name of the network function group to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}
  */
  readonly networkFunctionGroupName?: string;
  /**
  * The key-value tags that changed for the network function group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}
  */
  readonly tags?: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[] | cdktn.IResolvable;
}

export function networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeToTerraform(struct?: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
    network_function_group_name: cdktn.stringToTerraform(struct!.networkFunctionGroupName),
    tags: cdktn.listMapper(networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsToTerraform, false)(struct!.tags),
  }
}


export function networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeToHclTerraform(struct?: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange | cdktn.IResolvable | undefined) {
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
  private _tags = new NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags[] | cdktn.IResolvable) {
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
export interface NetworkmanagerConnectAttachmentProposedSegmentChangeTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}
  */
  readonly value?: string;
}

export function networkmanagerConnectAttachmentProposedSegmentChangeTagsToTerraform(struct?: NetworkmanagerConnectAttachmentProposedSegmentChangeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerConnectAttachmentProposedSegmentChangeTagsToHclTerraform(struct?: NetworkmanagerConnectAttachmentProposedSegmentChangeTags | cdktn.IResolvable): any {
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

export class NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerConnectAttachmentProposedSegmentChangeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerConnectAttachmentProposedSegmentChangeTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerConnectAttachmentProposedSegmentChangeTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference {
    return new NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkmanagerConnectAttachmentProposedSegmentChange {
  /**
  * The rule number in the policy document that applies to this change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}
  */
  readonly attachmentPolicyRuleNumber?: number;
  /**
  * The name of the segment to change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#segment_name NetworkmanagerConnectAttachment#segment_name}
  */
  readonly segmentName?: string;
  /**
  * The list of key-value tags that changed for the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}
  */
  readonly tags?: NetworkmanagerConnectAttachmentProposedSegmentChangeTags[] | cdktn.IResolvable;
}

export function networkmanagerConnectAttachmentProposedSegmentChangeToTerraform(struct?: NetworkmanagerConnectAttachmentProposedSegmentChange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
    segment_name: cdktn.stringToTerraform(struct!.segmentName),
    tags: cdktn.listMapper(networkmanagerConnectAttachmentProposedSegmentChangeTagsToTerraform, false)(struct!.tags),
  }
}


export function networkmanagerConnectAttachmentProposedSegmentChangeToHclTerraform(struct?: NetworkmanagerConnectAttachmentProposedSegmentChange | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(networkmanagerConnectAttachmentProposedSegmentChangeTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkmanagerConnectAttachmentProposedSegmentChange | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerConnectAttachmentProposedSegmentChange | cdktn.IResolvable | undefined) {
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
  private _tags = new NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerConnectAttachmentProposedSegmentChangeTags[] | cdktn.IResolvable) {
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
export interface NetworkmanagerConnectAttachmentTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}
  */
  readonly value?: string;
}

export function networkmanagerConnectAttachmentTagsToTerraform(struct?: NetworkmanagerConnectAttachmentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function networkmanagerConnectAttachmentTagsToHclTerraform(struct?: NetworkmanagerConnectAttachmentTags | cdktn.IResolvable): any {
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

export class NetworkmanagerConnectAttachmentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkmanagerConnectAttachmentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkmanagerConnectAttachmentTags | cdktn.IResolvable | undefined) {
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

export class NetworkmanagerConnectAttachmentTagsList extends cdktn.ComplexList {
  public internalValue? : NetworkmanagerConnectAttachmentTags[] | cdktn.IResolvable

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
  public get(index: number): NetworkmanagerConnectAttachmentTagsOutputReference {
    return new NetworkmanagerConnectAttachmentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment}
*/
export class NetworkmanagerConnectAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_connect_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkmanagerConnectAttachment to import
  * @param importFromId The id of the existing NetworkmanagerConnectAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkmanagerConnectAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_connect_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkmanagerConnectAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkmanagerConnectAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_connect_attachment',
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
    this._edgeLocation = config.edgeLocation;
    this._networkFunctionGroupName = config.networkFunctionGroupName;
    this._options.internalValue = config.options;
    this._proposedNetworkFunctionGroupChange.internalValue = config.proposedNetworkFunctionGroupChange;
    this._proposedSegmentChange.internalValue = config.proposedSegmentChange;
    this._routingPolicyLabel = config.routingPolicyLabel;
    this._tags.internalValue = config.tags;
    this._transportAttachmentId = config.transportAttachmentId;
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

  // edge_location - computed: false, optional: false, required: true
  private _edgeLocation?: string;
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
  }
  public set edgeLocation(value: string) {
    this._edgeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationInput() {
    return this._edgeLocation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_errors - computed: true, optional: false, required: false
  public get lastModificationErrors() {
    return this.getListAttribute('last_modification_errors');
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

  // options - computed: false, optional: false, required: true
  private _options = new NetworkmanagerConnectAttachmentOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: NetworkmanagerConnectAttachmentOptions) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // proposed_network_function_group_change - computed: true, optional: true, required: false
  private _proposedNetworkFunctionGroupChange = new NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference(this, "proposed_network_function_group_change");
  public get proposedNetworkFunctionGroupChange() {
    return this._proposedNetworkFunctionGroupChange;
  }
  public putProposedNetworkFunctionGroupChange(value: NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange) {
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
  private _proposedSegmentChange = new NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference(this, "proposed_segment_change");
  public get proposedSegmentChange() {
    return this._proposedSegmentChange;
  }
  public putProposedSegmentChange(value: NetworkmanagerConnectAttachmentProposedSegmentChange) {
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
  private _tags = new NetworkmanagerConnectAttachmentTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkmanagerConnectAttachmentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transport_attachment_id - computed: false, optional: false, required: true
  private _transportAttachmentId?: string;
  public get transportAttachmentId() {
    return this.getStringAttribute('transport_attachment_id');
  }
  public set transportAttachmentId(value: string) {
    this._transportAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportAttachmentIdInput() {
    return this._transportAttachmentId;
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
      edge_location: cdktn.stringToTerraform(this._edgeLocation),
      network_function_group_name: cdktn.stringToTerraform(this._networkFunctionGroupName),
      options: networkmanagerConnectAttachmentOptionsToTerraform(this._options.internalValue),
      proposed_network_function_group_change: networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeToTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
      proposed_segment_change: networkmanagerConnectAttachmentProposedSegmentChangeToTerraform(this._proposedSegmentChange.internalValue),
      routing_policy_label: cdktn.stringToTerraform(this._routingPolicyLabel),
      tags: cdktn.listMapper(networkmanagerConnectAttachmentTagsToTerraform, false)(this._tags.internalValue),
      transport_attachment_id: cdktn.stringToTerraform(this._transportAttachmentId),
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
      edge_location: {
        value: cdktn.stringToHclTerraform(this._edgeLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_function_group_name: {
        value: cdktn.stringToHclTerraform(this._networkFunctionGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: networkmanagerConnectAttachmentOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkmanagerConnectAttachmentOptions",
      },
      proposed_network_function_group_change: {
        value: networkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeToHclTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange",
      },
      proposed_segment_change: {
        value: networkmanagerConnectAttachmentProposedSegmentChangeToHclTerraform(this._proposedSegmentChange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkmanagerConnectAttachmentProposedSegmentChange",
      },
      routing_policy_label: {
        value: cdktn.stringToHclTerraform(this._routingPolicyLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(networkmanagerConnectAttachmentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkmanagerConnectAttachmentTagsList",
      },
      transport_attachment_id: {
        value: cdktn.stringToHclTerraform(this._transportAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
