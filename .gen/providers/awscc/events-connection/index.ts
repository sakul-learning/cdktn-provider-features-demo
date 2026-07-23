// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EventsConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}
  */
  readonly authParameters?: EventsConnectionAuthParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Description of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#description EventsConnection#description}
  */
  readonly description?: string;
  /**
  * The private resource the HTTP request will be sent to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}
  */
  readonly invocationConnectivityParameters?: EventsConnectionInvocationConnectivityParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#name EventsConnection#name}
  */
  readonly name?: string;
}
export interface EventsConnectionAuthParametersApiKeyAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}
  */
  readonly apiKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}
  */
  readonly apiKeyValue?: string;
}

export function eventsConnectionAuthParametersApiKeyAuthParametersToTerraform(struct?: EventsConnectionAuthParametersApiKeyAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_name: cdktn.stringToTerraform(struct!.apiKeyName),
    api_key_value: cdktn.stringToTerraform(struct!.apiKeyValue),
  }
}


export function eventsConnectionAuthParametersApiKeyAuthParametersToHclTerraform(struct?: EventsConnectionAuthParametersApiKeyAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_name: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_value: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersApiKeyAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersApiKeyAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyName = this._apiKeyName;
    }
    if (this._apiKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyValue = this._apiKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersApiKeyAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyName = undefined;
      this._apiKeyValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyName = value.apiKeyName;
      this._apiKeyValue = value.apiKeyValue;
    }
  }

  // api_key_name - computed: true, optional: true, required: false
  private _apiKeyName?: string; 
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }
  public set apiKeyName(value: string) {
    this._apiKeyName = value;
  }
  public resetApiKeyName() {
    this._apiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyNameInput() {
    return this._apiKeyName;
  }

  // api_key_value - computed: true, optional: true, required: false
  private _apiKeyValue?: string; 
  public get apiKeyValue() {
    return this.getStringAttribute('api_key_value');
  }
  public set apiKeyValue(value: string) {
    this._apiKeyValue = value;
  }
  public resetApiKeyValue() {
    this._apiKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyValueInput() {
    return this._apiKeyValue;
  }
}
export interface EventsConnectionAuthParametersBasicAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#password EventsConnection#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#username EventsConnection#username}
  */
  readonly username?: string;
}

export function eventsConnectionAuthParametersBasicAuthParametersToTerraform(struct?: EventsConnectionAuthParametersBasicAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function eventsConnectionAuthParametersBasicAuthParametersToHclTerraform(struct?: EventsConnectionAuthParametersBasicAuthParameters | cdktn.IResolvable): any {
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

export class EventsConnectionAuthParametersBasicAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersBasicAuthParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EventsConnectionAuthParametersBasicAuthParameters | cdktn.IResolvable | undefined) {
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
export interface EventsConnectionAuthParametersConnectivityParametersResourceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}
  */
  readonly resourceConfigurationArn?: string;
}

export function eventsConnectionAuthParametersConnectivityParametersResourceParametersToTerraform(struct?: EventsConnectionAuthParametersConnectivityParametersResourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
  }
}


export function eventsConnectionAuthParametersConnectivityParametersResourceParametersToHclTerraform(struct?: EventsConnectionAuthParametersConnectivityParametersResourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersConnectivityParametersResourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersConnectivityParametersResourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationArn = value.resourceConfigurationArn;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: true, optional: true, required: false
  private _resourceConfigurationArn?: string; 
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
  public set resourceConfigurationArn(value: string) {
    this._resourceConfigurationArn = value;
  }
  public resetResourceConfigurationArn() {
    this._resourceConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationArnInput() {
    return this._resourceConfigurationArn;
  }
}
export interface EventsConnectionAuthParametersConnectivityParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}
  */
  readonly resourceParameters?: EventsConnectionAuthParametersConnectivityParametersResourceParameters;
}

export function eventsConnectionAuthParametersConnectivityParametersToTerraform(struct?: EventsConnectionAuthParametersConnectivityParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_parameters: eventsConnectionAuthParametersConnectivityParametersResourceParametersToTerraform(struct!.resourceParameters),
  }
}


