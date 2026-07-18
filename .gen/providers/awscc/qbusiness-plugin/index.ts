// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QbusinessPluginConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}
  */
  readonly authConfiguration: QbusinessPluginAuthConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}
  */
  readonly customPluginConfiguration?: QbusinessPluginCustomPluginConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}
  */
  readonly tags?: QbusinessPluginTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}
  */
  readonly type: string;
}
export interface QbusinessPluginAuthConfigurationBasicAuthConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}
  */
  readonly secretArn?: string;
}

export function qbusinessPluginAuthConfigurationBasicAuthConfigurationToTerraform(struct?: QbusinessPluginAuthConfigurationBasicAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function qbusinessPluginAuthConfigurationBasicAuthConfigurationToHclTerraform(struct?: QbusinessPluginAuthConfigurationBasicAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessPluginAuthConfigurationBasicAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessPluginAuthConfigurationBasicAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
    }
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}
  */
  readonly authorizationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}
  */
  readonly tokenUrl?: string;
}

export function qbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationToTerraform(struct?: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_url: cdktn.stringToTerraform(struct!.authorizationUrl),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    token_url: cdktn.stringToTerraform(struct!.tokenUrl),
  }
}


export function qbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationToHclTerraform(struct?: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_url: {
      value: cdktn.stringToHclTerraform(struct!.authorizationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationUrl = this._authorizationUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationUrl = undefined;
      this._roleArn = undefined;
      this._secretArn = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationUrl = value.authorizationUrl;
      this._roleArn = value.roleArn;
      this._secretArn = value.secretArn;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // authorization_url - computed: true, optional: true, required: false
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  public resetAuthorizationUrl() {
    this._authorizationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
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
export interface QbusinessPluginAuthConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}
  */
  readonly basicAuthConfiguration?: QbusinessPluginAuthConfigurationBasicAuthConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}
  */
  readonly noAuthConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}
  */
  readonly oAuth2ClientCredentialConfiguration?: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration;
}

export function qbusinessPluginAuthConfigurationToTerraform(struct?: QbusinessPluginAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth_configuration: qbusinessPluginAuthConfigurationBasicAuthConfigurationToTerraform(struct!.basicAuthConfiguration),
    no_auth_configuration: cdktn.stringToTerraform(struct!.noAuthConfiguration),
    o_auth_2_client_credential_configuration: qbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationToTerraform(struct!.oAuth2ClientCredentialConfiguration),
  }
}


