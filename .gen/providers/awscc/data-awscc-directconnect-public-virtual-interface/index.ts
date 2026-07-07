// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/directconnect_public_virtual_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDirectconnectPublicVirtualInterfaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/directconnect_public_virtual_interface#id DataAwsccDirectconnectPublicVirtualInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers {
}

export function dataAwsccDirectconnectPublicVirtualInterfaceBgpPeersToTerraform(struct?: DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDirectconnectPublicVirtualInterfaceBgpPeersToHclTerraform(struct?: DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDirectconnectPublicVirtualInterfaceBgpPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // amazon_address - computed: true, optional: false, required: false
  public get amazonAddress() {
    return this.getStringAttribute('amazon_address');
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getStringAttribute('asn');
  }

  // auth_key - computed: true, optional: false, required: false
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }

  // bgp_peer_id - computed: true, optional: false, required: false
  public get bgpPeerId() {
    return this.getStringAttribute('bgp_peer_id');
  }

  // customer_address - computed: true, optional: false, required: false
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
}

export class DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference {
    return new DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDirectconnectPublicVirtualInterfaceTags {
}

export function dataAwsccDirectconnectPublicVirtualInterfaceTagsToTerraform(struct?: DataAwsccDirectconnectPublicVirtualInterfaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDirectconnectPublicVirtualInterfaceTagsToHclTerraform(struct?: DataAwsccDirectconnectPublicVirtualInterfaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDirectconnectPublicVirtualInterfaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDirectconnectPublicVirtualInterfaceTags | undefined) {
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

export class DataAwsccDirectconnectPublicVirtualInterfaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference {
    return new DataAwsccDirectconnectPublicVirtualInterfaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}
*/
export class DataAwsccDirectconnectPublicVirtualInterface extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_directconnect_public_virtual_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDirectconnectPublicVirtualInterface to import
  * @param importFromId The id of the existing DataAwsccDirectconnectPublicVirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDirectconnectPublicVirtualInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_public_virtual_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDirectconnectPublicVirtualInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDirectconnectPublicVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_directconnect_public_virtual_interface',
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

  // allocate_public_virtual_interface_role_arn - computed: true, optional: false, required: false
  public get allocatePublicVirtualInterfaceRoleArn() {
    return this.getStringAttribute('allocate_public_virtual_interface_role_arn');
  }

  // bgp_peers - computed: true, optional: false, required: false
  private _bgpPeers = new DataAwsccDirectconnectPublicVirtualInterfaceBgpPeersList(this, "bgp_peers", true);
  public get bgpPeers() {
    return this._bgpPeers;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
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

  // route_filter_prefixes - computed: true, optional: false, required: false
  public get routeFilterPrefixes() {
    return cdktn.Fn.tolist(this.getListAttribute('route_filter_prefixes'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDirectconnectPublicVirtualInterfaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // virtual_interface_arn - computed: true, optional: false, required: false
  public get virtualInterfaceArn() {
    return this.getStringAttribute('virtual_interface_arn');
  }

  // virtual_interface_id - computed: true, optional: false, required: false
  public get virtualInterfaceId() {
    return this.getStringAttribute('virtual_interface_id');
  }

  // virtual_interface_name - computed: true, optional: false, required: false
  public get virtualInterfaceName() {
    return this.getStringAttribute('virtual_interface_name');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
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
