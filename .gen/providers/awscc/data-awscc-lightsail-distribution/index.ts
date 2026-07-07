// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLightsailDistributionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_distribution#id DataAwsccLightsailDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies {
}

export function dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesToTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesToHclTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookies_allow_list - computed: true, optional: false, required: false
  public get cookiesAllowList() {
    return cdktn.Fn.tolist(this.getListAttribute('cookies_allow_list'));
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getStringAttribute('option');
  }
}
export interface DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders {
}

export function dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersToTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersToHclTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers_allow_list - computed: true, optional: false, required: false
  public get headersAllowList() {
    return cdktn.Fn.tolist(this.getListAttribute('headers_allow_list'));
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getStringAttribute('option');
  }
}
export interface DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings {
}

export function dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsToTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsToHclTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getBooleanAttribute('option');
  }

  // query_strings_allow_list - computed: true, optional: false, required: false
  public get queryStringsAllowList() {
    return cdktn.Fn.tolist(this.getListAttribute('query_strings_allow_list'));
  }
}
export interface DataAwsccLightsailDistributionCacheBehaviorSettings {
}

export function dataAwsccLightsailDistributionCacheBehaviorSettingsToTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionCacheBehaviorSettingsToHclTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviorSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDistributionCacheBehaviorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionCacheBehaviorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_http_methods - computed: true, optional: false, required: false
  public get allowedHttpMethods() {
    return this.getStringAttribute('allowed_http_methods');
  }

  // cached_http_methods - computed: true, optional: false, required: false
  public get cachedHttpMethods() {
    return this.getStringAttribute('cached_http_methods');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // forwarded_cookies - computed: true, optional: false, required: false
  private _forwardedCookies = new DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(this, "forwarded_cookies");
  public get forwardedCookies() {
    return this._forwardedCookies;
  }

  // forwarded_headers - computed: true, optional: false, required: false
  private _forwardedHeaders = new DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(this, "forwarded_headers");
  public get forwardedHeaders() {
    return this._forwardedHeaders;
  }

  // forwarded_query_strings - computed: true, optional: false, required: false
  private _forwardedQueryStrings = new DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(this, "forwarded_query_strings");
  public get forwardedQueryStrings() {
    return this._forwardedQueryStrings;
  }

  // maximum_ttl - computed: true, optional: false, required: false
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }

  // minimum_ttl - computed: true, optional: false, required: false
  public get minimumTtl() {
    return this.getNumberAttribute('minimum_ttl');
  }
}
export interface DataAwsccLightsailDistributionCacheBehaviors {
}

export function dataAwsccLightsailDistributionCacheBehaviorsToTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionCacheBehaviorsToHclTerraform(struct?: DataAwsccLightsailDistributionCacheBehaviors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionCacheBehaviorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailDistributionCacheBehaviors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionCacheBehaviors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsccLightsailDistributionCacheBehaviorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailDistributionCacheBehaviorsOutputReference {
    return new DataAwsccLightsailDistributionCacheBehaviorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLightsailDistributionDefaultCacheBehavior {
}

export function dataAwsccLightsailDistributionDefaultCacheBehaviorToTerraform(struct?: DataAwsccLightsailDistributionDefaultCacheBehavior): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionDefaultCacheBehaviorToHclTerraform(struct?: DataAwsccLightsailDistributionDefaultCacheBehavior): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDistributionDefaultCacheBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionDefaultCacheBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
}
export interface DataAwsccLightsailDistributionOrigin {
}

export function dataAwsccLightsailDistributionOriginToTerraform(struct?: DataAwsccLightsailDistributionOrigin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionOriginToHclTerraform(struct?: DataAwsccLightsailDistributionOrigin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLightsailDistributionOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_policy - computed: true, optional: false, required: false
  public get protocolPolicy() {
    return this.getStringAttribute('protocol_policy');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export interface DataAwsccLightsailDistributionTags {
}

export function dataAwsccLightsailDistributionTagsToTerraform(struct?: DataAwsccLightsailDistributionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLightsailDistributionTagsToHclTerraform(struct?: DataAwsccLightsailDistributionTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLightsailDistributionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLightsailDistributionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLightsailDistributionTags | undefined) {
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

export class DataAwsccLightsailDistributionTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLightsailDistributionTagsOutputReference {
    return new DataAwsccLightsailDistributionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_distribution awscc_lightsail_distribution}
*/
export class DataAwsccLightsailDistribution extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLightsailDistribution resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLightsailDistribution to import
  * @param importFromId The id of the existing DataAwsccLightsailDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLightsailDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/lightsail_distribution awscc_lightsail_distribution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLightsailDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLightsailDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_distribution',
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

  // able_to_update_bundle - computed: true, optional: false, required: false
  public get ableToUpdateBundle() {
    return this.getBooleanAttribute('able_to_update_bundle');
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // cache_behavior_settings - computed: true, optional: false, required: false
  private _cacheBehaviorSettings = new DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference(this, "cache_behavior_settings");
  public get cacheBehaviorSettings() {
    return this._cacheBehaviorSettings;
  }

  // cache_behaviors - computed: true, optional: false, required: false
  private _cacheBehaviors = new DataAwsccLightsailDistributionCacheBehaviorsList(this, "cache_behaviors", true);
  public get cacheBehaviors() {
    return this._cacheBehaviors;
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // default_cache_behavior - computed: true, optional: false, required: false
  private _defaultCacheBehavior = new DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference(this, "default_cache_behavior");
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }

  // distribution_arn - computed: true, optional: false, required: false
  public get distributionArn() {
    return this.getStringAttribute('distribution_arn');
  }

  // distribution_name - computed: true, optional: false, required: false
  public get distributionName() {
    return this.getStringAttribute('distribution_name');
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

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataAwsccLightsailDistributionOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLightsailDistributionTagsList(this, "tags", true);
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
