// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppsyncApiConfig extends cdktn.TerraformMetaArguments {
  /**
  * The configuration for an Event Api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}
  */
  readonly eventConfig?: AppsyncApiEventConfig;
  /**
  * The name of the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#name AppsyncApi#name}
  */
  readonly name: string;
  /**
  * The owner contact information for an API resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}
  */
  readonly ownerContact?: string;
  /**
  * An arbitrary set of tags (key-value pairs) for this AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#tags AppsyncApi#tags}
  */
  readonly tags?: AppsyncApiTags[] | cdktn.IResolvable;
}
export interface AppsyncApiDns {
}

export function appsyncApiDnsToTerraform(struct?: AppsyncApiDns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function appsyncApiDnsToHclTerraform(struct?: AppsyncApiDns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class AppsyncApiDnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncApiDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    return this.getStringAttribute('http');
  }

  // realtime - computed: true, optional: false, required: false
  public get realtime() {
    return this.getStringAttribute('realtime');
  }
}
export interface AppsyncApiEventConfigAuthProvidersCognitoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}
  */
  readonly userPoolId?: string;
}

export function appsyncApiEventConfigAuthProvidersCognitoConfigToTerraform(struct?: AppsyncApiEventConfigAuthProvidersCognitoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_id_client_regex: cdktn.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    user_pool_id: cdktn.stringToTerraform(struct!.userPoolId),
  }
}


