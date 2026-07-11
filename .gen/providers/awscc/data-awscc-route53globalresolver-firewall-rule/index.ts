// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53globalresolver_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRoute53GlobalresolverFirewallRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53globalresolver_firewall_rule#id DataAwsccRoute53GlobalresolverFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}
*/
export class DataAwsccRoute53GlobalresolverFirewallRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53globalresolver_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRoute53GlobalresolverFirewallRule to import
  * @param importFromId The id of the existing DataAwsccRoute53GlobalresolverFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRoute53GlobalresolverFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53globalresolver_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53GlobalresolverFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53GlobalresolverFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53globalresolver_firewall_rule',
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

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // block_override_dns_type - computed: true, optional: false, required: false
  public get blockOverrideDnsType() {
    return this.getStringAttribute('block_override_dns_type');
  }

  // block_override_domain - computed: true, optional: false, required: false
  public get blockOverrideDomain() {
    return this.getStringAttribute('block_override_domain');
  }

  // block_override_ttl - computed: true, optional: false, required: false
  public get blockOverrideTtl() {
    return this.getNumberAttribute('block_override_ttl');
  }

  // block_response - computed: true, optional: false, required: false
  public get blockResponse() {
    return this.getStringAttribute('block_response');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // confidence_threshold - computed: true, optional: false, required: false
  public get confidenceThreshold() {
    return this.getStringAttribute('confidence_threshold');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_advanced_protection - computed: true, optional: false, required: false
  public get dnsAdvancedProtection() {
    return this.getStringAttribute('dns_advanced_protection');
  }

  // dns_view_id - computed: true, optional: false, required: false
  public get dnsViewId() {
    return this.getStringAttribute('dns_view_id');
  }

  // firewall_domain_list_id - computed: true, optional: false, required: false
  public get firewallDomainListId() {
    return this.getStringAttribute('firewall_domain_list_id');
  }

  // firewall_rule_id - computed: true, optional: false, required: false
  public get firewallRuleId() {
    return this.getStringAttribute('firewall_rule_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // q_type - computed: true, optional: false, required: false
  public get qType() {
    return this.getStringAttribute('q_type');
  }

  // query_type - computed: true, optional: false, required: false
  public get queryType() {
    return this.getStringAttribute('query_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
