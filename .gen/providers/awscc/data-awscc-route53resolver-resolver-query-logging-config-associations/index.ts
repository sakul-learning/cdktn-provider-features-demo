// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/route53resolver_resolver_query_logging_config_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/route53resolver_resolver_query_logging_config_associations awscc_route53resolver_resolver_query_logging_config_associations}
*/
export class DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_route53resolver_resolver_query_logging_config_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations to import
  * @param importFromId The id of the existing DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/route53resolver_resolver_query_logging_config_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_query_logging_config_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/route53resolver_resolver_query_logging_config_associations awscc_route53resolver_resolver_query_logging_config_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_resolver_query_logging_config_associations',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktn.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
