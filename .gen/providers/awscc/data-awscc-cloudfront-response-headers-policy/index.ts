// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_response_headers_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudfrontResponseHeadersPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_response_headers_policy#id DataAwsccCloudfrontResponseHeadersPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_allow_credentials - computed: true, optional: false, required: false
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials');
  }

  // access_control_allow_headers - computed: true, optional: false, required: false
  private _accessControlAllowHeaders = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference(this, "access_control_allow_headers");
  public get accessControlAllowHeaders() {
    return this._accessControlAllowHeaders;
  }

  // access_control_allow_methods - computed: true, optional: false, required: false
  private _accessControlAllowMethods = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference(this, "access_control_allow_methods");
  public get accessControlAllowMethods() {
    return this._accessControlAllowMethods;
  }

  // access_control_allow_origins - computed: true, optional: false, required: false
  private _accessControlAllowOrigins = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference(this, "access_control_allow_origins");
  public get accessControlAllowOrigins() {
    return this._accessControlAllowOrigins;
  }

  // access_control_expose_headers - computed: true, optional: false, required: false
  private _accessControlExposeHeaders = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference(this, "access_control_expose_headers");
  public get accessControlExposeHeaders() {
    return this._accessControlExposeHeaders;
  }

  // access_control_max_age_sec - computed: true, optional: false, required: false
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }

  // origin_override - computed: true, optional: false, required: false
  public get originOverride() {
    return this.getBooleanAttribute('origin_override');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference {
    return new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference {
    return new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_security_policy - computed: true, optional: false, required: false
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frame_option - computed: true, optional: false, required: false
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // referrer_policy - computed: true, optional: false, required: false
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_max_age_sec - computed: true, optional: false, required: false
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // preload - computed: true, optional: false, required: false
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode_block - computed: true, optional: false, required: false
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // protection - computed: true, optional: false, required: false
  public get protection() {
    return this.getBooleanAttribute('protection');
  }

  // report_uri - computed: true, optional: false, required: false
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_security_policy - computed: true, optional: false, required: false
  private _contentSecurityPolicy = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference(this, "content_security_policy");
  public get contentSecurityPolicy() {
    return this._contentSecurityPolicy;
  }

  // content_type_options - computed: true, optional: false, required: false
  private _contentTypeOptions = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference(this, "content_type_options");
  public get contentTypeOptions() {
    return this._contentTypeOptions;
  }

  // frame_options - computed: true, optional: false, required: false
  private _frameOptions = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference(this, "frame_options");
  public get frameOptions() {
    return this._frameOptions;
  }

  // referrer_policy - computed: true, optional: false, required: false
  private _referrerPolicy = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference(this, "referrer_policy");
  public get referrerPolicy() {
    return this._referrerPolicy;
  }

  // strict_transport_security - computed: true, optional: false, required: false
  private _strictTransportSecurity = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference(this, "strict_transport_security");
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }

  // xss_protection - computed: true, optional: false, required: false
  private _xssProtection = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference(this, "xss_protection");
  public get xssProtection() {
    return this._xssProtection;
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
}
export interface DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig {
}

export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigToTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigToHclTerraform(struct?: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig | undefined) {
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

  // cors_config - computed: true, optional: false, required: false
  private _corsConfig = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference(this, "cors_config");
  public get corsConfig() {
    return this._corsConfig;
  }

  // custom_headers_config - computed: true, optional: false, required: false
  private _customHeadersConfig = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference(this, "custom_headers_config");
  public get customHeadersConfig() {
    return this._customHeadersConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remove_headers_config - computed: true, optional: false, required: false
  private _removeHeadersConfig = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference(this, "remove_headers_config");
  public get removeHeadersConfig() {
    return this._removeHeadersConfig;
  }

  // security_headers_config - computed: true, optional: false, required: false
  private _securityHeadersConfig = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference(this, "security_headers_config");
  public get securityHeadersConfig() {
    return this._securityHeadersConfig;
  }

  // server_timing_headers_config - computed: true, optional: false, required: false
  private _serverTimingHeadersConfig = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference(this, "server_timing_headers_config");
  public get serverTimingHeadersConfig() {
    return this._serverTimingHeadersConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy}
*/
export class DataAwsccCloudfrontResponseHeadersPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_response_headers_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudfrontResponseHeadersPolicy to import
  * @param importFromId The id of the existing DataAwsccCloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudfrontResponseHeadersPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_response_headers_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontResponseHeadersPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontResponseHeadersPolicyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // response_headers_policy_config - computed: true, optional: false, required: false
  private _responseHeadersPolicyConfig = new DataAwsccCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference(this, "response_headers_policy_config");
  public get responseHeadersPolicyConfig() {
    return this._responseHeadersPolicyConfig;
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
