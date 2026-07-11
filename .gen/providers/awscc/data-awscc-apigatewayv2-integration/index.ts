// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayv2IntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_integration#id DataAwsccApigatewayv2Integration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters {
}

export function dataAwsccApigatewayv2IntegrationResponseParametersResponseParametersToTerraform(struct?: DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2IntegrationResponseParametersResponseParametersToHclTerraform(struct?: DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2IntegrationResponseParametersResponseParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference {
    return new DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApigatewayv2IntegrationResponseParameters {
}

export function dataAwsccApigatewayv2IntegrationResponseParametersToTerraform(struct?: DataAwsccApigatewayv2IntegrationResponseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2IntegrationResponseParametersToHclTerraform(struct?: DataAwsccApigatewayv2IntegrationResponseParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2IntegrationResponseParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccApigatewayv2IntegrationResponseParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2IntegrationResponseParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // response_parameters - computed: true, optional: false, required: false
  private _responseParameters = new DataAwsccApigatewayv2IntegrationResponseParametersResponseParametersList(this, "response_parameters", false);
  public get responseParameters() {
    return this._responseParameters;
  }
}

export class DataAwsccApigatewayv2IntegrationResponseParametersMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccApigatewayv2IntegrationResponseParametersOutputReference {
    return new DataAwsccApigatewayv2IntegrationResponseParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccApigatewayv2IntegrationTlsConfig {
}

export function dataAwsccApigatewayv2IntegrationTlsConfigToTerraform(struct?: DataAwsccApigatewayv2IntegrationTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2IntegrationTlsConfigToHclTerraform(struct?: DataAwsccApigatewayv2IntegrationTlsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2IntegrationTlsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2IntegrationTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2IntegrationTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_name_to_verify - computed: true, optional: false, required: false
  public get serverNameToVerify() {
    return this.getStringAttribute('server_name_to_verify');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_integration awscc_apigatewayv2_integration}
*/
export class DataAwsccApigatewayv2Integration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayv2Integration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayv2Integration to import
  * @param importFromId The id of the existing DataAwsccApigatewayv2Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayv2Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_integration awscc_apigatewayv2_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayv2IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayv2IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_integration',
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

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // content_handling_strategy - computed: true, optional: false, required: false
  public get contentHandlingStrategy() {
    return this.getStringAttribute('content_handling_strategy');
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // integration_method - computed: true, optional: false, required: false
  public get integrationMethod() {
    return this.getStringAttribute('integration_method');
  }

  // integration_subtype - computed: true, optional: false, required: false
  public get integrationSubtype() {
    return this.getStringAttribute('integration_subtype');
  }

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // integration_uri - computed: true, optional: false, required: false
  public get integrationUri() {
    return this.getStringAttribute('integration_uri');
  }

  // passthrough_behavior - computed: true, optional: false, required: false
  public get passthroughBehavior() {
    return this.getStringAttribute('passthrough_behavior');
  }

  // payload_format_version - computed: true, optional: false, required: false
  public get payloadFormatVersion() {
    return this.getStringAttribute('payload_format_version');
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

  // response_parameters - computed: true, optional: false, required: false
  private _responseParameters = new DataAwsccApigatewayv2IntegrationResponseParametersMap(this, "response_parameters");
  public get responseParameters() {
    return this._responseParameters;
  }

  // template_selection_expression - computed: true, optional: false, required: false
  public get templateSelectionExpression() {
    return this.getStringAttribute('template_selection_expression');
  }

  // timeout_in_millis - computed: true, optional: false, required: false
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataAwsccApigatewayv2IntegrationTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
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
