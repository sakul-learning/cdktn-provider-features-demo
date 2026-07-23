// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appflow_connector_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppflowConnectorProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appflow_connector_profile#id DataAwsccAppflowConnectorProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_secret_key - computed: true, optional: false, required: false
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_map - computed: true, optional: false, required: false
  private _credentialsMap = new cdktn.StringMap(this, "credentials_map");
  public get credentialsMap() {
    return this._credentialsMap;
  }

  // custom_authentication_type - computed: true, optional: false, required: false
  public get customAuthenticationType() {
    return this.getStringAttribute('custom_authentication_type');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // o_auth_request - computed: true, optional: false, required: false
  private _oAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestOutputReference(this, "o_auth_request");
  public get oAuthRequest() {
    return this._oAuthRequest;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  private _apiKey = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // basic - computed: true, optional: false, required: false
  private _basic = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }

  // custom - computed: true, optional: false, required: false
  private _custom = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }

  // oauth_2 - computed: true, optional: false, required: false
  private _oauth2 = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference(this, "oauth_2");
  public get oauth2() {
    return this._oauth2;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // datakey - computed: true, optional: false, required: false
  public get datakey() {
    return this.getStringAttribute('datakey');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot | undefined) {
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

  // client_credentials_arn - computed: true, optional: false, required: false
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined) {
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

  // client_credentials_arn - computed: true, optional: false, required: false
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth_credentials - computed: true, optional: false, required: false
  private _basicAuthCredentials = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference(this, "basic_auth_credentials");
  public get basicAuthCredentials() {
    return this._basicAuthCredentials;
  }

  // o_auth_credentials - computed: true, optional: false, required: false
  private _oAuthCredentials = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsOutputReference(this, "o_auth_credentials");
  public get oAuthCredentials() {
    return this._oAuthCredentials;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_secret_key - computed: true, optional: false, required: false
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // connector_o_auth_request - computed: true, optional: false, required: false
  private _connectorOAuthRequest = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amplitude - computed: true, optional: false, required: false
  private _amplitude = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }

  // custom_connector - computed: true, optional: false, required: false
  private _customConnector = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }

  // datadog - computed: true, optional: false, required: false
  private _datadog = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // google_analytics - computed: true, optional: false, required: false
  private _googleAnalytics = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }

  // infor_nexus - computed: true, optional: false, required: false
  private _inforNexus = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }

  // marketo - computed: true, optional: false, required: false
  private _marketo = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }

  // pardot - computed: true, optional: false, required: false
  private _pardot = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotOutputReference(this, "pardot");
  public get pardot() {
    return this._pardot;
  }

  // redshift - computed: true, optional: false, required: false
  private _redshift = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }

  // salesforce - computed: true, optional: false, required: false
  private _salesforce = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }

  // sapo_data - computed: true, optional: false, required: false
  private _sapoData = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }

  // singular - computed: true, optional: false, required: false
  private _singular = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }

  // slack - computed: true, optional: false, required: false
  private _slack = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }

  // trendmicro - computed: true, optional: false, required: false
  private _trendmicro = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }

  // veeva - computed: true, optional: false, required: false
  private _veeva = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }

  // zendesk - computed: true, optional: false, required: false
  private _zendesk = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // o_auth_2_grant_type - computed: true, optional: false, required: false
  public get oAuth2GrantType() {
    return this.getStringAttribute('o_auth_2_grant_type');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }

  // token_url_custom_properties - computed: true, optional: false, required: false
  private _tokenUrlCustomProperties = new cdktn.StringMap(this, "token_url_custom_properties");
  public get tokenUrlCustomProperties() {
    return this._tokenUrlCustomProperties;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // o_auth_2_properties - computed: true, optional: false, required: false
  private _oAuth2Properties = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesOutputReference(this, "o_auth_2_properties");
  public get oAuth2Properties() {
    return this._oAuth2Properties;
  }

  // profile_properties - computed: true, optional: false, required: false
  private _profileProperties = new cdktn.StringMap(this, "profile_properties");
  public get profileProperties() {
    return this._profileProperties;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // business_unit_id - computed: true, optional: false, required: false
  public get businessUnitId() {
    return this.getStringAttribute('business_unit_id');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_sandbox_environment - computed: true, optional: false, required: false
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // cluster_identifier - computed: true, optional: false, required: false
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }

  // data_api_role_arn - computed: true, optional: false, required: false
  public get dataApiRoleArn() {
    return this.getStringAttribute('data_api_role_arn');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_url - computed: true, optional: false, required: false
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }

  // is_redshift_serverless - computed: true, optional: false, required: false
  public get isRedshiftServerless() {
    return this.getBooleanAttribute('is_redshift_serverless');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // workgroup_name - computed: true, optional: false, required: false
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_sandbox_environment - computed: true, optional: false, required: false
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code_url - computed: true, optional: false, required: false
  public get authCodeUrl() {
    return this.getStringAttribute('auth_code_url');
  }

  // o_auth_scopes - computed: true, optional: false, required: false
  public get oAuthScopes() {
    return this.getListAttribute('o_auth_scopes');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_host_url - computed: true, optional: false, required: false
  public get applicationHostUrl() {
    return this.getStringAttribute('application_host_url');
  }

  // application_service_path - computed: true, optional: false, required: false
  public get applicationServicePath() {
    return this.getStringAttribute('application_service_path');
  }

  // client_number - computed: true, optional: false, required: false
  public get clientNumber() {
    return this.getStringAttribute('client_number');
  }

  // logon_language - computed: true, optional: false, required: false
  public get logonLanguage() {
    return this.getStringAttribute('logon_language');
  }

  // o_auth_properties - computed: true, optional: false, required: false
  private _oAuthProperties = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesOutputReference(this, "o_auth_properties");
  public get oAuthProperties() {
    return this._oAuthProperties;
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // private_link_service_name - computed: true, optional: false, required: false
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_connector - computed: true, optional: false, required: false
  private _customConnector = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }

  // datadog - computed: true, optional: false, required: false
  private _datadog = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // infor_nexus - computed: true, optional: false, required: false
  private _inforNexus = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }

  // marketo - computed: true, optional: false, required: false
  private _marketo = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }

  // pardot - computed: true, optional: false, required: false
  private _pardot = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotOutputReference(this, "pardot");
  public get pardot() {
    return this._pardot;
  }

  // redshift - computed: true, optional: false, required: false
  private _redshift = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }

  // salesforce - computed: true, optional: false, required: false
  private _salesforce = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }

  // sapo_data - computed: true, optional: false, required: false
  private _sapoData = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }

  // slack - computed: true, optional: false, required: false
  private _slack = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }

  // veeva - computed: true, optional: false, required: false
  private _veeva = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }

  // zendesk - computed: true, optional: false, required: false
  private _zendesk = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
}
export interface DataAwsccAppflowConnectorProfileConnectorProfileConfig {
}

