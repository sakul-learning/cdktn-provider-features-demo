// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_dnssec_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53ResolverResolverDnssecConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * ResourceId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_dnssec_config#resource_id Route53ResolverResolverDnssecConfig#resource_id}
  */
  readonly resourceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_dnssec_config awscc_route53resolver_resolver_dnssec_config}
*/
export class Route53ResolverResolverDnssecConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53resolver_resolver_dnssec_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53ResolverResolverDnssecConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53ResolverResolverDnssecConfig to import
  * @param importFromId The id of the existing Route53ResolverResolverDnssecConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_dnssec_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53ResolverResolverDnssecConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_dnssec_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_dnssec_config awscc_route53resolver_resolver_dnssec_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverResolverDnssecConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverResolverDnssecConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_dnssec_config',
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
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resolver_dnssec_config_id - computed: true, optional: false, required: false
  public get resolverDnssecConfigId() {
    return this.getStringAttribute('resolver_dnssec_config_id');
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // validation_status - computed: true, optional: false, required: false
  public get validationStatus() {
    return this.getStringAttribute('validation_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: cdktn.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_id: {
        value: cdktn.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
