// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2IpamPoolCidrConfig extends cdktn.TerraformMetaArguments {
  /**
  * Represents a single IPv4 or IPv6 CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr#cidr Ec2IpamPoolCidr#cidr}
  */
  readonly cidr?: string;
  /**
  * Id of the IPAM Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr#ipam_pool_id Ec2IpamPoolCidr#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * The desired netmask length of the provision. If set, IPAM will choose a block of free space with this size and return the CIDR representing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr#netmask_length Ec2IpamPoolCidr#netmask_length}
  */
  readonly netmaskLength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr awscc_ec2_ipam_pool_cidr}
*/
export class Ec2IpamPoolCidr extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_ipam_pool_cidr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2IpamPoolCidr resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2IpamPoolCidr to import
  * @param importFromId The id of the existing Ec2IpamPoolCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2IpamPoolCidr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ipam_pool_cidr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_ipam_pool_cidr awscc_ec2_ipam_pool_cidr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2IpamPoolCidrConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2IpamPoolCidrConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_ipam_pool_cidr',
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
    this._cidr = config.cidr;
    this._ipamPoolId = config.ipamPoolId;
    this._netmaskLength = config.netmaskLength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string;
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_pool_cidr_id - computed: true, optional: false, required: false
  public get ipamPoolCidrId() {
    return this.getStringAttribute('ipam_pool_cidr_id');
  }

  // ipam_pool_id - computed: false, optional: false, required: true
  private _ipamPoolId?: string;
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }

  // netmask_length - computed: true, optional: true, required: false
  private _netmaskLength?: number;
  public get netmaskLength() {
    return this.getNumberAttribute('netmask_length');
  }
  public set netmaskLength(value: number) {
    this._netmaskLength = value;
  }
  public resetNetmaskLength() {
    this._netmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskLengthInput() {
    return this._netmaskLength;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktn.stringToTerraform(this._cidr),
      ipam_pool_id: cdktn.stringToTerraform(this._ipamPoolId),
      netmask_length: cdktn.numberToTerraform(this._netmaskLength),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktn.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_id: {
        value: cdktn.stringToHclTerraform(this._ipamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask_length: {
        value: cdktn.numberToHclTerraform(this._netmaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
