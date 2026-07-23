// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Elasticloadbalancingv2ListenerRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The actions.
  *  The rule must include exactly one of the following types of actions: ``forward``, ``fixed-response``, or ``redirect``, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#actions Elasticloadbalancingv2ListenerRule#actions}
  */
  readonly actions: Elasticloadbalancingv2ListenerRuleActions[] | cdktn.IResolvable;
  /**
  * The conditions.
  *  The rule can optionally include up to one of each of the following conditions: ``http-request-method``, ``host-header``, ``path-pattern``, and ``source-ip``. A rule can also optionally include one or more of each of the following conditions: ``http-header`` and ``query-string``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#conditions Elasticloadbalancingv2ListenerRule#conditions}
  */
  readonly conditions: Elasticloadbalancingv2ListenerRuleConditions[] | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#listener_arn Elasticloadbalancingv2ListenerRule#listener_arn}
  */
  readonly listenerArn?: string;
  /**
  * The rule priority. A listener can't have multiple rules with the same priority.
  *  If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#priority Elasticloadbalancingv2ListenerRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}
  */
  readonly tags?: Elasticloadbalancingv2ListenerRuleTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}
  */
  readonly transforms?: Elasticloadbalancingv2ListenerRuleTransforms[] | cdktn.IResolvable;
}
export interface Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig {
  /**
  * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * The behavior if the user is not authenticated. The following are possible values:
  *   +  deny```` - Return an HTTP 401 Unauthorized error.
  *   +  allow```` - Allow the request to be forwarded to the target.
  *   +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * The set of user claims to be requested from the IdP. The default is ``openid``.
  *  To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_arn Elasticloadbalancingv2ListenerRule#user_pool_arn}
  */
  readonly userPoolArn?: string;
  /**
  * The ID of the Amazon Cognito user pool client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_client_id Elasticloadbalancingv2ListenerRule#user_pool_client_id}
  */
  readonly userPoolClientId?: string;
  /**
  * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_domain Elasticloadbalancingv2ListenerRule#user_pool_domain}
  */
  readonly userPoolDomain?: string;
}

