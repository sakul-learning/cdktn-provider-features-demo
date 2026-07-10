// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_security_group_egress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2SecurityGroupEgressConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_security_group_egress#id DataAwsccEc2SecurityGroupEgress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_security_group_egress awscc_ec2_security_group_egress}
*/
export class DataAwsccEc2SecurityGroupEgress extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_security_group_egress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2SecurityGroupEgress resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2SecurityGroupEgress to import
  * @param importFromId The id of the existing DataAwsccEc2SecurityGroupEgress that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_security_group_egress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2SecurityGroupEgress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_security_group_egress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_security_group_egress awscc_ec2_security_group_egress} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2SecurityGroupEgressConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2SecurityGroupEgressConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_security_group_egress',
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

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }

  // cidr_ipv_6 - computed: true, optional: false, required: false
  public get cidrIpv6() {
    return this.getStringAttribute('cidr_ipv_6');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_prefix_list_id - computed: true, optional: false, required: false
  public get destinationPrefixListId() {
    return this.getStringAttribute('destination_prefix_list_id');
  }

  // destination_security_group_id - computed: true, optional: false, required: false
  public get destinationSecurityGroupId() {
    return this.getStringAttribute('destination_security_group_id');
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // security_group_egress_id - computed: true, optional: false, required: false
  public get securityGroupEgressId() {
    return this.getStringAttribute('security_group_egress_id');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
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
