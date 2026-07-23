// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconnectRouterNetworkInterfaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration settings for a router network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#configuration MediaconnectRouterNetworkInterface#configuration}
  */
  readonly configuration: MediaconnectRouterNetworkInterfaceConfiguration;
  /**
  * The name of the router network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#name MediaconnectRouterNetworkInterface#name}
  */
  readonly name: string;
  /**
  * The AWS Region for the router network interface. Defaults to the current region if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#region_name MediaconnectRouterNetworkInterface#region_name}
  */
  readonly regionName?: string;
  /**
  * Key-value pairs that can be used to tag and organize this router network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#tags MediaconnectRouterNetworkInterface#tags}
  */
  readonly tags?: MediaconnectRouterNetworkInterfaceTags[] | cdktn.IResolvable;
}
export interface MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules {
  /**
  * The CIDR block that is allowed to access the public router network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#cidr MediaconnectRouterNetworkInterface#cidr}
  */
  readonly cidr?: string;
}

export function mediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesToTerraform(struct?: MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidr: cdktn.stringToTerraform(struct!.cidr),
  }
}


export function mediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesToHclTerraform(struct?: MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidr: {
      value: cdktn.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList extends cdktn.ComplexList {
  public internalValue? : MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference {
    return new MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectRouterNetworkInterfaceConfigurationPublic {
  /**
  * The list of allowed CIDR blocks for the public router network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#allow_rules MediaconnectRouterNetworkInterface#allow_rules}
  */
  readonly allowRules?: MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules[] | cdktn.IResolvable;
}

export function mediaconnectRouterNetworkInterfaceConfigurationPublicToTerraform(struct?: MediaconnectRouterNetworkInterfaceConfigurationPublic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_rules: cdktn.listMapper(mediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesToTerraform, false)(struct!.allowRules),
  }
}


export function mediaconnectRouterNetworkInterfaceConfigurationPublicToHclTerraform(struct?: MediaconnectRouterNetworkInterfaceConfigurationPublic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_rules: {
      value: cdktn.listMapperHcl(mediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesToHclTerraform, false)(struct!.allowRules),
      isBlock: true,
      type: "list",
      storageClassType: "MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterNetworkInterfaceConfigurationPublic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterNetworkInterfaceConfigurationPublic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules.internalValue = value.allowRules;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules = new MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList(this, "allow_rules", false);
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules[] | cdktn.IResolvable) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }
}
export interface MediaconnectRouterNetworkInterfaceConfigurationVpc {
  /**
  * The IDs of the security groups to associate with the router network interface within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#security_group_ids MediaconnectRouterNetworkInterface#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ID of the subnet within the VPC to associate the router network interface with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#subnet_id MediaconnectRouterNetworkInterface#subnet_id}
  */
  readonly subnetId?: string;
}

export function mediaconnectRouterNetworkInterfaceConfigurationVpcToTerraform(struct?: MediaconnectRouterNetworkInterfaceConfigurationVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function mediaconnectRouterNetworkInterfaceConfigurationVpcToHclTerraform(struct?: MediaconnectRouterNetworkInterfaceConfigurationVpc | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterNetworkInterfaceConfigurationVpc | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterNetworkInterfaceConfigurationVpc | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetId = value.subnetId;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface MediaconnectRouterNetworkInterfaceConfiguration {
  /**
  * The configuration settings for a public router network interface, including the list of allowed CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#public MediaconnectRouterNetworkInterface#public}
  */
  readonly public?: MediaconnectRouterNetworkInterfaceConfigurationPublic;
  /**
  * The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#vpc MediaconnectRouterNetworkInterface#vpc}
  */
  readonly vpc?: MediaconnectRouterNetworkInterfaceConfigurationVpc;
}

export function mediaconnectRouterNetworkInterfaceConfigurationToTerraform(struct?: MediaconnectRouterNetworkInterfaceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    public: mediaconnectRouterNetworkInterfaceConfigurationPublicToTerraform(struct!.public),
    vpc: mediaconnectRouterNetworkInterfaceConfigurationVpcToTerraform(struct!.vpc),
  }
}


export function mediaconnectRouterNetworkInterfaceConfigurationToHclTerraform(struct?: MediaconnectRouterNetworkInterfaceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    public: {
      value: mediaconnectRouterNetworkInterfaceConfigurationPublicToHclTerraform(struct!.public),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterNetworkInterfaceConfigurationPublic",
    },
    vpc: {
      value: mediaconnectRouterNetworkInterfaceConfigurationVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectRouterNetworkInterfaceConfigurationVpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectRouterNetworkInterfaceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectRouterNetworkInterfaceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._public?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectRouterNetworkInterfaceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._public.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._public.internalValue = value.public;
      this._vpc.internalValue = value.vpc;
    }
  }

  // public - computed: true, optional: true, required: false
  private _public = new MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference(this, "public");
  public get public() {
    return this._public;
  }
  public putPublic(value: MediaconnectRouterNetworkInterfaceConfigurationPublic) {
    this._public.internalValue = value;
  }
  public resetPublic() {
    this._public.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public.internalValue;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc = new MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: MediaconnectRouterNetworkInterfaceConfigurationVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface MediaconnectRouterNetworkInterfaceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#key MediaconnectRouterNetworkInterface#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#value MediaconnectRouterNetworkInterface#value}
  */
  readonly value?: string;
}

export function mediaconnectRouterNetworkInterfaceTagsToTerraform(struct?: MediaconnectRouterNetworkInterfaceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediaconnectRouterNetworkInterfaceTagsToHclTerraform(struct?: MediaconnectRouterNetworkInterfaceTags | cdktn.IResolvable): any {
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

export class MediaconnectRouterNetworkInterfaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectRouterNetworkInterfaceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediaconnectRouterNetworkInterfaceTags | cdktn.IResolvable | undefined) {
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

export class MediaconnectRouterNetworkInterfaceTagsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectRouterNetworkInterfaceTags[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectRouterNetworkInterfaceTagsOutputReference {
    return new MediaconnectRouterNetworkInterfaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface awscc_mediaconnect_router_network_interface}
*/
export class MediaconnectRouterNetworkInterface extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_router_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconnectRouterNetworkInterface to import
  * @param importFromId The id of the existing MediaconnectRouterNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconnectRouterNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_router_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediaconnect_router_network_interface awscc_mediaconnect_router_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectRouterNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectRouterNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_router_network_interface',
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
    this._configuration.internalValue = config.configuration;
    this._name = config.name;
    this._regionName = config.regionName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associated_input_count - computed: true, optional: false, required: false
  public get associatedInputCount() {
    return this.getNumberAttribute('associated_input_count');
  }

  // associated_output_count - computed: true, optional: false, required: false
  public get associatedOutputCount() {
    return this.getNumberAttribute('associated_output_count');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new MediaconnectRouterNetworkInterfaceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: MediaconnectRouterNetworkInterfaceConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_interface_type - computed: true, optional: false, required: false
  public get networkInterfaceType() {
    return this.getStringAttribute('network_interface_type');
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // router_network_interface_id - computed: true, optional: false, required: false
  public get routerNetworkInterfaceId() {
    return this.getStringAttribute('router_network_interface_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediaconnectRouterNetworkInterfaceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediaconnectRouterNetworkInterfaceTags[] | cdktn.IResolvable) {
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
      configuration: mediaconnectRouterNetworkInterfaceConfigurationToTerraform(this._configuration.internalValue),
      name: cdktn.stringToTerraform(this._name),
      region_name: cdktn.stringToTerraform(this._regionName),
      tags: cdktn.listMapper(mediaconnectRouterNetworkInterfaceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: mediaconnectRouterNetworkInterfaceConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectRouterNetworkInterfaceConfiguration",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktn.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediaconnectRouterNetworkInterfaceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectRouterNetworkInterfaceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