export function eventsConnectionAuthParametersConnectivityParametersToHclTerraform(struct?: EventsConnectionAuthParametersConnectivityParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_parameters: {
      value: eventsConnectionAuthParametersConnectivityParametersResourceParametersToHclTerraform(struct!.resourceParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersConnectivityParametersResourceParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersConnectivityParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersConnectivityParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersConnectivityParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceParameters.internalValue = value.resourceParameters;
    }
  }

  // resource_parameters - computed: true, optional: true, required: false
  private _resourceParameters = new EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
  public putResourceParameters(value: EventsConnectionAuthParametersConnectivityParametersResourceParameters) {
    this._resourceParameters.internalValue = value;
  }
  public resetResourceParameters() {
    this._resourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParametersInput() {
    return this._resourceParameters.internalValue;
  }
}
export interface EventsConnectionAuthParametersInvocationHttpParametersBodyParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#key EventsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#value EventsConnection#value}
  */
  readonly value?: string;
}

export function eventsConnectionAuthParametersInvocationHttpParametersBodyParametersToTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParametersBodyParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsConnectionAuthParametersInvocationHttpParametersBodyParametersToHclTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParametersBodyParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventsConnectionAuthParametersInvocationHttpParametersBodyParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventsConnectionAuthParametersInvocationHttpParametersBodyParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: true, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
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

export class EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList extends cdktn.ComplexList {
  public internalValue? : EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] | cdktn.IResolvable

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
  public get(index: number): EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference {
    return new EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#key EventsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#value EventsConnection#value}
  */
  readonly value?: string;
}

export function eventsConnectionAuthParametersInvocationHttpParametersHeaderParametersToTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsConnectionAuthParametersInvocationHttpParametersHeaderParametersToHclTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: true, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
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

export class EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList extends cdktn.ComplexList {
  public internalValue? : EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] | cdktn.IResolvable

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
  public get(index: number): EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference {
    return new EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#key EventsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#value EventsConnection#value}
  */
  readonly value?: string;
}

export function eventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersToTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersToHclTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: true, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
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

export class EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList extends cdktn.ComplexList {
  public internalValue? : EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] | cdktn.IResolvable

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
  public get(index: number): EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference {
    return new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsConnectionAuthParametersInvocationHttpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}
  */
  readonly bodyParameters?: EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}
  */
  readonly headerParameters?: EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}
  */
  readonly queryStringParameters?: EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] | cdktn.IResolvable;
}

export function eventsConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body_parameters: cdktn.listMapper(eventsConnectionAuthParametersInvocationHttpParametersBodyParametersToTerraform, false)(struct!.bodyParameters),
    header_parameters: cdktn.listMapper(eventsConnectionAuthParametersInvocationHttpParametersHeaderParametersToTerraform, false)(struct!.headerParameters),
    query_string_parameters: cdktn.listMapper(eventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersToTerraform, false)(struct!.queryStringParameters),
  }
}


export function eventsConnectionAuthParametersInvocationHttpParametersToHclTerraform(struct?: EventsConnectionAuthParametersInvocationHttpParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body_parameters: {
      value: cdktn.listMapperHcl(eventsConnectionAuthParametersInvocationHttpParametersBodyParametersToHclTerraform, false)(struct!.bodyParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList",
    },
    header_parameters: {
      value: cdktn.listMapperHcl(eventsConnectionAuthParametersInvocationHttpParametersHeaderParametersToHclTerraform, false)(struct!.headerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList",
    },
    query_string_parameters: {
      value: cdktn.listMapperHcl(eventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersToHclTerraform, false)(struct!.queryStringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersInvocationHttpParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyParameters = this._bodyParameters?.internalValue;
    }
    if (this._headerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters?.internalValue;
    }
    if (this._queryStringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersInvocationHttpParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyParameters.internalValue = undefined;
      this._headerParameters.internalValue = undefined;
      this._queryStringParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyParameters.internalValue = value.bodyParameters;
      this._headerParameters.internalValue = value.headerParameters;
      this._queryStringParameters.internalValue = value.queryStringParameters;
    }
  }

  // body_parameters - computed: true, optional: true, required: false
  private _bodyParameters = new EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(this, "body_parameters", false);
  public get bodyParameters() {
    return this._bodyParameters;
  }
  public putBodyParameters(value: EventsConnectionAuthParametersInvocationHttpParametersBodyParameters[] | cdktn.IResolvable) {
    this._bodyParameters.internalValue = value;
  }
  public resetBodyParameters() {
    this._bodyParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyParametersInput() {
    return this._bodyParameters.internalValue;
  }

  // header_parameters - computed: true, optional: true, required: false
  private _headerParameters = new EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(this, "header_parameters", false);
  public get headerParameters() {
    return this._headerParameters;
  }
  public putHeaderParameters(value: EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters[] | cdktn.IResolvable) {
    this._headerParameters.internalValue = value;
  }
  public resetHeaderParameters() {
    this._headerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters.internalValue;
  }

  // query_string_parameters - computed: true, optional: true, required: false
  private _queryStringParameters = new EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(this, "query_string_parameters", false);
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
  public putQueryStringParameters(value: EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters[] | cdktn.IResolvable) {
    this._queryStringParameters.internalValue = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters.internalValue;
  }
}
export interface EventsConnectionAuthParametersOAuthParametersClientParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#client_id EventsConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}
  */
  readonly clientSecret?: string;
}

export function eventsConnectionAuthParametersOAuthParametersClientParametersToTerraform(struct?: EventsConnectionAuthParametersOAuthParametersClientParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
  }
}


export function eventsConnectionAuthParametersOAuthParametersClientParametersToHclTerraform(struct?: EventsConnectionAuthParametersOAuthParametersClientParameters | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersOAuthParametersClientParameters | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersOAuthParametersClientParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
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
}
export interface EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#key EventsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#value EventsConnection#value}
  */
  readonly value?: string;
}

