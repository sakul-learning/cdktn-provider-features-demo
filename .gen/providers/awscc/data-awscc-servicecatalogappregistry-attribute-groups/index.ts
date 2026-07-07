// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/servicecatalogappregistry_attribute_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccServicecatalogappregistryAttributeGroupsConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/servicecatalogappregistry_attribute_groups awscc_servicecatalogappregistry_attribute_groups}
*/
export class DataAwsccServicecatalogappregistryAttributeGroups extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_servicecatalogappregistry_attribute_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccServicecatalogappregistryAttributeGroups resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccServicecatalogappregistryAttributeGroups to import
  * @param importFromId The id of the existing DataAwsccServicecatalogappregistryAttributeGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/servicecatalogappregistry_attribute_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccServicecatalogappregistryAttributeGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalogappregistry_attribute_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/servicecatalogappregistry_attribute_groups awscc_servicecatalogappregistry_attribute_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogappregistryAttributeGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogappregistryAttributeGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalogappregistry_attribute_groups',
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
