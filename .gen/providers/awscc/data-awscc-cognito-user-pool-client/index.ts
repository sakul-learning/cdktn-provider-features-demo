// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_user_pool_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoUserPoolClientConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_user_pool_client#id DataAwsccCognitoUserPoolClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCognitoUserPoolClientAnalyticsConfiguration {
}

export function dataAwsccCognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: DataAwsccCognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolClientAnalyticsConfigurationToHclTerraform(struct?: DataAwsccCognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolClientAnalyticsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolClientAnalyticsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // user_data_shared - computed: true, optional: false, required: false
  public get userDataShared() {
    return this.getBooleanAttribute('user_data_shared');
  }
}
export interface DataAwsccCognitoUserPoolClientRefreshTokenRotation {
}

export function dataAwsccCognitoUserPoolClientRefreshTokenRotationToTerraform(struct?: DataAwsccCognitoUserPoolClientRefreshTokenRotation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolClientRefreshTokenRotationToHclTerraform(struct?: DataAwsccCognitoUserPoolClientRefreshTokenRotation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolClientRefreshTokenRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolClientRefreshTokenRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // retry_grace_period_seconds - computed: true, optional: false, required: false
  public get retryGracePeriodSeconds() {
    return this.getNumberAttribute('retry_grace_period_seconds');
  }
}
export interface DataAwsccCognitoUserPoolClientTokenValidityUnits {
}

export function dataAwsccCognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: DataAwsccCognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoUserPoolClientTokenValidityUnitsToHclTerraform(struct?: DataAwsccCognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoUserPoolClientTokenValidityUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoUserPoolClientTokenValidityUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // id_token - computed: true, optional: false, required: false
  public get idToken() {
    return this.getStringAttribute('id_token');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_user_pool_client awscc_cognito_user_pool_client}
*/
export class DataAwsccCognitoUserPoolClient extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoUserPoolClient resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoUserPoolClient to import
  * @param importFromId The id of the existing DataAwsccCognitoUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoUserPoolClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_user_pool_client awscc_cognito_user_pool_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoUserPoolClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_client',
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

  // access_token_validity - computed: true, optional: false, required: false
  public get accessTokenValidity() {
    return this.getNumberAttribute('access_token_validity');
  }

  // allowed_o_auth_flows - computed: true, optional: false, required: false
  public get allowedOAuthFlows() {
    return this.getListAttribute('allowed_o_auth_flows');
  }

  // allowed_o_auth_flows_user_pool_client - computed: true, optional: false, required: false
  public get allowedOAuthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_o_auth_flows_user_pool_client');
  }

  // allowed_o_auth_scopes - computed: true, optional: false, required: false
  public get allowedOAuthScopes() {
    return this.getListAttribute('allowed_o_auth_scopes');
  }

  // analytics_configuration - computed: true, optional: false, required: false
  private _analyticsConfiguration = new DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference(this, "analytics_configuration");
  public get analyticsConfiguration() {
    return this._analyticsConfiguration;
  }

  // auth_session_validity - computed: true, optional: false, required: false
  public get authSessionValidity() {
    return this.getNumberAttribute('auth_session_validity');
  }

  // callback_ur_ls - computed: true, optional: false, required: false
  public get callbackUrLs() {
    return this.getListAttribute('callback_ur_ls');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: true, optional: false, required: false
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }

  // enable_propagate_additional_user_context_data - computed: true, optional: false, required: false
  public get enablePropagateAdditionalUserContextData() {
    return this.getBooleanAttribute('enable_propagate_additional_user_context_data');
  }

  // enable_token_revocation - computed: true, optional: false, required: false
  public get enableTokenRevocation() {
    return this.getBooleanAttribute('enable_token_revocation');
  }

  // explicit_auth_flows - computed: true, optional: false, required: false
  public get explicitAuthFlows() {
    return this.getListAttribute('explicit_auth_flows');
  }

  // generate_secret - computed: true, optional: false, required: false
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
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

  // id_token_validity - computed: true, optional: false, required: false
  public get idTokenValidity() {
    return this.getNumberAttribute('id_token_validity');
  }

  // logout_ur_ls - computed: true, optional: false, required: false
  public get logoutUrLs() {
    return this.getListAttribute('logout_ur_ls');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prevent_user_existence_errors - computed: true, optional: false, required: false
  public get preventUserExistenceErrors() {
    return this.getStringAttribute('prevent_user_existence_errors');
  }

  // read_attributes - computed: true, optional: false, required: false
  public get readAttributes() {
    return this.getListAttribute('read_attributes');
  }

  // refresh_token_rotation - computed: true, optional: false, required: false
  private _refreshTokenRotation = new DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference(this, "refresh_token_rotation");
  public get refreshTokenRotation() {
    return this._refreshTokenRotation;
  }

  // refresh_token_validity - computed: true, optional: false, required: false
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
  }

  // supported_identity_providers - computed: true, optional: false, required: false
  public get supportedIdentityProviders() {
    return this.getListAttribute('supported_identity_providers');
  }

  // token_validity_units - computed: true, optional: false, required: false
  private _tokenValidityUnits = new DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference(this, "token_validity_units");
  public get tokenValidityUnits() {
    return this._tokenValidityUnits;
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }

  // write_attributes - computed: true, optional: false, required: false
  public get writeAttributes() {
    return this.getListAttribute('write_attributes');
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
