// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/networkmanager_transit_gateway_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNetworkmanagerTransitGatewayPeeringConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/networkmanager_transit_gateway_peering#id DataAwsccNetworkmanagerTransitGatewayPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNetworkmanagerTransitGatewayPeeringTags {
}

export function dataAwsccNetworkmanagerTransitGatewayPeeringTagsToTerraform(struct?: DataAwsccNetworkmanagerTransitGatewayPeeringTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkmanagerTransitGatewayPeeringTagsToHclTerraform(struct?: DataAwsccNetworkmanagerTransitGatewayPeeringTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkmanagerTransitGatewayPeeringTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkmanagerTransitGatewayPeeringTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkmanagerTransitGatewayPeeringTags | undefined) {
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

export class DataAwsccNetworkmanagerTransitGatewayPeeringTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkmanagerTransitGatewayPeeringTagsOutputReference {
    return new DataAwsccNetworkmanagerTransitGatewayPeeringTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/networkmanager_transit_gateway_peering awscc_networkmanager_transit_gateway_peering}
*/
export class DataAwsccNetworkmanagerTransitGatewayPeering extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkmanager_transit_gateway_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayPeering resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNetworkmanagerTransitGatewayPeering to import
  * @param importFromId The id of the existing DataAwsccNetworkmanagerTransitGatewayPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/networkmanager_transit_gateway_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNetworkmanagerTransitGatewayPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_transit_gateway_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/networkmanager_transit_gateway_peering awscc_networkmanager_transit_gateway_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkmanagerTransitGatewayPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerTransitGatewayPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkmanager_transit_gateway_peering',
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

  // core_network_arn - computed: true, optional: false, required: false
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
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

  // last_modification_errors - computed: true, optional: false, required: false
  public get lastModificationErrors() {
    return this.getListAttribute('last_modification_errors');
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // peering_id - computed: true, optional: false, required: false
  public get peeringId() {
    return this.getStringAttribute('peering_id');
  }

  // peering_type - computed: true, optional: false, required: false
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccNetworkmanagerTransitGatewayPeeringTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // transit_gateway_arn - computed: true, optional: false, required: false
  public get transitGatewayArn() {
    return this.getStringAttribute('transit_gateway_arn');
  }

  // transit_gateway_peering_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayPeeringAttachmentId() {
    return this.getStringAttribute('transit_gateway_peering_attachment_id');
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
