// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_pull_through_cache_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcrPullThroughCacheRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_pull_through_cache_rule#id DataAwsccEcrPullThroughCacheRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_pull_through_cache_rule awscc_ecr_pull_through_cache_rule}
*/
export class DataAwsccEcrPullThroughCacheRule extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecr_pull_through_cache_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcrPullThroughCacheRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcrPullThroughCacheRule to import
  * @param importFromId The id of the existing DataAwsccEcrPullThroughCacheRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcrPullThroughCacheRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_pull_through_cache_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ecr_pull_through_cache_rule awscc_ecr_pull_through_cache_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcrPullThroughCacheRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcrPullThroughCacheRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_pull_through_cache_rule',
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

  // credential_arn - computed: true, optional: false, required: false
  public get credentialArn() {
    return this.getStringAttribute('credential_arn');
  }

  // custom_role_arn - computed: true, optional: false, required: false
  public get customRoleArn() {
    return this.getStringAttribute('custom_role_arn');
  }

  // ecr_repository_prefix - computed: true, optional: false, required: false
  public get ecrRepositoryPrefix() {
    return this.getStringAttribute('ecr_repository_prefix');
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

  // upstream_registry - computed: true, optional: false, required: false
  public get upstreamRegistry() {
    return this.getStringAttribute('upstream_registry');
  }

  // upstream_registry_url - computed: true, optional: false, required: false
  public get upstreamRegistryUrl() {
    return this.getStringAttribute('upstream_registry_url');
  }

  // upstream_repository_prefix - computed: true, optional: false, required: false
  public get upstreamRepositoryPrefix() {
    return this.getStringAttribute('upstream_repository_prefix');
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
