// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/servicecatalog_stack_set_constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccServicecatalogStackSetConstraintConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/servicecatalog_stack_set_constraint#id DataAwsccServicecatalogStackSetConstraint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint}
*/
export class DataAwsccServicecatalogStackSetConstraint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_servicecatalog_stack_set_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccServicecatalogStackSetConstraint to import
  * @param importFromId The id of the existing DataAwsccServicecatalogStackSetConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/servicecatalog_stack_set_constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccServicecatalogStackSetConstraint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_stack_set_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogStackSetConstraintConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogStackSetConstraintConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_stack_set_constraint',
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

  // accept_language - computed: true, optional: false, required: false
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }

  // account_list - computed: true, optional: false, required: false
  public get accountList() {
    return this.getListAttribute('account_list');
  }

  // admin_role - computed: true, optional: false, required: false
  public get adminRole() {
    return this.getStringAttribute('admin_role');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
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

  // portfolio_id - computed: true, optional: false, required: false
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // region_list - computed: true, optional: false, required: false
  public get regionList() {
    return this.getListAttribute('region_list');
  }

  // stack_instance_control - computed: true, optional: false, required: false
  public get stackInstanceControl() {
    return this.getStringAttribute('stack_instance_control');
  }

  // stack_set_constraint_id - computed: true, optional: false, required: false
  public get stackSetConstraintId() {
    return this.getStringAttribute('stack_set_constraint_id');
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
