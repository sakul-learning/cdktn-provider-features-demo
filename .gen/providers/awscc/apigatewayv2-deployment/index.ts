// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Apigatewayv2DeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The API identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment#api_id Apigatewayv2Deployment#api_id}
  */
  readonly apiId: string;
  /**
  * The description for the deployment resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment#description Apigatewayv2Deployment#description}
  */
  readonly description?: string;
  /**
  * The name of an existing stage to associate with the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment#stage_name Apigatewayv2Deployment#stage_name}
  */
  readonly stageName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment awscc_apigatewayv2_deployment}
*/
export class Apigatewayv2Deployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Apigatewayv2Deployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apigatewayv2Deployment to import
  * @param importFromId The id of the existing Apigatewayv2Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apigatewayv2Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/apigatewayv2_deployment awscc_apigatewayv2_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_deployment',
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
    this._apiId = config.apiId;
    this._description = config.description;
    this._stageName = config.stageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
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

  // stage_name - computed: true, optional: true, required: false
  private _stageName?: string;
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  public resetStageName() {
    this._stageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktn.stringToTerraform(this._apiId),
      description: cdktn.stringToTerraform(this._description),
      stage_name: cdktn.stringToTerraform(this._stageName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_name: {
        value: cdktn.stringToHclTerraform(this._stageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