export function qbusinessPluginAuthConfigurationToHclTerraform(struct?: QbusinessPluginAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth_configuration: {
      value: qbusinessPluginAuthConfigurationBasicAuthConfigurationToHclTerraform(struct!.basicAuthConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessPluginAuthConfigurationBasicAuthConfiguration",
    },
    no_auth_configuration: {
      value: cdktn.stringToHclTerraform(struct!.noAuthConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_2_client_credential_configuration: {
      value: qbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationToHclTerraform(struct!.oAuth2ClientCredentialConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessPluginAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessPluginAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthConfiguration = this._basicAuthConfiguration?.internalValue;
    }
    if (this._noAuthConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuthConfiguration = this._noAuthConfiguration;
    }
    if (this._oAuth2ClientCredentialConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuth2ClientCredentialConfiguration = this._oAuth2ClientCredentialConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessPluginAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuthConfiguration.internalValue = undefined;
      this._noAuthConfiguration = undefined;
      this._oAuth2ClientCredentialConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuthConfiguration.internalValue = value.basicAuthConfiguration;
      this._noAuthConfiguration = value.noAuthConfiguration;
      this._oAuth2ClientCredentialConfiguration.internalValue = value.oAuth2ClientCredentialConfiguration;
    }
  }

  // basic_auth_configuration - computed: true, optional: true, required: false
  private _basicAuthConfiguration = new QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(this, "basic_auth_configuration");
  public get basicAuthConfiguration() {
    return this._basicAuthConfiguration;
  }
  public putBasicAuthConfiguration(value: QbusinessPluginAuthConfigurationBasicAuthConfiguration) {
    this._basicAuthConfiguration.internalValue = value;
  }
  public resetBasicAuthConfiguration() {
    this._basicAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthConfigurationInput() {
    return this._basicAuthConfiguration.internalValue;
  }

  // no_auth_configuration - computed: true, optional: true, required: false
  private _noAuthConfiguration?: string; 
  public get noAuthConfiguration() {
    return this.getStringAttribute('no_auth_configuration');
  }
  public set noAuthConfiguration(value: string) {
    this._noAuthConfiguration = value;
  }
  public resetNoAuthConfiguration() {
    this._noAuthConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthConfigurationInput() {
    return this._noAuthConfiguration;
  }

  // o_auth_2_client_credential_configuration - computed: true, optional: true, required: false
  private _oAuth2ClientCredentialConfiguration = new QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(this, "o_auth_2_client_credential_configuration");
  public get oAuth2ClientCredentialConfiguration() {
    return this._oAuth2ClientCredentialConfiguration;
  }
  public putOAuth2ClientCredentialConfiguration(value: QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration) {
    this._oAuth2ClientCredentialConfiguration.internalValue = value;
  }
  public resetOAuth2ClientCredentialConfiguration() {
    this._oAuth2ClientCredentialConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuth2ClientCredentialConfigurationInput() {
    return this._oAuth2ClientCredentialConfiguration.internalValue;
  }
}
export interface QbusinessPluginCustomPluginConfigurationApiSchemaS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}
  */
  readonly key?: string;
}

export function qbusinessPluginCustomPluginConfigurationApiSchemaS3ToTerraform(struct?: QbusinessPluginCustomPluginConfigurationApiSchemaS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function qbusinessPluginCustomPluginConfigurationApiSchemaS3ToHclTerraform(struct?: QbusinessPluginCustomPluginConfigurationApiSchemaS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessPluginCustomPluginConfigurationApiSchemaS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessPluginCustomPluginConfigurationApiSchemaS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface QbusinessPluginCustomPluginConfigurationApiSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}
  */
  readonly s3?: QbusinessPluginCustomPluginConfigurationApiSchemaS3;
}

export function qbusinessPluginCustomPluginConfigurationApiSchemaToTerraform(struct?: QbusinessPluginCustomPluginConfigurationApiSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload: cdktn.stringToTerraform(struct!.payload),
    s3: qbusinessPluginCustomPluginConfigurationApiSchemaS3ToTerraform(struct!.s3),
  }
}


export function qbusinessPluginCustomPluginConfigurationApiSchemaToHclTerraform(struct?: QbusinessPluginCustomPluginConfigurationApiSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: qbusinessPluginCustomPluginConfigurationApiSchemaS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessPluginCustomPluginConfigurationApiSchemaS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessPluginCustomPluginConfigurationApiSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessPluginCustomPluginConfigurationApiSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
      this._s3.internalValue = value.s3;
    }
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: QbusinessPluginCustomPluginConfigurationApiSchemaS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface QbusinessPluginCustomPluginConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}
  */
  readonly apiSchema?: QbusinessPluginCustomPluginConfigurationApiSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}
  */
  readonly apiSchemaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}
  */
  readonly description?: string;
}

