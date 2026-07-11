// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#id DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags {
}

export function dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsToTerraform(struct?: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsToHclTerraform(struct?: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags | undefined) {
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

export class DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference {
    return new DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association awscc_ec2_local_gateway_route_table_virtual_interface_group_association}
*/
export class DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_local_gateway_route_table_virtual_interface_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import
  * @param importFromId The id of the existing DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_local_gateway_route_table_virtual_interface_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association awscc_ec2_local_gateway_route_table_virtual_interface_group_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_local_gateway_route_table_virtual_interface_group_association',
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

  // local_gateway_id - computed: true, optional: false, required: false
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }

  // local_gateway_route_table_arn - computed: true, optional: false, required: false
  public get localGatewayRouteTableArn() {
    return this.getStringAttribute('local_gateway_route_table_arn');
  }

  // local_gateway_route_table_id - computed: true, optional: false, required: false
  public get localGatewayRouteTableId() {
    return this.getStringAttribute('local_gateway_route_table_id');
  }

  // local_gateway_route_table_virtual_interface_group_association_id - computed: true, optional: false, required: false
  public get localGatewayRouteTableVirtualInterfaceGroupAssociationId() {
    return this.getStringAttribute('local_gateway_route_table_virtual_interface_group_association_id');
  }

  // local_gateway_virtual_interface_group_id - computed: true, optional: false, required: false
  public get localGatewayVirtualInterfaceGroupId() {
    return this.getStringAttribute('local_gateway_virtual_interface_group_id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList(this, "tags", true);
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