export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersToTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersToHclTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: true, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
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

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList extends cdktn.ComplexList {
  public internalValue? : EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] | cdktn.IResolvable

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
  public get(index: number): EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference {
    return new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#key EventsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#value EventsConnection#value}
  */
  readonly value?: string;
}

export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersToTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersToHclTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: true, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
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

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList extends cdktn.ComplexList {
  public internalValue? : EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] | cdktn.IResolvable

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
  public get(index: number): EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference {
    return new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#key EventsConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#value EventsConnection#value}
  */
  readonly value?: string;
}

export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersToTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_secret: cdktn.booleanToTerraform(struct!.isValueSecret),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersToHclTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_secret: {
      value: cdktn.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
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

  public set internalValue(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
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
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: true, optional: true, required: false
  private _isValueSecret?: boolean | cdktn.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktn.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
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

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList extends cdktn.ComplexList {
  public internalValue? : EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] | cdktn.IResolvable

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
  public get(index: number): EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference {
    return new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}
  */
  readonly bodyParameters?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}
  */
  readonly headerParameters?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}
  */
  readonly queryStringParameters?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] | cdktn.IResolvable;
}

export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersToTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body_parameters: cdktn.listMapper(eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersToTerraform, false)(struct!.bodyParameters),
    header_parameters: cdktn.listMapper(eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersToTerraform, false)(struct!.headerParameters),
    query_string_parameters: cdktn.listMapper(eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersToTerraform, false)(struct!.queryStringParameters),
  }
}


