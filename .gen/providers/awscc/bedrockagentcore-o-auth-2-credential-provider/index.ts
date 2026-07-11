// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreOAuth2CredentialProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * The vendor of the OAuth2 credential provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#credential_provider_vendor BedrockagentcoreOAuth2CredentialProvider#credential_provider_vendor}
  */
  readonly credentialProviderVendor: string;
  /**
  * The name of the OAuth2 credential provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#name BedrockagentcoreOAuth2CredentialProvider#name}
  */
  readonly name: string;
  /**
  * The configuration settings for the OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#oauth_2_provider_config_input BedrockagentcoreOAuth2CredentialProvider#oauth_2_provider_config_input}
  */
  readonly oauth2ProviderConfigInput?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput;
  /**
  * Tags to assign to the OAuth2 credential provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#tags BedrockagentcoreOAuth2CredentialProvider#tags}
  */
  readonly tags?: BedrockagentcoreOAuth2CredentialProviderTags[] | cdktn.IResolvable;
}
export interface BedrockagentcoreOAuth2CredentialProviderClientSecretArn {
}

export function bedrockagentcoreOAuth2CredentialProviderClientSecretArnToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderClientSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOAuth2CredentialProviderClientSecretArnToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderClientSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOAuth2CredentialProviderClientSecretArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderClientSecretArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderClientSecretArn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {
  /**
  * The authorization endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#authorization_endpoint BedrockagentcoreOAuth2CredentialProvider#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * The issuer URL for the OAuth2 authorization server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#issuer BedrockagentcoreOAuth2CredentialProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * The supported response types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#response_types BedrockagentcoreOAuth2CredentialProvider#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * The token endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#token_endpoint BedrockagentcoreOAuth2CredentialProvider#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    response_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.responseTypes),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.authorizationEndpoint),
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
    response_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.responseTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._responseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTypes = this._responseTypes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = undefined;
      this._issuer = undefined;
      this._responseTypes = undefined;
      this._tokenEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._issuer = value.issuer;
      this._responseTypes = value.responseTypes;
      this._tokenEndpoint = value.tokenEndpoint;
    }
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

  // response_types - computed: true, optional: true, required: false
  private _responseTypes?: string[];
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
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
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery {
  /**
  * Authorization server metadata for the OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#authorization_server_metadata BedrockagentcoreOAuth2CredentialProvider#authorization_server_metadata}
  */
  readonly authorizationServerMetadata?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata;
  /**
  * The discovery URL for the OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#discovery_url BedrockagentcoreOAuth2CredentialProvider#discovery_url}
  */
  readonly discoveryUrl?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_server_metadata: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataToTerraform(struct!.authorizationServerMetadata),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_server_metadata: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataToHclTerraform(struct!.authorizationServerMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata",
    },
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationServerMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServerMetadata = this._authorizationServerMetadata?.internalValue;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationServerMetadata.internalValue = undefined;
      this._discoveryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationServerMetadata.internalValue = value.authorizationServerMetadata;
      this._discoveryUrl = value.discoveryUrl;
    }
  }

  // authorization_server_metadata - computed: true, optional: true, required: false
  private _authorizationServerMetadata = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(this, "authorization_server_metadata");
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }
  public putAuthorizationServerMetadata(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata) {
    this._authorizationServerMetadata.internalValue = value;
  }
  public resetAuthorizationServerMetadata() {
    this._authorizationServerMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServerMetadataInput() {
    return this._authorizationServerMetadata.internalValue;
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string;
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig {
  /**
  * The actor token content type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#actor_token_content BedrockagentcoreOAuth2CredentialProvider#actor_token_content}
  */
  readonly actorTokenContent?: string;
  /**
  * The actor token scopes. Only valid when ActorTokenContent is M2M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#actor_token_scopes BedrockagentcoreOAuth2CredentialProvider#actor_token_scopes}
  */
  readonly actorTokenScopes?: string[];
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actor_token_content: cdktn.stringToTerraform(struct!.actorTokenContent),
    actor_token_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actorTokenScopes),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actor_token_content: {
      value: cdktn.stringToHclTerraform(struct!.actorTokenContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actor_token_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actorTokenScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actorTokenContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorTokenContent = this._actorTokenContent;
    }
    if (this._actorTokenScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorTokenScopes = this._actorTokenScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actorTokenContent = undefined;
      this._actorTokenScopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actorTokenContent = value.actorTokenContent;
      this._actorTokenScopes = value.actorTokenScopes;
    }
  }

  // actor_token_content - computed: true, optional: true, required: false
  private _actorTokenContent?: string;
  public get actorTokenContent() {
    return this.getStringAttribute('actor_token_content');
  }
  public set actorTokenContent(value: string) {
    this._actorTokenContent = value;
  }
  public resetActorTokenContent() {
    this._actorTokenContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorTokenContentInput() {
    return this._actorTokenContent;
  }

  // actor_token_scopes - computed: true, optional: true, required: false
  private _actorTokenScopes?: string[];
  public get actorTokenScopes() {
    return this.getListAttribute('actor_token_scopes');
  }
  public set actorTokenScopes(value: string[]) {
    this._actorTokenScopes = value;
  }
  public resetActorTokenScopes() {
    this._actorTokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorTokenScopesInput() {
    return this._actorTokenScopes;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig {
  /**
  * The grant type for on-behalf-of token exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#grant_type BedrockagentcoreOAuth2CredentialProvider#grant_type}
  */
  readonly grantType?: string;
  /**
  * Configuration for RFC 8693 Token Exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#token_exchange_grant_type_config BedrockagentcoreOAuth2CredentialProvider#token_exchange_grant_type_config}
  */
  readonly tokenExchangeGrantTypeConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grant_type: cdktn.stringToTerraform(struct!.grantType),
    token_exchange_grant_type_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToTerraform(struct!.tokenExchangeGrantTypeConfig),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grant_type: {
      value: cdktn.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_exchange_grant_type_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToHclTerraform(struct!.tokenExchangeGrantTypeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._tokenExchangeGrantTypeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExchangeGrantTypeConfig = this._tokenExchangeGrantTypeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grantType = undefined;
      this._tokenExchangeGrantTypeConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grantType = value.grantType;
      this._tokenExchangeGrantTypeConfig.internalValue = value.tokenExchangeGrantTypeConfig;
    }
  }

  // grant_type - computed: true, optional: true, required: false
  private _grantType?: string;
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // token_exchange_grant_type_config - computed: true, optional: true, required: false
  private _tokenExchangeGrantTypeConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference(this, "token_exchange_grant_type_config");
  public get tokenExchangeGrantTypeConfig() {
    return this._tokenExchangeGrantTypeConfig;
  }
  public putTokenExchangeGrantTypeConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig) {
    this._tokenExchangeGrantTypeConfig.internalValue = value;
  }
  public resetTokenExchangeGrantTypeConfig() {
    this._tokenExchangeGrantTypeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExchangeGrantTypeConfigInput() {
    return this._tokenExchangeGrantTypeConfig.internalValue;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig {
  /**
  * The client authentication method to use when authenticating with the token endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_authentication_method BedrockagentcoreOAuth2CredentialProvider#client_authentication_method}
  */
  readonly clientAuthenticationMethod?: string;
  /**
  * The client ID for the custom OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for the custom OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig;
  /**
  * The source of the client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
  /**
  * Discovery information for an OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#oauth_discovery BedrockagentcoreOAuth2CredentialProvider#oauth_discovery}
  */
  readonly oauthDiscovery?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery;
  /**
  * Configuration for on-behalf-of token exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#on_behalf_of_token_exchange_config BedrockagentcoreOAuth2CredentialProvider#on_behalf_of_token_exchange_config}
  */
  readonly onBehalfOfTokenExchangeConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_authentication_method: cdktn.stringToTerraform(struct!.clientAuthenticationMethod),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    oauth_discovery: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryToTerraform(struct!.oauthDiscovery),
    on_behalf_of_token_exchange_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigToTerraform(struct!.onBehalfOfTokenExchangeConfig),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.clientAuthenticationMethod),
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_discovery: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryToHclTerraform(struct!.oauthDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery",
    },
    on_behalf_of_token_exchange_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigToHclTerraform(struct!.onBehalfOfTokenExchangeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthenticationMethod = this._clientAuthenticationMethod;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    if (this._oauthDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthDiscovery = this._oauthDiscovery?.internalValue;
    }
    if (this._onBehalfOfTokenExchangeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onBehalfOfTokenExchangeConfig = this._onBehalfOfTokenExchangeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAuthenticationMethod = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
      this._oauthDiscovery.internalValue = undefined;
      this._onBehalfOfTokenExchangeConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAuthenticationMethod = value.clientAuthenticationMethod;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
      this._oauthDiscovery.internalValue = value.oauthDiscovery;
      this._onBehalfOfTokenExchangeConfig.internalValue = value.onBehalfOfTokenExchangeConfig;
    }
  }

  // client_authentication_method - computed: true, optional: true, required: false
  private _clientAuthenticationMethod?: string;
  public get clientAuthenticationMethod() {
    return this.getStringAttribute('client_authentication_method');
  }
  public set clientAuthenticationMethod(value: string) {
    this._clientAuthenticationMethod = value;
  }
  public resetClientAuthenticationMethod() {
    this._clientAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationMethodInput() {
    return this._clientAuthenticationMethod;
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }

  // oauth_discovery - computed: true, optional: true, required: false
  private _oauthDiscovery = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscoveryOutputReference(this, "oauth_discovery");
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }
  public putOauthDiscovery(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOauthDiscovery) {
    this._oauthDiscovery.internalValue = value;
  }
  public resetOauthDiscovery() {
    this._oauthDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthDiscoveryInput() {
    return this._oauthDiscovery.internalValue;
  }

  // on_behalf_of_token_exchange_config - computed: true, optional: true, required: false
  private _onBehalfOfTokenExchangeConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfigOutputReference(this, "on_behalf_of_token_exchange_config");
  public get onBehalfOfTokenExchangeConfig() {
    return this._onBehalfOfTokenExchangeConfig;
  }
  public putOnBehalfOfTokenExchangeConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOnBehalfOfTokenExchangeConfig) {
    this._onBehalfOfTokenExchangeConfig.internalValue = value;
  }
  public resetOnBehalfOfTokenExchangeConfig() {
    this._onBehalfOfTokenExchangeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBehalfOfTokenExchangeConfigInput() {
    return this._onBehalfOfTokenExchangeConfig.internalValue;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig {
  /**
  * OAuth2 authorization endpoint for your isolated OAuth2 application tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#authorization_endpoint BedrockagentcoreOAuth2CredentialProvider#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
  /**
  * Token issuer of your isolated OAuth2 application tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#issuer BedrockagentcoreOAuth2CredentialProvider#issuer}
  */
  readonly issuer?: string;
  /**
  * OAuth2 token endpoint for your isolated OAuth2 application tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#token_endpoint BedrockagentcoreOAuth2CredentialProvider#token_endpoint}
  */
  readonly tokenEndpoint?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    issuer: cdktn.stringToTerraform(struct!.issuer),
    token_endpoint: cdktn.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
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
    token_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
      this._issuer = undefined;
      this._tokenEndpoint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
      this._issuer = value.issuer;
      this._tokenEndpoint = value.tokenEndpoint;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
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
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
  /**
  * The Microsoft Entra ID tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#tenant_id BedrockagentcoreOAuth2CredentialProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
      this._tenantId = value.tenantId;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#json_key BedrockagentcoreOAuth2CredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#secret_id BedrockagentcoreOAuth2CredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_key: {
      value: cdktn.stringToHclTerraform(struct!.jsonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKey = this._jsonKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKey = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKey = value.jsonKey;
      this._secretId = value.secretId;
    }
  }

  // json_key - computed: true, optional: true, required: false
  private _jsonKey?: string;
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  public resetJsonKey() {
    this._jsonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_id BedrockagentcoreOAuth2CredentialProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret BedrockagentcoreOAuth2CredentialProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_config BedrockagentcoreOAuth2CredentialProvider#client_secret_config}
  */
  readonly clientSecretConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#client_secret_source BedrockagentcoreOAuth2CredentialProvider#client_secret_source}
  */
  readonly clientSecretSource?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    client_secret_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigToTerraform(struct!.clientSecretConfig),
    client_secret_source: cdktn.stringToTerraform(struct!.clientSecretSource),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
    client_secret_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigToHclTerraform(struct!.clientSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig",
    },
    client_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretConfig = this._clientSecretConfig?.internalValue;
    }
    if (this._clientSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretSource = this._clientSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._clientSecretConfig.internalValue = undefined;
      this._clientSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._clientSecretConfig.internalValue = value.clientSecretConfig;
      this._clientSecretSource = value.clientSecretSource;
    }
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

  // client_secret_config - computed: true, optional: true, required: false
  private _clientSecretConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfigOutputReference(this, "client_secret_config");
  public get clientSecretConfig() {
    return this._clientSecretConfig;
  }
  public putClientSecretConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigClientSecretConfig) {
    this._clientSecretConfig.internalValue = value;
  }
  public resetClientSecretConfig() {
    this._clientSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretConfigInput() {
    return this._clientSecretConfig.internalValue;
  }

  // client_secret_source - computed: true, optional: true, required: false
  private _clientSecretSource?: string;
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }
  public set clientSecretSource(value: string) {
    this._clientSecretSource = value;
  }
  public resetClientSecretSource() {
    this._clientSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretSourceInput() {
    return this._clientSecretSource;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput {
  /**
  * Input configuration for an Atlassian OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#atlassian_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#atlassian_oauth_2_provider_config}
  */
  readonly atlassianOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig;
  /**
  * Input configuration for a custom OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#custom_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#custom_oauth_2_provider_config}
  */
  readonly customOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig;
  /**
  * Input configuration for a GitHub OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#github_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#github_oauth_2_provider_config}
  */
  readonly githubOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig;
  /**
  * Input configuration for a Google OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#google_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#google_oauth_2_provider_config}
  */
  readonly googleOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig;
  /**
  * Input configuration for a supported non-custom OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#included_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#included_oauth_2_provider_config}
  */
  readonly includedOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig;
  /**
  * Input configuration for a LinkedIn OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#linkedin_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#linkedin_oauth_2_provider_config}
  */
  readonly linkedinOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig;
  /**
  * Input configuration for a Microsoft OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#microsoft_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#microsoft_oauth_2_provider_config}
  */
  readonly microsoftOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig;
  /**
  * Input configuration for a Salesforce OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#salesforce_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#salesforce_oauth_2_provider_config}
  */
  readonly salesforceOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig;
  /**
  * Input configuration for a Slack OAuth2 provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#slack_oauth_2_provider_config BedrockagentcoreOAuth2CredentialProvider#slack_oauth_2_provider_config}
  */
  readonly slackOauth2ProviderConfig?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig;
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    atlassian_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigToTerraform(struct!.atlassianOauth2ProviderConfig),
    custom_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigToTerraform(struct!.customOauth2ProviderConfig),
    github_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigToTerraform(struct!.githubOauth2ProviderConfig),
    google_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigToTerraform(struct!.googleOauth2ProviderConfig),
    included_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigToTerraform(struct!.includedOauth2ProviderConfig),
    linkedin_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigToTerraform(struct!.linkedinOauth2ProviderConfig),
    microsoft_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigToTerraform(struct!.microsoftOauth2ProviderConfig),
    salesforce_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigToTerraform(struct!.salesforceOauth2ProviderConfig),
    slack_oauth_2_provider_config: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigToTerraform(struct!.slackOauth2ProviderConfig),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    atlassian_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigToHclTerraform(struct!.atlassianOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig",
    },
    custom_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigToHclTerraform(struct!.customOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig",
    },
    github_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigToHclTerraform(struct!.githubOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig",
    },
    google_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigToHclTerraform(struct!.googleOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig",
    },
    included_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigToHclTerraform(struct!.includedOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig",
    },
    linkedin_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigToHclTerraform(struct!.linkedinOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig",
    },
    microsoft_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigToHclTerraform(struct!.microsoftOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig",
    },
    salesforce_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigToHclTerraform(struct!.salesforceOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig",
    },
    slack_oauth_2_provider_config: {
      value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigToHclTerraform(struct!.slackOauth2ProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atlassianOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.atlassianOauth2ProviderConfig = this._atlassianOauth2ProviderConfig?.internalValue;
    }
    if (this._customOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOauth2ProviderConfig = this._customOauth2ProviderConfig?.internalValue;
    }
    if (this._githubOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOauth2ProviderConfig = this._githubOauth2ProviderConfig?.internalValue;
    }
    if (this._googleOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleOauth2ProviderConfig = this._googleOauth2ProviderConfig?.internalValue;
    }
    if (this._includedOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedOauth2ProviderConfig = this._includedOauth2ProviderConfig?.internalValue;
    }
    if (this._linkedinOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedinOauth2ProviderConfig = this._linkedinOauth2ProviderConfig?.internalValue;
    }
    if (this._microsoftOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftOauth2ProviderConfig = this._microsoftOauth2ProviderConfig?.internalValue;
    }
    if (this._salesforceOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceOauth2ProviderConfig = this._salesforceOauth2ProviderConfig?.internalValue;
    }
    if (this._slackOauth2ProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackOauth2ProviderConfig = this._slackOauth2ProviderConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atlassianOauth2ProviderConfig.internalValue = undefined;
      this._customOauth2ProviderConfig.internalValue = undefined;
      this._githubOauth2ProviderConfig.internalValue = undefined;
      this._googleOauth2ProviderConfig.internalValue = undefined;
      this._includedOauth2ProviderConfig.internalValue = undefined;
      this._linkedinOauth2ProviderConfig.internalValue = undefined;
      this._microsoftOauth2ProviderConfig.internalValue = undefined;
      this._salesforceOauth2ProviderConfig.internalValue = undefined;
      this._slackOauth2ProviderConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atlassianOauth2ProviderConfig.internalValue = value.atlassianOauth2ProviderConfig;
      this._customOauth2ProviderConfig.internalValue = value.customOauth2ProviderConfig;
      this._githubOauth2ProviderConfig.internalValue = value.githubOauth2ProviderConfig;
      this._googleOauth2ProviderConfig.internalValue = value.googleOauth2ProviderConfig;
      this._includedOauth2ProviderConfig.internalValue = value.includedOauth2ProviderConfig;
      this._linkedinOauth2ProviderConfig.internalValue = value.linkedinOauth2ProviderConfig;
      this._microsoftOauth2ProviderConfig.internalValue = value.microsoftOauth2ProviderConfig;
      this._salesforceOauth2ProviderConfig.internalValue = value.salesforceOauth2ProviderConfig;
      this._slackOauth2ProviderConfig.internalValue = value.slackOauth2ProviderConfig;
    }
  }

  // atlassian_oauth_2_provider_config - computed: true, optional: true, required: false
  private _atlassianOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfigOutputReference(this, "atlassian_oauth_2_provider_config");
  public get atlassianOauth2ProviderConfig() {
    return this._atlassianOauth2ProviderConfig;
  }
  public putAtlassianOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputAtlassianOauth2ProviderConfig) {
    this._atlassianOauth2ProviderConfig.internalValue = value;
  }
  public resetAtlassianOauth2ProviderConfig() {
    this._atlassianOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atlassianOauth2ProviderConfigInput() {
    return this._atlassianOauth2ProviderConfig.internalValue;
  }

  // custom_oauth_2_provider_config - computed: true, optional: true, required: false
  private _customOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfigOutputReference(this, "custom_oauth_2_provider_config");
  public get customOauth2ProviderConfig() {
    return this._customOauth2ProviderConfig;
  }
  public putCustomOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputCustomOauth2ProviderConfig) {
    this._customOauth2ProviderConfig.internalValue = value;
  }
  public resetCustomOauth2ProviderConfig() {
    this._customOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOauth2ProviderConfigInput() {
    return this._customOauth2ProviderConfig.internalValue;
  }

  // github_oauth_2_provider_config - computed: true, optional: true, required: false
  private _githubOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfigOutputReference(this, "github_oauth_2_provider_config");
  public get githubOauth2ProviderConfig() {
    return this._githubOauth2ProviderConfig;
  }
  public putGithubOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGithubOauth2ProviderConfig) {
    this._githubOauth2ProviderConfig.internalValue = value;
  }
  public resetGithubOauth2ProviderConfig() {
    this._githubOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOauth2ProviderConfigInput() {
    return this._githubOauth2ProviderConfig.internalValue;
  }

  // google_oauth_2_provider_config - computed: true, optional: true, required: false
  private _googleOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfigOutputReference(this, "google_oauth_2_provider_config");
  public get googleOauth2ProviderConfig() {
    return this._googleOauth2ProviderConfig;
  }
  public putGoogleOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputGoogleOauth2ProviderConfig) {
    this._googleOauth2ProviderConfig.internalValue = value;
  }
  public resetGoogleOauth2ProviderConfig() {
    this._googleOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleOauth2ProviderConfigInput() {
    return this._googleOauth2ProviderConfig.internalValue;
  }

  // included_oauth_2_provider_config - computed: true, optional: true, required: false
  private _includedOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfigOutputReference(this, "included_oauth_2_provider_config");
  public get includedOauth2ProviderConfig() {
    return this._includedOauth2ProviderConfig;
  }
  public putIncludedOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputIncludedOauth2ProviderConfig) {
    this._includedOauth2ProviderConfig.internalValue = value;
  }
  public resetIncludedOauth2ProviderConfig() {
    this._includedOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedOauth2ProviderConfigInput() {
    return this._includedOauth2ProviderConfig.internalValue;
  }

  // linkedin_oauth_2_provider_config - computed: true, optional: true, required: false
  private _linkedinOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfigOutputReference(this, "linkedin_oauth_2_provider_config");
  public get linkedinOauth2ProviderConfig() {
    return this._linkedinOauth2ProviderConfig;
  }
  public putLinkedinOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputLinkedinOauth2ProviderConfig) {
    this._linkedinOauth2ProviderConfig.internalValue = value;
  }
  public resetLinkedinOauth2ProviderConfig() {
    this._linkedinOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedinOauth2ProviderConfigInput() {
    return this._linkedinOauth2ProviderConfig.internalValue;
  }

  // microsoft_oauth_2_provider_config - computed: true, optional: true, required: false
  private _microsoftOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfigOutputReference(this, "microsoft_oauth_2_provider_config");
  public get microsoftOauth2ProviderConfig() {
    return this._microsoftOauth2ProviderConfig;
  }
  public putMicrosoftOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputMicrosoftOauth2ProviderConfig) {
    this._microsoftOauth2ProviderConfig.internalValue = value;
  }
  public resetMicrosoftOauth2ProviderConfig() {
    this._microsoftOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftOauth2ProviderConfigInput() {
    return this._microsoftOauth2ProviderConfig.internalValue;
  }

  // salesforce_oauth_2_provider_config - computed: true, optional: true, required: false
  private _salesforceOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfigOutputReference(this, "salesforce_oauth_2_provider_config");
  public get salesforceOauth2ProviderConfig() {
    return this._salesforceOauth2ProviderConfig;
  }
  public putSalesforceOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSalesforceOauth2ProviderConfig) {
    this._salesforceOauth2ProviderConfig.internalValue = value;
  }
  public resetSalesforceOauth2ProviderConfig() {
    this._salesforceOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceOauth2ProviderConfigInput() {
    return this._salesforceOauth2ProviderConfig.internalValue;
  }

  // slack_oauth_2_provider_config - computed: true, optional: true, required: false
  private _slackOauth2ProviderConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfigOutputReference(this, "slack_oauth_2_provider_config");
  public get slackOauth2ProviderConfig() {
    return this._slackOauth2ProviderConfig;
  }
  public putSlackOauth2ProviderConfig(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputSlackOauth2ProviderConfig) {
    this._slackOauth2ProviderConfig.internalValue = value;
  }
  public resetSlackOauth2ProviderConfig() {
    this._slackOauth2ProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackOauth2ProviderConfigInput() {
    return this._slackOauth2ProviderConfig.internalValue;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata {
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery {
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_server_metadata - computed: true, optional: false, required: false
  private _authorizationServerMetadata = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryAuthorizationServerMetadataOutputReference(this, "authorization_server_metadata");
  public get authorizationServerMetadata() {
    return this._authorizationServerMetadata;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig {
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor_token_content - computed: true, optional: false, required: false
  public get actorTokenContent() {
    return this.getStringAttribute('actor_token_content');
  }

  // actor_token_scopes - computed: true, optional: false, required: false
  public get actorTokenScopes() {
    return this.getListAttribute('actor_token_scopes');
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig {
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // token_exchange_grant_type_config - computed: true, optional: false, required: false
  private _tokenExchangeGrantTypeConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigTokenExchangeGrantTypeConfigOutputReference(this, "token_exchange_grant_type_config");
  public get tokenExchangeGrantTypeConfig() {
    return this._tokenExchangeGrantTypeConfig;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput {
}

export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_authentication_method - computed: true, optional: false, required: false
  public get clientAuthenticationMethod() {
    return this.getStringAttribute('client_authentication_method');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // oauth_discovery - computed: true, optional: false, required: false
  private _oauthDiscovery = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOauthDiscoveryOutputReference(this, "oauth_discovery");
  public get oauthDiscovery() {
    return this._oauthDiscovery;
  }

  // on_behalf_of_token_exchange_config - computed: true, optional: false, required: false
  private _onBehalfOfTokenExchangeConfig = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOnBehalfOfTokenExchangeConfigOutputReference(this, "on_behalf_of_token_exchange_config");
  public get onBehalfOfTokenExchangeConfig() {
    return this._onBehalfOfTokenExchangeConfig;
  }
}
export interface BedrockagentcoreOAuth2CredentialProviderTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#key BedrockagentcoreOAuth2CredentialProvider#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#value BedrockagentcoreOAuth2CredentialProvider#value}
  */
  readonly value?: string;
}

export function bedrockagentcoreOAuth2CredentialProviderTagsToTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockagentcoreOAuth2CredentialProviderTagsToHclTerraform(struct?: BedrockagentcoreOAuth2CredentialProviderTags | cdktn.IResolvable): any {
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

export class BedrockagentcoreOAuth2CredentialProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreOAuth2CredentialProviderTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreOAuth2CredentialProviderTags | cdktn.IResolvable | undefined) {
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

export class BedrockagentcoreOAuth2CredentialProviderTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreOAuth2CredentialProviderTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreOAuth2CredentialProviderTagsOutputReference {
    return new BedrockagentcoreOAuth2CredentialProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider awscc_bedrockagentcore_o_auth_2_credential_provider}
*/
export class BedrockagentcoreOAuth2CredentialProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_o_auth_2_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreOAuth2CredentialProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreOAuth2CredentialProvider to import
  * @param importFromId The id of the existing BedrockagentcoreOAuth2CredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreOAuth2CredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_o_auth_2_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_o_auth_2_credential_provider awscc_bedrockagentcore_o_auth_2_credential_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreOAuth2CredentialProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreOAuth2CredentialProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_o_auth_2_credential_provider',
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
    this._credentialProviderVendor = config.credentialProviderVendor;
    this._name = config.name;
    this._oauth2ProviderConfigInput.internalValue = config.oauth2ProviderConfigInput;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // client_secret_arn - computed: true, optional: false, required: false
  private _clientSecretArn = new BedrockagentcoreOAuth2CredentialProviderClientSecretArnOutputReference(this, "client_secret_arn");
  public get clientSecretArn() {
    return this._clientSecretArn;
  }

  // client_secret_json_key - computed: true, optional: false, required: false
  public get clientSecretJsonKey() {
    return this.getStringAttribute('client_secret_json_key');
  }

  // client_secret_source - computed: true, optional: false, required: false
  public get clientSecretSource() {
    return this.getStringAttribute('client_secret_source');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // credential_provider_arn - computed: true, optional: false, required: false
  public get credentialProviderArn() {
    return this.getStringAttribute('credential_provider_arn');
  }

  // credential_provider_vendor - computed: false, optional: false, required: true
  private _credentialProviderVendor?: string;
  public get credentialProviderVendor() {
    return this.getStringAttribute('credential_provider_vendor');
  }
  public set credentialProviderVendor(value: string) {
    this._credentialProviderVendor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderVendorInput() {
    return this._credentialProviderVendor;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // oauth_2_provider_config_input - computed: true, optional: true, required: false
  private _oauth2ProviderConfigInput = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputOutputReference(this, "oauth_2_provider_config_input");
  public get oauth2ProviderConfigInput() {
    return this._oauth2ProviderConfigInput;
  }
  public putOauth2ProviderConfigInput(value: BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput) {
    this._oauth2ProviderConfigInput.internalValue = value;
  }
  public resetOauth2ProviderConfigInput() {
    this._oauth2ProviderConfigInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ProviderConfigInputInput() {
    return this._oauth2ProviderConfigInput.internalValue;
  }

  // oauth_2_provider_config_output - computed: true, optional: false, required: false
  private _oauth2ProviderConfigOutput = new BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigOutputOutputReference(this, "oauth_2_provider_config_output");
  public get oauth2ProviderConfigOutput() {
    return this._oauth2ProviderConfigOutput;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockagentcoreOAuth2CredentialProviderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockagentcoreOAuth2CredentialProviderTags[] | cdktn.IResolvable) {
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
      credential_provider_vendor: cdktn.stringToTerraform(this._credentialProviderVendor),
      name: cdktn.stringToTerraform(this._name),
      oauth_2_provider_config_input: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputToTerraform(this._oauth2ProviderConfigInput.internalValue),
      tags: cdktn.listMapper(bedrockagentcoreOAuth2CredentialProviderTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_provider_vendor: {
        value: cdktn.stringToHclTerraform(this._credentialProviderVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_2_provider_config_input: {
        value: bedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInputToHclTerraform(this._oauth2ProviderConfigInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreOAuth2CredentialProviderOauth2ProviderConfigInput",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockagentcoreOAuth2CredentialProviderTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreOAuth2CredentialProviderTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
