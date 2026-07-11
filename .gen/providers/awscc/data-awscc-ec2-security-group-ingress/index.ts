// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_security_group_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2SecurityGroupIngressConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_security_group_ingress#id DataAwsccEc2SecurityGroupIngress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_security_group_ingress awscc_ec2_security_group_ingress}
*/
export class DataAwsccEc2SecurityGroupIngress extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_security_group_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2SecurityGroupIngress resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2SecurityGroupIngress to import
  * @param importFromId The id of the existing DataAwsccEc2SecurityGroupIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2SecurityGroupIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_security_group_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/ec2_security_group_ingress awscc_ec2_security_group_ingress} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2SecurityGroupIngressConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2SecurityGroupIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_security_group_ingress',
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

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
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

  // security_group_ingress_id - computed: true, optional: false, required: false
  public get securityGroupIngressId() {
    return this.getStringAttribute('security_group_ingress_id');
  }

  // source_prefix_list_id - computed: true, optional: false, required: false
  public get sourcePrefixListId() {
    return this.getStringAttribute('source_prefix_list_id');
  }

  // source_security_group_id - computed: true, optional: false, required: false
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
  }

  // source_security_group_name - computed: true, optional: false, required: false
  public get sourceSecurityGroupName() {
    return this.getStringAttribute('source_security_group_name');
  }

  // source_security_group_owner_id - computed: true, optional: false, required: false
  public get sourceSecurityGroupOwnerId() {
    return this.getStringAttribute('source_security_group_owner_id');
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
