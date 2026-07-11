// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appsync_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppsyncApiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appsync_api#id DataAwsccAppsyncApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppsyncApiDns {
}

export function dataAwsccAppsyncApiDnsToTerraform(struct?: DataAwsccAppsyncApiDns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiDnsToHclTerraform(struct?: DataAwsccAppsyncApiDns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiDnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncApiDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiDns | undefined) {
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
export interface DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfig {
}

export function dataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfigToTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfigToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id_client_regex - computed: true, optional: false, required: false
  public get appIdClientRegex() {
    return this.getStringAttribute('app_id_client_regex');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
}
export interface DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig {
}

export function dataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigToTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: false, required: false
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }

  // authorizer_uri - computed: true, optional: false, required: false
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }

  // identity_validation_expression - computed: true, optional: false, required: false
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
}
export interface DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfig {
}

export function dataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfigToTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfigToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_ttl - computed: true, optional: false, required: false
  public get authTtl() {
    return this.getNumberAttribute('auth_ttl');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // iat_ttl - computed: true, optional: false, required: false
  public get iatTtl() {
    return this.getNumberAttribute('iat_ttl');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export interface DataAwsccAppsyncApiEventConfigAuthProviders {
}

export function dataAwsccAppsyncApiEventConfigAuthProvidersToTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigAuthProvidersToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigAuthProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigAuthProvidersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigAuthProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigAuthProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // cognito_config - computed: true, optional: false, required: false
  private _cognitoConfig = new DataAwsccAppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference(this, "cognito_config");
  public get cognitoConfig() {
    return this._cognitoConfig;
  }

  // lambda_authorizer_config - computed: true, optional: false, required: false
  private _lambdaAuthorizerConfig = new DataAwsccAppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }

  // open_id_connect_config - computed: true, optional: false, required: false
  private _openIdConnectConfig = new DataAwsccAppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference(this, "open_id_connect_config");
  public get openIdConnectConfig() {
    return this._openIdConnectConfig;
  }
}

export class DataAwsccAppsyncApiEventConfigAuthProvidersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncApiEventConfigAuthProvidersOutputReference {
    return new DataAwsccAppsyncApiEventConfigAuthProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncApiEventConfigConnectionAuthModes {
}

export function dataAwsccAppsyncApiEventConfigConnectionAuthModesToTerraform(struct?: DataAwsccAppsyncApiEventConfigConnectionAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigConnectionAuthModesToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigConnectionAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigConnectionAuthModesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigConnectionAuthModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigConnectionAuthModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
}

export class DataAwsccAppsyncApiEventConfigConnectionAuthModesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncApiEventConfigConnectionAuthModesOutputReference {
    return new DataAwsccAppsyncApiEventConfigConnectionAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncApiEventConfigDefaultPublishAuthModes {
}

export function dataAwsccAppsyncApiEventConfigDefaultPublishAuthModesToTerraform(struct?: DataAwsccAppsyncApiEventConfigDefaultPublishAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigDefaultPublishAuthModesToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigDefaultPublishAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigDefaultPublishAuthModesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigDefaultPublishAuthModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigDefaultPublishAuthModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
}

export class DataAwsccAppsyncApiEventConfigDefaultPublishAuthModesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncApiEventConfigDefaultPublishAuthModesOutputReference {
    return new DataAwsccAppsyncApiEventConfigDefaultPublishAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModes {
}

export function dataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesToTerraform(struct?: DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
}

export class DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference {
    return new DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncApiEventConfigLogConfig {
}

export function dataAwsccAppsyncApiEventConfigLogConfigToTerraform(struct?: DataAwsccAppsyncApiEventConfigLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigLogConfigToHclTerraform(struct?: DataAwsccAppsyncApiEventConfigLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigLogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfigLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfigLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_logs_role_arn - computed: true, optional: false, required: false
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}
export interface DataAwsccAppsyncApiEventConfig {
}

export function dataAwsccAppsyncApiEventConfigToTerraform(struct?: DataAwsccAppsyncApiEventConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiEventConfigToHclTerraform(struct?: DataAwsccAppsyncApiEventConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiEventConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncApiEventConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiEventConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_providers - computed: true, optional: false, required: false
  private _authProviders = new DataAwsccAppsyncApiEventConfigAuthProvidersList(this, "auth_providers", false);
  public get authProviders() {
    return this._authProviders;
  }

  // connection_auth_modes - computed: true, optional: false, required: false
  private _connectionAuthModes = new DataAwsccAppsyncApiEventConfigConnectionAuthModesList(this, "connection_auth_modes", false);
  public get connectionAuthModes() {
    return this._connectionAuthModes;
  }

  // default_publish_auth_modes - computed: true, optional: false, required: false
  private _defaultPublishAuthModes = new DataAwsccAppsyncApiEventConfigDefaultPublishAuthModesList(this, "default_publish_auth_modes", false);
  public get defaultPublishAuthModes() {
    return this._defaultPublishAuthModes;
  }

  // default_subscribe_auth_modes - computed: true, optional: false, required: false
  private _defaultSubscribeAuthModes = new DataAwsccAppsyncApiEventConfigDefaultSubscribeAuthModesList(this, "default_subscribe_auth_modes", false);
  public get defaultSubscribeAuthModes() {
    return this._defaultSubscribeAuthModes;
  }

  // log_config - computed: true, optional: false, required: false
  private _logConfig = new DataAwsccAppsyncApiEventConfigLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
}
export interface DataAwsccAppsyncApiTags {
}

export function dataAwsccAppsyncApiTagsToTerraform(struct?: DataAwsccAppsyncApiTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncApiTagsToHclTerraform(struct?: DataAwsccAppsyncApiTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncApiTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccAppsyncApiTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncApiTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAppsyncApiTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncApiTagsOutputReference {
    return new DataAwsccAppsyncApiTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appsync_api awscc_appsync_api}
*/
export class DataAwsccAppsyncApi extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppsyncApi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppsyncApi to import
  * @param importFromId The id of the existing DataAwsccAppsyncApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appsync_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppsyncApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appsync_api awscc_appsync_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppsyncApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppsyncApiConfig) {
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
    this._id = config.id;
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
  private _dns = new DataAwsccAppsyncApiDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // event_config - computed: true, optional: false, required: false
  private _eventConfig = new DataAwsccAppsyncApiEventConfigOutputReference(this, "event_config");
  public get eventConfig() {
    return this._eventConfig;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_contact - computed: true, optional: false, required: false
  public get ownerContact() {
    return this.getStringAttribute('owner_contact');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAppsyncApiTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
