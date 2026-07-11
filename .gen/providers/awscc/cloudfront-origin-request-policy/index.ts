// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontOriginRequestPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The origin request policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#origin_request_policy_config CloudfrontOriginRequestPolicy#origin_request_policy_config}
  */
  readonly originRequestPolicyConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig;
}
export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig {
  /**
  * Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
  *   +  ``none`` ? No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any cookies that are listed in a ``CachePolicy``*are* included in origin requests.
  *   +  ``whitelist`` ? Only the cookies in viewer requests that are listed in the ``CookieNames`` type are included in requests that CloudFront sends to the origin.
  *   +  ``all`` ? All cookies in viewer requests are included in requests that CloudFront sends to the origin.
  *   +  ``allExcept`` ? All cookies in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the ``CookieNames`` type, which are not included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * Contains a list of cookie names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}
  */
  readonly cookies?: string[];
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cookie_behavior: cdktn.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cookies),
  }
}


export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cookie_behavior: {
      value: cdktn.stringToHclTerraform(struct!.cookieBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieBehavior = this._cookieBehavior;
    }
    if (this._cookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieBehavior = undefined;
      this._cookies = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieBehavior = value.cookieBehavior;
      this._cookies = value.cookies;
    }
  }

  // cookie_behavior - computed: false, optional: false, required: true
  private _cookieBehavior?: string;
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }
  public set cookieBehavior(value: string) {
    this._cookieBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieBehaviorInput() {
    return this._cookieBehavior;
  }

  // cookies - computed: true, optional: true, required: false
  private _cookies?: string[];
  public get cookies() {
    return this.getListAttribute('cookies');
  }
  public set cookies(value: string[]) {
    this._cookies = value;
  }
  public resetCookies() {
    this._cookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies;
  }
}
export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig {
  /**
  * Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:
  *   +  ``none`` ? No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any headers that are listed in a ``CachePolicy``*are* included in origin requests.
  *   +  ``whitelist`` ? Only the HTTP headers that are listed in the ``Headers`` type are included in requests that CloudFront sends to the origin.
  *   +  ``allViewer`` ? All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.
  *   +  ``allViewerAndWhitelistCloudFront`` ? All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the ``Headers`` type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.
  *   +  ``allExcept`` ? All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the ``Headers`` type, which are not included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
  */
  readonly headerBehavior: string;
  /**
  * Contains a list of HTTP header names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}
  */
  readonly headers?: string[];
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_behavior: cdktn.stringToTerraform(struct!.headerBehavior),
    headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headers),
  }
}


export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_behavior: {
      value: cdktn.stringToHclTerraform(struct!.headerBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBehavior = this._headerBehavior;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerBehavior = undefined;
      this._headers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerBehavior = value.headerBehavior;
      this._headers = value.headers;
    }
  }

  // header_behavior - computed: false, optional: false, required: true
  private _headerBehavior?: string;
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }
  public set headerBehavior(value: string) {
    this._headerBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBehaviorInput() {
    return this._headerBehavior;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[];
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }
}
export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig {
  /**
  * Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
  *   +  ``none`` ? No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any query strings that are listed in a ``CachePolicy``*are* included in origin requests.
  *   +  ``whitelist`` ? Only the query strings in viewer requests that are listed in the ``QueryStringNames`` type are included in requests that CloudFront sends to the origin.
  *   +  ``all`` ? All query strings in viewer requests are included in requests that CloudFront sends to the origin.
  *   +  ``allExcept`` ? All query strings in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the ``QueryStringNames`` type, which are not included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * Contains a list of query string names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}
  */
  readonly queryStrings?: string[];
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_string_behavior: cdktn.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStrings),
  }
}


export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_string_behavior: {
      value: cdktn.stringToHclTerraform(struct!.queryStringBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStringBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBehavior = this._queryStringBehavior;
    }
    if (this._queryStrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStrings = this._queryStrings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryStringBehavior = undefined;
      this._queryStrings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryStringBehavior = value.queryStringBehavior;
      this._queryStrings = value.queryStrings;
    }
  }

  // query_string_behavior - computed: false, optional: false, required: true
  private _queryStringBehavior?: string;
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }
  public set queryStringBehavior(value: string) {
    this._queryStringBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBehaviorInput() {
    return this._queryStringBehavior;
  }

  // query_strings - computed: true, optional: true, required: false
  private _queryStrings?: string[];
  public get queryStrings() {
    return this.getListAttribute('query_strings');
  }
  public set queryStrings(value: string[]) {
    this._queryStrings = value;
  }
  public resetQueryStrings() {
    this._queryStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsInput() {
    return this._queryStrings;
  }
}
export interface CloudfrontOriginRequestPolicyOriginRequestPolicyConfig {
  /**
  * A comment to describe the origin request policy. The comment cannot be longer than 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The cookies from viewer requests to include in origin requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig;
  /**
  * The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}
  */
  readonly headersConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig;
  /**
  * A unique name to identify the origin request policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}
  */
  readonly name: string;
  /**
  * The URL query strings from viewer requests to include in origin requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig;
}

export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    cookies_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct!.cookiesConfig),
    headers_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct!.headersConfig),
    name: cdktn.stringToTerraform(struct!.name),
    query_strings_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}


export function cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookies_config: {
      value: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToHclTerraform(struct!.cookiesConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig",
    },
    headers_config: {
      value: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToHclTerraform(struct!.headersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_strings_config: {
      value: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToHclTerraform(struct!.queryStringsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyOriginRequestPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._cookiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
    }
    if (this._headersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersConfig = this._headersConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryStringsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._cookiesConfig.internalValue = undefined;
      this._headersConfig.internalValue = undefined;
      this._name = undefined;
      this._queryStringsConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._cookiesConfig.internalValue = value.cookiesConfig;
      this._headersConfig.internalValue = value.headersConfig;
      this._name = value.name;
      this._queryStringsConfig.internalValue = value.queryStringsConfig;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig = new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }
  public putCookiesConfig(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig) {
    this._cookiesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig.internalValue;
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig = new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }
  public putHeadersConfig(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig) {
    this._headersConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig.internalValue;
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

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig = new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
  public putQueryStringsConfig(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig) {
    this._queryStringsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}
*/
export class CloudfrontOriginRequestPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_origin_request_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontOriginRequestPolicy to import
  * @param importFromId The id of the existing CloudfrontOriginRequestPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontOriginRequestPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_origin_request_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_origin_request_policy',
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
    this._originRequestPolicyConfig.internalValue = config.originRequestPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // origin_request_policy_config - computed: false, optional: false, required: true
  private _originRequestPolicyConfig = new CloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(this, "origin_request_policy_config");
  public get originRequestPolicyConfig() {
    return this._originRequestPolicyConfig;
  }
  public putOriginRequestPolicyConfig(value: CloudfrontOriginRequestPolicyOriginRequestPolicyConfig) {
    this._originRequestPolicyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestPolicyConfigInput() {
    return this._originRequestPolicyConfig.internalValue;
  }

  // origin_request_policy_id - computed: true, optional: false, required: false
  public get originRequestPolicyId() {
    return this.getStringAttribute('origin_request_policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      origin_request_policy_config: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(this._originRequestPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      origin_request_policy_config: {
        value: cloudfrontOriginRequestPolicyOriginRequestPolicyConfigToHclTerraform(this._originRequestPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontOriginRequestPolicyOriginRequestPolicyConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