export function eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersToHclTerraform(struct?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body_parameters: {
      value: cdktn.listMapperHcl(eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersToHclTerraform, false)(struct!.bodyParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList",
    },
    header_parameters: {
      value: cdktn.listMapperHcl(eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersToHclTerraform, false)(struct!.headerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList",
    },
    query_string_parameters: {
      value: cdktn.listMapperHcl(eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersToHclTerraform, false)(struct!.queryStringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyParameters = this._bodyParameters?.internalValue;
    }
    if (this._headerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameters = this._headerParameters?.internalValue;
    }
    if (this._queryStringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodyParameters.internalValue = undefined;
      this._headerParameters.internalValue = undefined;
      this._queryStringParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodyParameters.internalValue = value.bodyParameters;
      this._headerParameters.internalValue = value.headerParameters;
      this._queryStringParameters.internalValue = value.queryStringParameters;
    }
  }

  // body_parameters - computed: true, optional: true, required: false
  private _bodyParameters = new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(this, "body_parameters", false);
  public get bodyParameters() {
    return this._bodyParameters;
  }
  public putBodyParameters(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[] | cdktn.IResolvable) {
    this._bodyParameters.internalValue = value;
  }
  public resetBodyParameters() {
    this._bodyParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyParametersInput() {
    return this._bodyParameters.internalValue;
  }

  // header_parameters - computed: true, optional: true, required: false
  private _headerParameters = new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(this, "header_parameters", false);
  public get headerParameters() {
    return this._headerParameters;
  }
  public putHeaderParameters(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[] | cdktn.IResolvable) {
    this._headerParameters.internalValue = value;
  }
  public resetHeaderParameters() {
    this._headerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParametersInput() {
    return this._headerParameters.internalValue;
  }

  // query_string_parameters - computed: true, optional: true, required: false
  private _queryStringParameters = new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(this, "query_string_parameters", false);
  public get queryStringParameters() {
    return this._queryStringParameters;
  }
  public putQueryStringParameters(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[] | cdktn.IResolvable) {
    this._queryStringParameters.internalValue = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters.internalValue;
  }
}
export interface EventsConnectionAuthParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}
  */
  readonly clientParameters?: EventsConnectionAuthParametersOAuthParametersClientParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#http_method EventsConnection#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}
  */
  readonly oAuthHttpParameters?: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters;
}

export function eventsConnectionAuthParametersOAuthParametersToTerraform(struct?: EventsConnectionAuthParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_endpoint: cdktn.stringToTerraform(struct!.authorizationEndpoint),
    client_parameters: eventsConnectionAuthParametersOAuthParametersClientParametersToTerraform(struct!.clientParameters),
    http_method: cdktn.stringToTerraform(struct!.httpMethod),
    o_auth_http_parameters: eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersToTerraform(struct!.oAuthHttpParameters),
  }
}


export function eventsConnectionAuthParametersOAuthParametersToHclTerraform(struct?: EventsConnectionAuthParametersOAuthParameters | cdktn.IResolvable): any {
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
    client_parameters: {
      value: eventsConnectionAuthParametersOAuthParametersClientParametersToHclTerraform(struct!.clientParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersOAuthParametersClientParameters",
    },
    http_method: {
      value: cdktn.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_http_parameters: {
      value: eventsConnectionAuthParametersOAuthParametersOAuthHttpParametersToHclTerraform(struct!.oAuthHttpParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientParameters = this._clientParameters?.internalValue;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._oAuthHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthHttpParameters = this._oAuthHttpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = undefined;
      this._clientParameters.internalValue = undefined;
      this._httpMethod = undefined;
      this._oAuthHttpParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientParameters.internalValue = value.clientParameters;
      this._httpMethod = value.httpMethod;
      this._oAuthHttpParameters.internalValue = value.oAuthHttpParameters;
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

  // client_parameters - computed: true, optional: true, required: false
  private _clientParameters = new EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(this, "client_parameters");
  public get clientParameters() {
    return this._clientParameters;
  }
  public putClientParameters(value: EventsConnectionAuthParametersOAuthParametersClientParameters) {
    this._clientParameters.internalValue = value;
  }
  public resetClientParameters() {
    this._clientParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientParametersInput() {
    return this._clientParameters.internalValue;
  }

  // http_method - computed: true, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // o_auth_http_parameters - computed: true, optional: true, required: false
  private _oAuthHttpParameters = new EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(this, "o_auth_http_parameters");
  public get oAuthHttpParameters() {
    return this._oAuthHttpParameters;
  }
  public putOAuthHttpParameters(value: EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters) {
    this._oAuthHttpParameters.internalValue = value;
  }
  public resetOAuthHttpParameters() {
    this._oAuthHttpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthHttpParametersInput() {
    return this._oAuthHttpParameters.internalValue;
  }
}
export interface EventsConnectionAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}
  */
  readonly apiKeyAuthParameters?: EventsConnectionAuthParametersApiKeyAuthParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}
  */
  readonly basicAuthParameters?: EventsConnectionAuthParametersBasicAuthParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}
  */
  readonly connectivityParameters?: EventsConnectionAuthParametersConnectivityParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}
  */
  readonly invocationHttpParameters?: EventsConnectionAuthParametersInvocationHttpParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}
  */
  readonly oAuthParameters?: EventsConnectionAuthParametersOAuthParameters;
}

export function eventsConnectionAuthParametersToTerraform(struct?: EventsConnectionAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_auth_parameters: eventsConnectionAuthParametersApiKeyAuthParametersToTerraform(struct!.apiKeyAuthParameters),
    basic_auth_parameters: eventsConnectionAuthParametersBasicAuthParametersToTerraform(struct!.basicAuthParameters),
    connectivity_parameters: eventsConnectionAuthParametersConnectivityParametersToTerraform(struct!.connectivityParameters),
    invocation_http_parameters: eventsConnectionAuthParametersInvocationHttpParametersToTerraform(struct!.invocationHttpParameters),
    o_auth_parameters: eventsConnectionAuthParametersOAuthParametersToTerraform(struct!.oAuthParameters),
  }
}


