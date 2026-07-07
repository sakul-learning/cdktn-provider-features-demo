// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TransitGatewayConnectPeerConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Connect peer details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#connect_peer_configuration Ec2TransitGatewayConnectPeer#connect_peer_configuration}
  */
  readonly connectPeerConfiguration: Ec2TransitGatewayConnectPeerConnectPeerConfiguration;
  /**
  * The tags for the Connect Peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}
  */
  readonly tags?: Ec2TransitGatewayConnectPeerTags[] | cdktn.IResolvable;
  /**
  * The ID of the Connect attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
}
export interface Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations {
}

export function ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsToTerraform(struct?: Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsToHclTerraform(struct?: Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }

  // transit_gateway_address - computed: true, optional: false, required: false
  public get transitGatewayAddress() {
    return this.getStringAttribute('transit_gateway_address');
  }

  // transit_gateway_asn - computed: true, optional: false, required: false
  public get transitGatewayAsn() {
    return this.getNumberAttribute('transit_gateway_asn');
  }
}

export class Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference {
    return new Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2TransitGatewayConnectPeerConnectPeerConfiguration {
  /**
  * The range of interior BGP peer IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}
  */
  readonly insideCidrBlocks: string[];
  /**
  * The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}
  */
  readonly peerAddress: string;
  /**
  * The Connect peer IP address on the transit gateway side of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}
  */
  readonly transitGatewayAddress?: string;
}

export function ec2TransitGatewayConnectPeerConnectPeerConfigurationToTerraform(struct?: Ec2TransitGatewayConnectPeerConnectPeerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.insideCidrBlocks),
    peer_address: cdktn.stringToTerraform(struct!.peerAddress),
    transit_gateway_address: cdktn.stringToTerraform(struct!.transitGatewayAddress),
  }
}


export function ec2TransitGatewayConnectPeerConnectPeerConfigurationToHclTerraform(struct?: Ec2TransitGatewayConnectPeerConnectPeerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inside_cidr_blocks: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    peer_address: {
      value: cdktn.stringToHclTerraform(struct!.peerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_gateway_address: {
      value: cdktn.stringToHclTerraform(struct!.transitGatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2TransitGatewayConnectPeerConnectPeerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._peerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAddress = this._peerAddress;
    }
    if (this._transitGatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayAddress = this._transitGatewayAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayConnectPeerConnectPeerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insideCidrBlocks = undefined;
      this._peerAddress = undefined;
      this._transitGatewayAddress = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._peerAddress = value.peerAddress;
      this._transitGatewayAddress = value.transitGatewayAddress;
    }
  }

  // bgp_configurations - computed: true, optional: false, required: false
  private _bgpConfigurations = new Ec2TransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsList(this, "bgp_configurations", false);
  public get bgpConfigurations() {
    return this._bgpConfigurations;
  }

  // inside_cidr_blocks - computed: false, optional: false, required: true
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // transit_gateway_address - computed: true, optional: true, required: false
  private _transitGatewayAddress?: string; 
  public get transitGatewayAddress() {
    return this.getStringAttribute('transit_gateway_address');
  }
  public set transitGatewayAddress(value: string) {
    this._transitGatewayAddress = value;
  }
  public resetTransitGatewayAddress() {
    this._transitGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAddressInput() {
    return this._transitGatewayAddress;
  }
}
export interface Ec2TransitGatewayConnectPeerTags {
  /**
  * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws: .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#key Ec2TransitGatewayConnectPeer#key}
  */
  readonly key?: string;
  /**
  * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#value Ec2TransitGatewayConnectPeer#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayConnectPeerTagsToTerraform(struct?: Ec2TransitGatewayConnectPeerTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2TransitGatewayConnectPeerTagsToHclTerraform(struct?: Ec2TransitGatewayConnectPeerTags | cdktn.IResolvable): any {
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

export class Ec2TransitGatewayConnectPeerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayConnectPeerTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Ec2TransitGatewayConnectPeerTags | cdktn.IResolvable | undefined) {
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

export class Ec2TransitGatewayConnectPeerTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2TransitGatewayConnectPeerTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2TransitGatewayConnectPeerTagsOutputReference {
    return new Ec2TransitGatewayConnectPeerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer awscc_ec2_transit_gateway_connect_peer}
*/
export class Ec2TransitGatewayConnectPeer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway_connect_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TransitGatewayConnectPeer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayConnectPeer to import
  * @param importFromId The id of the existing Ec2TransitGatewayConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayConnectPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_connect_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/ec2_transit_gateway_connect_peer awscc_ec2_transit_gateway_connect_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayConnectPeerConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConnectPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_connect_peer',
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
    this._connectPeerConfiguration.internalValue = config.connectPeerConfiguration;
    this._tags.internalValue = config.tags;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_peer_configuration - computed: false, optional: false, required: true
  private _connectPeerConfiguration = new Ec2TransitGatewayConnectPeerConnectPeerConfigurationOutputReference(this, "connect_peer_configuration");
  public get connectPeerConfiguration() {
    return this._connectPeerConfiguration;
  }
  public putConnectPeerConfiguration(value: Ec2TransitGatewayConnectPeerConnectPeerConfiguration) {
    this._connectPeerConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectPeerConfigurationInput() {
    return this._connectPeerConfiguration.internalValue;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2TransitGatewayConnectPeerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2TransitGatewayConnectPeerTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // transit_gateway_connect_peer_id - computed: true, optional: false, required: false
  public get transitGatewayConnectPeerId() {
    return this.getStringAttribute('transit_gateway_connect_peer_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_peer_configuration: ec2TransitGatewayConnectPeerConnectPeerConfigurationToTerraform(this._connectPeerConfiguration.internalValue),
      tags: cdktn.listMapper(ec2TransitGatewayConnectPeerTagsToTerraform, false)(this._tags.internalValue),
      transit_gateway_attachment_id: cdktn.stringToTerraform(this._transitGatewayAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_peer_configuration: {
        value: ec2TransitGatewayConnectPeerConnectPeerConfigurationToHclTerraform(this._connectPeerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2TransitGatewayConnectPeerConnectPeerConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(ec2TransitGatewayConnectPeerTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2TransitGatewayConnectPeerTagsList",
      },
      transit_gateway_attachment_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
