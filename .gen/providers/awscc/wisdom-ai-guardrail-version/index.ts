// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WisdomAiGuardrailVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version#ai_guardrail_id WisdomAiGuardrailVersion#ai_guardrail_id}
  */
  readonly aiGuardrailId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version#assistant_id WisdomAiGuardrailVersion#assistant_id}
  */
  readonly assistantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version#modified_time_seconds WisdomAiGuardrailVersion#modified_time_seconds}
  */
  readonly modifiedTimeSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version awscc_wisdom_ai_guardrail_version}
*/
export class WisdomAiGuardrailVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_ai_guardrail_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WisdomAiGuardrailVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WisdomAiGuardrailVersion to import
  * @param importFromId The id of the existing WisdomAiGuardrailVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WisdomAiGuardrailVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_guardrail_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/wisdom_ai_guardrail_version awscc_wisdom_ai_guardrail_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WisdomAiGuardrailVersionConfig
  */
  public constructor(scope: Construct, id: string, config: WisdomAiGuardrailVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_ai_guardrail_version',
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
    this._aiGuardrailId = config.aiGuardrailId;
    this._assistantId = config.assistantId;
    this._modifiedTimeSeconds = config.modifiedTimeSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_guardrail_arn - computed: true, optional: false, required: false
  public get aiGuardrailArn() {
    return this.getStringAttribute('ai_guardrail_arn');
  }

  // ai_guardrail_id - computed: false, optional: false, required: true
  private _aiGuardrailId?: string;
  public get aiGuardrailId() {
    return this.getStringAttribute('ai_guardrail_id');
  }
  public set aiGuardrailId(value: string) {
    this._aiGuardrailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGuardrailIdInput() {
    return this._aiGuardrailId;
  }

  // ai_guardrail_version_id - computed: true, optional: false, required: false
  public get aiGuardrailVersionId() {
    return this.getStringAttribute('ai_guardrail_version_id');
  }

  // assistant_arn - computed: true, optional: false, required: false
  public get assistantArn() {
    return this.getStringAttribute('assistant_arn');
  }

  // assistant_id - computed: false, optional: false, required: true
  private _assistantId?: string;
  public get assistantId() {
    return this.getStringAttribute('assistant_id');
  }
  public set assistantId(value: string) {
    this._assistantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assistantIdInput() {
    return this._assistantId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time_seconds - computed: true, optional: true, required: false
  private _modifiedTimeSeconds?: number;
  public get modifiedTimeSeconds() {
    return this.getNumberAttribute('modified_time_seconds');
  }
  public set modifiedTimeSeconds(value: number) {
    this._modifiedTimeSeconds = value;
  }
  public resetModifiedTimeSeconds() {
    this._modifiedTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedTimeSecondsInput() {
    return this._modifiedTimeSeconds;
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
      ai_guardrail_id: cdktn.stringToTerraform(this._aiGuardrailId),
      assistant_id: cdktn.stringToTerraform(this._assistantId),
      modified_time_seconds: cdktn.numberToTerraform(this._modifiedTimeSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_guardrail_id: {
        value: cdktn.stringToHclTerraform(this._aiGuardrailId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assistant_id: {
        value: cdktn.stringToHclTerraform(this._assistantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_time_seconds: {
        value: cdktn.numberToHclTerraform(this._modifiedTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
