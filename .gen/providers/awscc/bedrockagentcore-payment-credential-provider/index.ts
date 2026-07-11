// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcorePaymentCredentialProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Supported vendor types for payment providers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#credential_provider_vendor BedrockagentcorePaymentCredentialProvider#credential_provider_vendor}
  */
  readonly credentialProviderVendor: string;
  /**
  * Unique name for the payment credential provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#name BedrockagentcorePaymentCredentialProvider#name}
  */
  readonly name: string;
  /**
  * Provider configuration input containing secrets for creation/update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#provider_configuration_input BedrockagentcorePaymentCredentialProvider#provider_configuration_input}
  */
  readonly providerConfigurationInput?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput;
  /**
  * Tags for the payment credential provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#tags BedrockagentcorePaymentCredentialProvider#tags}
  */
  readonly tags?: BedrockagentcorePaymentCredentialProviderTags[] | cdktn.IResolvable;
}
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig | cdktn.IResolvable): any {
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

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig | cdktn.IResolvable | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig | cdktn.IResolvable): any {
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

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig | cdktn.IResolvable | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration {
  /**
  * The Coinbase CDP API key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_id BedrockagentcorePaymentCredentialProvider#api_key_id}
  */
  readonly apiKeyId?: string;
  /**
  * The Coinbase CDP API key secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret BedrockagentcorePaymentCredentialProvider#api_key_secret}
  */
  readonly apiKeySecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_config BedrockagentcorePaymentCredentialProvider#api_key_secret_config}
  */
  readonly apiKeySecretConfig?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig;
  /**
  * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_source BedrockagentcorePaymentCredentialProvider#api_key_secret_source}
  */
  readonly apiKeySecretSource?: string;
  /**
  * The Coinbase CDP wallet secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret BedrockagentcorePaymentCredentialProvider#wallet_secret}
  */
  readonly walletSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_config BedrockagentcorePaymentCredentialProvider#wallet_secret_config}
  */
  readonly walletSecretConfig?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig;
  /**
  * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_source BedrockagentcorePaymentCredentialProvider#wallet_secret_source}
  */
  readonly walletSecretSource?: string;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_id: cdktn.stringToTerraform(struct!.apiKeyId),
    api_key_secret: cdktn.stringToTerraform(struct!.apiKeySecret),
    api_key_secret_config: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigToTerraform(struct!.apiKeySecretConfig),
    api_key_secret_source: cdktn.stringToTerraform(struct!.apiKeySecretSource),
    wallet_secret: cdktn.stringToTerraform(struct!.walletSecret),
    wallet_secret_config: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigToTerraform(struct!.walletSecretConfig),
    wallet_secret_source: cdktn.stringToTerraform(struct!.walletSecretSource),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_id: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_secret: {
      value: cdktn.stringToHclTerraform(struct!.apiKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_secret_config: {
      value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigToHclTerraform(struct!.apiKeySecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig",
    },
    api_key_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.apiKeySecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret: {
      value: cdktn.stringToHclTerraform(struct!.walletSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret_config: {
      value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigToHclTerraform(struct!.walletSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig",
    },
    wallet_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.walletSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyId = this._apiKeyId;
    }
    if (this._apiKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecret = this._apiKeySecret;
    }
    if (this._apiKeySecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretConfig = this._apiKeySecretConfig?.internalValue;
    }
    if (this._apiKeySecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeySecretSource = this._apiKeySecretSource;
    }
    if (this._walletSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecret = this._walletSecret;
    }
    if (this._walletSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretConfig = this._walletSecretConfig?.internalValue;
    }
    if (this._walletSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretSource = this._walletSecretSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyId = undefined;
      this._apiKeySecret = undefined;
      this._apiKeySecretConfig.internalValue = undefined;
      this._apiKeySecretSource = undefined;
      this._walletSecret = undefined;
      this._walletSecretConfig.internalValue = undefined;
      this._walletSecretSource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyId = value.apiKeyId;
      this._apiKeySecret = value.apiKeySecret;
      this._apiKeySecretConfig.internalValue = value.apiKeySecretConfig;
      this._apiKeySecretSource = value.apiKeySecretSource;
      this._walletSecret = value.walletSecret;
      this._walletSecretConfig.internalValue = value.walletSecretConfig;
      this._walletSecretSource = value.walletSecretSource;
    }
  }

  // api_key_id - computed: true, optional: true, required: false
  private _apiKeyId?: string; 
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }
  public set apiKeyId(value: string) {
    this._apiKeyId = value;
  }
  public resetApiKeyId() {
    this._apiKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
  }

  // api_key_secret - computed: true, optional: true, required: false
  private _apiKeySecret?: string; 
  public get apiKeySecret() {
    return this.getStringAttribute('api_key_secret');
  }
  public set apiKeySecret(value: string) {
    this._apiKeySecret = value;
  }
  public resetApiKeySecret() {
    this._apiKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretInput() {
    return this._apiKeySecret;
  }

  // api_key_secret_config - computed: true, optional: true, required: false
  private _apiKeySecretConfig = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference(this, "api_key_secret_config");
  public get apiKeySecretConfig() {
    return this._apiKeySecretConfig;
  }
  public putApiKeySecretConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig) {
    this._apiKeySecretConfig.internalValue = value;
  }
  public resetApiKeySecretConfig() {
    this._apiKeySecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretConfigInput() {
    return this._apiKeySecretConfig.internalValue;
  }

  // api_key_secret_source - computed: true, optional: true, required: false
  private _apiKeySecretSource?: string; 
  public get apiKeySecretSource() {
    return this.getStringAttribute('api_key_secret_source');
  }
  public set apiKeySecretSource(value: string) {
    this._apiKeySecretSource = value;
  }
  public resetApiKeySecretSource() {
    this._apiKeySecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySecretSourceInput() {
    return this._apiKeySecretSource;
  }

  // wallet_secret - computed: true, optional: true, required: false
  private _walletSecret?: string; 
  public get walletSecret() {
    return this.getStringAttribute('wallet_secret');
  }
  public set walletSecret(value: string) {
    this._walletSecret = value;
  }
  public resetWalletSecret() {
    this._walletSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretInput() {
    return this._walletSecret;
  }

  // wallet_secret_config - computed: true, optional: true, required: false
  private _walletSecretConfig = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference(this, "wallet_secret_config");
  public get walletSecretConfig() {
    return this._walletSecretConfig;
  }
  public putWalletSecretConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig) {
    this._walletSecretConfig.internalValue = value;
  }
  public resetWalletSecretConfig() {
    this._walletSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretConfigInput() {
    return this._walletSecretConfig.internalValue;
  }

  // wallet_secret_source - computed: true, optional: true, required: false
  private _walletSecretSource?: string; 
  public get walletSecretSource() {
    return this.getStringAttribute('wallet_secret_source');
  }
  public set walletSecretSource(value: string) {
    this._walletSecretSource = value;
  }
  public resetWalletSecretSource() {
    this._walletSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretSourceInput() {
    return this._walletSecretSource;
  }
}
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig | cdktn.IResolvable): any {
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

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig | cdktn.IResolvable | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig {
  /**
  * The JSON key within the secret that contains the credential value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}
  */
  readonly jsonKey?: string;
  /**
  * The ID or ARN of the secret in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}
  */
  readonly secretId?: string;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_key: cdktn.stringToTerraform(struct!.jsonKey),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig | cdktn.IResolvable): any {
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

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig | cdktn.IResolvable | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration {
  /**
  * The app ID provided by Privy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#app_id BedrockagentcorePaymentCredentialProvider#app_id}
  */
  readonly appId?: string;
  /**
  * The app secret provided by Privy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret BedrockagentcorePaymentCredentialProvider#app_secret}
  */
  readonly appSecret?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_config BedrockagentcorePaymentCredentialProvider#app_secret_config}
  */
  readonly appSecretConfig?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig;
  /**
  * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_source BedrockagentcorePaymentCredentialProvider#app_secret_source}
  */
  readonly appSecretSource?: string;
  /**
  * The authorization ID for the Stripe Privy integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_id BedrockagentcorePaymentCredentialProvider#authorization_id}
  */
  readonly authorizationId?: string;
  /**
  * The authorization private key for the Stripe Privy integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key BedrockagentcorePaymentCredentialProvider#authorization_private_key}
  */
  readonly authorizationPrivateKey?: string;
  /**
  * A reference to a customer-provided secret stored in AWS Secrets Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_config BedrockagentcorePaymentCredentialProvider#authorization_private_key_config}
  */
  readonly authorizationPrivateKeyConfig?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig;
  /**
  * The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_source BedrockagentcorePaymentCredentialProvider#authorization_private_key_source}
  */
  readonly authorizationPrivateKeySource?: string;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_id: cdktn.stringToTerraform(struct!.appId),
    app_secret: cdktn.stringToTerraform(struct!.appSecret),
    app_secret_config: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigToTerraform(struct!.appSecretConfig),
    app_secret_source: cdktn.stringToTerraform(struct!.appSecretSource),
    authorization_id: cdktn.stringToTerraform(struct!.authorizationId),
    authorization_private_key: cdktn.stringToTerraform(struct!.authorizationPrivateKey),
    authorization_private_key_config: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigToTerraform(struct!.authorizationPrivateKeyConfig),
    authorization_private_key_source: cdktn.stringToTerraform(struct!.authorizationPrivateKeySource),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_id: {
      value: cdktn.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret: {
      value: cdktn.stringToHclTerraform(struct!.appSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret_config: {
      value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigToHclTerraform(struct!.appSecretConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig",
    },
    app_secret_source: {
      value: cdktn.stringToHclTerraform(struct!.appSecretSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_id: {
      value: cdktn.stringToHclTerraform(struct!.authorizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_private_key: {
      value: cdktn.stringToHclTerraform(struct!.authorizationPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_private_key_config: {
      value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigToHclTerraform(struct!.authorizationPrivateKeyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig",
    },
    authorization_private_key_source: {
      value: cdktn.stringToHclTerraform(struct!.authorizationPrivateKeySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecret = this._appSecret;
    }
    if (this._appSecretConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecretConfig = this._appSecretConfig?.internalValue;
    }
    if (this._appSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecretSource = this._appSecretSource;
    }
    if (this._authorizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationId = this._authorizationId;
    }
    if (this._authorizationPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationPrivateKey = this._authorizationPrivateKey;
    }
    if (this._authorizationPrivateKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationPrivateKeyConfig = this._authorizationPrivateKeyConfig?.internalValue;
    }
    if (this._authorizationPrivateKeySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationPrivateKeySource = this._authorizationPrivateKeySource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._appSecret = undefined;
      this._appSecretConfig.internalValue = undefined;
      this._appSecretSource = undefined;
      this._authorizationId = undefined;
      this._authorizationPrivateKey = undefined;
      this._authorizationPrivateKeyConfig.internalValue = undefined;
      this._authorizationPrivateKeySource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._appSecret = value.appSecret;
      this._appSecretConfig.internalValue = value.appSecretConfig;
      this._appSecretSource = value.appSecretSource;
      this._authorizationId = value.authorizationId;
      this._authorizationPrivateKey = value.authorizationPrivateKey;
      this._authorizationPrivateKeyConfig.internalValue = value.authorizationPrivateKeyConfig;
      this._authorizationPrivateKeySource = value.authorizationPrivateKeySource;
    }
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_secret - computed: true, optional: true, required: false
  private _appSecret?: string; 
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  public resetAppSecret() {
    this._appSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret;
  }

  // app_secret_config - computed: true, optional: true, required: false
  private _appSecretConfig = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference(this, "app_secret_config");
  public get appSecretConfig() {
    return this._appSecretConfig;
  }
  public putAppSecretConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig) {
    this._appSecretConfig.internalValue = value;
  }
  public resetAppSecretConfig() {
    this._appSecretConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretConfigInput() {
    return this._appSecretConfig.internalValue;
  }

  // app_secret_source - computed: true, optional: true, required: false
  private _appSecretSource?: string; 
  public get appSecretSource() {
    return this.getStringAttribute('app_secret_source');
  }
  public set appSecretSource(value: string) {
    this._appSecretSource = value;
  }
  public resetAppSecretSource() {
    this._appSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretSourceInput() {
    return this._appSecretSource;
  }

  // authorization_id - computed: true, optional: true, required: false
  private _authorizationId?: string; 
  public get authorizationId() {
    return this.getStringAttribute('authorization_id');
  }
  public set authorizationId(value: string) {
    this._authorizationId = value;
  }
  public resetAuthorizationId() {
    this._authorizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationIdInput() {
    return this._authorizationId;
  }

  // authorization_private_key - computed: true, optional: true, required: false
  private _authorizationPrivateKey?: string; 
  public get authorizationPrivateKey() {
    return this.getStringAttribute('authorization_private_key');
  }
  public set authorizationPrivateKey(value: string) {
    this._authorizationPrivateKey = value;
  }
  public resetAuthorizationPrivateKey() {
    this._authorizationPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPrivateKeyInput() {
    return this._authorizationPrivateKey;
  }

  // authorization_private_key_config - computed: true, optional: true, required: false
  private _authorizationPrivateKeyConfig = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference(this, "authorization_private_key_config");
  public get authorizationPrivateKeyConfig() {
    return this._authorizationPrivateKeyConfig;
  }
  public putAuthorizationPrivateKeyConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig) {
    this._authorizationPrivateKeyConfig.internalValue = value;
  }
  public resetAuthorizationPrivateKeyConfig() {
    this._authorizationPrivateKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPrivateKeyConfigInput() {
    return this._authorizationPrivateKeyConfig.internalValue;
  }

  // authorization_private_key_source - computed: true, optional: true, required: false
  private _authorizationPrivateKeySource?: string; 
  public get authorizationPrivateKeySource() {
    return this.getStringAttribute('authorization_private_key_source');
  }
  public set authorizationPrivateKeySource(value: string) {
    this._authorizationPrivateKeySource = value;
  }
  public resetAuthorizationPrivateKeySource() {
    this._authorizationPrivateKeySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPrivateKeySourceInput() {
    return this._authorizationPrivateKeySource;
  }
}
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationInput {
  /**
  * Coinbase CDP configuration with API credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#coinbase_cdp_configuration BedrockagentcorePaymentCredentialProvider#coinbase_cdp_configuration}
  */
  readonly coinbaseCdpConfiguration?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration;
  /**
  * Stripe Privy configuration with credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#stripe_privy_configuration BedrockagentcorePaymentCredentialProvider#stripe_privy_configuration}
  */
  readonly stripePrivyConfiguration?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration;
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    coinbase_cdp_configuration: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationToTerraform(struct!.coinbaseCdpConfiguration),
    stripe_privy_configuration: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationToTerraform(struct!.stripePrivyConfiguration),
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationInputToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    coinbase_cdp_configuration: {
      value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationToHclTerraform(struct!.coinbaseCdpConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration",
    },
    stripe_privy_configuration: {
      value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationToHclTerraform(struct!.stripePrivyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationInput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coinbaseCdpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coinbaseCdpConfiguration = this._coinbaseCdpConfiguration?.internalValue;
    }
    if (this._stripePrivyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripePrivyConfiguration = this._stripePrivyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coinbaseCdpConfiguration.internalValue = undefined;
      this._stripePrivyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coinbaseCdpConfiguration.internalValue = value.coinbaseCdpConfiguration;
      this._stripePrivyConfiguration.internalValue = value.stripePrivyConfiguration;
    }
  }

  // coinbase_cdp_configuration - computed: true, optional: true, required: false
  private _coinbaseCdpConfiguration = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference(this, "coinbase_cdp_configuration");
  public get coinbaseCdpConfiguration() {
    return this._coinbaseCdpConfiguration;
  }
  public putCoinbaseCdpConfiguration(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration) {
    this._coinbaseCdpConfiguration.internalValue = value;
  }
  public resetCoinbaseCdpConfiguration() {
    this._coinbaseCdpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coinbaseCdpConfigurationInput() {
    return this._coinbaseCdpConfiguration.internalValue;
  }

  // stripe_privy_configuration - computed: true, optional: true, required: false
  private _stripePrivyConfiguration = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference(this, "stripe_privy_configuration");
  public get stripePrivyConfiguration() {
    return this._stripePrivyConfiguration;
  }
  public putStripePrivyConfiguration(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration) {
    this._stripePrivyConfiguration.internalValue = value;
  }
  public resetStripePrivyConfiguration() {
    this._stripePrivyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripePrivyConfigurationInput() {
    return this._stripePrivyConfiguration.internalValue;
  }
}
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // api_key_secret_arn - computed: true, optional: false, required: false
  private _apiKeySecretArn = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference(this, "api_key_secret_arn");
  public get apiKeySecretArn() {
    return this._apiKeySecretArn;
  }

  // api_key_secret_json_key - computed: true, optional: false, required: false
  public get apiKeySecretJsonKey() {
    return this.getStringAttribute('api_key_secret_json_key');
  }

  // api_key_secret_source - computed: true, optional: false, required: false
  public get apiKeySecretSource() {
    return this.getStringAttribute('api_key_secret_source');
  }

  // wallet_secret_arn - computed: true, optional: false, required: false
  private _walletSecretArn = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference(this, "wallet_secret_arn");
  public get walletSecretArn() {
    return this._walletSecretArn;
  }

  // wallet_secret_json_key - computed: true, optional: false, required: false
  public get walletSecretJsonKey() {
    return this.getStringAttribute('wallet_secret_json_key');
  }

  // wallet_secret_source - computed: true, optional: false, required: false
  public get walletSecretSource() {
    return this.getStringAttribute('wallet_secret_source');
  }
}
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn | undefined) {
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
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_secret_arn - computed: true, optional: false, required: false
  private _appSecretArn = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference(this, "app_secret_arn");
  public get appSecretArn() {
    return this._appSecretArn;
  }

  // app_secret_json_key - computed: true, optional: false, required: false
  public get appSecretJsonKey() {
    return this.getStringAttribute('app_secret_json_key');
  }

  // app_secret_source - computed: true, optional: false, required: false
  public get appSecretSource() {
    return this.getStringAttribute('app_secret_source');
  }

  // authorization_id - computed: true, optional: false, required: false
  public get authorizationId() {
    return this.getStringAttribute('authorization_id');
  }

  // authorization_private_key_arn - computed: true, optional: false, required: false
  private _authorizationPrivateKeyArn = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference(this, "authorization_private_key_arn");
  public get authorizationPrivateKeyArn() {
    return this._authorizationPrivateKeyArn;
  }

  // authorization_private_key_json_key - computed: true, optional: false, required: false
  public get authorizationPrivateKeyJsonKey() {
    return this.getStringAttribute('authorization_private_key_json_key');
  }

  // authorization_private_key_source - computed: true, optional: false, required: false
  public get authorizationPrivateKeySource() {
    return this.getStringAttribute('authorization_private_key_source');
  }
}
export interface BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput {
}

export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputToTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coinbase_cdp_configuration - computed: true, optional: false, required: false
  private _coinbaseCdpConfiguration = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference(this, "coinbase_cdp_configuration");
  public get coinbaseCdpConfiguration() {
    return this._coinbaseCdpConfiguration;
  }

  // stripe_privy_configuration - computed: true, optional: false, required: false
  private _stripePrivyConfiguration = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference(this, "stripe_privy_configuration");
  public get stripePrivyConfiguration() {
    return this._stripePrivyConfiguration;
  }
}
export interface BedrockagentcorePaymentCredentialProviderTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}
  */
  readonly value?: string;
}

export function bedrockagentcorePaymentCredentialProviderTagsToTerraform(struct?: BedrockagentcorePaymentCredentialProviderTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockagentcorePaymentCredentialProviderTagsToHclTerraform(struct?: BedrockagentcorePaymentCredentialProviderTags | cdktn.IResolvable): any {
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

export class BedrockagentcorePaymentCredentialProviderTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcorePaymentCredentialProviderTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcorePaymentCredentialProviderTags | cdktn.IResolvable | undefined) {
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

export class BedrockagentcorePaymentCredentialProviderTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcorePaymentCredentialProviderTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcorePaymentCredentialProviderTagsOutputReference {
    return new BedrockagentcorePaymentCredentialProviderTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}
*/
export class BedrockagentcorePaymentCredentialProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_payment_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcorePaymentCredentialProvider to import
  * @param importFromId The id of the existing BedrockagentcorePaymentCredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcorePaymentCredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_payment_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcorePaymentCredentialProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcorePaymentCredentialProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_payment_credential_provider',
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
    this._providerConfigurationInput.internalValue = config.providerConfigurationInput;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // provider_configuration_input - computed: true, optional: true, required: false
  private _providerConfigurationInput = new BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference(this, "provider_configuration_input");
  public get providerConfigurationInput() {
    return this._providerConfigurationInput;
  }
  public putProviderConfigurationInput(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput) {
    this._providerConfigurationInput.internalValue = value;
  }
  public resetProviderConfigurationInput() {
    this._providerConfigurationInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigurationInputInput() {
    return this._providerConfigurationInput.internalValue;
  }

  // provider_configuration_output - computed: true, optional: false, required: false
  private _providerConfigurationOutput = new BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference(this, "provider_configuration_output");
  public get providerConfigurationOutput() {
    return this._providerConfigurationOutput;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockagentcorePaymentCredentialProviderTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockagentcorePaymentCredentialProviderTags[] | cdktn.IResolvable) {
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
      provider_configuration_input: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputToTerraform(this._providerConfigurationInput.internalValue),
      tags: cdktn.listMapper(bedrockagentcorePaymentCredentialProviderTagsToTerraform, false)(this._tags.internalValue),
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
      provider_configuration_input: {
        value: bedrockagentcorePaymentCredentialProviderProviderConfigurationInputToHclTerraform(this._providerConfigurationInput.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcorePaymentCredentialProviderProviderConfigurationInput",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockagentcorePaymentCredentialProviderTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcorePaymentCredentialProviderTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