export function qbusinessPluginCustomPluginConfigurationToTerraform(struct?: QbusinessPluginCustomPluginConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_schema: qbusinessPluginCustomPluginConfigurationApiSchemaToTerraform(struct!.apiSchema),
    api_schema_type: cdktn.stringToTerraform(struct!.apiSchemaType),
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function qbusinessPluginCustomPluginConfigurationToHclTerraform(struct?: QbusinessPluginCustomPluginConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_schema: {
      value: qbusinessPluginCustomPluginConfigurationApiSchemaToHclTerraform(struct!.apiSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "QbusinessPluginCustomPluginConfigurationApiSchema",
    },
    api_schema_type: {
      value: cdktn.stringToHclTerraform(struct!.apiSchemaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QbusinessPluginCustomPluginConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QbusinessPluginCustomPluginConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSchema = this._apiSchema?.internalValue;
    }
    if (this._apiSchemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSchemaType = this._apiSchemaType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QbusinessPluginCustomPluginConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSchema.internalValue = undefined;
      this._apiSchemaType = undefined;
      this._description = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSchema.internalValue = value.apiSchema;
      this._apiSchemaType = value.apiSchemaType;
      this._description = value.description;
    }
  }

  // api_schema - computed: true, optional: true, required: false
  private _apiSchema = new QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(this, "api_schema");
  public get apiSchema() {
    return this._apiSchema;
  }
  public putApiSchema(value: QbusinessPluginCustomPluginConfigurationApiSchema) {
    this._apiSchema.internalValue = value;
  }
  public resetApiSchema() {
    this._apiSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSchemaInput() {
    return this._apiSchema.internalValue;
  }

  // api_schema_type - computed: true, optional: true, required: false
  private _apiSchemaType?: string; 
  public get apiSchemaType() {
    return this.getStringAttribute('api_schema_type');
  }
  public set apiSchemaType(value: string) {
    this._apiSchemaType = value;
  }
  public resetApiSchemaType() {
    this._apiSchemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSchemaTypeInput() {
    return this._apiSchemaType;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}
export interface QbusinessPluginTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}
  */
  readonly value?: string;
}

export function qbusinessPluginTagsToTerraform(struct?: QbusinessPluginTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function qbusinessPluginTagsToHclTerraform(struct?: QbusinessPluginTags | cdktn.IResolvable): any {
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

export class QbusinessPluginTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QbusinessPluginTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QbusinessPluginTags | cdktn.IResolvable | undefined) {
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

export class QbusinessPluginTagsList extends cdktn.ComplexList {
  public internalValue? : QbusinessPluginTags[] | cdktn.IResolvable

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
  public get(index: number): QbusinessPluginTagsOutputReference {
    return new QbusinessPluginTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin awscc_qbusiness_plugin}
*/
export class QbusinessPlugin extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QbusinessPlugin to import
  * @param importFromId The id of the existing QbusinessPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QbusinessPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/qbusiness_plugin awscc_qbusiness_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QbusinessPluginConfig
  */
  public constructor(scope: Construct, id: string, config: QbusinessPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_plugin',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._authConfiguration.internalValue = config.authConfiguration;
    this._customPluginConfiguration.internalValue = config.customPluginConfiguration;
    this._displayName = config.displayName;
    this._serverUrl = config.serverUrl;
    this._state = config.state;
    this._tags.internalValue = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // auth_configuration - computed: false, optional: false, required: true
  private _authConfiguration = new QbusinessPluginAuthConfigurationOutputReference(this, "auth_configuration");
  public get authConfiguration() {
    return this._authConfiguration;
  }
  public putAuthConfiguration(value: QbusinessPluginAuthConfiguration) {
    this._authConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigurationInput() {
    return this._authConfiguration.internalValue;
  }

  // build_status - computed: true, optional: false, required: false
  public get buildStatus() {
    return this.getStringAttribute('build_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_plugin_configuration - computed: true, optional: true, required: false
  private _customPluginConfiguration = new QbusinessPluginCustomPluginConfigurationOutputReference(this, "custom_plugin_configuration");
  public get customPluginConfiguration() {
    return this._customPluginConfiguration;
  }
  public putCustomPluginConfiguration(value: QbusinessPluginCustomPluginConfiguration) {
    this._customPluginConfiguration.internalValue = value;
  }
  public resetCustomPluginConfiguration() {
    this._customPluginConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginConfigurationInput() {
    return this._customPluginConfiguration.internalValue;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plugin_arn - computed: true, optional: false, required: false
  public get pluginArn() {
    return this.getStringAttribute('plugin_arn');
  }

  // plugin_id - computed: true, optional: false, required: false
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }

  // server_url - computed: true, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QbusinessPluginTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QbusinessPluginTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktn.stringToTerraform(this._applicationId),
      auth_configuration: qbusinessPluginAuthConfigurationToTerraform(this._authConfiguration.internalValue),
      custom_plugin_configuration: qbusinessPluginCustomPluginConfigurationToTerraform(this._customPluginConfiguration.internalValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      server_url: cdktn.stringToTerraform(this._serverUrl),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.listMapper(qbusinessPluginTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktn.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_configuration: {
        value: qbusinessPluginAuthConfigurationToHclTerraform(this._authConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessPluginAuthConfiguration",
      },
      custom_plugin_configuration: {
        value: qbusinessPluginCustomPluginConfigurationToHclTerraform(this._customPluginConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QbusinessPluginCustomPluginConfiguration",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktn.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(qbusinessPluginTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QbusinessPluginTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
