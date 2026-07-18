// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/aps_resource_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApsResourcePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The JSON to use as the Resource-based Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/aps_resource_policy#policy_document ApsResourcePolicy#policy_document}
  */
  readonly policyDocument: string;
  /**
  * The Arn of an APS Workspace that the PolicyDocument will be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/aps_resource_policy#workspace_arn ApsResourcePolicy#workspace_arn}
  */
  readonly workspaceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/aps_resource_policy awscc_aps_resource_policy}
*/
export class ApsResourcePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_aps_resource_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApsResourcePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsResourcePolicy to import
  * @param importFromId The id of the existing ApsResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/aps_resource_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsResourcePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_resource_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/aps_resource_policy awscc_aps_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApsResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_aps_resource_policy',
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
    this._policyDocument = config.policyDocument;
    this._workspaceArn = config.workspaceArn;
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

  // workspace_arn - computed: false, optional: false, required: true
  private _workspaceArn?: string; 
  public get workspaceArn() {
    return this.getStringAttribute('workspace_arn');
  }
  public set workspaceArn(value: string) {
    this._workspaceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceArnInput() {
    return this._workspaceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_document: cdktn.stringToTerraform(this._policyDocument),
      workspace_arn: cdktn.stringToTerraform(this._workspaceArn),
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
      workspace_arn: {
        value: cdktn.stringToHclTerraform(this._workspaceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
