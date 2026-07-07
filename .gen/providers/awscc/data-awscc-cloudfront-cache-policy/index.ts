// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_cache_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudfrontCachePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_cache_policy#id DataAwsccCloudfrontCachePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig {
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie_behavior - computed: true, optional: false, required: false
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }

  // cookies - computed: true, optional: false, required: false
  public get cookies() {
    return this.getListAttribute('cookies');
  }
}
export interface DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig {
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_behavior - computed: true, optional: false, required: false
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }
}
export interface DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_string_behavior - computed: true, optional: false, required: false
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }

  // query_strings - computed: true, optional: false, required: false
  public get queryStrings() {
    return this.getListAttribute('query_strings');
  }
}
export interface DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin {
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginToHclTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookies_config - computed: true, optional: false, required: false
  private _cookiesConfig = new DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }

  // enable_accept_encoding_brotli - computed: true, optional: false, required: false
  public get enableAcceptEncodingBrotli() {
    return this.getBooleanAttribute('enable_accept_encoding_brotli');
  }

  // enable_accept_encoding_gzip - computed: true, optional: false, required: false
  public get enableAcceptEncodingGzip() {
    return this.getBooleanAttribute('enable_accept_encoding_gzip');
  }

  // headers_config - computed: true, optional: false, required: false
  private _headersConfig = new DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }

  // query_strings_config - computed: true, optional: false, required: false
  private _queryStringsConfig = new DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
}
export interface DataAwsccCloudfrontCachePolicyCachePolicyConfig {
}

export function dataAwsccCloudfrontCachePolicyCachePolicyConfigToTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontCachePolicyCachePolicyConfigToHclTerraform(struct?: DataAwsccCloudfrontCachePolicyCachePolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontCachePolicyCachePolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontCachePolicyCachePolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontCachePolicyCachePolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters_in_cache_key_and_forwarded_to_origin - computed: true, optional: false, required: false
  private _parametersInCacheKeyAndForwardedToOrigin = new DataAwsccCloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin");
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this._parametersInCacheKeyAndForwardedToOrigin;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_cache_policy awscc_cloudfront_cache_policy}
*/
export class DataAwsccCloudfrontCachePolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_cache_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudfrontCachePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudfrontCachePolicy to import
  * @param importFromId The id of the existing DataAwsccCloudfrontCachePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudfrontCachePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_cache_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_cache_policy awscc_cloudfront_cache_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontCachePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontCachePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_cache_policy',
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

  // cache_policy_config - computed: true, optional: false, required: false
  private _cachePolicyConfig = new DataAwsccCloudfrontCachePolicyCachePolicyConfigOutputReference(this, "cache_policy_config");
  public get cachePolicyConfig() {
    return this._cachePolicyConfig;
  }

  // cache_policy_id - computed: true, optional: false, required: false
  public get cachePolicyId() {
    return this.getStringAttribute('cache_policy_id');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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
