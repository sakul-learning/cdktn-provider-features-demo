// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DirectconnectPublicVirtualInterfaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}
  */
  readonly allocatePublicVirtualInterfaceRoleArn?: string;
  /**
  * The BGP peers configured on this virtual interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}
  */
  readonly bgpPeers: DirectconnectPublicVirtualInterfaceBgpPeers[] | cdktn.IResolvable;
  /**
  * The ID or ARN of the connection or LAG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}
  */
  readonly connectionId: string;
  /**
  * The routes to be advertised to the AWS network in this region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}
  */
  readonly routeFilterPrefixes?: string[];
  /**
  * The tags associated with the public virtual interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}
  */
  readonly tags?: DirectconnectPublicVirtualInterfaceTags[] | cdktn.IResolvable;
  /**
  * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}
  */
  readonly virtualInterfaceName: string;
  /**
  * The ID of the VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}
  */
  readonly vlan: number;
}
export interface DirectconnectPublicVirtualInterfaceBgpPeers {
  /**
  * The address family for the BGP peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#address_family DirectconnectPublicVirtualInterface#address_family}
  */
  readonly addressFamily: string;
  /**
  * The IP address assigned to the Amazon interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#amazon_address DirectconnectPublicVirtualInterface#amazon_address}
  */
  readonly amazonAddress?: string;
  /**
  * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#asn DirectconnectPublicVirtualInterface#asn}
  */
  readonly asn: string;
  /**
  * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximum length of 80 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#auth_key DirectconnectPublicVirtualInterface#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}
  */
  readonly bgpPeerId?: string;
  /**
  * The IP address assigned to the customer interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#customer_address DirectconnectPublicVirtualInterface#customer_address}
  */
  readonly customerAddress?: string;
}

export function directconnectPublicVirtualInterfaceBgpPeersToTerraform(struct?: DirectconnectPublicVirtualInterfaceBgpPeers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_family: cdktn.stringToTerraform(struct!.addressFamily),
    amazon_address: cdktn.stringToTerraform(struct!.amazonAddress),
    asn: cdktn.stringToTerraform(struct!.asn),
    auth_key: cdktn.stringToTerraform(struct!.authKey),
    bgp_peer_id: cdktn.stringToTerraform(struct!.bgpPeerId),
    customer_address: cdktn.stringToTerraform(struct!.customerAddress),
  }
}


