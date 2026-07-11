// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_vpc_cidr_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2VpcCidrBlockConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_vpc_cidr_block#id DataAwsccEc2VpcCidrBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}
*/
export class DataAwsccEc2VpcCidrBlock extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_vpc_cidr_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2VpcCidrBlock resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2VpcCidrBlock to import
  * @param importFromId The id of the existing DataAwsccEc2VpcCidrBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2VpcCidrBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_cidr_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2VpcCidrBlockConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2VpcCidrBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_vpc_cidr_block',
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

  // amazon_provided_ipv_6_cidr_block - computed: true, optional: false, required: false
  public get amazonProvidedIpv6CidrBlock() {
    return this.getBooleanAttribute('amazon_provided_ipv_6_cidr_block');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
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

  // ip_source - computed: true, optional: false, required: false
  public get ipSource() {
    return this.getStringAttribute('ip_source');
  }

  // ipv_4_ipam_pool_id - computed: true, optional: false, required: false
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv_4_ipam_pool_id');
  }

  // ipv_4_netmask_length - computed: true, optional: false, required: false
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv_4_netmask_length');
  }

  // ipv_6_address_attribute - computed: true, optional: false, required: false
  public get ipv6AddressAttribute() {
    return this.getStringAttribute('ipv_6_address_attribute');
  }

  // ipv_6_cidr_block - computed: true, optional: false, required: false
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv_6_cidr_block');
  }

  // ipv_6_cidr_block_network_border_group - computed: true, optional: false, required: false
  public get ipv6CidrBlockNetworkBorderGroup() {
    return this.getStringAttribute('ipv_6_cidr_block_network_border_group');
  }

  // ipv_6_ipam_pool_id - computed: true, optional: false, required: false
  public get ipv6IpamPoolId() {
    return this.getStringAttribute('ipv_6_ipam_pool_id');
  }

  // ipv_6_netmask_length - computed: true, optional: false, required: false
  public get ipv6NetmaskLength() {
    return this.getNumberAttribute('ipv_6_netmask_length');
  }

  // ipv_6_pool - computed: true, optional: false, required: false
  public get ipv6Pool() {
    return this.getStringAttribute('ipv_6_pool');
  }

  // vpc_cidr_block_id - computed: true, optional: false, required: false
  public get vpcCidrBlockId() {
    return this.getStringAttribute('vpc_cidr_block_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
