// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigatewayv2_route_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayv2RouteResponseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigatewayv2_route_response#id DataAwsccApigatewayv2RouteResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayv2RouteResponseResponseParameters {
}

export function dataAwsccApigatewayv2RouteResponseResponseParametersToTerraform(struct?: DataAwsccApigatewayv2RouteResponseResponseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2RouteResponseResponseParametersToHclTerraform(struct?: DataAwsccApigatewayv2RouteResponseResponseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccApigatewayv2RouteResponseResponseParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2RouteResponseResponseParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataAwsccApigatewayv2RouteResponseResponseParametersMap extends cdktn.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference {
    return new DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigatewayv2_route_response awscc_apigatewayv2_route_response}
*/
export class DataAwsccApigatewayv2RouteResponse extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_route_response";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayv2RouteResponse to import
  * @param importFromId The id of the existing DataAwsccApigatewayv2RouteResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayv2RouteResponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_route_response", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/apigatewayv2_route_response awscc_apigatewayv2_route_response} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayv2RouteResponseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayv2RouteResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_route_response',
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

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
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

  // response_models - computed: true, optional: false, required: false
  public get responseModels() {
    return this.getStringAttribute('response_models');
  }

  // response_parameters - computed: true, optional: false, required: false
  private _responseParameters = new DataAwsccApigatewayv2RouteResponseResponseParametersMap(this, "response_parameters");
  public get responseParameters() {
    return this._responseParameters;
  }

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // route_response_id - computed: true, optional: false, required: false
  public get routeResponseId() {
    return this.getStringAttribute('route_response_id');
  }

  // route_response_key - computed: true, optional: false, required: false
  public get routeResponseKey() {
    return this.getStringAttribute('route_response_key');
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
