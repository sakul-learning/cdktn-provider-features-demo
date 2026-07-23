// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_query_logging_config_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Route53ResolverResolverQueryLoggingConfigAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * ResolverQueryLogConfigId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_query_logging_config_association#resolver_query_log_config_id Route53ResolverResolverQueryLoggingConfigAssociation#resolver_query_log_config_id}
  */
  readonly resolverQueryLogConfigId?: string;
  /**
  * ResourceId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_query_logging_config_association#resource_id Route53ResolverResolverQueryLoggingConfigAssociation#resource_id}
  */
  readonly resourceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_query_logging_config_association awscc_route53resolver_resolver_query_logging_config_association}
*/
export class Route53ResolverResolverQueryLoggingConfigAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53resolver_resolver_query_logging_config_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfigAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53ResolverResolverQueryLoggingConfigAssociation to import
  * @param importFromId The id of the existing Route53ResolverResolverQueryLoggingConfigAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_query_logging_config_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53ResolverResolverQueryLoggingConfigAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_query_logging_config_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/route53resolver_resolver_query_logging_config_association awscc_route53resolver_resolver_query_logging_config_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverResolverQueryLoggingConfigAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverResolverQueryLoggingConfigAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_query_logging_config_association',
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
    this._resolverQueryLogConfigId = config.resolverQueryLogConfigId;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resolver_query_log_config_id - computed: true, optional: true, required: false
  private _resolverQueryLogConfigId?: string; 
  public get resolverQueryLogConfigId() {
    return this.getStringAttribute('resolver_query_log_config_id');
  }
  public set resolverQueryLogConfigId(value: string) {
    this._resolverQueryLogConfigId = value;
  }
  public resetResolverQueryLogConfigId() {
    this._resolverQueryLogConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverQueryLogConfigIdInput() {
    return this._resolverQueryLogConfigId;
  }

  // resolver_query_logging_config_association_id - computed: true, optional: false, required: false
  public get resolverQueryLoggingConfigAssociationId() {
    return this.getStringAttribute('resolver_query_logging_config_association_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resolver_query_log_config_id: cdktn.stringToTerraform(this._resolverQueryLogConfigId),
      resource_id: cdktn.stringToTerraform(this._resourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resolver_query_log_config_id: {
        value: cdktn.stringToHclTerraform(this._resolverQueryLogConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
