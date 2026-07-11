// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppsyncChannelNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * AppSync Api Id that this Channel Namespace belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}
  */
  readonly apiId: string;
  /**
  * String of APPSYNC_JS code to be used by the handlers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}
  */
  readonly codeHandlers?: string;
  /**
  * The Amazon S3 endpoint where the code is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#code_s3_location AppsyncChannelNamespace#code_s3_location}
  */
  readonly codeS3Location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}
  */
  readonly handlerConfigs?: AppsyncChannelNamespaceHandlerConfigs;
  /**
  * Namespace indentifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}
  */
  readonly name: string;
  /**
  * List of AuthModes supported for Publish operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#publish_auth_modes AppsyncChannelNamespace#publish_auth_modes}
  */
  readonly publishAuthModes?: AppsyncChannelNamespacePublishAuthModes[] | cdktn.IResolvable;
  /**
  * List of AuthModes supported for Subscribe operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#subscribe_auth_modes AppsyncChannelNamespace#subscribe_auth_modes}
  */
  readonly subscribeAuthModes?: AppsyncChannelNamespaceSubscribeAuthModes[] | cdktn.IResolvable;
  /**
  * An arbitrary set of tags (key-value pairs) for this AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}
  */
  readonly tags?: AppsyncChannelNamespaceTags[] | cdktn.IResolvable;
}
export interface AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig {
  /**
  * Invocation type for direct lambda integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}
  */
  readonly invokeType?: string;
}

export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoke_type: cdktn.stringToTerraform(struct!.invokeType),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoke_type: {
      value: cdktn.stringToHclTerraform(struct!.invokeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeType = this._invokeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeType = value.invokeType;
    }
  }

  // invoke_type - computed: true, optional: true, required: false
  private _invokeType?: string;
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration {
  /**
  * Data source to invoke for this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}
  */
  readonly lambdaConfig?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig;
}

export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    lambda_config: appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToTerraform(struct!.lambdaConfig),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_config: {
      value: appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToHclTerraform(struct!.lambdaConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // data_source_name - computed: true, optional: true, required: false
  private _dataSourceName?: string;
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // lambda_config - computed: true, optional: true, required: false
  private _lambdaConfig = new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnPublish {
  /**
  * Integration behavior for a handler configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}
  */
  readonly integration?: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration;
}

export function appsyncChannelNamespaceHandlerConfigsOnPublishToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    integration: appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToTerraform(struct!.integration),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnPublishToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: appsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToHclTerraform(struct!.integration),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnPublish | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._integration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._integration.internalValue = value.integration;
    }
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string;
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // integration - computed: true, optional: true, required: false
  private _integration = new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig {
  /**
  * Invocation type for direct lambda integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}
  */
  readonly invokeType?: string;
}

export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invoke_type: cdktn.stringToTerraform(struct!.invokeType),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invoke_type: {
      value: cdktn.stringToHclTerraform(struct!.invokeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invokeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeType = this._invokeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invokeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invokeType = value.invokeType;
    }
  }

  // invoke_type - computed: true, optional: true, required: false
  private _invokeType?: string;
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  public resetInvokeType() {
    this._invokeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration {
  /**
  * Data source to invoke for this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}
  */
  readonly lambdaConfig?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig;
}

export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source_name: cdktn.stringToTerraform(struct!.dataSourceName),
    lambda_config: appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToTerraform(struct!.lambdaConfig),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_source_name: {
      value: cdktn.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_config: {
      value: appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToHclTerraform(struct!.lambdaConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._lambdaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConfig = this._lambdaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._lambdaConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._lambdaConfig.internalValue = value.lambdaConfig;
    }
  }

  // data_source_name - computed: true, optional: true, required: false
  private _dataSourceName?: string;
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // lambda_config - computed: true, optional: true, required: false
  private _lambdaConfig = new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }
}
export interface AppsyncChannelNamespaceHandlerConfigsOnSubscribe {
  /**
  * Integration behavior for a handler configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}
  */
  readonly integration?: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration;
}

export function appsyncChannelNamespaceHandlerConfigsOnSubscribeToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behavior: cdktn.stringToTerraform(struct!.behavior),
    integration: appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToTerraform(struct!.integration),
  }
}


export function appsyncChannelNamespaceHandlerConfigsOnSubscribeToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behavior: {
      value: cdktn.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: appsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToHclTerraform(struct!.integration),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._integration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._integration.internalValue = value.integration;
    }
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string;
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // integration - computed: true, optional: true, required: false
  private _integration = new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }
}
export interface AppsyncChannelNamespaceHandlerConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}
  */
  readonly onPublish?: AppsyncChannelNamespaceHandlerConfigsOnPublish;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}
  */
  readonly onSubscribe?: AppsyncChannelNamespaceHandlerConfigsOnSubscribe;
}

