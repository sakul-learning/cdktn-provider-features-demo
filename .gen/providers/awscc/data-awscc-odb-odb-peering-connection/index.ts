// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_odb_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOdbOdbPeeringConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_odb_peering_connection#id DataAwsccOdbOdbPeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOdbOdbPeeringConnectionTags {
}

export function dataAwsccOdbOdbPeeringConnectionTagsToTerraform(struct?: DataAwsccOdbOdbPeeringConnectionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOdbOdbPeeringConnectionTagsToHclTerraform(struct?: DataAwsccOdbOdbPeeringConnectionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOdbOdbPeeringConnectionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccOdbOdbPeeringConnectionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOdbOdbPeeringConnectionTags | undefined) {
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

export class DataAwsccOdbOdbPeeringConnectionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccOdbOdbPeeringConnectionTagsOutputReference {
    return new DataAwsccOdbOdbPeeringConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_odb_peering_connection awscc_odb_odb_peering_connection}
*/
export class DataAwsccOdbOdbPeeringConnection extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_odb_odb_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOdbOdbPeeringConnection to import
  * @param importFromId The id of the existing DataAwsccOdbOdbPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOdbOdbPeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_odb_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/odb_odb_peering_connection awscc_odb_odb_peering_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOdbOdbPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOdbOdbPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_odb_odb_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
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

  // additional_peer_network_cidrs - computed: true, optional: false, required: false
  public get additionalPeerNetworkCidrs() {
    return this.getListAttribute('additional_peer_network_cidrs');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // odb_network_arn - computed: true, optional: false, required: false
  public get odbNetworkArn() {
    return this.getStringAttribute('odb_network_arn');
  }

  // odb_network_id - computed: true, optional: false, required: false
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }

  // odb_peering_connection_arn - computed: true, optional: false, required: false
  public get odbPeeringConnectionArn() {
    return this.getStringAttribute('odb_peering_connection_arn');
  }

  // odb_peering_connection_id - computed: true, optional: false, required: false
  public get odbPeeringConnectionId() {
    return this.getStringAttribute('odb_peering_connection_id');
  }

  // peer_network_arn - computed: true, optional: false, required: false
  public get peerNetworkArn() {
    return this.getStringAttribute('peer_network_arn');
  }

  // peer_network_cidrs - computed: true, optional: false, required: false
  public get peerNetworkCidrs() {
    return this.getListAttribute('peer_network_cidrs');
  }

  // peer_network_id - computed: true, optional: false, required: false
  public get peerNetworkId() {
    return this.getStringAttribute('peer_network_id');
  }

  // peer_network_route_table_ids - computed: true, optional: false, required: false
  public get peerNetworkRouteTableIds() {
    return this.getListAttribute('peer_network_route_table_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccOdbOdbPeeringConnectionTagsList(this, "tags", false);
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
