// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontResponseHeadersPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * A response headers policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#response_headers_policy_config CloudfrontResponseHeadersPolicy#response_headers_policy_config}
  */
  readonly responseHeadersPolicyConfig: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig;
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders {
  /**
  * The list of HTTP header names. You can specify ``*`` to allow all headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods {
  /**
  * The list of HTTP methods. Valid values are:
  *   +   ``GET`` 
  *   +   ``DELETE`` 
  *   +   ``HEAD`` 
  *   +   ``OPTIONS`` 
  *   +   ``PATCH`` 
  *   +   ``POST`` 
  *   +   ``PUT`` 
  *   +   ``ALL`` 
  *   
  *  ``ALL`` is a special value that includes all of the listed HTTP methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins {
  /**
  * The list of origins (domain names). You can specify ``*`` to allow all origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders {
  /**
  * The list of HTTP headers. You can specify ``*`` to expose all headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig {
  /**
  * A Boolean that CloudFront uses as the value for the ``Access-Control-Allow-Credentials`` HTTP response header.
  *  For more information about the ``Access-Control-Allow-Credentials`` HTTP response header, see [Access-Control-Allow-Credentials](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials?: boolean | cdktn.IResolvable;
  /**
  * A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header.
  *  For more information about the ``Access-Control-Allow-Headers`` HTTP response header, see [Access-Control-Allow-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders;
  /**
  * A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header.
  *  For more information about the ``Access-Control-Allow-Methods`` HTTP response header, see [Access-Control-Allow-Methods](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}
  */
  readonly accessControlAllowMethods?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods;
  /**
  * A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header.
  *  For more information about the ``Access-Control-Allow-Origin`` HTTP response header, see [Access-Control-Allow-Origin](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}
  */
  readonly accessControlAllowOrigins?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins;
  /**
  * A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header.
  *  For more information about the ``Access-Control-Expose-Headers`` HTTP response header, see [Access-Control-Expose-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders;
  /**
  * A number that CloudFront uses as the value for the ``Access-Control-Max-Age`` HTTP response header.
  *  For more information about the ``Access-Control-Max-Age`` HTTP response header, see [Access-Control-Max-Age](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}
  */
  readonly originOverride?: boolean | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_control_allow_credentials: cdktn.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_allow_headers: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToTerraform(struct!.accessControlAllowHeaders),
    access_control_allow_methods: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToTerraform(struct!.accessControlAllowMethods),
    access_control_allow_origins: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToTerraform(struct!.accessControlAllowOrigins),
    access_control_expose_headers: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToTerraform(struct!.accessControlExposeHeaders),
    access_control_max_age_sec: cdktn.numberToTerraform(struct!.accessControlMaxAgeSec),
    origin_override: cdktn.booleanToTerraform(struct!.originOverride),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_control_allow_credentials: {
      value: cdktn.booleanToHclTerraform(struct!.accessControlAllowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_control_allow_headers: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToHclTerraform(struct!.accessControlAllowHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders",
    },
    access_control_allow_methods: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToHclTerraform(struct!.accessControlAllowMethods),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods",
    },
    access_control_allow_origins: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToHclTerraform(struct!.accessControlAllowOrigins),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins",
    },
    access_control_expose_headers: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToHclTerraform(struct!.accessControlExposeHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders",
    },
    access_control_max_age_sec: {
      value: cdktn.numberToHclTerraform(struct!.accessControlMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_override: {
      value: cdktn.booleanToHclTerraform(struct!.originOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlAllowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
    }
    if (this._accessControlAllowHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders?.internalValue;
    }
    if (this._accessControlAllowMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods?.internalValue;
    }
    if (this._accessControlAllowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowOrigins = this._accessControlAllowOrigins?.internalValue;
    }
    if (this._accessControlExposeHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders?.internalValue;
    }
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._originOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.originOverride = this._originOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlAllowCredentials = undefined;
      this._accessControlAllowHeaders.internalValue = undefined;
      this._accessControlAllowMethods.internalValue = undefined;
      this._accessControlAllowOrigins.internalValue = undefined;
      this._accessControlExposeHeaders.internalValue = undefined;
      this._accessControlMaxAgeSec = undefined;
      this._originOverride = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlAllowCredentials = value.accessControlAllowCredentials;
      this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
      this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
      this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
      this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._originOverride = value.originOverride;
    }
  }

  // access_control_allow_credentials - computed: true, optional: true, required: false
  private _accessControlAllowCredentials?: boolean | cdktn.IResolvable; 
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials');
  }
  public set accessControlAllowCredentials(value: boolean | cdktn.IResolvable) {
    this._accessControlAllowCredentials = value;
  }
  public resetAccessControlAllowCredentials() {
    this._accessControlAllowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowCredentialsInput() {
    return this._accessControlAllowCredentials;
  }

  // access_control_allow_headers - computed: true, optional: true, required: false
  private _accessControlAllowHeaders = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference(this, "access_control_allow_headers");
  public get accessControlAllowHeaders() {
    return this._accessControlAllowHeaders;
  }
  public putAccessControlAllowHeaders(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders) {
    this._accessControlAllowHeaders.internalValue = value;
  }
  public resetAccessControlAllowHeaders() {
    this._accessControlAllowHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowHeadersInput() {
    return this._accessControlAllowHeaders.internalValue;
  }

  // access_control_allow_methods - computed: true, optional: true, required: false
  private _accessControlAllowMethods = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference(this, "access_control_allow_methods");
  public get accessControlAllowMethods() {
    return this._accessControlAllowMethods;
  }
  public putAccessControlAllowMethods(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods) {
    this._accessControlAllowMethods.internalValue = value;
  }
  public resetAccessControlAllowMethods() {
    this._accessControlAllowMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowMethodsInput() {
    return this._accessControlAllowMethods.internalValue;
  }

  // access_control_allow_origins - computed: true, optional: true, required: false
  private _accessControlAllowOrigins = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference(this, "access_control_allow_origins");
  public get accessControlAllowOrigins() {
    return this._accessControlAllowOrigins;
  }
  public putAccessControlAllowOrigins(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins) {
    this._accessControlAllowOrigins.internalValue = value;
  }
  public resetAccessControlAllowOrigins() {
    this._accessControlAllowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginsInput() {
    return this._accessControlAllowOrigins.internalValue;
  }

  // access_control_expose_headers - computed: true, optional: true, required: false
  private _accessControlExposeHeaders = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference(this, "access_control_expose_headers");
  public get accessControlExposeHeaders() {
    return this._accessControlExposeHeaders;
  }
  public putAccessControlExposeHeaders(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders) {
    this._accessControlExposeHeaders.internalValue = value;
  }
  public resetAccessControlExposeHeaders() {
    this._accessControlExposeHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlExposeHeadersInput() {
    return this._accessControlExposeHeaders.internalValue;
  }

  // access_control_max_age_sec - computed: true, optional: true, required: false
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // origin_override - computed: true, optional: true, required: false
  private _originOverride?: boolean | cdktn.IResolvable; 
  public get originOverride() {
    return this.getBooleanAttribute('origin_override');
  }
  public set originOverride(value: boolean | cdktn.IResolvable) {
    this._originOverride = value;
  }
  public resetOriginOverride() {
    this._originOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originOverrideInput() {
    return this._originOverride;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems {
  /**
  * The HTTP response header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}
  */
  readonly header?: string;
  /**
  * A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
  /**
  * The value for the HTTP response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#value CloudfrontResponseHeadersPolicy#value}
  */
  readonly value?: string;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    override: cdktn.booleanToTerraform(struct!.override),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._override = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._override = value.override;
      this._value = value.value;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
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

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList extends cdktn.ComplexList {
  public internalValue? : CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference {
    return new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig {
  /**
  * The list of HTTP response headers and their values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems[] | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsToTerraform, false)(struct!.items),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems {
  /**
  * The HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}
  */
  readonly header?: string;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList extends cdktn.ComplexList {
  public internalValue? : CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems[] | cdktn.IResolvable

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
  public get(index: number): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference {
    return new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig {
  /**
  * The list of HTTP header names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems[] | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    items: cdktn.listMapper(cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsToTerraform, false)(struct!.items),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    items: {
      value: cdktn.listMapperHcl(cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems[] | cdktn.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy {
  /**
  * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
  *  For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy?: string;
  /**
  * A Boolean that determines whether CloudFront overrides the ``Content-Security-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_security_policy: cdktn.stringToTerraform(struct!.contentSecurityPolicy),
    override: cdktn.booleanToTerraform(struct!.override),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_security_policy: {
      value: cdktn.stringToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy = undefined;
      this._override = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._override = value.override;
    }
  }

  // content_security_policy - computed: true, optional: true, required: false
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions {
  /**
  * A Boolean that determines whether CloudFront overrides the ``X-Content-Type-Options`` HTTP response header received from the origin with the one specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    override: cdktn.booleanToTerraform(struct!.override),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._override = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._override = value.override;
    }
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions {
  /**
  * The value of the ``X-Frame-Options`` HTTP response header. Valid values are ``DENY`` and ``SAMEORIGIN``.
  *  For more information about these values, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}
  */
  readonly frameOption?: string;
  /**
  * A Boolean that determines whether CloudFront overrides the ``X-Frame-Options`` HTTP response header received from the origin with the one specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    frame_option: cdktn.stringToTerraform(struct!.frameOption),
    override: cdktn.booleanToTerraform(struct!.override),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    frame_option: {
      value: cdktn.stringToHclTerraform(struct!.frameOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOption = this._frameOption;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frameOption = undefined;
      this._override = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frameOption = value.frameOption;
      this._override = value.override;
    }
  }

  // frame_option - computed: true, optional: true, required: false
  private _frameOption?: string; 
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }
  public set frameOption(value: string) {
    this._frameOption = value;
  }
  public resetFrameOption() {
    this._frameOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionInput() {
    return this._frameOption;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy {
  /**
  * A Boolean that determines whether CloudFront overrides the ``Referrer-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
  /**
  * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
  *  For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy?: string;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    override: cdktn.booleanToTerraform(struct!.override),
    referrer_policy: cdktn.stringToTerraform(struct!.referrerPolicy),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referrer_policy: {
      value: cdktn.stringToHclTerraform(struct!.referrerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._referrerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._override = undefined;
      this._referrerPolicy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._override = value.override;
      this._referrerPolicy = value.referrerPolicy;
    }
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // referrer_policy - computed: true, optional: true, required: false
  private _referrerPolicy?: string; 
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
  public set referrerPolicy(value: string) {
    this._referrerPolicy = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity {
  /**
  * A number that CloudFront uses as the value for the ``max-age`` directive in the ``Strict-Transport-Security`` HTTP response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * A Boolean that determines whether CloudFront includes the ``includeSubDomains`` directive in the ``Strict-Transport-Security`` HTTP response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktn.IResolvable;
  /**
  * A Boolean that determines whether CloudFront overrides the ``Strict-Transport-Security`` HTTP response header received from the origin with the one specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
  /**
  * A Boolean that determines whether CloudFront includes the ``preload`` directive in the ``Strict-Transport-Security`` HTTP response header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}
  */
  readonly preload?: boolean | cdktn.IResolvable;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_control_max_age_sec: cdktn.numberToTerraform(struct!.accessControlMaxAgeSec),
    include_subdomains: cdktn.booleanToTerraform(struct!.includeSubdomains),
    override: cdktn.booleanToTerraform(struct!.override),
    preload: cdktn.booleanToTerraform(struct!.preload),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_control_max_age_sec: {
      value: cdktn.numberToHclTerraform(struct!.accessControlMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_subdomains: {
      value: cdktn.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preload: {
      value: cdktn.booleanToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlMaxAgeSec = undefined;
      this._includeSubdomains = undefined;
      this._override = undefined;
      this._preload = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._includeSubdomains = value.includeSubdomains;
      this._override = value.override;
      this._preload = value.preload;
    }
  }

  // access_control_max_age_sec - computed: true, optional: true, required: false
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // include_subdomains - computed: true, optional: true, required: false
  private _includeSubdomains?: boolean | cdktn.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktn.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // preload - computed: true, optional: true, required: false
  private _preload?: boolean | cdktn.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktn.IResolvable) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection {
  /**
  * A Boolean that determines whether CloudFront includes the ``mode=block`` directive in the ``X-XSS-Protection`` header.
  *  For more information about this directive, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}
  */
  readonly modeBlock?: boolean | cdktn.IResolvable;
  /**
  * A Boolean that determines whether CloudFront overrides the ``X-XSS-Protection`` HTTP response header received from the origin with the one specified in this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override?: boolean | cdktn.IResolvable;
  /**
  * A Boolean that determines the value of the ``X-XSS-Protection`` HTTP response header. When this setting is ``true``, the value of the ``X-XSS-Protection`` header is ``1``. When this setting is ``false``, the value of the ``X-XSS-Protection`` header is ``0``.
  *  For more information about these settings, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}
  */
  readonly protection?: boolean | cdktn.IResolvable;
  /**
  * A reporting URI, which CloudFront uses as the value of the ``report`` directive in the ``X-XSS-Protection`` header.
  *  You cannot specify a ``ReportUri`` when ``ModeBlock`` is ``true``.
  *  For more information about using a reporting URL, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}
  */
  readonly reportUri?: string;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode_block: cdktn.booleanToTerraform(struct!.modeBlock),
    override: cdktn.booleanToTerraform(struct!.override),
    protection: cdktn.booleanToTerraform(struct!.protection),
    report_uri: cdktn.stringToTerraform(struct!.reportUri),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode_block: {
      value: cdktn.booleanToHclTerraform(struct!.modeBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktn.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protection: {
      value: cdktn.booleanToHclTerraform(struct!.protection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report_uri: {
      value: cdktn.stringToHclTerraform(struct!.reportUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeBlock = this._modeBlock;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._protection !== undefined) {
      hasAnyValues = true;
      internalValueResult.protection = this._protection;
    }
    if (this._reportUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportUri = this._reportUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modeBlock = undefined;
      this._override = undefined;
      this._protection = undefined;
      this._reportUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modeBlock = value.modeBlock;
      this._override = value.override;
      this._protection = value.protection;
      this._reportUri = value.reportUri;
    }
  }

  // mode_block - computed: true, optional: true, required: false
  private _modeBlock?: boolean | cdktn.IResolvable; 
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block');
  }
  public set modeBlock(value: boolean | cdktn.IResolvable) {
    this._modeBlock = value;
  }
  public resetModeBlock() {
    this._modeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeBlockInput() {
    return this._modeBlock;
  }

  // override - computed: true, optional: true, required: false
  private _override?: boolean | cdktn.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktn.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // protection - computed: true, optional: true, required: false
  private _protection?: boolean | cdktn.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktn.IResolvable) {
    this._protection = value;
  }
  public resetProtection() {
    this._protection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // report_uri - computed: true, optional: true, required: false
  private _reportUri?: string; 
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
  public set reportUri(value: string) {
    this._reportUri = value;
  }
  public resetReportUri() {
    this._reportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUriInput() {
    return this._reportUri;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig {
  /**
  * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
  *  For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy;
  /**
  * Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``.
  *  For more information about the ``X-Content-Type-Options`` HTTP response header, see [X-Content-Type-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}
  */
  readonly contentTypeOptions?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions;
  /**
  * Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value.
  *  For more information about the ``X-Frame-Options`` HTTP response header, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#frame_options CloudfrontResponseHeadersPolicy#frame_options}
  */
  readonly frameOptions?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions;
  /**
  * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
  *  For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy;
  /**
  * Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value.
  *  For more information about the ``Strict-Transport-Security`` HTTP response header, see [Security headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the *Amazon CloudFront Developer Guide* and [Strict-Transport-Security](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}
  */
  readonly strictTransportSecurity?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity;
  /**
  * Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value.
  *  For more information about the ``X-XSS-Protection`` HTTP response header, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}
  */
  readonly xssProtection?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_security_policy: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToTerraform(struct!.contentSecurityPolicy),
    content_type_options: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToTerraform(struct!.contentTypeOptions),
    frame_options: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToTerraform(struct!.frameOptions),
    referrer_policy: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToTerraform(struct!.referrerPolicy),
    strict_transport_security: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToTerraform(struct!.strictTransportSecurity),
    xss_protection: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToTerraform(struct!.xssProtection),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_security_policy: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy",
    },
    content_type_options: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToHclTerraform(struct!.contentTypeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions",
    },
    frame_options: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToHclTerraform(struct!.frameOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions",
    },
    referrer_policy: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToHclTerraform(struct!.referrerPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy",
    },
    strict_transport_security: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct!.strictTransportSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity",
    },
    xss_protection: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToHclTerraform(struct!.xssProtection),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy?.internalValue;
    }
    if (this._contentTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeOptions = this._contentTypeOptions?.internalValue;
    }
    if (this._frameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOptions = this._frameOptions?.internalValue;
    }
    if (this._referrerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy?.internalValue;
    }
    if (this._strictTransportSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTransportSecurity = this._strictTransportSecurity?.internalValue;
    }
    if (this._xssProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xssProtection = this._xssProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy.internalValue = undefined;
      this._contentTypeOptions.internalValue = undefined;
      this._frameOptions.internalValue = undefined;
      this._referrerPolicy.internalValue = undefined;
      this._strictTransportSecurity.internalValue = undefined;
      this._xssProtection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
      this._contentTypeOptions.internalValue = value.contentTypeOptions;
      this._frameOptions.internalValue = value.frameOptions;
      this._referrerPolicy.internalValue = value.referrerPolicy;
      this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
      this._xssProtection.internalValue = value.xssProtection;
    }
  }

  // content_security_policy - computed: true, optional: true, required: false
  private _contentSecurityPolicy = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference(this, "content_security_policy");
  public get contentSecurityPolicy() {
    return this._contentSecurityPolicy;
  }
  public putContentSecurityPolicy(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy) {
    this._contentSecurityPolicy.internalValue = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy.internalValue;
  }

  // content_type_options - computed: true, optional: true, required: false
  private _contentTypeOptions = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference(this, "content_type_options");
  public get contentTypeOptions() {
    return this._contentTypeOptions;
  }
  public putContentTypeOptions(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions) {
    this._contentTypeOptions.internalValue = value;
  }
  public resetContentTypeOptions() {
    this._contentTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeOptionsInput() {
    return this._contentTypeOptions.internalValue;
  }

  // frame_options - computed: true, optional: true, required: false
  private _frameOptions = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference(this, "frame_options");
  public get frameOptions() {
    return this._frameOptions;
  }
  public putFrameOptions(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions) {
    this._frameOptions.internalValue = value;
  }
  public resetFrameOptions() {
    this._frameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionsInput() {
    return this._frameOptions.internalValue;
  }

  // referrer_policy - computed: true, optional: true, required: false
  private _referrerPolicy = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference(this, "referrer_policy");
  public get referrerPolicy() {
    return this._referrerPolicy;
  }
  public putReferrerPolicy(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy) {
    this._referrerPolicy.internalValue = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy.internalValue;
  }

  // strict_transport_security - computed: true, optional: true, required: false
  private _strictTransportSecurity = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference(this, "strict_transport_security");
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }
  public putStrictTransportSecurity(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity) {
    this._strictTransportSecurity.internalValue = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity.internalValue;
  }

  // xss_protection - computed: true, optional: true, required: false
  private _xssProtection = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference(this, "xss_protection");
  public get xssProtection() {
    return this._xssProtection;
  }
  public putXssProtection(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection) {
    this._xssProtection.internalValue = value;
  }
  public resetXssProtection() {
    this._xssProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssProtectionInput() {
    return this._xssProtection.internalValue;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig {
  /**
  * A Boolean that determines whether CloudFront adds the ``Server-Timing`` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * A number 0?100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the ``Server-Timing`` header to. When you set the sampling rate to 100, CloudFront adds the ``Server-Timing`` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0?100 with up to four decimal places.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}
  */
  readonly samplingRate?: number;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    sampling_rate: cdktn.numberToTerraform(struct!.samplingRate),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sampling_rate: {
      value: cdktn.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._samplingRate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._samplingRate = value.samplingRate;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sampling_rate - computed: true, optional: true, required: false
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig {
  /**
  * A comment to describe the response headers policy.
  *  The comment cannot be longer than 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}
  */
  readonly comment?: string;
  /**
  * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#cors_config CloudfrontResponseHeadersPolicy#cors_config}
  */
  readonly corsConfig?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig;
  /**
  * A configuration for a set of custom HTTP response headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}
  */
  readonly customHeadersConfig?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig;
  /**
  * A name to identify the response headers policy.
  *  The name must be unique for response headers policies in this AWS-account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}
  */
  readonly name: string;
  /**
  * A configuration for a set of HTTP headers to remove from the HTTP response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#remove_headers_config CloudfrontResponseHeadersPolicy#remove_headers_config}
  */
  readonly removeHeadersConfig?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig;
  /**
  * A configuration for a set of security-related HTTP response headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}
  */
  readonly securityHeadersConfig?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig;
  /**
  * A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#server_timing_headers_config CloudfrontResponseHeadersPolicy#server_timing_headers_config}
  */
  readonly serverTimingHeadersConfig?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig;
}

export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    cors_config: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigToTerraform(struct!.corsConfig),
    custom_headers_config: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigToTerraform(struct!.customHeadersConfig),
    name: cdktn.stringToTerraform(struct!.name),
    remove_headers_config: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigToTerraform(struct!.removeHeadersConfig),
    security_headers_config: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigToTerraform(struct!.securityHeadersConfig),
    server_timing_headers_config: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigToTerraform(struct!.serverTimingHeadersConfig),
  }
}


export function cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig | cdktn.IResolvable): any {
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
    cors_config: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigToHclTerraform(struct!.corsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig",
    },
    custom_headers_config: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigToHclTerraform(struct!.customHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_headers_config: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigToHclTerraform(struct!.removeHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig",
    },
    security_headers_config: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigToHclTerraform(struct!.securityHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig",
    },
    server_timing_headers_config: {
      value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigToHclTerraform(struct!.serverTimingHeadersConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._corsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsConfig = this._corsConfig?.internalValue;
    }
    if (this._customHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeadersConfig = this._customHeadersConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._removeHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeHeadersConfig = this._removeHeadersConfig?.internalValue;
    }
    if (this._securityHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityHeadersConfig = this._securityHeadersConfig?.internalValue;
    }
    if (this._serverTimingHeadersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTimingHeadersConfig = this._serverTimingHeadersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._corsConfig.internalValue = undefined;
      this._customHeadersConfig.internalValue = undefined;
      this._name = undefined;
      this._removeHeadersConfig.internalValue = undefined;
      this._securityHeadersConfig.internalValue = undefined;
      this._serverTimingHeadersConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._corsConfig.internalValue = value.corsConfig;
      this._customHeadersConfig.internalValue = value.customHeadersConfig;
      this._name = value.name;
      this._removeHeadersConfig.internalValue = value.removeHeadersConfig;
      this._securityHeadersConfig.internalValue = value.securityHeadersConfig;
      this._serverTimingHeadersConfig.internalValue = value.serverTimingHeadersConfig;
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

  // cors_config - computed: true, optional: true, required: false
  private _corsConfig = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference(this, "cors_config");
  public get corsConfig() {
    return this._corsConfig;
  }
  public putCorsConfig(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig) {
    this._corsConfig.internalValue = value;
  }
  public resetCorsConfig() {
    this._corsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig.internalValue;
  }

  // custom_headers_config - computed: true, optional: true, required: false
  private _customHeadersConfig = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference(this, "custom_headers_config");
  public get customHeadersConfig() {
    return this._customHeadersConfig;
  }
  public putCustomHeadersConfig(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig) {
    this._customHeadersConfig.internalValue = value;
  }
  public resetCustomHeadersConfig() {
    this._customHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersConfigInput() {
    return this._customHeadersConfig.internalValue;
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

  // remove_headers_config - computed: true, optional: true, required: false
  private _removeHeadersConfig = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference(this, "remove_headers_config");
  public get removeHeadersConfig() {
    return this._removeHeadersConfig;
  }
  public putRemoveHeadersConfig(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig) {
    this._removeHeadersConfig.internalValue = value;
  }
  public resetRemoveHeadersConfig() {
    this._removeHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHeadersConfigInput() {
    return this._removeHeadersConfig.internalValue;
  }

  // security_headers_config - computed: true, optional: true, required: false
  private _securityHeadersConfig = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference(this, "security_headers_config");
  public get securityHeadersConfig() {
    return this._securityHeadersConfig;
  }
  public putSecurityHeadersConfig(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig) {
    this._securityHeadersConfig.internalValue = value;
  }
  public resetSecurityHeadersConfig() {
    this._securityHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeadersConfigInput() {
    return this._securityHeadersConfig.internalValue;
  }

  // server_timing_headers_config - computed: true, optional: true, required: false
  private _serverTimingHeadersConfig = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference(this, "server_timing_headers_config");
  public get serverTimingHeadersConfig() {
    return this._serverTimingHeadersConfig;
  }
  public putServerTimingHeadersConfig(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig) {
    this._serverTimingHeadersConfig.internalValue = value;
  }
  public resetServerTimingHeadersConfig() {
    this._serverTimingHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimingHeadersConfigInput() {
    return this._serverTimingHeadersConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy}
*/
export class CloudfrontResponseHeadersPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_response_headers_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontResponseHeadersPolicy to import
  * @param importFromId The id of the existing CloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontResponseHeadersPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_response_headers_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontResponseHeadersPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontResponseHeadersPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_response_headers_policy',
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
    this._responseHeadersPolicyConfig.internalValue = config.responseHeadersPolicyConfig;
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

  // response_headers_policy_config - computed: false, optional: false, required: true
  private _responseHeadersPolicyConfig = new CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference(this, "response_headers_policy_config");
  public get responseHeadersPolicyConfig() {
    return this._responseHeadersPolicyConfig;
  }
  public putResponseHeadersPolicyConfig(value: CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig) {
    this._responseHeadersPolicyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyConfigInput() {
    return this._responseHeadersPolicyConfig.internalValue;
  }

  // response_headers_policy_id - computed: true, optional: false, required: false
  public get responseHeadersPolicyId() {
    return this.getStringAttribute('response_headers_policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      response_headers_policy_config: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigToTerraform(this._responseHeadersPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      response_headers_policy_config: {
        value: cloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigToHclTerraform(this._responseHeadersPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
