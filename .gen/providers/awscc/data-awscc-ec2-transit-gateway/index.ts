// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2TransitGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_transit_gateway#id DataAwsccEc2TransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2TransitGatewayTags {
}

export function dataAwsccEc2TransitGatewayTagsToTerraform(struct?: DataAwsccEc2TransitGatewayTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2TransitGatewayTagsToHclTerraform(struct?: DataAwsccEc2TransitGatewayTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2TransitGatewayTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEc2TransitGatewayTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2TransitGatewayTags | undefined) {
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

export class DataAwsccEc2TransitGatewayTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEc2TransitGatewayTagsOutputReference {
    return new DataAwsccEc2TransitGatewayTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_transit_gateway awscc_ec2_transit_gateway}
*/
export class DataAwsccEc2TransitGateway extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2TransitGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2TransitGateway to import
  * @param importFromId The id of the existing DataAwsccEc2TransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2TransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_transit_gateway awscc_ec2_transit_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway',
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

  // amazon_side_asn - computed: true, optional: false, required: false
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }

  // association_default_route_table_id - computed: true, optional: false, required: false
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }

  // auto_accept_shared_attachments - computed: true, optional: false, required: false
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }

  // default_route_table_association - computed: true, optional: false, required: false
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }

  // default_route_table_propagation - computed: true, optional: false, required: false
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_support - computed: true, optional: false, required: false
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }

  // encryption_support - computed: true, optional: false, required: false
  public get encryptionSupport() {
    return this.getStringAttribute('encryption_support');
  }

  // encryption_support_state - computed: true, optional: false, required: false
  public get encryptionSupportState() {
    return this.getStringAttribute('encryption_support_state');
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

  // multicast_support - computed: true, optional: false, required: false
  public get multicastSupport() {
    return this.getStringAttribute('multicast_support');
  }

  // propagation_default_route_table_id - computed: true, optional: false, required: false
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
  }

  // security_group_referencing_support - computed: true, optional: false, required: false
  public get securityGroupReferencingSupport() {
    return this.getStringAttribute('security_group_referencing_support');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEc2TransitGatewayTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // transit_gateway_arn - computed: true, optional: false, required: false
  public get transitGatewayArn() {
    return this.getStringAttribute('transit_gateway_arn');
  }

  // transit_gateway_cidr_blocks - computed: true, optional: false, required: false
  public get transitGatewayCidrBlocks() {
    return this.getListAttribute('transit_gateway_cidr_blocks');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpn_ecmp_support - computed: true, optional: false, required: false
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
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
