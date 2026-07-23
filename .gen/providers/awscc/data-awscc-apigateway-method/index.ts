// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apigateway_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayMethodConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apigateway_method#id DataAwsccApigatewayMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayMethodIntegrationIntegrationResponses {
}

export function dataAwsccApigatewayMethodIntegrationIntegrationResponsesToTerraform(struct?: DataAwsccApigatewayMethodIntegrationIntegrationResponses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayMethodIntegrationIntegrationResponsesToHclTerraform(struct?: DataAwsccApigatewayMethodIntegrationIntegrationResponses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccApigatewayMethodIntegrationIntegrationResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayMethodIntegrationIntegrationResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_handling - computed: true, optional: false, required: false
  public get contentHandling() {
    return this.getStringAttribute('content_handling');
  }

  // response_parameters - computed: true, optional: false, required: false
  private _responseParameters = new cdktn.StringMap(this, "response_parameters");
  public get responseParameters() {
    return this._responseParameters;
  }

  // response_templates - computed: true, optional: false, required: false
  private _responseTemplates = new cdktn.StringMap(this, "response_templates");
  public get responseTemplates() {
    return this._responseTemplates;
  }

  // selection_pattern - computed: true, optional: false, required: false
  public get selectionPattern() {
    return this.getStringAttribute('selection_pattern');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAwsccApigatewayMethodIntegrationIntegrationResponsesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference {
    return new DataAwsccApigatewayMethodIntegrationIntegrationResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApigatewayMethodIntegration {
}

export function dataAwsccApigatewayMethodIntegrationToTerraform(struct?: DataAwsccApigatewayMethodIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayMethodIntegrationToHclTerraform(struct?: DataAwsccApigatewayMethodIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayMethodIntegrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayMethodIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayMethodIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_key_parameters - computed: true, optional: false, required: false
  public get cacheKeyParameters() {
    return this.getListAttribute('cache_key_parameters');
  }

  // cache_namespace - computed: true, optional: false, required: false
  public get cacheNamespace() {
    return this.getStringAttribute('cache_namespace');
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // content_handling - computed: true, optional: false, required: false
  public get contentHandling() {
    return this.getStringAttribute('content_handling');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // integration_http_method - computed: true, optional: false, required: false
  public get integrationHttpMethod() {
    return this.getStringAttribute('integration_http_method');
  }

  // integration_responses - computed: true, optional: false, required: false
  private _integrationResponses = new DataAwsccApigatewayMethodIntegrationIntegrationResponsesList(this, "integration_responses", false);
  public get integrationResponses() {
    return this._integrationResponses;
  }

  // integration_target - computed: true, optional: false, required: false
  public get integrationTarget() {
    return this.getStringAttribute('integration_target');
  }

  // passthrough_behavior - computed: true, optional: false, required: false
  public get passthroughBehavior() {
    return this.getStringAttribute('passthrough_behavior');
  }

  // request_parameters - computed: true, optional: false, required: false
  private _requestParameters = new cdktn.StringMap(this, "request_parameters");
  public get requestParameters() {
    return this._requestParameters;
  }

  // request_templates - computed: true, optional: false, required: false
  private _requestTemplates = new cdktn.StringMap(this, "request_templates");
  public get requestTemplates() {
    return this._requestTemplates;
  }

  // response_transfer_mode - computed: true, optional: false, required: false
  public get responseTransferMode() {
    return this.getStringAttribute('response_transfer_mode');
  }

  // timeout_in_millis - computed: true, optional: false, required: false
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataAwsccApigatewayMethodMethodResponses {
}

export function dataAwsccApigatewayMethodMethodResponsesToTerraform(struct?: DataAwsccApigatewayMethodMethodResponses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayMethodMethodResponsesToHclTerraform(struct?: DataAwsccApigatewayMethodMethodResponses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayMethodMethodResponsesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccApigatewayMethodMethodResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayMethodMethodResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // response_models - computed: true, optional: false, required: false
  private _responseModels = new cdktn.StringMap(this, "response_models");
  public get responseModels() {
    return this._responseModels;
  }

  // response_parameters - computed: true, optional: false, required: false
  private _responseParameters = new cdktn.BooleanMap(this, "response_parameters");
  public get responseParameters() {
    return this._responseParameters;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAwsccApigatewayMethodMethodResponsesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccApigatewayMethodMethodResponsesOutputReference {
    return new DataAwsccApigatewayMethodMethodResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apigateway_method awscc_apigateway_method}
*/
export class DataAwsccApigatewayMethod extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigateway_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayMethod resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayMethod to import
  * @param importFromId The id of the existing DataAwsccApigatewayMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apigateway_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/apigateway_method awscc_apigateway_method} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayMethodConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_method',
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

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
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

  // integration - computed: true, optional: false, required: false
  private _integration = new DataAwsccApigatewayMethodIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }

  // method_responses - computed: true, optional: false, required: false
  private _methodResponses = new DataAwsccApigatewayMethodMethodResponsesList(this, "method_responses", false);
  public get methodResponses() {
    return this._methodResponses;
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // request_models - computed: true, optional: false, required: false
  private _requestModels = new cdktn.StringMap(this, "request_models");
  public get requestModels() {
    return this._requestModels;
  }

  // request_parameters - computed: true, optional: false, required: false
  private _requestParameters = new cdktn.BooleanMap(this, "request_parameters");
  public get requestParameters() {
    return this._requestParameters;
  }

  // request_validator_id - computed: true, optional: false, required: false
  public get requestValidatorId() {
    return this.getStringAttribute('request_validator_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // rest_api_id - computed: true, optional: false, required: false
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
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
