// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_resource_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockResourcePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The IAM policy document defining access permissions for the guardrail and guardrail profile resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_resource_policy#policy_document BedrockResourcePolicy#policy_document}
  */
  readonly policyDocument: string;
  /**
  * The ARN of the Bedrock Guardrail or Guardrail Profile resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_resource_policy#resource_arn BedrockResourcePolicy#resource_arn}
  */
  readonly resourceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_resource_policy awscc_bedrock_resource_policy}
*/
export class BedrockResourcePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_resource_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockResourcePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockResourcePolicy to import
  * @param importFromId The id of the existing BedrockResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_resource_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockResourcePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_resource_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_resource_policy awscc_bedrock_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_resource_policy',
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
    this._policyDocument = config.policyDocument;
    this._resourceArn = config.resourceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument?: string;
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_document: cdktn.stringToTerraform(this._policyDocument),
      resource_arn: cdktn.stringToTerraform(this._resourceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_document: {
        value: cdktn.stringToHclTerraform(this._policyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arn: {
        value: cdktn.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
