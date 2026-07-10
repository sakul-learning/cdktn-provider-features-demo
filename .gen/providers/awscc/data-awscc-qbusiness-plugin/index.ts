// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQbusinessPluginConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_plugin#id DataAwsccQbusinessPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration {
}

export function dataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationToTerraform(struct?: DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationToHclTerraform(struct?: DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration {
}

export function dataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationToTerraform(struct?: DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationToHclTerraform(struct?: DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_url - computed: true, optional: false, required: false
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}
export interface DataAwsccQbusinessPluginAuthConfiguration {
}

export function dataAwsccQbusinessPluginAuthConfigurationToTerraform(struct?: DataAwsccQbusinessPluginAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginAuthConfigurationToHclTerraform(struct?: DataAwsccQbusinessPluginAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessPluginAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_auth_configuration - computed: true, optional: false, required: false
  private _basicAuthConfiguration = new DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(this, "basic_auth_configuration");
  public get basicAuthConfiguration() {
    return this._basicAuthConfiguration;
  }

  // no_auth_configuration - computed: true, optional: false, required: false
  public get noAuthConfiguration() {
    return this.getStringAttribute('no_auth_configuration');
  }

  // o_auth_2_client_credential_configuration - computed: true, optional: false, required: false
  private _oAuth2ClientCredentialConfiguration = new DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(this, "o_auth_2_client_credential_configuration");
  public get oAuth2ClientCredentialConfiguration() {
    return this._oAuth2ClientCredentialConfiguration;
  }
}
export interface DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 {
}

export function dataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3ToTerraform(struct?: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3ToHclTerraform(struct?: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema {
}

export function dataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaToTerraform(struct?: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaToHclTerraform(struct?: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccQbusinessPluginCustomPluginConfiguration {
}

export function dataAwsccQbusinessPluginCustomPluginConfigurationToTerraform(struct?: DataAwsccQbusinessPluginCustomPluginConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginCustomPluginConfigurationToHclTerraform(struct?: DataAwsccQbusinessPluginCustomPluginConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQbusinessPluginCustomPluginConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginCustomPluginConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_schema - computed: true, optional: false, required: false
  private _apiSchema = new DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(this, "api_schema");
  public get apiSchema() {
    return this._apiSchema;
  }

  // api_schema_type - computed: true, optional: false, required: false
  public get apiSchemaType() {
    return this.getStringAttribute('api_schema_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}
export interface DataAwsccQbusinessPluginTags {
}

export function dataAwsccQbusinessPluginTagsToTerraform(struct?: DataAwsccQbusinessPluginTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQbusinessPluginTagsToHclTerraform(struct?: DataAwsccQbusinessPluginTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQbusinessPluginTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQbusinessPluginTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQbusinessPluginTags | undefined) {
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

export class DataAwsccQbusinessPluginTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQbusinessPluginTagsOutputReference {
    return new DataAwsccQbusinessPluginTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_plugin awscc_qbusiness_plugin}
*/
export class DataAwsccQbusinessPlugin extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_qbusiness_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQbusinessPlugin resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQbusinessPlugin to import
  * @param importFromId The id of the existing DataAwsccQbusinessPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQbusinessPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_qbusiness_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/qbusiness_plugin awscc_qbusiness_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQbusinessPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQbusinessPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qbusiness_plugin',
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

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // auth_configuration - computed: true, optional: false, required: false
  private _authConfiguration = new DataAwsccQbusinessPluginAuthConfigurationOutputReference(this, "auth_configuration");
  public get authConfiguration() {
    return this._authConfiguration;
  }

  // build_status - computed: true, optional: false, required: false
  public get buildStatus() {
    return this.getStringAttribute('build_status');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_plugin_configuration - computed: true, optional: false, required: false
  private _customPluginConfiguration = new DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference(this, "custom_plugin_configuration");
  public get customPluginConfiguration() {
    return this._customPluginConfiguration;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // plugin_arn - computed: true, optional: false, required: false
  public get pluginArn() {
    return this.getStringAttribute('plugin_arn');
  }

  // plugin_id - computed: true, optional: false, required: false
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQbusinessPluginTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
