// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkmanager_connect_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNetworkmanagerConnectPeerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkmanager_connect_peer#id DataAwsccNetworkmanagerConnectPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNetworkmanagerConnectPeerBgpOptions {
}

export function dataAwsccNetworkmanagerConnectPeerBgpOptionsToTerraform(struct?: DataAwsccNetworkmanagerConnectPeerBgpOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkmanagerConnectPeerBgpOptionsToHclTerraform(struct?: DataAwsccNetworkmanagerConnectPeerBgpOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkmanagerConnectPeerBgpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkmanagerConnectPeerBgpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
}
export interface DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations {
}

export function dataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsToTerraform(struct?: DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsToHclTerraform(struct?: DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_network_address - computed: true, optional: false, required: false
  public get coreNetworkAddress() {
    return this.getStringAttribute('core_network_address');
  }

  // core_network_asn - computed: true, optional: false, required: false
  public get coreNetworkAsn() {
    return this.getNumberAttribute('core_network_asn');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
}

export class DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference {
    return new DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkmanagerConnectPeerConfiguration {
}

export function dataAwsccNetworkmanagerConnectPeerConfigurationToTerraform(struct?: DataAwsccNetworkmanagerConnectPeerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkmanagerConnectPeerConfigurationToHclTerraform(struct?: DataAwsccNetworkmanagerConnectPeerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkmanagerConnectPeerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkmanagerConnectPeerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_configurations - computed: true, optional: false, required: false
  private _bgpConfigurations = new DataAwsccNetworkmanagerConnectPeerConfigurationBgpConfigurationsList(this, "bgp_configurations", false);
  public get bgpConfigurations() {
    return this._bgpConfigurations;
  }

  // core_network_address - computed: true, optional: false, required: false
  public get coreNetworkAddress() {
    return this.getStringAttribute('core_network_address');
  }

  // inside_cidr_blocks - computed: true, optional: false, required: false
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export interface DataAwsccNetworkmanagerConnectPeerTags {
}

export function dataAwsccNetworkmanagerConnectPeerTagsToTerraform(struct?: DataAwsccNetworkmanagerConnectPeerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkmanagerConnectPeerTagsToHclTerraform(struct?: DataAwsccNetworkmanagerConnectPeerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkmanagerConnectPeerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkmanagerConnectPeerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkmanagerConnectPeerTags | undefined) {
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

export class DataAwsccNetworkmanagerConnectPeerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkmanagerConnectPeerTagsOutputReference {
    return new DataAwsccNetworkmanagerConnectPeerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkmanager_connect_peer awscc_networkmanager_connect_peer}
*/
export class DataAwsccNetworkmanagerConnectPeer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_connect_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNetworkmanagerConnectPeer to import
  * @param importFromId The id of the existing DataAwsccNetworkmanagerConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNetworkmanagerConnectPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_connect_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkmanager_connect_peer awscc_networkmanager_connect_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkmanagerConnectPeerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerConnectPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_connect_peer',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_options - computed: true, optional: false, required: false
  private _bgpOptions = new DataAwsccNetworkmanagerConnectPeerBgpOptionsOutputReference(this, "bgp_options");
  public get bgpOptions() {
    return this._bgpOptions;
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccNetworkmanagerConnectPeerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // connect_attachment_id - computed: true, optional: false, required: false
  public get connectAttachmentId() {
    return this.getStringAttribute('connect_attachment_id');
  }

  // connect_peer_id - computed: true, optional: false, required: false
  public get connectPeerId() {
    return this.getStringAttribute('connect_peer_id');
  }

  // core_network_address - computed: true, optional: false, required: false
  public get coreNetworkAddress() {
    return this.getStringAttribute('core_network_address');
  }

  // core_network_id - computed: true, optional: false, required: false
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // edge_location - computed: true, optional: false, required: false
  public get edgeLocation() {
    return this.getStringAttribute('edge_location');
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

  // inside_cidr_blocks - computed: true, optional: false, required: false
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }

  // last_modification_errors - computed: true, optional: false, required: false
  public get lastModificationErrors() {
    return this.getListAttribute('last_modification_errors');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_arn - computed: true, optional: false, required: false
  public get subnetArn() {
    return this.getStringAttribute('subnet_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccNetworkmanagerConnectPeerTagsList(this, "tags", true);
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
