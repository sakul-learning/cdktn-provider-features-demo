// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_graph_ql_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppsyncGraphQlApiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_graph_ql_api#id DataAwsccAppsyncGraphQlApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig {
}

export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig | undefined) {
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
export interface DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig {
}

export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfig | undefined) {
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
export interface DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig {
}

export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfig | undefined) {
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
export interface DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders {
}

export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersToTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // lambda_authorizer_config - computed: true, optional: false, required: false
  private _lambdaAuthorizerConfig = new DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }

  // open_id_connect_config - computed: true, optional: false, required: false
  private _openIdConnectConfig = new DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOpenIdConnectConfigOutputReference(this, "open_id_connect_config");
  public get openIdConnectConfig() {
    return this._openIdConnectConfig;
  }

  // user_pool_config - computed: true, optional: false, required: false
  private _userPoolConfig = new DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(this, "user_pool_config");
  public get userPoolConfig() {
    return this._userPoolConfig;
  }
}

export class DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference {
    return new DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig {
}

export function dataAwsccAppsyncGraphQlApiEnhancedMetricsConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiEnhancedMetricsConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiEnhancedMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_level_metrics_behavior - computed: true, optional: false, required: false
  public get dataSourceLevelMetricsBehavior() {
    return this.getStringAttribute('data_source_level_metrics_behavior');
  }

  // operation_level_metrics_config - computed: true, optional: false, required: false
  public get operationLevelMetricsConfig() {
    return this.getStringAttribute('operation_level_metrics_config');
  }

  // resolver_level_metrics_behavior - computed: true, optional: false, required: false
  public get resolverLevelMetricsBehavior() {
    return this.getStringAttribute('resolver_level_metrics_behavior');
  }
}
export interface DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig {
}

export function dataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfig | undefined) {
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
export interface DataAwsccAppsyncGraphQlApiLogConfig {
}

export function dataAwsccAppsyncGraphQlApiLogConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiLogConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiLogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiLogConfig | undefined) {
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

  // exclude_verbose_content - computed: true, optional: false, required: false
  public get excludeVerboseContent() {
    return this.getBooleanAttribute('exclude_verbose_content');
  }

  // field_log_level - computed: true, optional: false, required: false
  public get fieldLogLevel() {
    return this.getStringAttribute('field_log_level');
  }
}
export interface DataAwsccAppsyncGraphQlApiOpenIdConnectConfig {
}

export function dataAwsccAppsyncGraphQlApiOpenIdConnectConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiOpenIdConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiOpenIdConnectConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiOpenIdConnectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiOpenIdConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiOpenIdConnectConfig | undefined) {
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
export interface DataAwsccAppsyncGraphQlApiTags {
}

export function dataAwsccAppsyncGraphQlApiTagsToTerraform(struct?: DataAwsccAppsyncGraphQlApiTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiTagsToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppsyncGraphQlApiTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiTags | undefined) {
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

export class DataAwsccAppsyncGraphQlApiTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncGraphQlApiTagsOutputReference {
    return new DataAwsccAppsyncGraphQlApiTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncGraphQlApiUserPoolConfig {
}

export function dataAwsccAppsyncGraphQlApiUserPoolConfigToTerraform(struct?: DataAwsccAppsyncGraphQlApiUserPoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncGraphQlApiUserPoolConfigToHclTerraform(struct?: DataAwsccAppsyncGraphQlApiUserPoolConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncGraphQlApiUserPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncGraphQlApiUserPoolConfig | undefined) {
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

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_graph_ql_api awscc_appsync_graph_ql_api}
*/
export class DataAwsccAppsyncGraphQlApi extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_graph_ql_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppsyncGraphQlApi resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppsyncGraphQlApi to import
  * @param importFromId The id of the existing DataAwsccAppsyncGraphQlApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_graph_ql_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppsyncGraphQlApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_graph_ql_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_graph_ql_api awscc_appsync_graph_ql_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppsyncGraphQlApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppsyncGraphQlApiConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appsync_graph_ql_api',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_authentication_providers - computed: true, optional: false, required: false
  private _additionalAuthenticationProviders = new DataAwsccAppsyncGraphQlApiAdditionalAuthenticationProvidersList(this, "additional_authentication_providers", false);
  public get additionalAuthenticationProviders() {
    return this._additionalAuthenticationProviders;
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_type - computed: true, optional: false, required: false
  public get apiType() {
    return this.getStringAttribute('api_type');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // enhanced_metrics_config - computed: true, optional: false, required: false
  private _enhancedMetricsConfig = new DataAwsccAppsyncGraphQlApiEnhancedMetricsConfigOutputReference(this, "enhanced_metrics_config");
  public get enhancedMetricsConfig() {
    return this._enhancedMetricsConfig;
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktn.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // graph_ql_dns - computed: true, optional: false, required: false
  public get graphQlDns() {
    return this.getStringAttribute('graph_ql_dns');
  }

  // graph_ql_endpoint_arn - computed: true, optional: false, required: false
  public get graphQlEndpointArn() {
    return this.getStringAttribute('graph_ql_endpoint_arn');
  }

  // graph_ql_url - computed: true, optional: false, required: false
  public get graphQlUrl() {
    return this.getStringAttribute('graph_ql_url');
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

  // introspection_config - computed: true, optional: false, required: false
  public get introspectionConfig() {
    return this.getStringAttribute('introspection_config');
  }

  // lambda_authorizer_config - computed: true, optional: false, required: false
  private _lambdaAuthorizerConfig = new DataAwsccAppsyncGraphQlApiLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }

  // log_config - computed: true, optional: false, required: false
  private _logConfig = new DataAwsccAppsyncGraphQlApiLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }

  // merged_api_execution_role_arn - computed: true, optional: false, required: false
  public get mergedApiExecutionRoleArn() {
    return this.getStringAttribute('merged_api_execution_role_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_id_connect_config - computed: true, optional: false, required: false
  private _openIdConnectConfig = new DataAwsccAppsyncGraphQlApiOpenIdConnectConfigOutputReference(this, "open_id_connect_config");
  public get openIdConnectConfig() {
    return this._openIdConnectConfig;
  }

  // owner_contact - computed: true, optional: false, required: false
  public get ownerContact() {
    return this.getStringAttribute('owner_contact');
  }

  // query_depth_limit - computed: true, optional: false, required: false
  public get queryDepthLimit() {
    return this.getNumberAttribute('query_depth_limit');
  }

  // realtime_dns - computed: true, optional: false, required: false
  public get realtimeDns() {
    return this.getStringAttribute('realtime_dns');
  }

  // realtime_url - computed: true, optional: false, required: false
  public get realtimeUrl() {
    return this.getStringAttribute('realtime_url');
  }

  // resolver_count_limit - computed: true, optional: false, required: false
  public get resolverCountLimit() {
    return this.getNumberAttribute('resolver_count_limit');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAppsyncGraphQlApiTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // user_pool_config - computed: true, optional: false, required: false
  private _userPoolConfig = new DataAwsccAppsyncGraphQlApiUserPoolConfigOutputReference(this, "user_pool_config");
  public get userPoolConfig() {
    return this._userPoolConfig;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // xray_enabled - computed: true, optional: false, required: false
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled');
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