export function eventsConnectionAuthParametersToHclTerraform(struct?: EventsConnectionAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_auth_parameters: {
      value: eventsConnectionAuthParametersApiKeyAuthParametersToHclTerraform(struct!.apiKeyAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersApiKeyAuthParameters",
    },
    basic_auth_parameters: {
      value: eventsConnectionAuthParametersBasicAuthParametersToHclTerraform(struct!.basicAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersBasicAuthParameters",
    },
    connectivity_parameters: {
      value: eventsConnectionAuthParametersConnectivityParametersToHclTerraform(struct!.connectivityParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersConnectivityParameters",
    },
    invocation_http_parameters: {
      value: eventsConnectionAuthParametersInvocationHttpParametersToHclTerraform(struct!.invocationHttpParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersInvocationHttpParameters",
    },
    o_auth_parameters: {
      value: eventsConnectionAuthParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionAuthParametersOAuthParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuthParameters = this._apiKeyAuthParameters?.internalValue;
    }
    if (this._basicAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthParameters = this._basicAuthParameters?.internalValue;
    }
    if (this._connectivityParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityParameters = this._connectivityParameters?.internalValue;
    }
    if (this._invocationHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationHttpParameters = this._invocationHttpParameters?.internalValue;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyAuthParameters.internalValue = undefined;
      this._basicAuthParameters.internalValue = undefined;
      this._connectivityParameters.internalValue = undefined;
      this._invocationHttpParameters.internalValue = undefined;
      this._oAuthParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyAuthParameters.internalValue = value.apiKeyAuthParameters;
      this._basicAuthParameters.internalValue = value.basicAuthParameters;
      this._connectivityParameters.internalValue = value.connectivityParameters;
      this._invocationHttpParameters.internalValue = value.invocationHttpParameters;
      this._oAuthParameters.internalValue = value.oAuthParameters;
    }
  }

  // api_key_auth_parameters - computed: true, optional: true, required: false
  private _apiKeyAuthParameters = new EventsConnectionAuthParametersApiKeyAuthParametersOutputReference(this, "api_key_auth_parameters");
  public get apiKeyAuthParameters() {
    return this._apiKeyAuthParameters;
  }
  public putApiKeyAuthParameters(value: EventsConnectionAuthParametersApiKeyAuthParameters) {
    this._apiKeyAuthParameters.internalValue = value;
  }
  public resetApiKeyAuthParameters() {
    this._apiKeyAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthParametersInput() {
    return this._apiKeyAuthParameters.internalValue;
  }

  // basic_auth_parameters - computed: true, optional: true, required: false
  private _basicAuthParameters = new EventsConnectionAuthParametersBasicAuthParametersOutputReference(this, "basic_auth_parameters");
  public get basicAuthParameters() {
    return this._basicAuthParameters;
  }
  public putBasicAuthParameters(value: EventsConnectionAuthParametersBasicAuthParameters) {
    this._basicAuthParameters.internalValue = value;
  }
  public resetBasicAuthParameters() {
    this._basicAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthParametersInput() {
    return this._basicAuthParameters.internalValue;
  }

  // connectivity_parameters - computed: true, optional: true, required: false
  private _connectivityParameters = new EventsConnectionAuthParametersConnectivityParametersOutputReference(this, "connectivity_parameters");
  public get connectivityParameters() {
    return this._connectivityParameters;
  }
  public putConnectivityParameters(value: EventsConnectionAuthParametersConnectivityParameters) {
    this._connectivityParameters.internalValue = value;
  }
  public resetConnectivityParameters() {
    this._connectivityParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityParametersInput() {
    return this._connectivityParameters.internalValue;
  }

  // invocation_http_parameters - computed: true, optional: true, required: false
  private _invocationHttpParameters = new EventsConnectionAuthParametersInvocationHttpParametersOutputReference(this, "invocation_http_parameters");
  public get invocationHttpParameters() {
    return this._invocationHttpParameters;
  }
  public putInvocationHttpParameters(value: EventsConnectionAuthParametersInvocationHttpParameters) {
    this._invocationHttpParameters.internalValue = value;
  }
  public resetInvocationHttpParameters() {
    this._invocationHttpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationHttpParametersInput() {
    return this._invocationHttpParameters.internalValue;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new EventsConnectionAuthParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: EventsConnectionAuthParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }
}
export interface EventsConnectionInvocationConnectivityParametersResourceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}
  */
  readonly resourceConfigurationArn?: string;
}

export function eventsConnectionInvocationConnectivityParametersResourceParametersToTerraform(struct?: EventsConnectionInvocationConnectivityParametersResourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_arn: cdktn.stringToTerraform(struct!.resourceConfigurationArn),
  }
}


export function eventsConnectionInvocationConnectivityParametersResourceParametersToHclTerraform(struct?: EventsConnectionInvocationConnectivityParametersResourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_arn: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionInvocationConnectivityParametersResourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionInvocationConnectivityParametersResourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationArn = value.resourceConfigurationArn;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: true, optional: true, required: false
  private _resourceConfigurationArn?: string; 
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
  public set resourceConfigurationArn(value: string) {
    this._resourceConfigurationArn = value;
  }
  public resetResourceConfigurationArn() {
    this._resourceConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationArnInput() {
    return this._resourceConfigurationArn;
  }
}
export interface EventsConnectionInvocationConnectivityParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}
  */
  readonly resourceParameters?: EventsConnectionInvocationConnectivityParametersResourceParameters;
}

export function eventsConnectionInvocationConnectivityParametersToTerraform(struct?: EventsConnectionInvocationConnectivityParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_parameters: eventsConnectionInvocationConnectivityParametersResourceParametersToTerraform(struct!.resourceParameters),
  }
}


export function eventsConnectionInvocationConnectivityParametersToHclTerraform(struct?: EventsConnectionInvocationConnectivityParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_parameters: {
      value: eventsConnectionInvocationConnectivityParametersResourceParametersToHclTerraform(struct!.resourceParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "EventsConnectionInvocationConnectivityParametersResourceParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventsConnectionInvocationConnectivityParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventsConnectionInvocationConnectivityParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventsConnectionInvocationConnectivityParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceParameters.internalValue = value.resourceParameters;
    }
  }

  // resource_parameters - computed: true, optional: true, required: false
  private _resourceParameters = new EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
  public putResourceParameters(value: EventsConnectionInvocationConnectivityParametersResourceParameters) {
    this._resourceParameters.internalValue = value;
  }
  public resetResourceParameters() {
    this._resourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParametersInput() {
    return this._resourceParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection awscc_events_connection}
*/
export class EventsConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_events_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventsConnection to import
  * @param importFromId The id of the existing EventsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_events_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/events_connection awscc_events_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventsConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EventsConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_events_connection',
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
    this._authParameters.internalValue = config.authParameters;
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._invocationConnectivityParameters.internalValue = config.invocationConnectivityParameters;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_for_policy - computed: true, optional: false, required: false
  public get arnForPolicy() {
    return this.getStringAttribute('arn_for_policy');
  }

  // auth_parameters - computed: true, optional: true, required: false
  private _authParameters = new EventsConnectionAuthParametersOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }
  public putAuthParameters(value: EventsConnectionAuthParameters) {
    this._authParameters.internalValue = value;
  }
  public resetAuthParameters() {
    this._authParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authParametersInput() {
    return this._authParameters.internalValue;
  }

  // authorization_type - computed: true, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invocation_connectivity_parameters - computed: true, optional: true, required: false
  private _invocationConnectivityParameters = new EventsConnectionInvocationConnectivityParametersOutputReference(this, "invocation_connectivity_parameters");
  public get invocationConnectivityParameters() {
    return this._invocationConnectivityParameters;
  }
  public putInvocationConnectivityParameters(value: EventsConnectionInvocationConnectivityParameters) {
    this._invocationConnectivityParameters.internalValue = value;
  }
  public resetInvocationConnectivityParameters() {
    this._invocationConnectivityParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConnectivityParametersInput() {
    return this._invocationConnectivityParameters.internalValue;
  }

  // kms_key_identifier - computed: true, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
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

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_parameters: eventsConnectionAuthParametersToTerraform(this._authParameters.internalValue),
      authorization_type: cdktn.stringToTerraform(this._authorizationType),
      description: cdktn.stringToTerraform(this._description),
      invocation_connectivity_parameters: eventsConnectionInvocationConnectivityParametersToTerraform(this._invocationConnectivityParameters.internalValue),
      kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_parameters: {
        value: eventsConnectionAuthParametersToHclTerraform(this._authParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventsConnectionAuthParameters",
      },
      authorization_type: {
        value: cdktn.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invocation_connectivity_parameters: {
        value: eventsConnectionInvocationConnectivityParametersToHclTerraform(this._invocationConnectivityParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventsConnectionInvocationConnectivityParameters",
      },
      kms_key_identifier: {
        value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
