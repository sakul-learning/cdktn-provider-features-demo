// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/wisdom_ai_guardrail_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWisdomAiGuardrailVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/wisdom_ai_guardrail_version#id DataAwsccWisdomAiGuardrailVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/wisdom_ai_guardrail_version awscc_wisdom_ai_guardrail_version}
*/
export class DataAwsccWisdomAiGuardrailVersion extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_guardrail_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWisdomAiGuardrailVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWisdomAiGuardrailVersion to import
  * @param importFromId The id of the existing DataAwsccWisdomAiGuardrailVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/wisdom_ai_guardrail_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWisdomAiGuardrailVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_guardrail_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/wisdom_ai_guardrail_version awscc_wisdom_ai_guardrail_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWisdomAiGuardrailVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWisdomAiGuardrailVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_ai_guardrail_version',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_guardrail_arn - computed: true, optional: false, required: false
  public get aiGuardrailArn() {
    return this.getStringAttribute('ai_guardrail_arn');
  }

  // ai_guardrail_id - computed: true, optional: false, required: false
  public get aiGuardrailId() {
    return this.getStringAttribute('ai_guardrail_id');
  }

  // ai_guardrail_version_id - computed: true, optional: false, required: false
  public get aiGuardrailVersionId() {
    return this.getStringAttribute('ai_guardrail_version_id');
  }

  // assistant_arn - computed: true, optional: false, required: false
  public get assistantArn() {
    return this.getStringAttribute('assistant_arn');
  }

  // assistant_id - computed: true, optional: false, required: false
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
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

  // modified_time_seconds - computed: true, optional: false, required: false
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
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
