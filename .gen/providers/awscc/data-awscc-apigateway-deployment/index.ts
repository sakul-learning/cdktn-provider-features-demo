// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigateway_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApigatewayDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigateway_deployment#id DataAwsccApigatewayDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApigatewayDeploymentDeploymentCanarySettings {
}

export function dataAwsccApigatewayDeploymentDeploymentCanarySettingsToTerraform(struct?: DataAwsccApigatewayDeploymentDeploymentCanarySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDeploymentDeploymentCanarySettingsToHclTerraform(struct?: DataAwsccApigatewayDeploymentDeploymentCanarySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDeploymentDeploymentCanarySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDeploymentDeploymentCanarySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percent_traffic - computed: true, optional: false, required: false
  public get percentTraffic() {
    return this.getNumberAttribute('percent_traffic');
  }

  // stage_variable_overrides - computed: true, optional: false, required: false
  private _stageVariableOverrides = new cdktn.StringMap(this, "stage_variable_overrides");
  public get stageVariableOverrides() {
    return this._stageVariableOverrides;
  }

  // use_stage_cache - computed: true, optional: false, required: false
  public get useStageCache() {
    return this.getBooleanAttribute('use_stage_cache');
  }
}
export interface DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting {
}

export function dataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingToTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingToHclTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDeploymentStageDescriptionAccessLogSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_arn - computed: true, optional: false, required: false
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }
}
export interface DataAwsccApigatewayDeploymentStageDescriptionCanarySetting {
}

export function dataAwsccApigatewayDeploymentStageDescriptionCanarySettingToTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionCanarySetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDeploymentStageDescriptionCanarySettingToHclTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionCanarySetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDeploymentStageDescriptionCanarySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDeploymentStageDescriptionCanarySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percent_traffic - computed: true, optional: false, required: false
  public get percentTraffic() {
    return this.getNumberAttribute('percent_traffic');
  }

  // stage_variable_overrides - computed: true, optional: false, required: false
  private _stageVariableOverrides = new cdktn.StringMap(this, "stage_variable_overrides");
  public get stageVariableOverrides() {
    return this._stageVariableOverrides;
  }

  // use_stage_cache - computed: true, optional: false, required: false
  public get useStageCache() {
    return this.getBooleanAttribute('use_stage_cache');
  }
}
export interface DataAwsccApigatewayDeploymentStageDescriptionMethodSettings {
}

export function dataAwsccApigatewayDeploymentStageDescriptionMethodSettingsToTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionMethodSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDeploymentStageDescriptionMethodSettingsToHclTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionMethodSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApigatewayDeploymentStageDescriptionMethodSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDeploymentStageDescriptionMethodSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_data_encrypted - computed: true, optional: false, required: false
  public get cacheDataEncrypted() {
    return this.getBooleanAttribute('cache_data_encrypted');
  }

  // cache_ttl_in_seconds - computed: true, optional: false, required: false
  public get cacheTtlInSeconds() {
    return this.getNumberAttribute('cache_ttl_in_seconds');
  }

  // caching_enabled - computed: true, optional: false, required: false
  public get cachingEnabled() {
    return this.getBooleanAttribute('caching_enabled');
  }

  // data_trace_enabled - computed: true, optional: false, required: false
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // logging_level - computed: true, optional: false, required: false
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }

  // metrics_enabled - computed: true, optional: false, required: false
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // throttling_burst_limit - computed: true, optional: false, required: false
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }

  // throttling_rate_limit - computed: true, optional: false, required: false
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
}

