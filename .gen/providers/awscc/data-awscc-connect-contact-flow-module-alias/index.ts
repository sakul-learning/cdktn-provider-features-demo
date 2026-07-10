// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_contact_flow_module_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectContactFlowModuleAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_contact_flow_module_alias#id DataAwsccConnectContactFlowModuleAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_contact_flow_module_alias awscc_connect_contact_flow_module_alias}
*/
export class DataAwsccConnectContactFlowModuleAlias extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_contact_flow_module_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectContactFlowModuleAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectContactFlowModuleAlias to import
  * @param importFromId The id of the existing DataAwsccConnectContactFlowModuleAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_contact_flow_module_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectContactFlowModuleAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_contact_flow_module_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_contact_flow_module_alias awscc_connect_contact_flow_module_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectContactFlowModuleAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectContactFlowModuleAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_contact_flow_module_alias',
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

  // alias_id - computed: true, optional: false, required: false
  public get aliasId() {
    return this.getStringAttribute('alias_id');
  }

  // contact_flow_module_alias_arn - computed: true, optional: false, required: false
  public get contactFlowModuleAliasArn() {
    return this.getStringAttribute('contact_flow_module_alias_arn');
  }

  // contact_flow_module_id - computed: true, optional: false, required: false
  public get contactFlowModuleId() {
    return this.getStringAttribute('contact_flow_module_id');
  }

  // contact_flow_module_version - computed: true, optional: false, required: false
  public get contactFlowModuleVersion() {
    return this.getNumberAttribute('contact_flow_module_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