export function appsyncApiEventConfigAuthProvidersCognitoConfigToHclTerraform(struct?: AppsyncApiEventConfigAuthProvidersCognitoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_id_client_regex: {
      value: cdktn.stringToHclTerraform(struct!.appIdClientRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncApiEventConfigAuthProvidersCognitoConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIdClientRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigAuthProvidersCognitoConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._userPoolId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appIdClientRegex = value.appIdClientRegex;
      this._awsRegion = value.awsRegion;
      this._userPoolId = value.userPoolId;
    }
  }

  // app_id_client_regex - computed: true, optional: true, required: false
  private _appIdClientRegex?: string; 
  public get appIdClientRegex() {
    return this.getStringAttribute('app_id_client_regex');
  }
  public set appIdClientRegex(value: string) {
    this._appIdClientRegex = value;
  }
  public resetAppIdClientRegex() {
    this._appIdClientRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdClientRegexInput() {
    return this._appIdClientRegex;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // user_pool_id - computed: true, optional: true, required: false
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  public resetUserPoolId() {
    this._userPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
}

export function appsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigToTerraform(struct?: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorizer_result_ttl_in_seconds: cdktn.numberToTerraform(struct!.authorizerResultTtlInSeconds),
    authorizer_uri: cdktn.stringToTerraform(struct!.authorizerUri),
    identity_validation_expression: cdktn.stringToTerraform(struct!.identityValidationExpression),
  }
}


export function appsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigToHclTerraform(struct?: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorizer_result_ttl_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.authorizerResultTtlInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_uri: {
      value: cdktn.stringToHclTerraform(struct!.authorizerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_validation_expression: {
      value: cdktn.stringToHclTerraform(struct!.identityValidationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerResultTtlInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
    }
    if (this._authorizerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerUri = this._authorizerUri;
    }
    if (this._identityValidationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityValidationExpression = this._identityValidationExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerResultTtlInSeconds = undefined;
      this._authorizerUri = undefined;
      this._identityValidationExpression = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
      this._authorizerUri = value.authorizerUri;
      this._identityValidationExpression = value.identityValidationExpression;
    }
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_uri - computed: true, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // identity_validation_expression - computed: true, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }
}
export interface AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}
  */
  readonly issuer?: string;
}

export function appsyncApiEventConfigAuthProvidersOpenIdConnectConfigToTerraform(struct?: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_ttl: cdktn.numberToTerraform(struct!.authTtl),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    iat_ttl: cdktn.numberToTerraform(struct!.iatTtl),
    issuer: cdktn.stringToTerraform(struct!.issuer),
  }
}


export function appsyncApiEventConfigAuthProvidersOpenIdConnectConfigToHclTerraform(struct?: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_ttl: {
      value: cdktn.numberToHclTerraform(struct!.authTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iat_ttl: {
      value: cdktn.numberToHclTerraform(struct!.iatTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authTtl = value.authTtl;
      this._clientId = value.clientId;
      this._iatTtl = value.iatTtl;
      this._issuer = value.issuer;
    }
  }

  // auth_ttl - computed: true, optional: true, required: false
  private _authTtl?: number; 
  public get authTtl() {
    return this.getNumberAttribute('auth_ttl');
  }
  public set authTtl(value: number) {
    this._authTtl = value;
  }
  public resetAuthTtl() {
    this._authTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTtlInput() {
    return this._authTtl;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // iat_ttl - computed: true, optional: true, required: false
  private _iatTtl?: number; 
  public get iatTtl() {
    return this.getNumberAttribute('iat_ttl');
  }
  public set iatTtl(value: number) {
    this._iatTtl = value;
  }
  public resetIatTtl() {
    this._iatTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iatTtlInput() {
    return this._iatTtl;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface AppsyncApiEventConfigAuthProviders {
  /**
  * Security configuration for your AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType?: string;
  /**
  * Optional authorization configuration for using Amazon Cognito user pools with your API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}
  */
  readonly cognitoConfig?: AppsyncApiEventConfigAuthProvidersCognitoConfig;
  /**
  * A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}
  */
  readonly lambdaAuthorizerConfig?: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig;
  /**
  * The OpenID Connect configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#open_id_connect_config AppsyncApi#open_id_connect_config}
  */
  readonly openIdConnectConfig?: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig;
}

export function appsyncApiEventConfigAuthProvidersToTerraform(struct?: AppsyncApiEventConfigAuthProviders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    cognito_config: appsyncApiEventConfigAuthProvidersCognitoConfigToTerraform(struct!.cognitoConfig),
    lambda_authorizer_config: appsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigToTerraform(struct!.lambdaAuthorizerConfig),
    open_id_connect_config: appsyncApiEventConfigAuthProvidersOpenIdConnectConfigToTerraform(struct!.openIdConnectConfig),
  }
}


export function appsyncApiEventConfigAuthProvidersToHclTerraform(struct?: AppsyncApiEventConfigAuthProviders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognito_config: {
      value: appsyncApiEventConfigAuthProvidersCognitoConfigToHclTerraform(struct!.cognitoConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncApiEventConfigAuthProvidersCognitoConfig",
    },
    lambda_authorizer_config: {
      value: appsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigToHclTerraform(struct!.lambdaAuthorizerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig",
    },
    open_id_connect_config: {
      value: appsyncApiEventConfigAuthProvidersOpenIdConnectConfigToHclTerraform(struct!.openIdConnectConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigAuthProvidersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppsyncApiEventConfigAuthProviders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._cognitoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoConfig = this._cognitoConfig?.internalValue;
    }
    if (this._lambdaAuthorizerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaAuthorizerConfig = this._lambdaAuthorizerConfig?.internalValue;
    }
    if (this._openIdConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectConfig = this._openIdConnectConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigAuthProviders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._cognitoConfig.internalValue = undefined;
      this._lambdaAuthorizerConfig.internalValue = undefined;
      this._openIdConnectConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._cognitoConfig.internalValue = value.cognitoConfig;
      this._lambdaAuthorizerConfig.internalValue = value.lambdaAuthorizerConfig;
      this._openIdConnectConfig.internalValue = value.openIdConnectConfig;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // cognito_config - computed: true, optional: true, required: false
  private _cognitoConfig = new AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference(this, "cognito_config");
  public get cognitoConfig() {
    return this._cognitoConfig;
  }
  public putCognitoConfig(value: AppsyncApiEventConfigAuthProvidersCognitoConfig) {
    this._cognitoConfig.internalValue = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig.internalValue;
  }

  // lambda_authorizer_config - computed: true, optional: true, required: false
  private _lambdaAuthorizerConfig = new AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }
  public putLambdaAuthorizerConfig(value: AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig) {
    this._lambdaAuthorizerConfig.internalValue = value;
  }
  public resetLambdaAuthorizerConfig() {
    this._lambdaAuthorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaAuthorizerConfigInput() {
    return this._lambdaAuthorizerConfig.internalValue;
  }

  // open_id_connect_config - computed: true, optional: true, required: false
  private _openIdConnectConfig = new AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference(this, "open_id_connect_config");
  public get openIdConnectConfig() {
    return this._openIdConnectConfig;
  }
  public putOpenIdConnectConfig(value: AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig) {
    this._openIdConnectConfig.internalValue = value;
  }
  public resetOpenIdConnectConfig() {
    this._openIdConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectConfigInput() {
    return this._openIdConnectConfig.internalValue;
  }
}

export class AppsyncApiEventConfigAuthProvidersList extends cdktn.ComplexList {
  public internalValue? : AppsyncApiEventConfigAuthProviders[] | cdktn.IResolvable

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
  public get(index: number): AppsyncApiEventConfigAuthProvidersOutputReference {
    return new AppsyncApiEventConfigAuthProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigConnectionAuthModes {
  /**
  * Security configuration for your AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType?: string;
}

export function appsyncApiEventConfigConnectionAuthModesToTerraform(struct?: AppsyncApiEventConfigConnectionAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncApiEventConfigConnectionAuthModesToHclTerraform(struct?: AppsyncApiEventConfigConnectionAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigConnectionAuthModesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppsyncApiEventConfigConnectionAuthModes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigConnectionAuthModes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncApiEventConfigConnectionAuthModesList extends cdktn.ComplexList {
  public internalValue? : AppsyncApiEventConfigConnectionAuthModes[] | cdktn.IResolvable

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
  public get(index: number): AppsyncApiEventConfigConnectionAuthModesOutputReference {
    return new AppsyncApiEventConfigConnectionAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigDefaultPublishAuthModes {
  /**
  * Security configuration for your AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType?: string;
}

export function appsyncApiEventConfigDefaultPublishAuthModesToTerraform(struct?: AppsyncApiEventConfigDefaultPublishAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncApiEventConfigDefaultPublishAuthModesToHclTerraform(struct?: AppsyncApiEventConfigDefaultPublishAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigDefaultPublishAuthModesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppsyncApiEventConfigDefaultPublishAuthModes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigDefaultPublishAuthModes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncApiEventConfigDefaultPublishAuthModesList extends cdktn.ComplexList {
  public internalValue? : AppsyncApiEventConfigDefaultPublishAuthModes[] | cdktn.IResolvable

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
  public get(index: number): AppsyncApiEventConfigDefaultPublishAuthModesOutputReference {
    return new AppsyncApiEventConfigDefaultPublishAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigDefaultSubscribeAuthModes {
  /**
  * Security configuration for your AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType?: string;
}

export function appsyncApiEventConfigDefaultSubscribeAuthModesToTerraform(struct?: AppsyncApiEventConfigDefaultSubscribeAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncApiEventConfigDefaultSubscribeAuthModesToHclTerraform(struct?: AppsyncApiEventConfigDefaultSubscribeAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppsyncApiEventConfigDefaultSubscribeAuthModes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigDefaultSubscribeAuthModes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncApiEventConfigDefaultSubscribeAuthModesList extends cdktn.ComplexList {
  public internalValue? : AppsyncApiEventConfigDefaultSubscribeAuthModes[] | cdktn.IResolvable

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
  public get(index: number): AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference {
    return new AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}
  */
  readonly cloudwatchLogsRoleArn?: string;
  /**
  * Logging level for the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}
  */
  readonly logLevel?: string;
}

export function appsyncApiEventConfigLogConfigToTerraform(struct?: AppsyncApiEventConfigLogConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs_role_arn: cdktn.stringToTerraform(struct!.cloudwatchLogsRoleArn),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
  }
}


export function appsyncApiEventConfigLogConfigToHclTerraform(struct?: AppsyncApiEventConfigLogConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigLogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncApiEventConfigLogConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigLogConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogsRoleArn = undefined;
      this._logLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogsRoleArn = value.cloudwatchLogsRoleArn;
      this._logLevel = value.logLevel;
    }
  }

  // cloudwatch_logs_role_arn - computed: true, optional: true, required: false
  private _cloudwatchLogsRoleArn?: string; 
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }
  public set cloudwatchLogsRoleArn(value: string) {
    this._cloudwatchLogsRoleArn = value;
  }
  public resetCloudwatchLogsRoleArn() {
    this._cloudwatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsRoleArnInput() {
    return this._cloudwatchLogsRoleArn;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface AppsyncApiEventConfig {
  /**
  * A list of auth providers for the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#auth_providers AppsyncApi#auth_providers}
  */
  readonly authProviders?: AppsyncApiEventConfigAuthProviders[] | cdktn.IResolvable;
  /**
  * A list of auth modes for the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#connection_auth_modes AppsyncApi#connection_auth_modes}
  */
  readonly connectionAuthModes?: AppsyncApiEventConfigConnectionAuthModes[] | cdktn.IResolvable;
  /**
  * A list of auth modes for the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#default_publish_auth_modes AppsyncApi#default_publish_auth_modes}
  */
  readonly defaultPublishAuthModes?: AppsyncApiEventConfigDefaultPublishAuthModes[] | cdktn.IResolvable;
  /**
  * A list of auth modes for the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#default_subscribe_auth_modes AppsyncApi#default_subscribe_auth_modes}
  */
  readonly defaultSubscribeAuthModes?: AppsyncApiEventConfigDefaultSubscribeAuthModes[] | cdktn.IResolvable;
  /**
  * The log config for the AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}
  */
  readonly logConfig?: AppsyncApiEventConfigLogConfig;
}

export function appsyncApiEventConfigToTerraform(struct?: AppsyncApiEventConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_providers: cdktn.listMapper(appsyncApiEventConfigAuthProvidersToTerraform, false)(struct!.authProviders),
    connection_auth_modes: cdktn.listMapper(appsyncApiEventConfigConnectionAuthModesToTerraform, false)(struct!.connectionAuthModes),
    default_publish_auth_modes: cdktn.listMapper(appsyncApiEventConfigDefaultPublishAuthModesToTerraform, false)(struct!.defaultPublishAuthModes),
    default_subscribe_auth_modes: cdktn.listMapper(appsyncApiEventConfigDefaultSubscribeAuthModesToTerraform, false)(struct!.defaultSubscribeAuthModes),
    log_config: appsyncApiEventConfigLogConfigToTerraform(struct!.logConfig),
  }
}


export function appsyncApiEventConfigToHclTerraform(struct?: AppsyncApiEventConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_providers: {
      value: cdktn.listMapperHcl(appsyncApiEventConfigAuthProvidersToHclTerraform, false)(struct!.authProviders),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigAuthProvidersList",
    },
    connection_auth_modes: {
      value: cdktn.listMapperHcl(appsyncApiEventConfigConnectionAuthModesToHclTerraform, false)(struct!.connectionAuthModes),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigConnectionAuthModesList",
    },
    default_publish_auth_modes: {
      value: cdktn.listMapperHcl(appsyncApiEventConfigDefaultPublishAuthModesToHclTerraform, false)(struct!.defaultPublishAuthModes),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigDefaultPublishAuthModesList",
    },
    default_subscribe_auth_modes: {
      value: cdktn.listMapperHcl(appsyncApiEventConfigDefaultSubscribeAuthModesToHclTerraform, false)(struct!.defaultSubscribeAuthModes),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigDefaultSubscribeAuthModesList",
    },
    log_config: {
      value: appsyncApiEventConfigLogConfigToHclTerraform(struct!.logConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncApiEventConfigLogConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncApiEventConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProviders = this._authProviders?.internalValue;
    }
    if (this._connectionAuthModes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAuthModes = this._connectionAuthModes?.internalValue;
    }
    if (this._defaultPublishAuthModes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPublishAuthModes = this._defaultPublishAuthModes?.internalValue;
    }
    if (this._defaultSubscribeAuthModes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubscribeAuthModes = this._defaultSubscribeAuthModes?.internalValue;
    }
    if (this._logConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfig = this._logConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProviders.internalValue = undefined;
      this._connectionAuthModes.internalValue = undefined;
      this._defaultPublishAuthModes.internalValue = undefined;
      this._defaultSubscribeAuthModes.internalValue = undefined;
      this._logConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProviders.internalValue = value.authProviders;
      this._connectionAuthModes.internalValue = value.connectionAuthModes;
      this._defaultPublishAuthModes.internalValue = value.defaultPublishAuthModes;
      this._defaultSubscribeAuthModes.internalValue = value.defaultSubscribeAuthModes;
      this._logConfig.internalValue = value.logConfig;
    }
  }

  // auth_providers - computed: true, optional: true, required: false
  private _authProviders = new AppsyncApiEventConfigAuthProvidersList(this, "auth_providers", false);
  public get authProviders() {
    return this._authProviders;
  }
  public putAuthProviders(value: AppsyncApiEventConfigAuthProviders[] | cdktn.IResolvable) {
    this._authProviders.internalValue = value;
  }
  public resetAuthProviders() {
    this._authProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProvidersInput() {
    return this._authProviders.internalValue;
  }

  // connection_auth_modes - computed: true, optional: true, required: false
  private _connectionAuthModes = new AppsyncApiEventConfigConnectionAuthModesList(this, "connection_auth_modes", false);
  public get connectionAuthModes() {
    return this._connectionAuthModes;
  }
  public putConnectionAuthModes(value: AppsyncApiEventConfigConnectionAuthModes[] | cdktn.IResolvable) {
    this._connectionAuthModes.internalValue = value;
  }
  public resetConnectionAuthModes() {
    this._connectionAuthModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAuthModesInput() {
    return this._connectionAuthModes.internalValue;
  }

  // default_publish_auth_modes - computed: true, optional: true, required: false
  private _defaultPublishAuthModes = new AppsyncApiEventConfigDefaultPublishAuthModesList(this, "default_publish_auth_modes", false);
  public get defaultPublishAuthModes() {
    return this._defaultPublishAuthModes;
  }
  public putDefaultPublishAuthModes(value: AppsyncApiEventConfigDefaultPublishAuthModes[] | cdktn.IResolvable) {
    this._defaultPublishAuthModes.internalValue = value;
  }
  public resetDefaultPublishAuthModes() {
    this._defaultPublishAuthModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPublishAuthModesInput() {
    return this._defaultPublishAuthModes.internalValue;
  }

  // default_subscribe_auth_modes - computed: true, optional: true, required: false
  private _defaultSubscribeAuthModes = new AppsyncApiEventConfigDefaultSubscribeAuthModesList(this, "default_subscribe_auth_modes", false);
  public get defaultSubscribeAuthModes() {
    return this._defaultSubscribeAuthModes;
  }
  public putDefaultSubscribeAuthModes(value: AppsyncApiEventConfigDefaultSubscribeAuthModes[] | cdktn.IResolvable) {
    this._defaultSubscribeAuthModes.internalValue = value;
  }
  public resetDefaultSubscribeAuthModes() {
    this._defaultSubscribeAuthModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubscribeAuthModesInput() {
    return this._defaultSubscribeAuthModes.internalValue;
  }

  // log_config - computed: true, optional: true, required: false
  private _logConfig = new AppsyncApiEventConfigLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: AppsyncApiEventConfigLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }
}
export interface AppsyncApiTags {
  /**
  * A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#key AppsyncApi#key}
  */
  readonly key?: string;
  /**
  * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#value AppsyncApi#value}
  */
  readonly value?: string;
}

export function appsyncApiTagsToTerraform(struct?: AppsyncApiTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function appsyncApiTagsToHclTerraform(struct?: AppsyncApiTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppsyncApiTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppsyncApiTagsList extends cdktn.ComplexList {
  public internalValue? : AppsyncApiTags[] | cdktn.IResolvable

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
  public get(index: number): AppsyncApiTagsOutputReference {
    return new AppsyncApiTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api awscc_appsync_api}
*/
export class AppsyncApi extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncApi to import
  * @param importFromId The id of the existing AppsyncApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_api awscc_appsync_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncApiConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncApiConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appsync_api',
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
    this._eventConfig.internalValue = config.eventConfig;
    this._name = config.name;
    this._ownerContact = config.ownerContact;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_arn - computed: true, optional: false, required: false
  public get apiArn() {
    return this.getStringAttribute('api_arn');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new AppsyncApiDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // event_config - computed: true, optional: true, required: false
  private _eventConfig = new AppsyncApiEventConfigOutputReference(this, "event_config");
  public get eventConfig() {
    return this._eventConfig;
  }
  public putEventConfig(value: AppsyncApiEventConfig) {
    this._eventConfig.internalValue = value;
  }
  public resetEventConfig() {
    this._eventConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConfigInput() {
    return this._eventConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_contact - computed: true, optional: true, required: false
  private _ownerContact?: string; 
  public get ownerContact() {
    return this.getStringAttribute('owner_contact');
  }
  public set ownerContact(value: string) {
    this._ownerContact = value;
  }
  public resetOwnerContact() {
    this._ownerContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerContactInput() {
    return this._ownerContact;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppsyncApiTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppsyncApiTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_config: appsyncApiEventConfigToTerraform(this._eventConfig.internalValue),
      name: cdktn.stringToTerraform(this._name),
      owner_contact: cdktn.stringToTerraform(this._ownerContact),
      tags: cdktn.listMapper(appsyncApiTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_config: {
        value: appsyncApiEventConfigToHclTerraform(this._eventConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsyncApiEventConfig",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_contact: {
        value: cdktn.stringToHclTerraform(this._ownerContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(appsyncApiTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppsyncApiTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
