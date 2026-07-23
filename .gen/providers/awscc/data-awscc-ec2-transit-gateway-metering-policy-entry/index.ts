// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry#id DataAwsccEc2TransitGatewayMeteringPolicyEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry}
*/
export class DataAwsccEc2TransitGatewayMeteringPolicyEntry extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_transit_gateway_metering_policy_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2TransitGatewayMeteringPolicyEntry to import
  * @param importFromId The id of the existing DataAwsccEc2TransitGatewayMeteringPolicyEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2TransitGatewayMeteringPolicyEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_metering_policy_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_metering_policy_entry',
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

  // destination_cidr_block - computed: true, optional: false, required: false
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // destination_port_range - computed: true, optional: false, required: false
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }

  // destination_transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get destinationTransitGatewayAttachmentId() {
    return this.getStringAttribute('destination_transit_gateway_attachment_id');
  }

  // destination_transit_gateway_attachment_type - computed: true, optional: false, required: false
  public get destinationTransitGatewayAttachmentType() {
    return this.getStringAttribute('destination_transit_gateway_attachment_type');
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

  // metered_account - computed: true, optional: false, required: false
  public get meteredAccount() {
    return this.getStringAttribute('metered_account');
  }

  // policy_rule_number - computed: true, optional: false, required: false
  public get policyRuleNumber() {
    return this.getNumberAttribute('policy_rule_number');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_cidr_block - computed: true, optional: false, required: false
  public get sourceCidrBlock() {
    return this.getStringAttribute('source_cidr_block');
  }

  // source_port_range - computed: true, optional: false, required: false
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }

  // source_transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get sourceTransitGatewayAttachmentId() {
    return this.getStringAttribute('source_transit_gateway_attachment_id');
  }

  // source_transit_gateway_attachment_type - computed: true, optional: false, required: false
  public get sourceTransitGatewayAttachmentType() {
    return this.getStringAttribute('source_transit_gateway_attachment_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // transit_gateway_metering_policy_id - computed: true, optional: false, required: false
  public get transitGatewayMeteringPolicyId() {
    return this.getStringAttribute('transit_gateway_metering_policy_id');
  }

  // update_effective_at - computed: true, optional: false, required: false
  public get updateEffectiveAt() {
    return this.getStringAttribute('update_effective_at');
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
