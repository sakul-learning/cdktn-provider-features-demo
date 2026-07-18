// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StepfunctionsStateMachineVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}
  */
  readonly stateMachineArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}
  */
  readonly stateMachineRevisionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version awscc_stepfunctions_state_machine_version}
*/
export class StepfunctionsStateMachineVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_stepfunctions_state_machine_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StepfunctionsStateMachineVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StepfunctionsStateMachineVersion to import
  * @param importFromId The id of the existing StepfunctionsStateMachineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StepfunctionsStateMachineVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_stepfunctions_state_machine_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/stepfunctions_state_machine_version awscc_stepfunctions_state_machine_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StepfunctionsStateMachineVersionConfig
  */
  public constructor(scope: Construct, id: string, config: StepfunctionsStateMachineVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_stepfunctions_state_machine_version',
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
    this._description = config.description;
    this._stateMachineArn = config.stateMachineArn;
    this._stateMachineRevisionId = config.stateMachineRevisionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // state_machine_arn - computed: false, optional: false, required: true
  private _stateMachineArn?: string; 
  public get stateMachineArn() {
    return this.getStringAttribute('state_machine_arn');
  }
  public set stateMachineArn(value: string) {
    this._stateMachineArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineArnInput() {
    return this._stateMachineArn;
  }

  // state_machine_revision_id - computed: true, optional: true, required: false
  private _stateMachineRevisionId?: string; 
  public get stateMachineRevisionId() {
    return this.getStringAttribute('state_machine_revision_id');
  }
  public set stateMachineRevisionId(value: string) {
    this._stateMachineRevisionId = value;
  }
  public resetStateMachineRevisionId() {
    this._stateMachineRevisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineRevisionIdInput() {
    return this._stateMachineRevisionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      state_machine_arn: cdktn.stringToTerraform(this._stateMachineArn),
      state_machine_revision_id: cdktn.stringToTerraform(this._stateMachineRevisionId),
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
      state_machine_arn: {
        value: cdktn.stringToHclTerraform(this._stateMachineArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_machine_revision_id: {
        value: cdktn.stringToHclTerraform(this._stateMachineRevisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
