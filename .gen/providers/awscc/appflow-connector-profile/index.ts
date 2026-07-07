// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppflowConnectorProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connection_mode AppflowConnectorProfile#connection_mode}
  */
  readonly connectionMode: string;
  /**
  * The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_label AppflowConnectorProfile#connector_label}
  */
  readonly connectorLabel?: string;
  /**
  * Connector specific configurations needed to create connector profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_profile_config AppflowConnectorProfile#connector_profile_config}
  */
  readonly connectorProfileConfig?: AppflowConnectorProfileConnectorProfileConfig;
  /**
  * The maximum number of items to retrieve in a single batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_profile_name AppflowConnectorProfile#connector_profile_name}
  */
  readonly connectorProfileName: string;
  /**
  * List of Saas providers that need connector profile to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_type AppflowConnectorProfile#connector_type}
  */
  readonly connectorType: string;
  /**
  * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#kms_arn AppflowConnectorProfile#kms_arn}
  */
  readonly kmsArn?: string;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
  /**
  * A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#secret_key AppflowConnectorProfile#secret_key}
  */
  readonly secretKey?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    secret_key: cdktn.stringToTerraform(struct!.secretKey),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktn.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._secretKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._secretKey = value.secretKey;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // secret_key - computed: true, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_secret_key AppflowConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_secret_key: cdktn.stringToTerraform(struct!.apiSecretKey),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.apiSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretKey = this._apiSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiSecretKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiSecretKey = value.apiSecretKey;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret_key - computed: true, optional: true, required: false
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  public resetApiSecretKey() {
    this._apiSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
  /**
  * A map for properties for custom authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#credentials_map AppflowConnectorProfile#credentials_map}
  */
  readonly credentialsMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#custom_authentication_type AppflowConnectorProfile#custom_authentication_type}
  */
  readonly customAuthenticationType?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_map: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.credentialsMap),
    custom_authentication_type: cdktn.stringToTerraform(struct!.customAuthenticationType),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_map: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.credentialsMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.customAuthenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsMap = this._credentialsMap;
    }
    if (this._customAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationType = this._customAuthenticationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsMap = undefined;
      this._customAuthenticationType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsMap = value.credentialsMap;
      this._customAuthenticationType = value.customAuthenticationType;
    }
  }

  // credentials_map - computed: true, optional: true, required: false
  private _credentialsMap?: { [key: string]: string }; 
  public get credentialsMap() {
    return this.getStringMapAttribute('credentials_map');
  }
  public set credentialsMap(value: { [key: string]: string }) {
    this._credentialsMap = value;
  }
  public resetCredentialsMap() {
    this._credentialsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsMapInput() {
    return this._credentialsMap;
  }

  // custom_authentication_type - computed: true, optional: true, required: false
  private _customAuthenticationType?: string; 
  public get customAuthenticationType() {
    return this.getStringAttribute('custom_authentication_type');
  }
  public set customAuthenticationType(value: string) {
    this._customAuthenticationType = value;
  }
  public resetCustomAuthenticationType() {
    this._customAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationTypeInput() {
    return this._customAuthenticationType;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#o_auth_request AppflowConnectorProfile#o_auth_request}
  */
  readonly oAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestToTerraform(struct!.oAuthRequest),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
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
    o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestToHclTerraform(struct!.oAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthRequest = this._oAuthRequest?.internalValue;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oAuthRequest.internalValue = undefined;
      this._refreshToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oAuthRequest.internalValue = value.oAuthRequest;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // o_auth_request - computed: true, optional: true, required: false
  private _oAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequestOutputReference(this, "o_auth_request");
  public get oAuthRequest() {
    return this._oAuthRequest;
  }
  public putOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OAuthRequest) {
    this._oAuthRequest.internalValue = value;
  }
  public resetOAuthRequest() {
    this._oAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthRequestInput() {
    return this._oAuthRequest.internalValue;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#authentication_type AppflowConnectorProfile#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#basic AppflowConnectorProfile#basic}
  */
  readonly basic?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#custom AppflowConnectorProfile#custom}
  */
  readonly custom?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#oauth_2 AppflowConnectorProfile#oauth_2}
  */
  readonly oauth2?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToTerraform(struct!.apiKey),
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    basic: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToTerraform(struct!.basic),
    custom: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToTerraform(struct!.custom),
    oauth_2: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToTerraform(struct!.oauth2),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey",
    },
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic",
    },
    custom: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom",
    },
    oauth_2: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._authenticationType = undefined;
      this._basic.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._oauth2.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._authenticationType = value.authenticationType;
      this._basic.internalValue = value.basic;
      this._custom.internalValue = value.custom;
      this._oauth2.internalValue = value.oauth2;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // basic - computed: true, optional: true, required: false
  private _basic = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // oauth_2 - computed: true, optional: true, required: false
  private _oauth2 = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference(this, "oauth_2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog {
  /**
  * A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey?: string;
  /**
  * Application keys, in conjunction with your API key, give you full access to Datadog?s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#application_key AppflowConnectorProfile#application_key}
  */
  readonly applicationKey?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    application_key: cdktn.stringToTerraform(struct!.applicationKey),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktn.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._applicationKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._applicationKey = value.applicationKey;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_key - computed: true, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
  /**
  * The API tokens used by Dynatrace API to authenticate various API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_token AppflowConnectorProfile#api_token}
  */
  readonly apiToken?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
    }
  }

  // api_token - computed: true, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
  /**
  * The credentials used to access protected resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * The identi?er for the desired client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret used by the oauth client to authenticate to the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The oauth needed to request security tokens from the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest;
  /**
  * The credentials used to acquire new access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
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
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
      this._refreshToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus {
  /**
  * The Access Key portion of the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_key_id AppflowConnectorProfile#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The encryption keys used to encrypt data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#datakey AppflowConnectorProfile#datakey}
  */
  readonly datakey?: string;
  /**
  * The secret key used to sign requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#secret_access_key AppflowConnectorProfile#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * The identi?er for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#user_id AppflowConnectorProfile#user_id}
  */
  readonly userId?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_key_id: cdktn.stringToTerraform(struct!.accessKeyId),
    datakey: cdktn.stringToTerraform(struct!.datakey),
    secret_access_key: cdktn.stringToTerraform(struct!.secretAccessKey),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_key_id: {
      value: cdktn.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datakey: {
      value: cdktn.stringToHclTerraform(struct!.datakey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktn.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._datakey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datakey = this._datakey;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._datakey = undefined;
      this._secretAccessKey = undefined;
      this._userId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._datakey = value.datakey;
      this._secretAccessKey = value.secretAccessKey;
      this._userId = value.userId;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // datakey - computed: true, optional: true, required: false
  private _datakey?: string; 
  public get datakey() {
    return this.getStringAttribute('datakey');
  }
  public set datakey(value: string) {
    this._datakey = value;
  }
  public resetDatakey() {
    this._datakey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datakeyInput() {
    return this._datakey;
  }

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo {
  /**
  * The credentials used to access protected resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * The identi?er for the desired client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret used by the oauth client to authenticate to the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The oauth needed to request security tokens from the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
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
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot {
  /**
  * The credentials used to access protected resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * The client credentials to fetch access token and refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_credentials_arn AppflowConnectorProfile#client_credentials_arn}
  */
  readonly clientCredentialsArn?: string;
  /**
  * The oauth needed to request security tokens from the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest;
  /**
  * The credentials used to acquire new access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_credentials_arn: cdktn.stringToTerraform(struct!.clientCredentialsArn),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_credentials_arn: {
      value: cdktn.stringToHclTerraform(struct!.clientCredentialsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientCredentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsArn = this._clientCredentialsArn;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientCredentialsArn = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
      this._refreshToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientCredentialsArn = value.clientCredentialsArn;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_credentials_arn - computed: true, optional: true, required: false
  private _clientCredentialsArn?: string; 
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }
  public set clientCredentialsArn(value: string) {
    this._clientCredentialsArn = value;
  }
  public resetClientCredentialsArn() {
    this._clientCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsArnInput() {
    return this._clientCredentialsArn;
  }

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift {
  /**
  * The password that corresponds to the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
  /**
  * The credentials used to access protected resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * The client credentials to fetch access token and refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_credentials_arn AppflowConnectorProfile#client_credentials_arn}
  */
  readonly clientCredentialsArn?: string;
  /**
  * The oauth needed to request security tokens from the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest;
  /**
  * The credentials used to acquire new access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_credentials_arn: cdktn.stringToTerraform(struct!.clientCredentialsArn),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_credentials_arn: {
      value: cdktn.stringToHclTerraform(struct!.clientCredentialsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientCredentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsArn = this._clientCredentialsArn;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientCredentialsArn = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
      this._refreshToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientCredentialsArn = value.clientCredentialsArn;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // client_credentials_arn - computed: true, optional: true, required: false
  private _clientCredentialsArn?: string; 
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }
  public set clientCredentialsArn(value: string) {
    this._clientCredentialsArn = value;
  }
  public resetClientCredentialsArn() {
    this._clientCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsArnInput() {
    return this._clientCredentialsArn;
  }

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
    refresh_token: cdktn.stringToTerraform(struct!.refreshToken),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
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
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest",
    },
    refresh_token: {
      value: cdktn.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
      this._refreshToken = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#basic_auth_credentials AppflowConnectorProfile#basic_auth_credentials}
  */
  readonly basicAuthCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#o_auth_credentials AppflowConnectorProfile#o_auth_credentials}
  */
  readonly oAuthCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToTerraform(struct!.basicAuthCredentials),
    o_auth_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsToTerraform(struct!.oAuthCredentials),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth_credentials: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToHclTerraform(struct!.basicAuthCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials",
    },
    o_auth_credentials: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsToHclTerraform(struct!.oAuthCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthCredentials = this._basicAuthCredentials?.internalValue;
    }
    if (this._oAuthCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthCredentials = this._oAuthCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuthCredentials.internalValue = undefined;
      this._oAuthCredentials.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuthCredentials.internalValue = value.basicAuthCredentials;
      this._oAuthCredentials.internalValue = value.oAuthCredentials;
    }
  }

  // basic_auth_credentials - computed: true, optional: true, required: false
  private _basicAuthCredentials = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference(this, "basic_auth_credentials");
  public get basicAuthCredentials() {
    return this._basicAuthCredentials;
  }
  public putBasicAuthCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials) {
    this._basicAuthCredentials.internalValue = value;
  }
  public resetBasicAuthCredentials() {
    this._basicAuthCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthCredentialsInput() {
    return this._basicAuthCredentials.internalValue;
  }

  // o_auth_credentials - computed: true, optional: true, required: false
  private _oAuthCredentials = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentialsOutputReference(this, "o_auth_credentials");
  public get oAuthCredentials() {
    return this._oAuthCredentials;
  }
  public putOAuthCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOAuthCredentials) {
    this._oAuthCredentials.internalValue = value;
  }
  public resetOAuthCredentials() {
    this._oAuthCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthCredentialsInput() {
    return this._oAuthCredentials.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow {
  /**
  * The password that corresponds to the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
  /**
  * A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack {
  /**
  * The credentials used to access protected resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * The identi?er for the desired client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret used by the oauth client to authenticate to the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The oauth needed to request security tokens from the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
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
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake {
  /**
  * The password that corresponds to the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
  /**
  * The Secret Access Key portion of the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#api_secret_key AppflowConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_secret_key: cdktn.stringToTerraform(struct!.apiSecretKey),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.apiSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretKey = this._apiSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSecretKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSecretKey = value.apiSecretKey;
    }
  }

  // api_secret_key - computed: true, optional: true, required: false
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  public resetApiSecretKey() {
    this._apiSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva {
  /**
  * The password that corresponds to the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest {
  /**
  * The code provided by the connector when it has been authenticated via the connected app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * The URL to which the authentication server redirects the browser after authorization has been
  * granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
    redirect_uri: cdktn.stringToTerraform(struct!.redirectUri),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktn.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
  /**
  * The credentials used to access protected resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * The identi?er for the desired client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret used by the oauth client to authenticate to the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The oauth needed to request security tokens from the connector endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_o_auth_request AppflowConnectorProfile#connector_o_auth_request}
  */
  readonly connectorOAuthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    connector_o_auth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToTerraform(struct!.connectorOAuthRequest),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
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
    connector_o_auth_request: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestToHclTerraform(struct!.connectorOAuthRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectorOAuthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOAuthRequest = this._connectorOAuthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectorOAuthRequest.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectorOAuthRequest.internalValue = value.connectorOAuthRequest;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
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

  // connector_o_auth_request - computed: true, optional: true, required: false
  private _connectorOAuthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequestOutputReference(this, "connector_o_auth_request");
  public get connectorOAuthRequest() {
    return this._connectorOAuthRequest;
  }
  public putConnectorOAuthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskConnectorOAuthRequest) {
    this._connectorOAuthRequest.internalValue = value;
  }
  public resetConnectorOAuthRequest() {
    this._connectorOAuthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOAuthRequestInput() {
    return this._connectorOAuthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#amplitude AppflowConnectorProfile#amplitude}
  */
  readonly amplitude?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#custom_connector AppflowConnectorProfile#custom_connector}
  */
  readonly customConnector?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#datadog AppflowConnectorProfile#datadog}
  */
  readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#dynatrace AppflowConnectorProfile#dynatrace}
  */
  readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#google_analytics AppflowConnectorProfile#google_analytics}
  */
  readonly googleAnalytics?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#infor_nexus AppflowConnectorProfile#infor_nexus}
  */
  readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#marketo AppflowConnectorProfile#marketo}
  */
  readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#pardot AppflowConnectorProfile#pardot}
  */
  readonly pardot?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redshift AppflowConnectorProfile#redshift}
  */
  readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#salesforce AppflowConnectorProfile#salesforce}
  */
  readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#sapo_data AppflowConnectorProfile#sapo_data}
  */
  readonly sapoData?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#service_now AppflowConnectorProfile#service_now}
  */
  readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#singular AppflowConnectorProfile#singular}
  */
  readonly singular?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#slack AppflowConnectorProfile#slack}
  */
  readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#snowflake AppflowConnectorProfile#snowflake}
  */
  readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#trendmicro AppflowConnectorProfile#trendmicro}
  */
  readonly trendmicro?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#veeva AppflowConnectorProfile#veeva}
  */
  readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#zendesk AppflowConnectorProfile#zendesk}
  */
  readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amplitude: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct!.amplitude),
    custom_connector: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToTerraform(struct!.customConnector),
    datadog: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct!.datadog),
    dynatrace: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct!.dynatrace),
    google_analytics: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    infor_nexus: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct!.marketo),
    pardot: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotToTerraform(struct!.pardot),
    redshift: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct!.redshift),
    salesforce: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct!.salesforce),
    sapo_data: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToTerraform(struct!.sapoData),
    service_now: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct!.serviceNow),
    singular: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct!.singular),
    slack: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct!.slack),
    snowflake: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct!.snowflake),
    trendmicro: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct!.trendmicro),
    veeva: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct!.veeva),
    zendesk: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct!.zendesk),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amplitude: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToHclTerraform(struct!.amplitude),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude",
    },
    custom_connector: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector",
    },
    datadog: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog",
    },
    dynatrace: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace",
    },
    google_analytics: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToHclTerraform(struct!.googleAnalytics),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics",
    },
    infor_nexus: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToHclTerraform(struct!.inforNexus),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus",
    },
    marketo: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo",
    },
    pardot: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotToHclTerraform(struct!.pardot),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot",
    },
    redshift: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift",
    },
    salesforce: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce",
    },
    sapo_data: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData",
    },
    service_now: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow",
    },
    singular: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToHclTerraform(struct!.singular),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular",
    },
    slack: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack",
    },
    snowflake: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake",
    },
    trendmicro: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToHclTerraform(struct!.trendmicro),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro",
    },
    veeva: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToHclTerraform(struct!.veeva),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva",
    },
    zendesk: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._pardot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pardot = this._pardot?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._pardot.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._pardot.internalValue = value.pardot;
      this._redshift.internalValue = value.redshift;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._snowflake.internalValue = value.snowflake;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: true, optional: true, required: false
  private _amplitude = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: true, optional: true, required: false
  private _customConnector = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: true, optional: true, required: false
  private _datadog = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: true, optional: true, required: false
  private _dynatrace = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: true, optional: true, required: false
  private _googleAnalytics = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // infor_nexus - computed: true, optional: true, required: false
  private _inforNexus = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: true, optional: true, required: false
  private _marketo = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // pardot - computed: true, optional: true, required: false
  private _pardot = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardotOutputReference(this, "pardot");
  public get pardot() {
    return this._pardot;
  }
  public putPardot(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsPardot) {
    this._pardot.internalValue = value;
  }
  public resetPardot() {
    this._pardot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pardotInput() {
    return this._pardot.internalValue;
  }

  // redshift - computed: true, optional: true, required: false
  private _redshift = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // salesforce - computed: true, optional: true, required: false
  private _salesforce = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: true, optional: true, required: false
  private _sapoData = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: true, optional: true, required: false
  private _singular = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: true, optional: true, required: false
  private _slack = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // snowflake - computed: true, optional: true, required: false
  private _snowflake = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // trendmicro - computed: true, optional: true, required: false
  private _trendmicro = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: true, optional: true, required: false
  private _veeva = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: true, optional: true, required: false
  private _zendesk = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#o_auth_2_grant_type AppflowConnectorProfile#o_auth_2_grant_type}
  */
  readonly oAuth2GrantType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#token_url AppflowConnectorProfile#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * A map for properties for custom connector Token Url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#token_url_custom_properties AppflowConnectorProfile#token_url_custom_properties}
  */
  readonly tokenUrlCustomProperties?: { [key: string]: string };
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    o_auth_2_grant_type: cdktn.stringToTerraform(struct!.oAuth2GrantType),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
    token_url_custom_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tokenUrlCustomProperties),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    o_auth_2_grant_type: {
      value: cdktn.stringToHclTerraform(struct!.oAuth2GrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url_custom_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tokenUrlCustomProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuth2GrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth2GrantType = this._oAuth2GrantType;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._tokenUrlCustomProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlCustomProperties = this._tokenUrlCustomProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuth2GrantType = undefined;
      this._tokenUrl = undefined;
      this._tokenUrlCustomProperties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuth2GrantType = value.oAuth2GrantType;
      this._tokenUrl = value.tokenUrl;
      this._tokenUrlCustomProperties = value.tokenUrlCustomProperties;
    }
  }

  // o_auth_2_grant_type - computed: true, optional: true, required: false
  private _oAuth2GrantType?: string; 
  public get oAuth2GrantType() {
    return this.getStringAttribute('o_auth_2_grant_type');
  }
  public set oAuth2GrantType(value: string) {
    this._oAuth2GrantType = value;
  }
  public resetOAuth2GrantType() {
    this._oAuth2GrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth2GrantTypeInput() {
    return this._oAuth2GrantType;
  }

  // token_url - computed: true, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // token_url_custom_properties - computed: true, optional: true, required: false
  private _tokenUrlCustomProperties?: { [key: string]: string }; 
  public get tokenUrlCustomProperties() {
    return this.getStringMapAttribute('token_url_custom_properties');
  }
  public set tokenUrlCustomProperties(value: { [key: string]: string }) {
    this._tokenUrlCustomProperties = value;
  }
  public resetTokenUrlCustomProperties() {
    this._tokenUrlCustomProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlCustomPropertiesInput() {
    return this._tokenUrlCustomProperties;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#o_auth_2_properties AppflowConnectorProfile#o_auth_2_properties}
  */
  readonly oAuth2Properties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties;
  /**
  * A map for properties for custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#profile_properties AppflowConnectorProfile#profile_properties}
  */
  readonly profileProperties?: { [key: string]: string };
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    o_auth_2_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesToTerraform(struct!.oAuth2Properties),
    profile_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.profileProperties),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    o_auth_2_properties: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesToHclTerraform(struct!.oAuth2Properties),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties",
    },
    profile_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.profileProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuth2Properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth2Properties = this._oAuth2Properties?.internalValue;
    }
    if (this._profileProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileProperties = this._profileProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuth2Properties.internalValue = undefined;
      this._profileProperties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuth2Properties.internalValue = value.oAuth2Properties;
      this._profileProperties = value.profileProperties;
    }
  }

  // o_auth_2_properties - computed: true, optional: true, required: false
  private _oAuth2Properties = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2PropertiesOutputReference(this, "o_auth_2_properties");
  public get oAuth2Properties() {
    return this._oAuth2Properties;
  }
  public putOAuth2Properties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOAuth2Properties) {
    this._oAuth2Properties.internalValue = value;
  }
  public resetOAuth2Properties() {
    this._oAuth2Properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth2PropertiesInput() {
    return this._oAuth2Properties.internalValue;
  }

  // profile_properties - computed: true, optional: true, required: false
  private _profileProperties?: { [key: string]: string }; 
  public get profileProperties() {
    return this.getStringMapAttribute('profile_properties');
  }
  public set profileProperties(value: { [key: string]: string }) {
    this._profileProperties = value;
  }
  public resetProfileProperties() {
    this._profileProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePropertiesInput() {
    return this._profileProperties;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog {
  /**
  * The location of the Datadog resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
  /**
  * The location of the Dynatrace resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus {
  /**
  * The location of the InforNexus resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo {
  /**
  * The location of the Marketo resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot {
  /**
  * The Business unit id of Salesforce Pardot instance to be connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#business_unit_id AppflowConnectorProfile#business_unit_id}
  */
  readonly businessUnitId?: string;
  /**
  * The location of the Salesforce Pardot resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
  /**
  * Indicates whether the connector profile applies to a demo or production environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#is_sandbox_environment AppflowConnectorProfile#is_sandbox_environment}
  */
  readonly isSandboxEnvironment?: boolean | cdktn.IResolvable;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    business_unit_id: cdktn.stringToTerraform(struct!.businessUnitId),
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    is_sandbox_environment: cdktn.booleanToTerraform(struct!.isSandboxEnvironment),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    business_unit_id: {
      value: cdktn.stringToHclTerraform(struct!.businessUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sandbox_environment: {
      value: cdktn.booleanToHclTerraform(struct!.isSandboxEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessUnitId = this._businessUnitId;
    }
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    if (this._isSandboxEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSandboxEnvironment = this._isSandboxEnvironment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._businessUnitId = undefined;
      this._instanceUrl = undefined;
      this._isSandboxEnvironment = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._businessUnitId = value.businessUnitId;
      this._instanceUrl = value.instanceUrl;
      this._isSandboxEnvironment = value.isSandboxEnvironment;
    }
  }

  // business_unit_id - computed: true, optional: true, required: false
  private _businessUnitId?: string; 
  public get businessUnitId() {
    return this.getStringAttribute('business_unit_id');
  }
  public set businessUnitId(value: string) {
    this._businessUnitId = value;
  }
  public resetBusinessUnitId() {
    this._businessUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessUnitIdInput() {
    return this._businessUnitId;
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // is_sandbox_environment - computed: true, optional: true, required: false
  private _isSandboxEnvironment?: boolean | cdktn.IResolvable; 
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
  public set isSandboxEnvironment(value: boolean | cdktn.IResolvable) {
    this._isSandboxEnvironment = value;
  }
  public resetIsSandboxEnvironment() {
    this._isSandboxEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSandboxEnvironmentInput() {
    return this._isSandboxEnvironment;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift {
  /**
  * The name of the Amazon S3 bucket associated with Redshift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#bucket_name AppflowConnectorProfile#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The object key for the destination bucket in which Amazon AppFlow will place the ?les.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#bucket_prefix AppflowConnectorProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * The unique identifier of the Amazon Redshift cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#cluster_identifier AppflowConnectorProfile#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role that grants Amazon AppFlow access to the data through the Amazon Redshift Data API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#data_api_role_arn AppflowConnectorProfile#data_api_role_arn}
  */
  readonly dataApiRoleArn?: string;
  /**
  * The name of the Amazon Redshift database that will store the transferred data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#database_name AppflowConnectorProfile#database_name}
  */
  readonly databaseName?: string;
  /**
  * The JDBC URL of the Amazon Redshift cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#database_url AppflowConnectorProfile#database_url}
  */
  readonly databaseUrl?: string;
  /**
  * If Amazon AppFlow will connect to Amazon Redshift Serverless or Amazon Redshift cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#is_redshift_serverless AppflowConnectorProfile#is_redshift_serverless}
  */
  readonly isRedshiftServerless?: boolean | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#role_arn AppflowConnectorProfile#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The name of the Amazon Redshift serverless workgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#workgroup_name AppflowConnectorProfile#workgroup_name}
  */
  readonly workgroupName?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    data_api_role_arn: cdktn.stringToTerraform(struct!.dataApiRoleArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    database_url: cdktn.stringToTerraform(struct!.databaseUrl),
    is_redshift_serverless: cdktn.booleanToTerraform(struct!.isRedshiftServerless),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    workgroup_name: cdktn.stringToTerraform(struct!.workgroupName),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_identifier: {
      value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_api_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataApiRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_url: {
      value: cdktn.stringToHclTerraform(struct!.databaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_redshift_serverless: {
      value: cdktn.booleanToHclTerraform(struct!.isRedshiftServerless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workgroup_name: {
      value: cdktn.stringToHclTerraform(struct!.workgroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._dataApiRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataApiRoleArn = this._dataApiRoleArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._databaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUrl = this._databaseUrl;
    }
    if (this._isRedshiftServerless !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRedshiftServerless = this._isRedshiftServerless;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._workgroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workgroupName = this._workgroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._clusterIdentifier = undefined;
      this._dataApiRoleArn = undefined;
      this._databaseName = undefined;
      this._databaseUrl = undefined;
      this._isRedshiftServerless = undefined;
      this._roleArn = undefined;
      this._workgroupName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._clusterIdentifier = value.clusterIdentifier;
      this._dataApiRoleArn = value.dataApiRoleArn;
      this._databaseName = value.databaseName;
      this._databaseUrl = value.databaseUrl;
      this._isRedshiftServerless = value.isRedshiftServerless;
      this._roleArn = value.roleArn;
      this._workgroupName = value.workgroupName;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // cluster_identifier - computed: true, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // data_api_role_arn - computed: true, optional: true, required: false
  private _dataApiRoleArn?: string; 
  public get dataApiRoleArn() {
    return this.getStringAttribute('data_api_role_arn');
  }
  public set dataApiRoleArn(value: string) {
    this._dataApiRoleArn = value;
  }
  public resetDataApiRoleArn() {
    this._dataApiRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataApiRoleArnInput() {
    return this._dataApiRoleArn;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_url - computed: true, optional: true, required: false
  private _databaseUrl?: string; 
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }
  public set databaseUrl(value: string) {
    this._databaseUrl = value;
  }
  public resetDatabaseUrl() {
    this._databaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUrlInput() {
    return this._databaseUrl;
  }

  // is_redshift_serverless - computed: true, optional: true, required: false
  private _isRedshiftServerless?: boolean | cdktn.IResolvable; 
  public get isRedshiftServerless() {
    return this.getBooleanAttribute('is_redshift_serverless');
  }
  public set isRedshiftServerless(value: boolean | cdktn.IResolvable) {
    this._isRedshiftServerless = value;
  }
  public resetIsRedshiftServerless() {
    this._isRedshiftServerless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedshiftServerlessInput() {
    return this._isRedshiftServerless;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // workgroup_name - computed: true, optional: true, required: false
  private _workgroupName?: string; 
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
  public set workgroupName(value: string) {
    this._workgroupName = value;
  }
  public resetWorkgroupName() {
    this._workgroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupNameInput() {
    return this._workgroupName;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
  /**
  * The location of the Salesforce resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
  /**
  * Indicates whether the connector profile applies to a sandbox or production environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#is_sandbox_environment AppflowConnectorProfile#is_sandbox_environment}
  */
  readonly isSandboxEnvironment?: boolean | cdktn.IResolvable;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    is_sandbox_environment: cdktn.booleanToTerraform(struct!.isSandboxEnvironment),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sandbox_environment: {
      value: cdktn.booleanToHclTerraform(struct!.isSandboxEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    if (this._isSandboxEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSandboxEnvironment = this._isSandboxEnvironment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
      this._isSandboxEnvironment = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
      this._isSandboxEnvironment = value.isSandboxEnvironment;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // is_sandbox_environment - computed: true, optional: true, required: false
  private _isSandboxEnvironment?: boolean | cdktn.IResolvable; 
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
  public set isSandboxEnvironment(value: boolean | cdktn.IResolvable) {
    this._isSandboxEnvironment = value;
  }
  public resetIsSandboxEnvironment() {
    this._isSandboxEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSandboxEnvironmentInput() {
    return this._isSandboxEnvironment;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#auth_code_url AppflowConnectorProfile#auth_code_url}
  */
  readonly authCodeUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#o_auth_scopes AppflowConnectorProfile#o_auth_scopes}
  */
  readonly oAuthScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#token_url AppflowConnectorProfile#token_url}
  */
  readonly tokenUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code_url: cdktn.stringToTerraform(struct!.authCodeUrl),
    o_auth_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oAuthScopes),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code_url: {
      value: cdktn.stringToHclTerraform(struct!.authCodeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oAuthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCodeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCodeUrl = this._authCodeUrl;
    }
    if (this._oAuthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScopes = this._oAuthScopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCodeUrl = undefined;
      this._oAuthScopes = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCodeUrl = value.authCodeUrl;
      this._oAuthScopes = value.oAuthScopes;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // auth_code_url - computed: true, optional: true, required: false
  private _authCodeUrl?: string; 
  public get authCodeUrl() {
    return this.getStringAttribute('auth_code_url');
  }
  public set authCodeUrl(value: string) {
    this._authCodeUrl = value;
  }
  public resetAuthCodeUrl() {
    this._authCodeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeUrlInput() {
    return this._authCodeUrl;
  }

  // o_auth_scopes - computed: true, optional: true, required: false
  private _oAuthScopes?: string[]; 
  public get oAuthScopes() {
    return this.getListAttribute('o_auth_scopes');
  }
  public set oAuthScopes(value: string[]) {
    this._oAuthScopes = value;
  }
  public resetOAuthScopes() {
    this._oAuthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopesInput() {
    return this._oAuthScopes;
  }

  // token_url - computed: true, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#application_host_url AppflowConnectorProfile#application_host_url}
  */
  readonly applicationHostUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#application_service_path AppflowConnectorProfile#application_service_path}
  */
  readonly applicationServicePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#client_number AppflowConnectorProfile#client_number}
  */
  readonly clientNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#logon_language AppflowConnectorProfile#logon_language}
  */
  readonly logonLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#o_auth_properties AppflowConnectorProfile#o_auth_properties}
  */
  readonly oAuthProperties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#port_number AppflowConnectorProfile#port_number}
  */
  readonly portNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#private_link_service_name AppflowConnectorProfile#private_link_service_name}
  */
  readonly privateLinkServiceName?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_host_url: cdktn.stringToTerraform(struct!.applicationHostUrl),
    application_service_path: cdktn.stringToTerraform(struct!.applicationServicePath),
    client_number: cdktn.stringToTerraform(struct!.clientNumber),
    logon_language: cdktn.stringToTerraform(struct!.logonLanguage),
    o_auth_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesToTerraform(struct!.oAuthProperties),
    port_number: cdktn.numberToTerraform(struct!.portNumber),
    private_link_service_name: cdktn.stringToTerraform(struct!.privateLinkServiceName),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_host_url: {
      value: cdktn.stringToHclTerraform(struct!.applicationHostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_service_path: {
      value: cdktn.stringToHclTerraform(struct!.applicationServicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_number: {
      value: cdktn.stringToHclTerraform(struct!.clientNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon_language: {
      value: cdktn.stringToHclTerraform(struct!.logonLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_properties: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesToHclTerraform(struct!.oAuthProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties",
    },
    port_number: {
      value: cdktn.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_link_service_name: {
      value: cdktn.stringToHclTerraform(struct!.privateLinkServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationHostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationHostUrl = this._applicationHostUrl;
    }
    if (this._applicationServicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationServicePath = this._applicationServicePath;
    }
    if (this._clientNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNumber = this._clientNumber;
    }
    if (this._logonLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonLanguage = this._logonLanguage;
    }
    if (this._oAuthProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthProperties = this._oAuthProperties?.internalValue;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._privateLinkServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationHostUrl = undefined;
      this._applicationServicePath = undefined;
      this._clientNumber = undefined;
      this._logonLanguage = undefined;
      this._oAuthProperties.internalValue = undefined;
      this._portNumber = undefined;
      this._privateLinkServiceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationHostUrl = value.applicationHostUrl;
      this._applicationServicePath = value.applicationServicePath;
      this._clientNumber = value.clientNumber;
      this._logonLanguage = value.logonLanguage;
      this._oAuthProperties.internalValue = value.oAuthProperties;
      this._portNumber = value.portNumber;
      this._privateLinkServiceName = value.privateLinkServiceName;
    }
  }

  // application_host_url - computed: true, optional: true, required: false
  private _applicationHostUrl?: string; 
  public get applicationHostUrl() {
    return this.getStringAttribute('application_host_url');
  }
  public set applicationHostUrl(value: string) {
    this._applicationHostUrl = value;
  }
  public resetApplicationHostUrl() {
    this._applicationHostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationHostUrlInput() {
    return this._applicationHostUrl;
  }

  // application_service_path - computed: true, optional: true, required: false
  private _applicationServicePath?: string; 
  public get applicationServicePath() {
    return this.getStringAttribute('application_service_path');
  }
  public set applicationServicePath(value: string) {
    this._applicationServicePath = value;
  }
  public resetApplicationServicePath() {
    this._applicationServicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationServicePathInput() {
    return this._applicationServicePath;
  }

  // client_number - computed: true, optional: true, required: false
  private _clientNumber?: string; 
  public get clientNumber() {
    return this.getStringAttribute('client_number');
  }
  public set clientNumber(value: string) {
    this._clientNumber = value;
  }
  public resetClientNumber() {
    this._clientNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNumberInput() {
    return this._clientNumber;
  }

  // logon_language - computed: true, optional: true, required: false
  private _logonLanguage?: string; 
  public get logonLanguage() {
    return this.getStringAttribute('logon_language');
  }
  public set logonLanguage(value: string) {
    this._logonLanguage = value;
  }
  public resetLogonLanguage() {
    this._logonLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonLanguageInput() {
    return this._logonLanguage;
  }

  // o_auth_properties - computed: true, optional: true, required: false
  private _oAuthProperties = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthPropertiesOutputReference(this, "o_auth_properties");
  public get oAuthProperties() {
    return this._oAuthProperties;
  }
  public putOAuthProperties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOAuthProperties) {
    this._oAuthProperties.internalValue = value;
  }
  public resetOAuthProperties() {
    this._oAuthProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthPropertiesInput() {
    return this._oAuthProperties.internalValue;
  }

  // port_number - computed: true, optional: true, required: false
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  public resetPortNumber() {
    this._portNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // private_link_service_name - computed: true, optional: true, required: false
  private _privateLinkServiceName?: string; 
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
  public set privateLinkServiceName(value: string) {
    this._privateLinkServiceName = value;
  }
  public resetPrivateLinkServiceName() {
    this._privateLinkServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNameInput() {
    return this._privateLinkServiceName;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
  /**
  * The location of the ServiceNow resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack {
  /**
  * The location of the Slack resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
  /**
  * The name of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#account_name AppflowConnectorProfile#account_name}
  */
  readonly accountName?: string;
  /**
  * The name of the Amazon S3 bucket associated with Snow?ake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#bucket_name AppflowConnectorProfile#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * The bucket prefix that refers to the Amazon S3 bucket associated with Snow?ake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#bucket_prefix AppflowConnectorProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * The Snow?ake Private Link service name to be used for private data transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#private_link_service_name AppflowConnectorProfile#private_link_service_name}
  */
  readonly privateLinkServiceName?: string;
  /**
  * The region of the Snow?ake account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#region AppflowConnectorProfile#region}
  */
  readonly region?: string;
  /**
  * The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the
  * Snow?ake account. This is written in the following format: < Database>< Schema><Stage Name>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#stage AppflowConnectorProfile#stage}
  */
  readonly stage?: string;
  /**
  * The name of the Snow?ake warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#warehouse AppflowConnectorProfile#warehouse}
  */
  readonly warehouse?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_name: cdktn.stringToTerraform(struct!.accountName),
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
    private_link_service_name: cdktn.stringToTerraform(struct!.privateLinkServiceName),
    region: cdktn.stringToTerraform(struct!.region),
    stage: cdktn.stringToTerraform(struct!.stage),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_name: {
      value: cdktn.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_link_service_name: {
      value: cdktn.stringToHclTerraform(struct!.privateLinkServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktn.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._privateLinkServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountName = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._privateLinkServiceName = undefined;
      this._region = undefined;
      this._stage = undefined;
      this._warehouse = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountName = value.accountName;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._privateLinkServiceName = value.privateLinkServiceName;
      this._region = value.region;
      this._stage = value.stage;
      this._warehouse = value.warehouse;
    }
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // private_link_service_name - computed: true, optional: true, required: false
  private _privateLinkServiceName?: string; 
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
  public set privateLinkServiceName(value: string) {
    this._privateLinkServiceName = value;
  }
  public resetPrivateLinkServiceName() {
    this._privateLinkServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNameInput() {
    return this._privateLinkServiceName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stage - computed: true, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // warehouse - computed: true, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva {
  /**
  * The location of the Veeva resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk {
  /**
  * The location of the Zendesk resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#custom_connector AppflowConnectorProfile#custom_connector}
  */
  readonly customConnector?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#datadog AppflowConnectorProfile#datadog}
  */
  readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#dynatrace AppflowConnectorProfile#dynatrace}
  */
  readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#infor_nexus AppflowConnectorProfile#infor_nexus}
  */
  readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#marketo AppflowConnectorProfile#marketo}
  */
  readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#pardot AppflowConnectorProfile#pardot}
  */
  readonly pardot?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#redshift AppflowConnectorProfile#redshift}
  */
  readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#salesforce AppflowConnectorProfile#salesforce}
  */
  readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#sapo_data AppflowConnectorProfile#sapo_data}
  */
  readonly sapoData?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#service_now AppflowConnectorProfile#service_now}
  */
  readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#slack AppflowConnectorProfile#slack}
  */
  readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#snowflake AppflowConnectorProfile#snowflake}
  */
  readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#veeva AppflowConnectorProfile#veeva}
  */
  readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#zendesk AppflowConnectorProfile#zendesk}
  */
  readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_connector: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToTerraform(struct!.customConnector),
    datadog: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct!.dynatrace),
    infor_nexus: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct!.marketo),
    pardot: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotToTerraform(struct!.pardot),
    redshift: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct!.redshift),
    salesforce: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct!.salesforce),
    sapo_data: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToTerraform(struct!.sapoData),
    service_now: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct!.serviceNow),
    slack: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct!.slack),
    snowflake: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct!.snowflake),
    veeva: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct!.veeva),
    zendesk: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct!.zendesk),
  }
}


export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_connector: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector",
    },
    datadog: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog",
    },
    dynatrace: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace",
    },
    infor_nexus: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToHclTerraform(struct!.inforNexus),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus",
    },
    marketo: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo",
    },
    pardot: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotToHclTerraform(struct!.pardot),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot",
    },
    redshift: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift",
    },
    salesforce: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce",
    },
    sapo_data: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData",
    },
    service_now: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow",
    },
    slack: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack",
    },
    snowflake: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake",
    },
    veeva: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToHclTerraform(struct!.veeva),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva",
    },
    zendesk: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._pardot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pardot = this._pardot?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._pardot.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._pardot.internalValue = value.pardot;
      this._redshift.internalValue = value.redshift;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._slack.internalValue = value.slack;
      this._snowflake.internalValue = value.snowflake;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // custom_connector - computed: true, optional: true, required: false
  private _customConnector = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: true, optional: true, required: false
  private _datadog = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: true, optional: true, required: false
  private _dynatrace = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // infor_nexus - computed: true, optional: true, required: false
  private _inforNexus = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: true, optional: true, required: false
  private _marketo = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // pardot - computed: true, optional: true, required: false
  private _pardot = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardotOutputReference(this, "pardot");
  public get pardot() {
    return this._pardot;
  }
  public putPardot(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesPardot) {
    this._pardot.internalValue = value;
  }
  public resetPardot() {
    this._pardot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pardotInput() {
    return this._pardot.internalValue;
  }

  // redshift - computed: true, optional: true, required: false
  private _redshift = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // salesforce - computed: true, optional: true, required: false
  private _salesforce = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: true, optional: true, required: false
  private _sapoData = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // slack - computed: true, optional: true, required: false
  private _slack = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // snowflake - computed: true, optional: true, required: false
  private _snowflake = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // veeva - computed: true, optional: true, required: false
  private _veeva = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: true, optional: true, required: false
  private _zendesk = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfig {
  /**
  * Connector specific configuration needed to create connector profile based on Authentication mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_profile_credentials AppflowConnectorProfile#connector_profile_credentials}
  */
  readonly connectorProfileCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials;
  /**
  * Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#connector_profile_properties AppflowConnectorProfile#connector_profile_properties}
  */
  readonly connectorProfileProperties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties;
}

export function appflowConnectorProfileConnectorProfileConfigToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_profile_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct!.connectorProfileCredentials),
    connector_profile_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct!.connectorProfileProperties),
  }
}


export function appflowConnectorProfileConnectorProfileConfigToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_profile_credentials: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToHclTerraform(struct!.connectorProfileCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials",
    },
    connector_profile_properties: {
      value: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToHclTerraform(struct!.connectorProfileProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowConnectorProfileConnectorProfileConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorProfileCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileCredentials = this._connectorProfileCredentials?.internalValue;
    }
    if (this._connectorProfileProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileProperties = this._connectorProfileProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorProfileCredentials.internalValue = undefined;
      this._connectorProfileProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorProfileCredentials.internalValue = value.connectorProfileCredentials;
      this._connectorProfileProperties.internalValue = value.connectorProfileProperties;
    }
  }

  // connector_profile_credentials - computed: true, optional: true, required: false
  private _connectorProfileCredentials = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference(this, "connector_profile_credentials");
  public get connectorProfileCredentials() {
    return this._connectorProfileCredentials;
  }
  public putConnectorProfileCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials) {
    this._connectorProfileCredentials.internalValue = value;
  }
  public resetConnectorProfileCredentials() {
    this._connectorProfileCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileCredentialsInput() {
    return this._connectorProfileCredentials.internalValue;
  }

  // connector_profile_properties - computed: true, optional: true, required: false
  private _connectorProfileProperties = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference(this, "connector_profile_properties");
  public get connectorProfileProperties() {
    return this._connectorProfileProperties;
  }
  public putConnectorProfileProperties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties) {
    this._connectorProfileProperties.internalValue = value;
  }
  public resetConnectorProfileProperties() {
    this._connectorProfileProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfilePropertiesInput() {
    return this._connectorProfileProperties.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile awscc_appflow_connector_profile}
*/
export class AppflowConnectorProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appflow_connector_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppflowConnectorProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppflowConnectorProfile to import
  * @param importFromId The id of the existing AppflowConnectorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppflowConnectorProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_connector_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/appflow_connector_profile awscc_appflow_connector_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowConnectorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowConnectorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_connector_profile',
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
    this._connectionMode = config.connectionMode;
    this._connectorLabel = config.connectorLabel;
    this._connectorProfileConfig.internalValue = config.connectorProfileConfig;
    this._connectorProfileName = config.connectorProfileName;
    this._connectorType = config.connectorType;
    this._kmsArn = config.kmsArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_mode - computed: false, optional: false, required: true
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // connector_label - computed: true, optional: true, required: false
  private _connectorLabel?: string; 
  public get connectorLabel() {
    return this.getStringAttribute('connector_label');
  }
  public set connectorLabel(value: string) {
    this._connectorLabel = value;
  }
  public resetConnectorLabel() {
    this._connectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorLabelInput() {
    return this._connectorLabel;
  }

  // connector_profile_arn - computed: true, optional: false, required: false
  public get connectorProfileArn() {
    return this.getStringAttribute('connector_profile_arn');
  }

  // connector_profile_config - computed: true, optional: true, required: false
  private _connectorProfileConfig = new AppflowConnectorProfileConnectorProfileConfigOutputReference(this, "connector_profile_config");
  public get connectorProfileConfig() {
    return this._connectorProfileConfig;
  }
  public putConnectorProfileConfig(value: AppflowConnectorProfileConnectorProfileConfig) {
    this._connectorProfileConfig.internalValue = value;
  }
  public resetConnectorProfileConfig() {
    this._connectorProfileConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileConfigInput() {
    return this._connectorProfileConfig.internalValue;
  }

  // connector_profile_name - computed: false, optional: false, required: true
  private _connectorProfileName?: string; 
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mode: cdktn.stringToTerraform(this._connectionMode),
      connector_label: cdktn.stringToTerraform(this._connectorLabel),
      connector_profile_config: appflowConnectorProfileConnectorProfileConfigToTerraform(this._connectorProfileConfig.internalValue),
      connector_profile_name: cdktn.stringToTerraform(this._connectorProfileName),
      connector_type: cdktn.stringToTerraform(this._connectorType),
      kms_arn: cdktn.stringToTerraform(this._kmsArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_mode: {
        value: cdktn.stringToHclTerraform(this._connectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_label: {
        value: cdktn.stringToHclTerraform(this._connectorLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_profile_config: {
        value: appflowConnectorProfileConnectorProfileConfigToHclTerraform(this._connectorProfileConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppflowConnectorProfileConnectorProfileConfig",
      },
      connector_profile_name: {
        value: cdktn.stringToHclTerraform(this._connectorProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktn.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_arn: {
        value: cdktn.stringToHclTerraform(this._kmsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