export function appsyncChannelNamespaceHandlerConfigsToTerraform(struct?: AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_publish: appsyncChannelNamespaceHandlerConfigsOnPublishToTerraform(struct!.onPublish),
    on_subscribe: appsyncChannelNamespaceHandlerConfigsOnSubscribeToTerraform(struct!.onSubscribe),
  }
}


export function appsyncChannelNamespaceHandlerConfigsToHclTerraform(struct?: AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_publish: {
      value: appsyncChannelNamespaceHandlerConfigsOnPublishToHclTerraform(struct!.onPublish),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnPublish",
    },
    on_subscribe: {
      value: appsyncChannelNamespaceHandlerConfigsOnSubscribeToHclTerraform(struct!.onSubscribe),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsyncChannelNamespaceHandlerConfigsOnSubscribe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncChannelNamespaceHandlerConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onPublish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPublish = this._onPublish?.internalValue;
    }
    if (this._onSubscribe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSubscribe = this._onSubscribe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncChannelNamespaceHandlerConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onPublish.internalValue = undefined;
      this._onSubscribe.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onPublish.internalValue = value.onPublish;
      this._onSubscribe.internalValue = value.onSubscribe;
    }
  }

  // on_publish - computed: true, optional: true, required: false
  private _onPublish = new AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(this, "on_publish");
  public get onPublish() {
    return this._onPublish;
  }
  public putOnPublish(value: AppsyncChannelNamespaceHandlerConfigsOnPublish) {
    this._onPublish.internalValue = value;
  }
  public resetOnPublish() {
    this._onPublish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPublishInput() {
    return this._onPublish.internalValue;
  }

  // on_subscribe - computed: true, optional: true, required: false
  private _onSubscribe = new AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(this, "on_subscribe");
  public get onSubscribe() {
    return this._onSubscribe;
  }
  public putOnSubscribe(value: AppsyncChannelNamespaceHandlerConfigsOnSubscribe) {
    this._onSubscribe.internalValue = value;
  }
  public resetOnSubscribe() {
    this._onSubscribe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSubscribeInput() {
    return this._onSubscribe.internalValue;
  }
}
export interface AppsyncChannelNamespacePublishAuthModes {
  /**
  * Security configuration for your AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}
  */
  readonly authType?: string;
}

export function appsyncChannelNamespacePublishAuthModesToTerraform(struct?: AppsyncChannelNamespacePublishAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncChannelNamespacePublishAuthModesToHclTerraform(struct?: AppsyncChannelNamespacePublishAuthModes | cdktn.IResolvable): any {
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

export class AppsyncChannelNamespacePublishAuthModesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespacePublishAuthModes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppsyncChannelNamespacePublishAuthModes | cdktn.IResolvable | undefined) {
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

export class AppsyncChannelNamespacePublishAuthModesList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespacePublishAuthModes[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespacePublishAuthModesOutputReference {
    return new AppsyncChannelNamespacePublishAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceSubscribeAuthModes {
  /**
  * Security configuration for your AppSync API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}
  */
  readonly authType?: string;
}

export function appsyncChannelNamespaceSubscribeAuthModesToTerraform(struct?: AppsyncChannelNamespaceSubscribeAuthModes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
  }
}


export function appsyncChannelNamespaceSubscribeAuthModesToHclTerraform(struct?: AppsyncChannelNamespaceSubscribeAuthModes | cdktn.IResolvable): any {
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

export class AppsyncChannelNamespaceSubscribeAuthModesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceSubscribeAuthModes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppsyncChannelNamespaceSubscribeAuthModes | cdktn.IResolvable | undefined) {
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

export class AppsyncChannelNamespaceSubscribeAuthModesList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceSubscribeAuthModes[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceSubscribeAuthModesOutputReference {
    return new AppsyncChannelNamespaceSubscribeAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncChannelNamespaceTags {
  /**
  * A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#key AppsyncChannelNamespace#key}
  */
  readonly key?: string;
  /**
  * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#value AppsyncChannelNamespace#value}
  */
  readonly value?: string;
}

export function appsyncChannelNamespaceTagsToTerraform(struct?: AppsyncChannelNamespaceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function appsyncChannelNamespaceTagsToHclTerraform(struct?: AppsyncChannelNamespaceTags | cdktn.IResolvable): any {
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

export class AppsyncChannelNamespaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppsyncChannelNamespaceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppsyncChannelNamespaceTags | cdktn.IResolvable | undefined) {
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

export class AppsyncChannelNamespaceTagsList extends cdktn.ComplexList {
  public internalValue? : AppsyncChannelNamespaceTags[] | cdktn.IResolvable

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
  public get(index: number): AppsyncChannelNamespaceTagsOutputReference {
    return new AppsyncChannelNamespaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace awscc_appsync_channel_namespace}
*/
export class AppsyncChannelNamespace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_channel_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppsyncChannelNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncChannelNamespace to import
  * @param importFromId The id of the existing AppsyncChannelNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncChannelNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_channel_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appsync_channel_namespace awscc_appsync_channel_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncChannelNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncChannelNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appsync_channel_namespace',
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
    this._apiId = config.apiId;
    this._codeHandlers = config.codeHandlers;
    this._codeS3Location = config.codeS3Location;
    this._handlerConfigs.internalValue = config.handlerConfigs;
    this._name = config.name;
    this._publishAuthModes.internalValue = config.publishAuthModes;
    this._subscribeAuthModes.internalValue = config.subscribeAuthModes;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // channel_namespace_arn - computed: true, optional: false, required: false
  public get channelNamespaceArn() {
    return this.getStringAttribute('channel_namespace_arn');
  }

  // code_handlers - computed: true, optional: true, required: false
  private _codeHandlers?: string;
  public get codeHandlers() {
    return this.getStringAttribute('code_handlers');
  }
  public set codeHandlers(value: string) {
    this._codeHandlers = value;
  }
  public resetCodeHandlers() {
    this._codeHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHandlersInput() {
    return this._codeHandlers;
  }

  // code_s3_location - computed: true, optional: true, required: false
  private _codeS3Location?: string;
  public get codeS3Location() {
    return this.getStringAttribute('code_s3_location');
  }
  public set codeS3Location(value: string) {
    this._codeS3Location = value;
  }
  public resetCodeS3Location() {
    this._codeS3Location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeS3LocationInput() {
    return this._codeS3Location;
  }

  // handler_configs - computed: true, optional: true, required: false
  private _handlerConfigs = new AppsyncChannelNamespaceHandlerConfigsOutputReference(this, "handler_configs");
  public get handlerConfigs() {
    return this._handlerConfigs;
  }
  public putHandlerConfigs(value: AppsyncChannelNamespaceHandlerConfigs) {
    this._handlerConfigs.internalValue = value;
  }
  public resetHandlerConfigs() {
    this._handlerConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerConfigsInput() {
    return this._handlerConfigs.internalValue;
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

  // publish_auth_modes - computed: true, optional: true, required: false
  private _publishAuthModes = new AppsyncChannelNamespacePublishAuthModesList(this, "publish_auth_modes", false);
  public get publishAuthModes() {
    return this._publishAuthModes;
  }
  public putPublishAuthModes(value: AppsyncChannelNamespacePublishAuthModes[] | cdktn.IResolvable) {
    this._publishAuthModes.internalValue = value;
  }
  public resetPublishAuthModes() {
    this._publishAuthModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishAuthModesInput() {
    return this._publishAuthModes.internalValue;
  }

  // subscribe_auth_modes - computed: true, optional: true, required: false
  private _subscribeAuthModes = new AppsyncChannelNamespaceSubscribeAuthModesList(this, "subscribe_auth_modes", false);
  public get subscribeAuthModes() {
    return this._subscribeAuthModes;
  }
  public putSubscribeAuthModes(value: AppsyncChannelNamespaceSubscribeAuthModes[] | cdktn.IResolvable) {
    this._subscribeAuthModes.internalValue = value;
  }
  public resetSubscribeAuthModes() {
    this._subscribeAuthModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeAuthModesInput() {
    return this._subscribeAuthModes.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppsyncChannelNamespaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppsyncChannelNamespaceTags[] | cdktn.IResolvable) {
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
      api_id: cdktn.stringToTerraform(this._apiId),
      code_handlers: cdktn.stringToTerraform(this._codeHandlers),
      code_s3_location: cdktn.stringToTerraform(this._codeS3Location),
      handler_configs: appsyncChannelNamespaceHandlerConfigsToTerraform(this._handlerConfigs.internalValue),
      name: cdktn.stringToTerraform(this._name),
      publish_auth_modes: cdktn.listMapper(appsyncChannelNamespacePublishAuthModesToTerraform, false)(this._publishAuthModes.internalValue),
      subscribe_auth_modes: cdktn.listMapper(appsyncChannelNamespaceSubscribeAuthModesToTerraform, false)(this._subscribeAuthModes.internalValue),
      tags: cdktn.listMapper(appsyncChannelNamespaceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktn.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_handlers: {
        value: cdktn.stringToHclTerraform(this._codeHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_s3_location: {
        value: cdktn.stringToHclTerraform(this._codeS3Location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler_configs: {
        value: appsyncChannelNamespaceHandlerConfigsToHclTerraform(this._handlerConfigs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsyncChannelNamespaceHandlerConfigs",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_auth_modes: {
        value: cdktn.listMapperHcl(appsyncChannelNamespacePublishAuthModesToHclTerraform, false)(this._publishAuthModes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncChannelNamespacePublishAuthModesList",
      },
      subscribe_auth_modes: {
        value: cdktn.listMapperHcl(appsyncChannelNamespaceSubscribeAuthModesToHclTerraform, false)(this._subscribeAuthModes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncChannelNamespaceSubscribeAuthModesList",
      },
      tags: {
        value: cdktn.listMapperHcl(appsyncChannelNamespaceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppsyncChannelNamespaceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