export function dataAwsccAppflowConnectorProfileConnectorProfileConfigToTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowConnectorProfileConnectorProfileConfigToHclTerraform(struct?: DataAwsccAppflowConnectorProfileConnectorProfileConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowConnectorProfileConnectorProfileConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowConnectorProfileConnectorProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowConnectorProfileConnectorProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_profile_credentials - computed: true, optional: false, required: false
  private _connectorProfileCredentials = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference(this, "connector_profile_credentials");
  public get connectorProfileCredentials() {
    return this._connectorProfileCredentials;
  }

  // connector_profile_properties - computed: true, optional: false, required: false
  private _connectorProfileProperties = new DataAwsccAppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference(this, "connector_profile_properties");
  public get connectorProfileProperties() {
    return this._connectorProfileProperties;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appflow_connector_profile awscc_appflow_connector_profile}
*/
export class DataAwsccAppflowConnectorProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appflow_connector_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppflowConnectorProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppflowConnectorProfile to import
  * @param importFromId The id of the existing DataAwsccAppflowConnectorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appflow_connector_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppflowConnectorProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_connector_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/appflow_connector_profile awscc_appflow_connector_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppflowConnectorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppflowConnectorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_connector_profile',
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

  // connection_mode - computed: true, optional: false, required: false
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }

  // connector_label - computed: true, optional: false, required: false
  public get connectorLabel() {
    return this.getStringAttribute('connector_label');
  }

  // connector_profile_arn - computed: true, optional: false, required: false
  public get connectorProfileArn() {
    return this.getStringAttribute('connector_profile_arn');
  }

  // connector_profile_config - computed: true, optional: false, required: false
  private _connectorProfileConfig = new DataAwsccAppflowConnectorProfileConnectorProfileConfigOutputReference(this, "connector_profile_config");
  public get connectorProfileConfig() {
    return this._connectorProfileConfig;
  }

  // connector_profile_name - computed: true, optional: false, required: false
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
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

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
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
