// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayv2RouteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_route#id DataAwsccApigatewayv2Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_route awscc_apigatewayv2_route}
*/
export class DataAwsccApigatewayv2Route extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayv2Route resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayv2Route to import
  * @param importFromId The id of the existing DataAwsccApigatewayv2Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayv2Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_route awscc_apigatewayv2_route} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayv2RouteConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayv2RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_route',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_key_required - computed: true, optional: false, required: false
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }

  // authorization_scopes - computed: true, optional: false, required: false
  public get authorizationScopes() {
    return this.getListAttribute('authorization_scopes');
  }

  // authorization_type - computed: true, optional: false, required: false
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }

  // authorizer_id - computed: true, optional: false, required: false
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
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

  // model_selection_expression - computed: true, optional: false, required: false
  public get modelSelectionExpression() {
    return this.getStringAttribute('model_selection_expression');
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // request_models - computed: true, optional: false, required: false
  public get requestModels() {
    return this.getStringAttribute('request_models');
  }

  // request_parameters - computed: true, optional: false, required: false
  public get requestParameters() {
    return this.getStringAttribute('request_parameters');
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // route_key - computed: true, optional: false, required: false
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }

  // route_response_selection_expression - computed: true, optional: false, required: false
  public get routeResponseSelectionExpression() {
    return this.getStringAttribute('route_response_selection_expression');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
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