export function directconnectPublicVirtualInterfaceBgpPeersToHclTerraform(struct?: DirectconnectPublicVirtualInterfaceBgpPeers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_family: {
      value: cdktn.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_address: {
      value: cdktn.stringToHclTerraform(struct!.amazonAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn: {
      value: cdktn.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_key: {
      value: cdktn.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_peer_id: {
      value: cdktn.stringToHclTerraform(struct!.bgpPeerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_address: {
      value: cdktn.stringToHclTerraform(struct!.customerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectconnectPublicVirtualInterfaceBgpPeersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DirectconnectPublicVirtualInterfaceBgpPeers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._amazonAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonAddress = this._amazonAddress;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._bgpPeerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerId = this._bgpPeerId;
    }
    if (this._customerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAddress = this._customerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectconnectPublicVirtualInterfaceBgpPeers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._amazonAddress = undefined;
      this._asn = undefined;
      this._authKey = undefined;
      this._bgpPeerId = undefined;
      this._customerAddress = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._amazonAddress = value.amazonAddress;
      this._asn = value.asn;
      this._authKey = value.authKey;
      this._bgpPeerId = value.bgpPeerId;
      this._customerAddress = value.customerAddress;
    }
  }

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string; 
  public get amazonAddress() {
    return this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string) {
    this._amazonAddress = value;
  }
  public resetAmazonAddress() {
    this._amazonAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonAddressInput() {
    return this._amazonAddress;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // bgp_peer_id - computed: true, optional: true, required: false
  private _bgpPeerId?: string; 
  public get bgpPeerId() {
    return this.getStringAttribute('bgp_peer_id');
  }
  public set bgpPeerId(value: string) {
    this._bgpPeerId = value;
  }
  public resetBgpPeerId() {
    this._bgpPeerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerIdInput() {
    return this._bgpPeerId;
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string; 
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress;
  }
}

export class DirectconnectPublicVirtualInterfaceBgpPeersList extends cdktn.ComplexList {
  public internalValue? : DirectconnectPublicVirtualInterfaceBgpPeers[] | cdktn.IResolvable

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
  public get(index: number): DirectconnectPublicVirtualInterfaceBgpPeersOutputReference {
    return new DirectconnectPublicVirtualInterfaceBgpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectconnectPublicVirtualInterfaceTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#key DirectconnectPublicVirtualInterface#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#value DirectconnectPublicVirtualInterface#value}
  */
  readonly value?: string;
}

export function directconnectPublicVirtualInterfaceTagsToTerraform(struct?: DirectconnectPublicVirtualInterfaceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function directconnectPublicVirtualInterfaceTagsToHclTerraform(struct?: DirectconnectPublicVirtualInterfaceTags | cdktn.IResolvable): any {
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

export class DirectconnectPublicVirtualInterfaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DirectconnectPublicVirtualInterfaceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DirectconnectPublicVirtualInterfaceTags | cdktn.IResolvable | undefined) {
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

export class DirectconnectPublicVirtualInterfaceTagsList extends cdktn.ComplexList {
  public internalValue? : DirectconnectPublicVirtualInterfaceTags[] | cdktn.IResolvable

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
  public get(index: number): DirectconnectPublicVirtualInterfaceTagsOutputReference {
    return new DirectconnectPublicVirtualInterfaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}
*/
export class DirectconnectPublicVirtualInterface extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_directconnect_public_virtual_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectconnectPublicVirtualInterface to import
  * @param importFromId The id of the existing DirectconnectPublicVirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectconnectPublicVirtualInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_public_virtual_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectconnectPublicVirtualInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DirectconnectPublicVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_directconnect_public_virtual_interface',
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
    this._allocatePublicVirtualInterfaceRoleArn = config.allocatePublicVirtualInterfaceRoleArn;
    this._bgpPeers.internalValue = config.bgpPeers;
    this._connectionId = config.connectionId;
    this._routeFilterPrefixes = config.routeFilterPrefixes;
    this._tags.internalValue = config.tags;
    this._virtualInterfaceName = config.virtualInterfaceName;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_public_virtual_interface_role_arn - computed: true, optional: true, required: false
  private _allocatePublicVirtualInterfaceRoleArn?: string; 
  public get allocatePublicVirtualInterfaceRoleArn() {
    return this.getStringAttribute('allocate_public_virtual_interface_role_arn');
  }
  public set allocatePublicVirtualInterfaceRoleArn(value: string) {
    this._allocatePublicVirtualInterfaceRoleArn = value;
  }
  public resetAllocatePublicVirtualInterfaceRoleArn() {
    this._allocatePublicVirtualInterfaceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePublicVirtualInterfaceRoleArnInput() {
    return this._allocatePublicVirtualInterfaceRoleArn;
  }

  // bgp_peers - computed: false, optional: false, required: true
  private _bgpPeers = new DirectconnectPublicVirtualInterfaceBgpPeersList(this, "bgp_peers", true);
  public get bgpPeers() {
    return this._bgpPeers;
  }
  public putBgpPeers(value: DirectconnectPublicVirtualInterfaceBgpPeers[] | cdktn.IResolvable) {
    this._bgpPeers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeersInput() {
    return this._bgpPeers.internalValue;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_filter_prefixes - computed: true, optional: true, required: false
  private _routeFilterPrefixes?: string[]; 
  public get routeFilterPrefixes() {
    return cdktn.Fn.tolist(this.getListAttribute('route_filter_prefixes'));
  }
  public set routeFilterPrefixes(value: string[]) {
    this._routeFilterPrefixes = value;
  }
  public resetRouteFilterPrefixes() {
    this._routeFilterPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterPrefixesInput() {
    return this._routeFilterPrefixes;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DirectconnectPublicVirtualInterfaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DirectconnectPublicVirtualInterfaceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // virtual_interface_arn - computed: true, optional: false, required: false
  public get virtualInterfaceArn() {
    return this.getStringAttribute('virtual_interface_arn');
  }

  // virtual_interface_id - computed: true, optional: false, required: false
  public get virtualInterfaceId() {
    return this.getStringAttribute('virtual_interface_id');
  }

  // virtual_interface_name - computed: false, optional: false, required: true
  private _virtualInterfaceName?: string; 
  public get virtualInterfaceName() {
    return this.getStringAttribute('virtual_interface_name');
  }
  public set virtualInterfaceName(value: string) {
    this._virtualInterfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInterfaceNameInput() {
    return this._virtualInterfaceName;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_public_virtual_interface_role_arn: cdktn.stringToTerraform(this._allocatePublicVirtualInterfaceRoleArn),
      bgp_peers: cdktn.listMapper(directconnectPublicVirtualInterfaceBgpPeersToTerraform, false)(this._bgpPeers.internalValue),
      connection_id: cdktn.stringToTerraform(this._connectionId),
      route_filter_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._routeFilterPrefixes),
      tags: cdktn.listMapper(directconnectPublicVirtualInterfaceTagsToTerraform, false)(this._tags.internalValue),
      virtual_interface_name: cdktn.stringToTerraform(this._virtualInterfaceName),
      vlan: cdktn.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_public_virtual_interface_role_arn: {
        value: cdktn.stringToHclTerraform(this._allocatePublicVirtualInterfaceRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_peers: {
        value: cdktn.listMapperHcl(directconnectPublicVirtualInterfaceBgpPeersToHclTerraform, false)(this._bgpPeers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectconnectPublicVirtualInterfaceBgpPeersList",
      },
      connection_id: {
        value: cdktn.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_filter_prefixes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._routeFilterPrefixes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(directconnectPublicVirtualInterfaceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectconnectPublicVirtualInterfaceTagsList",
      },
      virtual_interface_name: {
        value: cdktn.stringToHclTerraform(this._virtualInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktn.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