export function elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktn.stringToTerraform(struct!.scope),
    session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    user_pool_arn: cdktn.stringToTerraform(struct!.userPoolArn),
    user_pool_client_id: cdktn.stringToTerraform(struct!.userPoolClientId),
    user_pool_domain: cdktn.stringToTerraform(struct!.userPoolDomain),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_unauthenticated_request: {
      value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_pool_arn: {
      value: cdktn.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_client_id: {
      value: cdktn.stringToHclTerraform(struct!.userPoolClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_domain: {
      value: cdktn.stringToHclTerraform(struct!.userPoolDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolClientId = this._userPoolClientId;
    }
    if (this._userPoolDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationRequestExtraParams = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._userPoolArn = undefined;
      this._userPoolClientId = undefined;
      this._userPoolDomain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._userPoolArn = value.userPoolArn;
      this._userPoolClientId = value.userPoolClientId;
      this._userPoolDomain = value.userPoolDomain;
    }
  }

  // authentication_request_extra_params - computed: true, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user_pool_arn - computed: true, optional: true, required: false
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  public resetUserPoolArn() {
    this._userPoolArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // user_pool_client_id - computed: true, optional: true, required: false
  private _userPoolClientId?: string; 
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }
  public set userPoolClientId(value: string) {
    this._userPoolClientId = value;
  }
  public resetUserPoolClientId() {
    this._userPoolClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolClientIdInput() {
    return this._userPoolClientId;
  }

  // user_pool_domain - computed: true, optional: true, required: false
  private _userPoolDomain?: string; 
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
  public set userPoolDomain(value: string) {
    this._userPoolDomain = value;
  }
  public resetUserPoolDomain() {
    this._userPoolDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDomainInput() {
    return this._userPoolDomain;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig {
  /**
  * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#authorization_endpoint Elasticloadbalancingv2ListenerRule#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * The OAuth 2.0 client identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#client_id Elasticloadbalancingv2ListenerRule#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#client_secret Elasticloadbalancingv2ListenerRule#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}
  */
  readonly issuer?: string;
  /**
  * The behavior if the user is not authenticated. The following are possible values:
  *   +  deny```` - Return an HTTP 401 Unauthorized error.
  *   +  allow```` - Allow the request to be forwarded to the target.
  *   +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * The set of user claims to be requested from the IdP. The default is ``openid``.
  *  To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#token_endpoint Elasticloadbalancingv2ListenerRule#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#use_existing_client_secret Elasticloadbalancingv2ListenerRule#use_existing_client_secret}
  */
  readonly useExistingClientSecret?: boolean | cdktn.IResolvable;
  /**
  * The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#user_info_endpoint Elasticloadbalancingv2ListenerRule#user_info_endpoint}
  */
  readonly userInfoEndpoint?: string;
}

export function elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_request_extra_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.authenticationRequestExtraParams),
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    on_unauthenticated_request: cdktn.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktn.stringToTerraform(struct!.scope),
    session_cookie_name: cdktn.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktn.numberToTerraform(struct!.sessionTimeout),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
    use_existing_client_secret: cdktn.booleanToTerraform(struct!.useExistingClientSecret),
    user_info_endpoint: cdktn.stringToTerraform(struct!.userInfoEndpoint),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_unauthenticated_request: {
      value: cdktn.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_existing_client_secret: {
      value: cdktn.booleanToHclTerraform(struct!.useExistingClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_info_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._useExistingClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExistingClientSecret = this._useExistingClientSecret;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationRequestExtraParams = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._tokenEndpoint = undefined;
      this._useExistingClientSecret = undefined;
      this._userInfoEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._tokenEndpoint = value.tokenEndpoint;
      this._useExistingClientSecret = value.useExistingClientSecret;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authentication_request_extra_params - computed: true, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: true, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // token_endpoint - computed: true, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // use_existing_client_secret - computed: true, optional: true, required: false
  private _useExistingClientSecret?: boolean | cdktn.IResolvable; 
  public get useExistingClientSecret() {
    return this.getBooleanAttribute('use_existing_client_secret');
  }
  public set useExistingClientSecret(value: boolean | cdktn.IResolvable) {
    this._useExistingClientSecret = value;
  }
  public resetUseExistingClientSecret() {
    this._useExistingClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExistingClientSecretInput() {
    return this._useExistingClientSecret;
  }

  // user_info_endpoint - computed: true, optional: true, required: false
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  public resetUserInfoEndpoint() {
    this._userInfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig {
  /**
  * The content type.
  *  Valid Values: text/plain | text/css | text/html | application/javascript | application/json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#content_type Elasticloadbalancingv2ListenerRule#content_type}
  */
  readonly contentType?: string;
  /**
  * The message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#message_body Elasticloadbalancingv2ListenerRule#message_body}
  */
  readonly messageBody?: string;
  /**
  * The HTTP response code (2XX, 4XX, or 5XX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}
  */
  readonly statusCode?: string;
}

export function elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_type: cdktn.stringToTerraform(struct!.contentType),
    message_body: cdktn.stringToTerraform(struct!.messageBody),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktn.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // message_body - computed: true, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig {
  /**
  * [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#duration_seconds Elasticloadbalancingv2ListenerRule#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Indicates whether target group stickiness is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#enabled Elasticloadbalancingv2ListenerRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationSeconds = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationSeconds = value.durationSeconds;
      this._enabled = value.enabled;
    }
  }

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups {
  /**
  * The Amazon Resource Name (ARN) of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * The weight. The range is 0 to 999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#weight Elasticloadbalancingv2ListenerRule#weight}
  */
  readonly weight?: number;
}

export function elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetGroupArn = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetGroupArn = value.targetGroupArn;
      this._weight = value.weight;
    }
  }

  // target_group_arn - computed: true, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference {
    return new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsForwardConfig {
  /**
  * Information about the target group stickiness for a rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_stickiness_config Elasticloadbalancingv2ListenerRule#target_group_stickiness_config}
  */
  readonly targetGroupStickinessConfig?: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig;
  /**
  * Information about how traffic will be distributed between multiple target groups in a forward rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#target_groups Elasticloadbalancingv2ListenerRule#target_groups}
  */
  readonly targetGroups?: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] | cdktn.IResolvable;
}

export function elasticloadbalancingv2ListenerRuleActionsForwardConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsForwardConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_group_stickiness_config: elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigToTerraform(struct!.targetGroupStickinessConfig),
    target_groups: cdktn.listMapper(elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsToTerraform, false)(struct!.targetGroups),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsForwardConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsForwardConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_group_stickiness_config: {
      value: elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigToHclTerraform(struct!.targetGroupStickinessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig",
    },
    target_groups: {
      value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsToHclTerraform, false)(struct!.targetGroups),
      isBlock: true,
      type: "set",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsForwardConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetGroupStickinessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupStickinessConfig = this._targetGroupStickinessConfig?.internalValue;
    }
    if (this._targetGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroups = this._targetGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetGroupStickinessConfig.internalValue = undefined;
      this._targetGroups.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetGroupStickinessConfig.internalValue = value.targetGroupStickinessConfig;
      this._targetGroups.internalValue = value.targetGroups;
    }
  }

  // target_group_stickiness_config - computed: true, optional: true, required: false
  private _targetGroupStickinessConfig = new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference(this, "target_group_stickiness_config");
  public get targetGroupStickinessConfig() {
    return this._targetGroupStickinessConfig;
  }
  public putTargetGroupStickinessConfig(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig) {
    this._targetGroupStickinessConfig.internalValue = value;
  }
  public resetTargetGroupStickinessConfig() {
    this._targetGroupStickinessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupStickinessConfigInput() {
    return this._targetGroupStickinessConfig.internalValue;
  }

  // target_groups - computed: true, optional: true, required: false
  private _targetGroups = new Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList(this, "target_groups", true);
  public get targetGroups() {
    return this._targetGroups;
  }
  public putTargetGroups(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[] | cdktn.IResolvable) {
    this._targetGroups.internalValue = value;
  }
  public resetTargetGroups() {
    this._targetGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupsInput() {
    return this._targetGroups.internalValue;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims {
  /**
  * The format of the claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#format Elasticloadbalancingv2ListenerRule#format}
  */
  readonly format?: string;
  /**
  * The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#name Elasticloadbalancingv2ListenerRule#name}
  */
  readonly name?: string;
  /**
  * The claim value. The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is ``space-separated-values``, the values can't include spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    format: cdktn.stringToTerraform(struct!.format),
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference {
    return new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}
  */
  readonly additionalClaims?: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}
  */
  readonly jwksEndpoint?: string;
}

export function elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_claims: cdktn.listMapper(elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsToTerraform, false)(struct!.additionalClaims),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    jwks_endpoint: cdktn.stringToTerraform(struct!.jwksEndpoint),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_claims: {
      value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsToHclTerraform, false)(struct!.additionalClaims),
      isBlock: true,
      type: "list",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList",
    },
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.jwksEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalClaims = this._additionalClaims?.internalValue;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksEndpoint = this._jwksEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalClaims.internalValue = undefined;
      this._issuer = undefined;
      this._jwksEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalClaims.internalValue = value.additionalClaims;
      this._issuer = value.issuer;
      this._jwksEndpoint = value.jwksEndpoint;
    }
  }

  // additional_claims - computed: true, optional: true, required: false
  private _additionalClaims = new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList(this, "additional_claims", false);
  public get additionalClaims() {
    return this._additionalClaims;
  }
  public putAdditionalClaims(value: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[] | cdktn.IResolvable) {
    this._additionalClaims.internalValue = value;
  }
  public resetAdditionalClaims() {
    this._additionalClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClaimsInput() {
    return this._additionalClaims.internalValue;
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

  // jwks_endpoint - computed: true, optional: true, required: false
  private _jwksEndpoint?: string; 
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }
  public set jwksEndpoint(value: string) {
    this._jwksEndpoint = value;
  }
  public resetJwksEndpoint() {
    this._jwksEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksEndpointInput() {
    return this._jwksEndpoint;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActionsRedirectConfig {
  /**
  * The hostname. This component is not percent-encoded. The hostname can contain #{host}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#host Elasticloadbalancingv2ListenerRule#host}
  */
  readonly host?: string;
  /**
  * The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#path Elasticloadbalancingv2ListenerRule#path}
  */
  readonly path?: string;
  /**
  * The port. You can specify a value from 1 to 65535 or #{port}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#port Elasticloadbalancingv2ListenerRule#port}
  */
  readonly port?: string;
  /**
  * The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#protocol Elasticloadbalancingv2ListenerRule#protocol}
  */
  readonly protocol?: string;
  /**
  * The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#query Elasticloadbalancingv2ListenerRule#query}
  */
  readonly query?: string;
  /**
  * The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}
  */
  readonly statusCode?: string;
}

export function elasticloadbalancingv2ListenerRuleActionsRedirectConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.stringToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    query: cdktn.stringToTerraform(struct!.query),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsRedirectConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActionsRedirectConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface Elasticloadbalancingv2ListenerRuleActions {
  /**
  * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_cognito_config Elasticloadbalancingv2ListenerRule#authenticate_cognito_config}
  */
  readonly authenticateCognitoConfig?: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig;
  /**
  * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when ``Type`` is ``authenticate-oidc``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_oidc_config Elasticloadbalancingv2ListenerRule#authenticate_oidc_config}
  */
  readonly authenticateOidcConfig?: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig;
  /**
  * [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when ``Type`` is ``fixed-response``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#fixed_response_config Elasticloadbalancingv2ListenerRule#fixed_response_config}
  */
  readonly fixedResponseConfig?: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig;
  /**
  * Information for creating an action that distributes requests among multiple target groups. Specify only when ``Type`` is ``forward``.
  *  If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#forward_config Elasticloadbalancingv2ListenerRule#forward_config}
  */
  readonly forwardConfig?: Elasticloadbalancingv2ListenerRuleActionsForwardConfig;
  /**
  * [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#jwt_validation_config Elasticloadbalancingv2ListenerRule#jwt_validation_config}
  */
  readonly jwtValidationConfig?: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig;
  /**
  * The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#order Elasticloadbalancingv2ListenerRule#order}
  */
  readonly order?: number;
  /**
  * [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#redirect_config Elasticloadbalancingv2ListenerRule#redirect_config}
  */
  readonly redirectConfig?: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig;
  /**
  * The Amazon Resource Name (ARN) of the target group. Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to multiple target groups, you must use ``ForwardConfig`` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * The type of action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}
  */
  readonly type: string;
}

export function elasticloadbalancingv2ListenerRuleActionsToTerraform(struct?: Elasticloadbalancingv2ListenerRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authenticate_cognito_config: elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigToTerraform(struct!.authenticateCognitoConfig),
    authenticate_oidc_config: elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigToTerraform(struct!.authenticateOidcConfig),
    fixed_response_config: elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigToTerraform(struct!.fixedResponseConfig),
    forward_config: elasticloadbalancingv2ListenerRuleActionsForwardConfigToTerraform(struct!.forwardConfig),
    jwt_validation_config: elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigToTerraform(struct!.jwtValidationConfig),
    order: cdktn.numberToTerraform(struct!.order),
    redirect_config: elasticloadbalancingv2ListenerRuleActionsRedirectConfigToTerraform(struct!.redirectConfig),
    target_group_arn: cdktn.stringToTerraform(struct!.targetGroupArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function elasticloadbalancingv2ListenerRuleActionsToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authenticate_cognito_config: {
      value: elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigToHclTerraform(struct!.authenticateCognitoConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig",
    },
    authenticate_oidc_config: {
      value: elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigToHclTerraform(struct!.authenticateOidcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig",
    },
    fixed_response_config: {
      value: elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigToHclTerraform(struct!.fixedResponseConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig",
    },
    forward_config: {
      value: elasticloadbalancingv2ListenerRuleActionsForwardConfigToHclTerraform(struct!.forwardConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsForwardConfig",
    },
    jwt_validation_config: {
      value: elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigToHclTerraform(struct!.jwtValidationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig",
    },
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_config: {
      value: elasticloadbalancingv2ListenerRuleActionsRedirectConfigToHclTerraform(struct!.redirectConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleActionsRedirectConfig",
    },
    target_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateCognitoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognitoConfig = this._authenticateCognitoConfig?.internalValue;
    }
    if (this._authenticateOidcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidcConfig = this._authenticateOidcConfig?.internalValue;
    }
    if (this._fixedResponseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponseConfig = this._fixedResponseConfig?.internalValue;
    }
    if (this._forwardConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardConfig = this._forwardConfig?.internalValue;
    }
    if (this._jwtValidationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidationConfig = this._jwtValidationConfig?.internalValue;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._redirectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectConfig = this._redirectConfig?.internalValue;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateCognitoConfig.internalValue = undefined;
      this._authenticateOidcConfig.internalValue = undefined;
      this._fixedResponseConfig.internalValue = undefined;
      this._forwardConfig.internalValue = undefined;
      this._jwtValidationConfig.internalValue = undefined;
      this._order = undefined;
      this._redirectConfig.internalValue = undefined;
      this._targetGroupArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateCognitoConfig.internalValue = value.authenticateCognitoConfig;
      this._authenticateOidcConfig.internalValue = value.authenticateOidcConfig;
      this._fixedResponseConfig.internalValue = value.fixedResponseConfig;
      this._forwardConfig.internalValue = value.forwardConfig;
      this._jwtValidationConfig.internalValue = value.jwtValidationConfig;
      this._order = value.order;
      this._redirectConfig.internalValue = value.redirectConfig;
      this._targetGroupArn = value.targetGroupArn;
      this._type = value.type;
    }
  }

  // authenticate_cognito_config - computed: true, optional: true, required: false
  private _authenticateCognitoConfig = new Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference(this, "authenticate_cognito_config");
  public get authenticateCognitoConfig() {
    return this._authenticateCognitoConfig;
  }
  public putAuthenticateCognitoConfig(value: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig) {
    this._authenticateCognitoConfig.internalValue = value;
  }
  public resetAuthenticateCognitoConfig() {
    this._authenticateCognitoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoConfigInput() {
    return this._authenticateCognitoConfig.internalValue;
  }

  // authenticate_oidc_config - computed: true, optional: true, required: false
  private _authenticateOidcConfig = new Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference(this, "authenticate_oidc_config");
  public get authenticateOidcConfig() {
    return this._authenticateOidcConfig;
  }
  public putAuthenticateOidcConfig(value: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig) {
    this._authenticateOidcConfig.internalValue = value;
  }
  public resetAuthenticateOidcConfig() {
    this._authenticateOidcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcConfigInput() {
    return this._authenticateOidcConfig.internalValue;
  }

  // fixed_response_config - computed: true, optional: true, required: false
  private _fixedResponseConfig = new Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference(this, "fixed_response_config");
  public get fixedResponseConfig() {
    return this._fixedResponseConfig;
  }
  public putFixedResponseConfig(value: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig) {
    this._fixedResponseConfig.internalValue = value;
  }
  public resetFixedResponseConfig() {
    this._fixedResponseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseConfigInput() {
    return this._fixedResponseConfig.internalValue;
  }

  // forward_config - computed: true, optional: true, required: false
  private _forwardConfig = new Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference(this, "forward_config");
  public get forwardConfig() {
    return this._forwardConfig;
  }
  public putForwardConfig(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfig) {
    this._forwardConfig.internalValue = value;
  }
  public resetForwardConfig() {
    this._forwardConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardConfigInput() {
    return this._forwardConfig.internalValue;
  }

  // jwt_validation_config - computed: true, optional: true, required: false
  private _jwtValidationConfig = new Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference(this, "jwt_validation_config");
  public get jwtValidationConfig() {
    return this._jwtValidationConfig;
  }
  public putJwtValidationConfig(value: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig) {
    this._jwtValidationConfig.internalValue = value;
  }
  public resetJwtValidationConfig() {
    this._jwtValidationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationConfigInput() {
    return this._jwtValidationConfig.internalValue;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // redirect_config - computed: true, optional: true, required: false
  private _redirectConfig = new Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference(this, "redirect_config");
  public get redirectConfig() {
    return this._redirectConfig;
  }
  public putRedirectConfig(value: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig) {
    this._redirectConfig.internalValue = value;
  }
  public resetRedirectConfig() {
    this._redirectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConfigInput() {
    return this._redirectConfig.internalValue;
  }

  // target_group_arn - computed: true, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Elasticloadbalancingv2ListenerRuleActionsList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleActions[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleActionsOutputReference {
    return new Elasticloadbalancingv2ListenerRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * The host names. The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
  *  If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexValues = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexValues = value.regexValues;
      this._values = value.values;
    }
  }

  // regex_values - computed: true, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig {
  /**
  * The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_name Elasticloadbalancingv2ListenerRule#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * The strings to compare against the value of the HTTP header. The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
  *  If the same header appears multiple times in the request, we search them in order until a match is found.
  *  If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_header_name: cdktn.stringToTerraform(struct!.httpHeaderName),
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_header_name: {
      value: cdktn.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaderName = undefined;
      this._regexValues = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaderName = value.httpHeaderName;
      this._regexValues = value.regexValues;
      this._values = value.values;
    }
  }

  // http_header_name - computed: true, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // regex_values - computed: true, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig {
  /**
  * The name of the request method. The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
  *  If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * The path patterns to compare against the request URL. The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
  *  If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexValues = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexValues = value.regexValues;
      this._values = value.values;
    }
  }

  // regex_values - computed: true, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues {
  /**
  * The key. You can omit the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}
  */
  readonly key?: string;
  /**
  * The value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}
  */
  readonly value?: string;
}

export function elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues | cdktn.IResolvable): any {
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

export class Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues | cdktn.IResolvable | undefined) {
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

export class Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference {
    return new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig {
  /**
  * The key/value pairs or values to find in the query string. The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in ``Values`` using a '\' character.
  *  If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] | cdktn.IResolvable;
}

export function elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    values: cdktn.listMapper(elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    values: {
      value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesToHclTerraform, false)(struct!.values),
      isBlock: true,
      type: "set",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: true, optional: true, required: false
  private _values = new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[] | cdktn.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
  *  If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressType = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressType = value.ipAddressType;
      this._values = value.values;
    }
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface Elasticloadbalancingv2ListenerRuleConditions {
  /**
  * The field in the HTTP request. The following are the possible values:
  *   +   ``http-header`` 
  *   +   ``http-request-method`` 
  *   +   ``host-header`` 
  *   +   ``path-pattern`` 
  *   +   ``query-string`` 
  *   +   ``source-ip``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#field Elasticloadbalancingv2ListenerRule#field}
  */
  readonly field?: string;
  /**
  * Information for a host header condition. Specify only when ``Field`` is ``host-header``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_config Elasticloadbalancingv2ListenerRule#host_header_config}
  */
  readonly hostHeaderConfig?: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig;
  /**
  * Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_config Elasticloadbalancingv2ListenerRule#http_header_config}
  */
  readonly httpHeaderConfig?: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig;
  /**
  * Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#http_request_method_config Elasticloadbalancingv2ListenerRule#http_request_method_config}
  */
  readonly httpRequestMethodConfig?: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig;
  /**
  * Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#path_pattern_config Elasticloadbalancingv2ListenerRule#path_pattern_config}
  */
  readonly pathPatternConfig?: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig;
  /**
  * Information for a query string condition. Specify only when ``Field`` is ``query-string``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#query_string_config Elasticloadbalancingv2ListenerRule#query_string_config}
  */
  readonly queryStringConfig?: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig;
  /**
  * The regular expressions to match against the condition field. The maximum length of each string is 128 characters. Specify only when ``Field`` is ``http-header``, ``host-header``, or ``path-pattern``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#source_ip_config Elasticloadbalancingv2ListenerRule#source_ip_config}
  */
  readonly sourceIpConfig?: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig;
  /**
  * The condition value. Specify only when ``Field`` is ``host-header`` or ``path-pattern``. Alternatively, to specify multiple host names or multiple path patterns, use ``HostHeaderConfig`` or ``PathPatternConfig``.
  *  If ``Field`` is ``host-header`` and you're not using ``HostHeaderConfig``, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
  *   +  A-Z, a-z, 0-9
  *   +  - .
  *   +  * (matches 0 or more characters)
  *   +  ? (matches exactly 1 character)
  *   
  *  If ``Field`` is ``path-pattern`` and you're not using ``PathPatternConfig``, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
  *   +  A-Z, a-z, 0-9
  *   +  _ - . $ / ~ " ' @ : +
  *   +  & (using &amp;)
  *   +  * (matches 0 or more characters)
  *   +  ? (matches exactly 1 character)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}
  */
  readonly values?: string[];
}

export function elasticloadbalancingv2ListenerRuleConditionsToTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    host_header_config: elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigToTerraform(struct!.hostHeaderConfig),
    http_header_config: elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigToTerraform(struct!.httpHeaderConfig),
    http_request_method_config: elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigToTerraform(struct!.httpRequestMethodConfig),
    path_pattern_config: elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigToTerraform(struct!.pathPatternConfig),
    query_string_config: elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigToTerraform(struct!.queryStringConfig),
    regex_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regexValues),
    source_ip_config: elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigToTerraform(struct!.sourceIpConfig),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function elasticloadbalancingv2ListenerRuleConditionsToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_header_config: {
      value: elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigToHclTerraform(struct!.hostHeaderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig",
    },
    http_header_config: {
      value: elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigToHclTerraform(struct!.httpHeaderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig",
    },
    http_request_method_config: {
      value: elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigToHclTerraform(struct!.httpRequestMethodConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig",
    },
    path_pattern_config: {
      value: elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigToHclTerraform(struct!.pathPatternConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig",
    },
    query_string_config: {
      value: elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigToHclTerraform(struct!.queryStringConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig",
    },
    regex_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_ip_config: {
      value: elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigToHclTerraform(struct!.sourceIpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._hostHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderConfig = this._hostHeaderConfig?.internalValue;
    }
    if (this._httpHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderConfig = this._httpHeaderConfig?.internalValue;
    }
    if (this._httpRequestMethodConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethodConfig = this._httpRequestMethodConfig?.internalValue;
    }
    if (this._pathPatternConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPatternConfig = this._pathPatternConfig?.internalValue;
    }
    if (this._queryStringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringConfig = this._queryStringConfig?.internalValue;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._sourceIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpConfig = this._sourceIpConfig?.internalValue;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._hostHeaderConfig.internalValue = undefined;
      this._httpHeaderConfig.internalValue = undefined;
      this._httpRequestMethodConfig.internalValue = undefined;
      this._pathPatternConfig.internalValue = undefined;
      this._queryStringConfig.internalValue = undefined;
      this._regexValues = undefined;
      this._sourceIpConfig.internalValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._hostHeaderConfig.internalValue = value.hostHeaderConfig;
      this._httpHeaderConfig.internalValue = value.httpHeaderConfig;
      this._httpRequestMethodConfig.internalValue = value.httpRequestMethodConfig;
      this._pathPatternConfig.internalValue = value.pathPatternConfig;
      this._queryStringConfig.internalValue = value.queryStringConfig;
      this._regexValues = value.regexValues;
      this._sourceIpConfig.internalValue = value.sourceIpConfig;
      this._values = value.values;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // host_header_config - computed: true, optional: true, required: false
  private _hostHeaderConfig = new Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference(this, "host_header_config");
  public get hostHeaderConfig() {
    return this._hostHeaderConfig;
  }
  public putHostHeaderConfig(value: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig) {
    this._hostHeaderConfig.internalValue = value;
  }
  public resetHostHeaderConfig() {
    this._hostHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderConfigInput() {
    return this._hostHeaderConfig.internalValue;
  }

  // http_header_config - computed: true, optional: true, required: false
  private _httpHeaderConfig = new Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference(this, "http_header_config");
  public get httpHeaderConfig() {
    return this._httpHeaderConfig;
  }
  public putHttpHeaderConfig(value: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig) {
    this._httpHeaderConfig.internalValue = value;
  }
  public resetHttpHeaderConfig() {
    this._httpHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderConfigInput() {
    return this._httpHeaderConfig.internalValue;
  }

  // http_request_method_config - computed: true, optional: true, required: false
  private _httpRequestMethodConfig = new Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference(this, "http_request_method_config");
  public get httpRequestMethodConfig() {
    return this._httpRequestMethodConfig;
  }
  public putHttpRequestMethodConfig(value: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig) {
    this._httpRequestMethodConfig.internalValue = value;
  }
  public resetHttpRequestMethodConfig() {
    this._httpRequestMethodConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodConfigInput() {
    return this._httpRequestMethodConfig.internalValue;
  }

  // path_pattern_config - computed: true, optional: true, required: false
  private _pathPatternConfig = new Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference(this, "path_pattern_config");
  public get pathPatternConfig() {
    return this._pathPatternConfig;
  }
  public putPathPatternConfig(value: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig) {
    this._pathPatternConfig.internalValue = value;
  }
  public resetPathPatternConfig() {
    this._pathPatternConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternConfigInput() {
    return this._pathPatternConfig.internalValue;
  }

  // query_string_config - computed: true, optional: true, required: false
  private _queryStringConfig = new Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference(this, "query_string_config");
  public get queryStringConfig() {
    return this._queryStringConfig;
  }
  public putQueryStringConfig(value: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig) {
    this._queryStringConfig.internalValue = value;
  }
  public resetQueryStringConfig() {
    this._queryStringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringConfigInput() {
    return this._queryStringConfig.internalValue;
  }

  // regex_values - computed: true, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return cdktn.Fn.tolist(this.getListAttribute('regex_values'));
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // source_ip_config - computed: true, optional: true, required: false
  private _sourceIpConfig = new Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference(this, "source_ip_config");
  public get sourceIpConfig() {
    return this._sourceIpConfig;
  }
  public putSourceIpConfig(value: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig) {
    this._sourceIpConfig.internalValue = value;
  }
  public resetSourceIpConfig() {
    this._sourceIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpConfigInput() {
    return this._sourceIpConfig.internalValue;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class Elasticloadbalancingv2ListenerRuleConditionsList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleConditions[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleConditionsOutputReference {
    return new Elasticloadbalancingv2ListenerRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}
  */
  readonly value?: string;
}

export function elasticloadbalancingv2ListenerRuleTagsToTerraform(struct?: Elasticloadbalancingv2ListenerRuleTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function elasticloadbalancingv2ListenerRuleTagsToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleTags | cdktn.IResolvable): any {
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

export class Elasticloadbalancingv2ListenerRuleTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleTags | cdktn.IResolvable | undefined) {
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

export class Elasticloadbalancingv2ListenerRuleTagsList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleTags[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleTagsOutputReference {
    return new Elasticloadbalancingv2ListenerRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites {
  /**
  * The regular expression to match in the input string. The maximum length of the string is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}
  */
  readonly regex?: string;
  /**
  * The replacement string to use when rewriting the matched input. The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}
  */
  readonly replace?: string;
}

export function elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesToTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex: cdktn.stringToTerraform(struct!.regex),
    replace: cdktn.stringToTerraform(struct!.replace),
  }
}


export function elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._replace = value.replace;
    }
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replace - computed: true, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference {
    return new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}
  */
  readonly rewrites?: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] | cdktn.IResolvable;
}

export function elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrites: cdktn.listMapper(elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesToTerraform, false)(struct!.rewrites),
  }
}


export function elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrites: {
      value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesToHclTerraform, false)(struct!.rewrites),
      isBlock: true,
      type: "set",
      storageClassType: "Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrites = this._rewrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrites.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrites.internalValue = value.rewrites;
    }
  }

  // rewrites - computed: true, optional: true, required: false
  private _rewrites = new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList(this, "rewrites", true);
  public get rewrites() {
    return this._rewrites;
  }
  public putRewrites(value: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[] | cdktn.IResolvable) {
    this._rewrites.internalValue = value;
  }
  public resetRewrites() {
    this._rewrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritesInput() {
    return this._rewrites.internalValue;
  }
}
export interface Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites {
  /**
  * The regular expression to match in the input string. The maximum length of the string is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}
  */
  readonly regex?: string;
  /**
  * The replacement string to use when rewriting the matched input. The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}
  */
  readonly replace?: string;
}

export function elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesToTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex: cdktn.stringToTerraform(struct!.regex),
    replace: cdktn.stringToTerraform(struct!.replace),
  }
}


export function elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex: {
      value: cdktn.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktn.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._replace = value.replace;
    }
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replace - computed: true, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference {
    return new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}
  */
  readonly rewrites?: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] | cdktn.IResolvable;
}

export function elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigToTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rewrites: cdktn.listMapper(elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesToTerraform, false)(struct!.rewrites),
  }
}


export function elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rewrites: {
      value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesToHclTerraform, false)(struct!.rewrites),
      isBlock: true,
      type: "set",
      storageClassType: "Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrites = this._rewrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewrites.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewrites.internalValue = value.rewrites;
    }
  }

  // rewrites - computed: true, optional: true, required: false
  private _rewrites = new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList(this, "rewrites", true);
  public get rewrites() {
    return this._rewrites;
  }
  public putRewrites(value: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[] | cdktn.IResolvable) {
    this._rewrites.internalValue = value;
  }
  public resetRewrites() {
    this._rewrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritesInput() {
    return this._rewrites.internalValue;
  }
}
export interface Elasticloadbalancingv2ListenerRuleTransforms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}
  */
  readonly hostHeaderRewriteConfig?: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}
  */
  readonly urlRewriteConfig?: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig;
}

export function elasticloadbalancingv2ListenerRuleTransformsToTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransforms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host_header_rewrite_config: elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigToTerraform(struct!.hostHeaderRewriteConfig),
    type: cdktn.stringToTerraform(struct!.type),
    url_rewrite_config: elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigToTerraform(struct!.urlRewriteConfig),
  }
}


export function elasticloadbalancingv2ListenerRuleTransformsToHclTerraform(struct?: Elasticloadbalancingv2ListenerRuleTransforms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host_header_rewrite_config: {
      value: elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigToHclTerraform(struct!.hostHeaderRewriteConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_rewrite_config: {
      value: elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigToHclTerraform(struct!.urlRewriteConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Elasticloadbalancingv2ListenerRuleTransformsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Elasticloadbalancingv2ListenerRuleTransforms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeaderRewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeaderRewriteConfig = this._hostHeaderRewriteConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urlRewriteConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewriteConfig = this._urlRewriteConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Elasticloadbalancingv2ListenerRuleTransforms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeaderRewriteConfig.internalValue = undefined;
      this._type = undefined;
      this._urlRewriteConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeaderRewriteConfig.internalValue = value.hostHeaderRewriteConfig;
      this._type = value.type;
      this._urlRewriteConfig.internalValue = value.urlRewriteConfig;
    }
  }

  // host_header_rewrite_config - computed: true, optional: true, required: false
  private _hostHeaderRewriteConfig = new Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference(this, "host_header_rewrite_config");
  public get hostHeaderRewriteConfig() {
    return this._hostHeaderRewriteConfig;
  }
  public putHostHeaderRewriteConfig(value: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig) {
    this._hostHeaderRewriteConfig.internalValue = value;
  }
  public resetHostHeaderRewriteConfig() {
    this._hostHeaderRewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderRewriteConfigInput() {
    return this._hostHeaderRewriteConfig.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url_rewrite_config - computed: true, optional: true, required: false
  private _urlRewriteConfig = new Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference(this, "url_rewrite_config");
  public get urlRewriteConfig() {
    return this._urlRewriteConfig;
  }
  public putUrlRewriteConfig(value: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig) {
    this._urlRewriteConfig.internalValue = value;
  }
  public resetUrlRewriteConfig() {
    this._urlRewriteConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteConfigInput() {
    return this._urlRewriteConfig.internalValue;
  }
}

export class Elasticloadbalancingv2ListenerRuleTransformsList extends cdktn.ComplexList {
  public internalValue? : Elasticloadbalancingv2ListenerRuleTransforms[] | cdktn.IResolvable

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
  public get(index: number): Elasticloadbalancingv2ListenerRuleTransformsOutputReference {
    return new Elasticloadbalancingv2ListenerRuleTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule}
*/
export class Elasticloadbalancingv2ListenerRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancingv2_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Elasticloadbalancingv2ListenerRule to import
  * @param importFromId The id of the existing Elasticloadbalancingv2ListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Elasticloadbalancingv2ListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Elasticloadbalancingv2ListenerRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Elasticloadbalancingv2ListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancingv2_listener_rule',
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
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._listenerArn = config.listenerArn;
    this._priority = config.priority;
    this._tags.internalValue = config.tags;
    this._transforms.internalValue = config.transforms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions = new Elasticloadbalancingv2ListenerRuleActionsList(this, "actions", true);
  public get actions() {
    return this._actions;
  }
  public putActions(value: Elasticloadbalancingv2ListenerRuleActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new Elasticloadbalancingv2ListenerRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: Elasticloadbalancingv2ListenerRuleConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // listener_arn - computed: true, optional: true, required: false
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  public resetListenerArn() {
    this._listenerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Elasticloadbalancingv2ListenerRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Elasticloadbalancingv2ListenerRuleTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transforms - computed: true, optional: true, required: false
  private _transforms = new Elasticloadbalancingv2ListenerRuleTransformsList(this, "transforms", true);
  public get transforms() {
    return this._transforms;
  }
  public putTransforms(value: Elasticloadbalancingv2ListenerRuleTransforms[] | cdktn.IResolvable) {
    this._transforms.internalValue = value;
  }
  public resetTransforms() {
    this._transforms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktn.listMapper(elasticloadbalancingv2ListenerRuleActionsToTerraform, false)(this._actions.internalValue),
      conditions: cdktn.listMapper(elasticloadbalancingv2ListenerRuleConditionsToTerraform, false)(this._conditions.internalValue),
      listener_arn: cdktn.stringToTerraform(this._listenerArn),
      priority: cdktn.numberToTerraform(this._priority),
      tags: cdktn.listMapper(elasticloadbalancingv2ListenerRuleTagsToTerraform, false)(this._tags.internalValue),
      transforms: cdktn.listMapper(elasticloadbalancingv2ListenerRuleTransformsToTerraform, false)(this._transforms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Elasticloadbalancingv2ListenerRuleActionsList",
      },
      conditions: {
        value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleConditionsToHclTerraform, false)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Elasticloadbalancingv2ListenerRuleConditionsList",
      },
      listener_arn: {
        value: cdktn.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Elasticloadbalancingv2ListenerRuleTagsList",
      },
      transforms: {
        value: cdktn.listMapperHcl(elasticloadbalancingv2ListenerRuleTransformsToHclTerraform, false)(this._transforms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Elasticloadbalancingv2ListenerRuleTransformsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
