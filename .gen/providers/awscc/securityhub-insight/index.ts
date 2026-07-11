// generated from terraform resource schema

import { SecurityhubInsightFilters, 
securityhubInsightFiltersToTerraform, 
securityhubInsightFiltersToHclTerraform, 
SecurityhubInsightFiltersOutputReference} from './index-structs/index.js';
export * from './index-structs/index.js';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface SecurityhubInsightConfig extends cdktn.TerraformMetaArguments {
  /**
  * One or more attributes used to filter the findings included in the insight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_insight#filters SecurityhubInsight#filters}
  */
  readonly filters: SecurityhubInsightFilters;
  /**
  * The grouping attribute for the insight's findings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_insight#group_by_attribute SecurityhubInsight#group_by_attribute}
  */
  readonly groupByAttribute: string;
  /**
  * The name of a Security Hub insight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_insight#name SecurityhubInsight#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_insight awscc_securityhub_insight}
*/
export class SecurityhubInsight extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubInsight resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubInsight to import
  * @param importFromId The id of the existing SecurityhubInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_insight awscc_securityhub_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubInsightConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_insight',
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
    this._filters.internalValue = config.filters;
    this._groupByAttribute = config.groupByAttribute;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: false, required: true
  private _filters = new SecurityhubInsightFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: SecurityhubInsightFilters) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // group_by_attribute - computed: false, optional: false, required: true
  private _groupByAttribute?: string; 
  public get groupByAttribute() {
    return this.getStringAttribute('group_by_attribute');
  }
  public set groupByAttribute(value: string) {
    this._groupByAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAttributeInput() {
    return this._groupByAttribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insight_arn - computed: true, optional: false, required: false
  public get insightArn() {
    return this.getStringAttribute('insight_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: securityhubInsightFiltersToTerraform(this._filters.internalValue),
      group_by_attribute: cdktn.stringToTerraform(this._groupByAttribute),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: securityhubInsightFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubInsightFilters",
      },
      group_by_attribute: {
        value: cdktn.stringToHclTerraform(this._groupByAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
