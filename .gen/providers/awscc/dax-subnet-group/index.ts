// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DaxSubnetGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group#description DaxSubnetGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group#subnet_group_name DaxSubnetGroup#subnet_group_name}
  */
  readonly subnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group#subnet_ids DaxSubnetGroup#subnet_ids}
  */
  readonly subnetIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group awscc_dax_subnet_group}
*/
export class DaxSubnetGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dax_subnet_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DaxSubnetGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DaxSubnetGroup to import
  * @param importFromId The id of the existing DaxSubnetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DaxSubnetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dax_subnet_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/dax_subnet_group awscc_dax_subnet_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DaxSubnetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DaxSubnetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dax_subnet_group',
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
    this._description = config.description;
    this._subnetGroupName = config.subnetGroupName;
    this._subnetIds = config.subnetIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subnet_group_id - computed: true, optional: false, required: false
  public get subnetGroupId() {
    return this.getStringAttribute('subnet_group_id');
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string; 
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string) {
    this._subnetGroupName = value;
  }
  public resetSubnetGroupName() {
    this._subnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupNameInput() {
    return this._subnetGroupName;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      subnet_group_name: cdktn.stringToTerraform(this._subnetGroupName),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_group_name: {
        value: cdktn.stringToHclTerraform(this._subnetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