export class DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference {
    return new DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApigatewayDeploymentStageDescriptionTags {
}

export function dataAwsccApigatewayDeploymentStageDescriptionTagsToTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDeploymentStageDescriptionTagsToHclTerraform(struct?: DataAwsccApigatewayDeploymentStageDescriptionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApigatewayDeploymentStageDescriptionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDeploymentStageDescriptionTags | undefined) {
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

export class DataAwsccApigatewayDeploymentStageDescriptionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference {
    return new DataAwsccApigatewayDeploymentStageDescriptionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApigatewayDeploymentStageDescription {
}

export function dataAwsccApigatewayDeploymentStageDescriptionToTerraform(struct?: DataAwsccApigatewayDeploymentStageDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApigatewayDeploymentStageDescriptionToHclTerraform(struct?: DataAwsccApigatewayDeploymentStageDescription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApigatewayDeploymentStageDescriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApigatewayDeploymentStageDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApigatewayDeploymentStageDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log_setting - computed: true, optional: false, required: false
  private _accessLogSetting = new DataAwsccApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(this, "access_log_setting");
  public get accessLogSetting() {
    return this._accessLogSetting;
  }

  // cache_cluster_enabled - computed: true, optional: false, required: false
  public get cacheClusterEnabled() {
    return this.getBooleanAttribute('cache_cluster_enabled');
  }

  // cache_cluster_size - computed: true, optional: false, required: false
  public get cacheClusterSize() {
    return this.getStringAttribute('cache_cluster_size');
  }

  // cache_data_encrypted - computed: true, optional: false, required: false
  public get cacheDataEncrypted() {
    return this.getBooleanAttribute('cache_data_encrypted');
  }

  // cache_ttl_in_seconds - computed: true, optional: false, required: false
  public get cacheTtlInSeconds() {
    return this.getNumberAttribute('cache_ttl_in_seconds');
  }

  // caching_enabled - computed: true, optional: false, required: false
  public get cachingEnabled() {
    return this.getBooleanAttribute('caching_enabled');
  }

  // canary_setting - computed: true, optional: false, required: false
  private _canarySetting = new DataAwsccApigatewayDeploymentStageDescriptionCanarySettingOutputReference(this, "canary_setting");
  public get canarySetting() {
    return this._canarySetting;
  }

  // client_certificate_id - computed: true, optional: false, required: false
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }

  // data_trace_enabled - computed: true, optional: false, required: false
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // documentation_version - computed: true, optional: false, required: false
  public get documentationVersion() {
    return this.getStringAttribute('documentation_version');
  }

  // logging_level - computed: true, optional: false, required: false
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }

  // method_settings - computed: true, optional: false, required: false
  private _methodSettings = new DataAwsccApigatewayDeploymentStageDescriptionMethodSettingsList(this, "method_settings", true);
  public get methodSettings() {
    return this._methodSettings;
  }

  // metrics_enabled - computed: true, optional: false, required: false
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccApigatewayDeploymentStageDescriptionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // throttling_burst_limit - computed: true, optional: false, required: false
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }

  // throttling_rate_limit - computed: true, optional: false, required: false
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }

  // tracing_enabled - computed: true, optional: false, required: false
  public get tracingEnabled() {
    return this.getBooleanAttribute('tracing_enabled');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new cdktn.StringMap(this, "variables");
  public get variables() {
    return this._variables;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigateway_deployment awscc_apigateway_deployment}
*/
export class DataAwsccApigatewayDeployment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_apigateway_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApigatewayDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApigatewayDeployment to import
  * @param importFromId The id of the existing DataAwsccApigatewayDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigateway_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApigatewayDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/apigateway_deployment awscc_apigateway_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_deployment',
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

  // deployment_canary_settings - computed: true, optional: false, required: false
  private _deploymentCanarySettings = new DataAwsccApigatewayDeploymentDeploymentCanarySettingsOutputReference(this, "deployment_canary_settings");
  public get deploymentCanarySettings() {
    return this._deploymentCanarySettings;
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // rest_api_id - computed: true, optional: false, required: false
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }

  // stage_description - computed: true, optional: false, required: false
  private _stageDescription = new DataAwsccApigatewayDeploymentStageDescriptionOutputReference(this, "stage_description");
  public get stageDescription() {
    return this._stageDescription;
  }

  // stage_name - computed: true, optional: false, required: false
  public get stageName() {
    return this.getStringAttribute('stage_name');
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
