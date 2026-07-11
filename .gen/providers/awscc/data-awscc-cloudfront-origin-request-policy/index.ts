// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_origin_request_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudfrontOriginRequestPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsccCloudfrontOriginRequestPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig {
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigToHclTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig | undefined) {
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
export interface DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig {
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigToHclTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig | undefined) {
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
export interface DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig {
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigToHclTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig | undefined) {
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
export interface DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig {
}

export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigToTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigToHclTerraform(struct?: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig | undefined) {
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

  // cookies_config - computed: true, optional: false, required: false
  private _cookiesConfig = new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }

  // headers_config - computed: true, optional: false, required: false
  private _headersConfig = new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_strings_config - computed: true, optional: false, required: false
  private _queryStringsConfig = new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}
*/
export class DataAwsccCloudfrontOriginRequestPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_origin_request_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudfrontOriginRequestPolicy to import
  * @param importFromId The id of the existing DataAwsccCloudfrontOriginRequestPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudfrontOriginRequestPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_origin_request_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontOriginRequestPolicyConfig) {
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

  // origin_request_policy_config - computed: true, optional: false, required: false
  private _originRequestPolicyConfig = new DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(this, "origin_request_policy_config");
  public get originRequestPolicyConfig() {
    return this._originRequestPolicyConfig;
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
