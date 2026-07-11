// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_authorizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayv2AuthorizerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_authorizer#id DataAwsccApigatewayv2Authorizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayv2AuthorizerJwtConfiguration {
}

export function dataAwsccApigatewayv2AuthorizerJwtConfigurationToTerraform(struct?: DataAwsccApigatewayv2AuthorizerJwtConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayv2AuthorizerJwtConfigurationToHclTerraform(struct?: DataAwsccApigatewayv2AuthorizerJwtConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayv2AuthorizerJwtConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayv2AuthorizerJwtConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayv2AuthorizerJwtConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getListAttribute('audience');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_authorizer awscc_apigatewayv2_authorizer}
*/
export class DataAwsccApigatewayv2Authorizer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigatewayv2_authorizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayv2Authorizer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayv2Authorizer to import
  * @param importFromId The id of the existing DataAwsccApigatewayv2Authorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_authorizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayv2Authorizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_authorizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigatewayv2_authorizer awscc_apigatewayv2_authorizer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayv2AuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayv2AuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigatewayv2_authorizer',
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

  // authorizer_credentials_arn - computed: true, optional: false, required: false
  public get authorizerCredentialsArn() {
    return this.getStringAttribute('authorizer_credentials_arn');
  }

  // authorizer_id - computed: true, optional: false, required: false
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }

  // authorizer_payload_format_version - computed: true, optional: false, required: false
  public get authorizerPayloadFormatVersion() {
    return this.getStringAttribute('authorizer_payload_format_version');
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: false, required: false
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }

  // authorizer_type - computed: true, optional: false, required: false
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }

  // authorizer_uri - computed: true, optional: false, required: false
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }

  // enable_simple_responses - computed: true, optional: false, required: false
  public get enableSimpleResponses() {
    return this.getBooleanAttribute('enable_simple_responses');
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

  // identity_source - computed: true, optional: false, required: false
  public get identitySource() {
    return this.getListAttribute('identity_source');
  }

  // identity_validation_expression - computed: true, optional: false, required: false
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }

  // jwt_configuration - computed: true, optional: false, required: false
  private _jwtConfiguration = new DataAwsccApigatewayv2AuthorizerJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
